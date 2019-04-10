
import Dropdown from './dropdown';

class DropdownList {
    constructor() {
        this._elements = document.querySelectorAll('.dropdown');

        this._dropdowns = Array.from(this._elements).map(element => new Dropdown(element));
    }
}

export default new DropdownList();
