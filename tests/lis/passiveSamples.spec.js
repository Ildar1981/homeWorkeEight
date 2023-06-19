import { test } from '../../fixtures/default'
import { expect } from '@playwright/test'
import { authAdmin, openModule } from '../../functions'
import { _patient } from '../../const'
//homework

test.describe(`Открытие и закрытие модальных окон`, () => {
  test.beforeEach(async ({ page }) => {

    await authAdmin(page)
    await openModule(page, `Лаборатория`)
  })
  test(`окно пассивных проб`, async ({ page }) => {
	
    await page.waitForSelector(`#LisReferralSearch`)
    await page.locator(`#LisReferralSearch`).fill(_patient);
    await page.locator(`#LisReferralSearch`).press(`Enter`);
    expect(page.locator(`text=Направление: Анализ мочи по Нечипоренко`))
	

    // кликаем по направлению первому из списка
    await page.locator(`#pane-all div.search-tab > div:nth-child(2) span`).click();
    await page.waitForTimeout(3000)
    
    // открыть окно пассивных проб
    await page.locator(`#LisFooterBtn_openSamples`).click()
    expect(page.locator(`#LisSamplesDialog`))

    // закрыть окно пассивных проб
    await page.locator(`#LisSamplesDialog div.laba-dialog-title > img`).click()
    expect(page.locator(`#pane-tab1`))
  })
  test(`проверка радиобаттонов в пассивных пробах`, async ({ page }) => {
	
    await page.waitForSelector(`#LisReferralSearch`)
    await page.locator(`#LisReferralSearch`).fill(_patient);
    await page.locator(`#LisReferralSearch`).press(`Enter`);
    expect(page.locator(`text=Направление: Анализ мочи по Нечипоренко`))
	

    // кликаем по направлению первому из списка
    await page.locator(`#pane-all div.search-tab > div:nth-child(2) span`).click();
    await page.waitForTimeout(3000)
     // открыть окно пассивных проб
    await page.locator(`#LisFooterBtn_openSamples`).click()
    expect(page.locator(`#LisSamplesDialog`))

    // кликаем на радиобаттон все
    await page.locator(`#LisSamplesSearchUsed > label:nth-child(1) > span.el-radio__input > span`).click()
    expect(page.locator(`#LisSamplesDialog`))

    
  })
  test(`окно динамики`, async ({ page }) => {
    await page.waitForSelector(`#LisReferralSearch`)
    await page.locator(`#LisReferralSearch`).fill(`юхта`);
    await page.locator(`#LisReferralSearch`).press(`Enter`);
    expect(page.locator(`text=Направление: Анализ мочи по Нечипоренко`))

    // кликаем по направлению первому из списка
    await page.locator(`#pane-all div.search-tab > div:nth-child(2) span`).click();
    await page.waitForTimeout(3000)

    // открыть окно динамики
    await page.locator(`#LisFooterBtn_openDynamic`).click()
    expect(page.locator(`#LisRefDynamicTable`))

    // закрыть окно пассивных проб
    await page.locator(`#LisDynamicDialog > div > div.el-dialog__body > div > div.laba-dialog-title > img`).click()
    expect(page.locator(`#pane-tab1`))
  })
})