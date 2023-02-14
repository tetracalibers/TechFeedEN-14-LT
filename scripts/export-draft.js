const puppeteer = require("puppeteer")
const path = require("path")

/**
 * ディレクトリが存在しなければ作成する関数
 * @param {string} dirPath 作成したいディレクトリの絶対パス
 */
const mkdirIfNotExists = async (dirPath) => {
  try {
    await fs.mkdir(dirPath)
  } catch (error) {
    console.log("the directory already exists, skip `mkdir`")
  }
}

;(async () => {
  /** devサーバーで立ち上げたスライドのURL */
  const TARGET_URL = "http://localhost:3030/TechFeedEN-14-LT/presenter/print"
  const MAIN_CONTENT_SELECTOR = "#page-root"

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
    await page.waitForSelector(MAIN_CONTENT_SELECTOR)
  }

  await page.goto(TARGET_URL)
  await waitRender()

  const dist = path.resolve(__dirname, "../export")
  await mkdirIfNotExists(dist)
  const now = Date.now()

  await page.pdf({ path: path.join(dist, "draft-" + now + ".pdf") })
  console.log("Completed export.")

  /** ブラウザを閉じる */
  browser.close()
})()
