const { favoritesPage } = require("../pageobjects/favorites.js");
// Remove: import { favoritesPage } from "../pageobjects/favorites.js";
const { expect, browser, $ } = require("@wdio/globals");

describe('Favorites Tab Tests', () => {

    before(async () => {
    await browser.url('/'); // This will use the baseUrl
});
    it('should navigate to favorites tab', async () => {
        // Navigate to the favorites tab
        await favoritesPage.selectfavoritesTab();
        // Verify that the URL is correct
        const currentUrl = await browser.getUrl();
        expect(currentUrl).toContain('/favourites');
    });

    it('should not display any items when no favorites are added', async () => {
        // Check if the favorites list is empty
        const actualText = await favoritesPage.getFavortitesText();
        expect(actualText).toBe(labels.noProductFav);
    });

    it('shoulddisplay the product in favorites when added', async () => {
        await browser.back(); // Navigate back to the main page
        // Add a product to favorites (assuming there's a method to do this)
        await favoritesPage.favoritesIcon[0].click(); // Click on the favorite icon of the first product
        await favoritesPage.favoritesTab.click(); // Navigate back to favorites tab

        // Verify that the product is displayed in favorites
        const actualText = await favoritesPage.getFavortitesText();
        expect(actualText).not.toBe(labels.noProductFav);
    });
    it('should remove the product from favorites', async () => {
        await browser.back(); // Navigate back to the main page
        // Click on the favorite icon to remove the product
        await favoritesPage.favoritesIcon[0].click();
        // Verify that the favorites list is empty again
        const actualText = await favoritesPage.getFavortitesText();
        expect(actualText).toBe(labels.noProductFav);
    });
});