// eslint-disable-next-line no-unused-expressions
async page => {
  await page.goto('/feed', { waitUntil: 'networkidle' }) // Go to the page and await all networking
  await page.waitForTimeout(3000) // Wait for 3 seconds
  const increaseButton = page.locator('#feed-button-increase')
  for (let i = 0; i < 3; i++) {
    await increaseButton.click()
    await page.waitForTimeout(500)
  }
  await page.scrollToElement('#feed-footer') // NOTE! Does not await the scroll animation
  await page.waitForTimeout(3000)
  await page.waitForNetworkIdle() // Wait every request has been answered as a normal user.
}
