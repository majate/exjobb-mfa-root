// eslint-disable-next-line no-unused-expressions
async page => {
  await page.goto('/form', { waitUntil: 'networkidle' }) // Go to the page and await all networking
  await page.waitForTimeout(3000) // Wait for 3 seconds
  const submitButton = page.locator('#form-button-submit')
  const resetButton = page.locator('#form-button-reset')
  const ageField = page.locator('#form-field-age')
  const nameField = page.locator('#form-field-username')
  const emailField = page.locator('#form-field-email')
  for (let i = 0; i < 3; i++) {
    await ageField.fill('89')
    await nameField.fill('user')
    await emailField.fill('email@ema.il')
    await submitButton.click()
    await nameField.fill('userName') // fix incorrect username before resubmitting
    await submitButton.click()
    await page.waitForTimeout(1000)
    await resetButton.click()
  }
  //await page.waitForNetworkIdle() // Wait every request has been answered as a normal user.
}
