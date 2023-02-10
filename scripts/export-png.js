const puppeteer = require('puppeteer')
const fs = require('fs/promises')
const path = require('path')

const mkdirIfNotExists = async (dirPath) => {
  try {
    await fs.mkdir(dirPath)
  } catch (error) {
    console.log('the directory already exists, skip `mkdir`')
  }
}

const generateLoopSeed = (loopCount) => {
  return [...new Array(loopCount)].map((_, i) => i + 1)
}

;(async () => {
  const browser = await puppeteer.launch({ headless: true })
  const page = await browser.newPage()
  // 解像度を上げる
  await page.setViewport({ width: 800, height: 800, deviceScaleFactor: 2 })

  const DIST_DIR = path.resolve(__dirname, '../export-png')
  const SLIDE_URL = 'http://localhost:3030'
  const CAPTURE_REGION_SELECTOR = '#slide-content'
  const PER_PAGE_SELECTOR = '.slidev-layout'

  const waitRender = async () => {
    await page.waitForSelector(CAPTURE_REGION_SELECTOR)
  }

  const countPagesSPA = async (perPageSelector) => {
    await waitRender()

    const pageCount = await page.evaluate((selector) => {
      const pages = document.querySelectorAll(selector)
      return pages.length
    }, perPageSelector)

    return generateLoopSeed(pageCount - 1)
  }

  const getClipRegion = async () => {
    await waitRender(CAPTURE_REGION_SELECTOR)

    const region = await page.evaluate((selector) => {
      const el = document.querySelector(selector)
      // エレメントの高さと位置を取得
      const { width, height, top: y, left: x } = el.getBoundingClientRect()
      return { width, height, x, y }
    }, CAPTURE_REGION_SELECTOR)

    return region
  }

  const debugOn = () => {
    page.on('console', (msg) => console.log('PAGE LOG:', msg.text()))
  }

  const slideExportPng = async () => {
    await page.goto(SLIDE_URL)

    //debugOn()

    await mkdirIfNotExists(DIST_DIR)

    const slides = await countPagesSPA(PER_PAGE_SELECTOR)

    for (const i of slides) {
      const clip = await getClipRegion(CAPTURE_REGION_SELECTOR)
      const path = DIST_DIR + '/' + i + '.png'
      // スクリーンショットに位置と大きさを指定してclipする
      await page.screenshot({ clip, path })
      await page.goto(SLIDE_URL + '/' + (i + 1))
    }
  }

  await slideExportPng()

  browser.close()
})()
