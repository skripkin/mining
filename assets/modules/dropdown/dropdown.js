import { findParent } from 'util/dom-helpers';

class Dropdown {
    constructor(element) {
        this._element = element;

        this._setupDOM();
    }

    _setupDOM() {
        const select = this._element.querySelector('select');
        const { selectedIndex, children } = select;
        const { textContent: value } = children[selectedIndex];

        const fakeButton = this._getFakeSelect(value);
        const fakeList = this._getFakeOptions(Array.from(children));

        this._addListeners(fakeButton, fakeList);

        const fake = document.createElement('div');
        fake.classList.add('dropdown__fake');

        fake.appendChild(fakeButton);
        fake.appendChild(fakeList);

        this._element.appendChild(fake);
        this._element.classList.add('dropdown--initialized');
    }

    _getFakeSelect = (value) => {
        const button = document.createElement('button');
        button.classList.add('dropdown__fake-select');
        button.textContent = value;

        return button;
    }

    _getFakeOptions = (options) => {
        const list = document.createElement('ul');
        list.classList.add('dropdown__fake-list');

        list.innerHTML = options
            .map(option =>
                `<li class="dropdown__fake-option${option.selected ? ' dropdown__fake-option--active' : ''}" data-value="${option.value}">${option.innerHTML}</li>`
            )
            .join('');

        return list;
    }

    _addListeners(button, list) {
        button.addEventListener('click', this._hanldeButtonClicked);
        list.addEventListener('click', this._handleListClicked);
    }

    _handleDocumentClicked = (e) => {
        const _target = e.target;

        if (findParent(_target, 'dropdown') === this._element) return;

        this._element.querySelectorAll('.dropdown__fake-list--opened')
            .forEach((list) => list.classList.remove('dropdown__fake-list--opened'));

        document.removeEventListener('click', this._handleDocumentClicked);
    }

    _hanldeButtonClicked = (e) => {
        e.preventDefault();

        const _target = e.target;
        const fakeList = _target.nextElementSibling;

        document[!fakeList.classList.contains('dropdown__fake-list--opened')
            ? "addEventListener"
            : "removeEventListener"
        ]('click', this._handleDocumentClicked);
        _target.nextElementSibling.classList.toggle('dropdown__fake-list--opened');
    }

    _handleListClicked(e) {
        const _target = e.target;

        if (_target.tagName !== 'LI') return;

        this.querySelector('.dropdown__fake-option--active').classList.remove('dropdown__fake-option--active');
        _target.classList.add('dropdown__fake-option--active');

        const value = _target.getAttribute('data-value');
        const title = _target.textContent;

        const parent = this.parentNode;
        const [button] = this.parentNode.children;

        button.textContent = title;

        parent.parentNode.querySelector('select').value = value;
        this.classList.remove('dropdown__fake-list--opened');
    }
}

export default Dropdown;
