import { tns } from 'tiny-slider/src/tiny-slider';

class ProSlider {
    constructor() {
        this._proSlider = document.querySelector('.project-slider');

        if (!this._proSlider) {
            return this.destructor();
        }

        const container = this._proSlider.querySelector('.project-slider__content');

        this._slider = tns({
            container,
            autoplay: true,
            speed: 1000,
            autoplayTimeout: 7000,
            autoplayHoverPause: true,
            controlsText: [
                '<span class="project-slider__gallery-arrow arrow project-slider__gallery-arrow--prev"></span>',
                '<span class="project-slider__gallery-arrow arrow project-slider__gallery-arrow--next"></span>',
            ],
            items: 3,
            mouseDrag: true,
            freezable: false,
        });
    }

    destructor() {
        if (this._slider) {
            this._slider.destroy();
            this._slider = null;
        }

        this._proSlider = null;
    }
}

export default new ProSlider();