// eslint-disable-next-line no-unused-expressions
async page => {
  // scrolling taken from: https://github.com/microsoft/playwright/issues/4302#issuecomment-1132919529
  const smoothScroll = async () => {
    const delay = ms => new Promise(resolve => setTimeout(resolve, ms))
    for (let i = 0; i < document.body.scrollHeight; i += 100) {
      window.scrollTo(0, i)
      await delay(100)
    }
  }
  await page.goto('/feed', { waitUntil: 'networkidle' }) // Go to the page and await all networking
  await page.waitForTimeout(3000) // Wait for 3 seconds
  await page.evaluate(smoothScroll)
  await page.waitForNetworkIdle() // Wait every request has been answered as a normal user.
}
