// eslint-disable-next-line no-unused-expressions
async page => {
  await page.goto('', { waitUntil: 'networkidle' }) // Go to the baseUrl
  await page.waitForTimeout(3000) // Wait for 3 seconds
  const links = [
    page.locator('button:has-text("Form")'),
    page.locator('button:has-text("Feed")'),
    page.locator('a:has-text("EXJOBB")'),
  ]
  for (let i = 0; i < 3; i++) {
    for (const link of links) {
      await link.click()
      await page.waitForNetworkIdle()
    }
  }
}
