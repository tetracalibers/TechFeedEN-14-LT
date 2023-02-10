const puppeteer = require('puppeteer')
const fs = require('fs/promises')
const path = require('path')

/**
 * ディレクトリが存在しなければ作成する関数
 * @param {string} dirPath 作成したいディレクトリの絶対パス
 */
const mkdirIfNotExists = async (dirPath) => {
  try {
    await fs.mkdir(dirPath)
  } catch (error) {
    console.log('the directory already exists, skip `mkdir`')
  }
}

/**
 * for-of文での繰り返し回数カウント用に、1 ~ loopCount + 1 の数列を詰めた配列を作る関数
 * @param {number} loopCount
 * @return カウント用の配列（例： loopCountが4なら、 [1, 2, 3, 4, 5]）
 */
const generateLoopSeed = (loopCount) => {
  return [...new Array(loopCount)].map((_, i) => i + 1)
}

;(async () => {
  /** 生成したPNGを吐き出すディレクトリの絶対パス */
  const DIST_DIR = path.resolve(__dirname, '../export-png')
  /** devサーバーで立ち上げたスライドのURL */
  const SLIDE_URL = 'http://localhost:3030'
  /** スライド表示要素のセレクタ。この要素だけをスクショする */
  const CAPTURE_REGION_SELECTOR = '#slide-content'
  /** 各スライド描画要素に付けられたクラス名。スライド数カウントに使う */
  const PER_PAGE_SELECTOR = '.slidev-layout'

  /** ブラウザのインスタンス */
  const browser = await puppeteer.launch({ headless: true })
  /** ブラウザのタブのインスタンス */
  const page = await browser.newPage()
  /** Retinaに近い表示に設定 */
  await page.setViewport({ width: 800, height: 800, deviceScaleFactor: 2 })

  /**
   * ページの表示が完了するまで待機する関数
   */
  const waitRender = async () => {
    await page.waitForSelector(CAPTURE_REGION_SELECTOR)
  }

  /**
   * SPAのページ数をカウントする関数
   * @param {string} perPageSelector 各ページ描画要素全てに付けられている共通の属性を示すセレクタ
   * @return カウント用の配列（例： 全5ページなら、[1, 2, 3, 4, 5]）
   */
  const countPagesSPA = async (perPageSelector) => {
    await waitRender()

    const pageCount = await page.evaluate((selector) => {
      const pages = document.querySelectorAll(selector)
      return pages.length
    }, perPageSelector)

    return generateLoopSeed(pageCount - 1)
  }

  /**
   * スクショ範囲を指定するための情報を取得する関数
   * @param {string} captureTargetSelector スクショしたい要素のセレクタ
   * @return スクショしたい要素のサイズと位置
   */
  const getClipRegion = async (captureTargetSelector) => {
    await waitRender()

    const region = await page.evaluate((selector) => {
      const el = document.querySelector(selector)
      const { width, height, top: y, left: x } = el.getBoundingClientRect()
      return { width, height, x, y }
    }, captureTargetSelector)

    return region
  }

  /**
   * デバッグログを有効化する関数（※開発中のみ使用を推奨）
   */
  const debugOn = () => {
    page.on('console', (msg) => console.log('PAGE LOG:', msg.text()))
  }

  /**
   * 全スライドを順にスクショして、PNGエクスポートを実現する関数
   */
  const slideExportPng = async () => {
    await page.goto(SLIDE_URL)

    /** 開発時のみ有効化 */
    // debugOn()

    await mkdirIfNotExists(DIST_DIR)

    const slides = await countPagesSPA(PER_PAGE_SELECTOR)

    for (const i of slides) {
      const clip = await getClipRegion(CAPTURE_REGION_SELECTOR)
      const path = DIST_DIR + '/' + i + '.png'
      await page.screenshot({ clip, path })
      await page.goto(SLIDE_URL + '/' + (i + 1))
    }
  }

  /** 実行 */
  await slideExportPng()

  /** ブラウザを閉じる */
  browser.close()
})()
