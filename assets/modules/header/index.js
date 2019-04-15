class Header {
    constructor() {
        this._header = document.querySelector('.header');
        this._menu = this._header.querySelector('.header__menu');
        this._button = this._header.querySelector('.header__burger-main');

        this._addListeners();
    }

    _addListeners() {
        this._button.addEventListener('click', this._buttonClick);
        console.log('hello');
    }

    _buttonClick = () => {
        this._menu.classList.toggle('header__menu--opened');
    }
}

export default new Header;
