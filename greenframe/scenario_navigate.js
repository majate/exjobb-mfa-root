// eslint-disable-next-line no-unused-expressions
async page => {
  await page.goto('', { waitUntil: 'networkidle' }) // Go to the baseUrl
  await page.waitForTimeout(3000) // Wait for 3 seconds
  const links = [
    page.locator('button:has-text("Form"):visible'),
    page.locator('button:has-text("Feed"):visible'),
    page.locator('a:has-text("EXJOBB"):visible'),
  ]
  for (let i = 0; i < 3; i++) {
    for (const link of links) {
      await link.click()
      await page.waitForTimeout(500)
      await page.waitForNetworkIdle()
    }
  }
}
