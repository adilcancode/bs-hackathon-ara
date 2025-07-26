class FavoritesPage {
    favoritesTabLocator = 'favourites';
    favoritesProductTextLocator = '.products-found';
    favIconLocator = '.MuiIconButton-label';

    get favoritesTab() {
        return $(`#${this.favoritesTabLocator}`);
    }

    get favoritesProductText() {
        return $(`${this.favoritesProductTextLocator}`);
    }

    get favoritesIcon() {
        return $$(`${this.favIconLocator}`);
    }

    async getFavortitesText() {
        return await this.favoritesProductText.getText();
    }

    async selectfavoritesTab() {
        await this.favoritesTab.click();
        await browser.pause(1000); // Added a short pause
    }
}

const favoritesPage = new FavoritesPage();
module.exports = { favoritesPage };