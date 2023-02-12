const puppeteer = require("puppeteer")
const path = require("path")

;(async () => {
  /** devサーバーで立ち上げたスライドのURL */
  const TARGET_URL = "http://localhost:3030/presenter/print"
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

  await page.pdf({ path: path.resolve(__dirname, "../draft.pdf") })

  /** ブラウザを閉じる */
  browser.close()
})()
