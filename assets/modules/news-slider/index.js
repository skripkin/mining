import { tns } from 'tiny-slider/src/tiny-slider';

class NewSlider {
    constructor() {
        this._newSlider = document.querySelector('.news-slider');

        if (!this._newSlider) {
            return this.destructor();
        }

        const container = this._newSlider.querySelector('.news-slider__content');

        this._slider = tns({
            container,
            autoplay: true,
            speed: 1000,
            autoplayTimeout: 7000,
            autoplayHoverPause: true,
            controlsText: [
                '<span class="news-slider__gallery-arrow arrow news-slider__gallery-arrow--prev"></span>',
                '<span class="news-slider__gallery-arrow arrow news-slider__gallery-arrow--next"></span>',
            ],
            items: 2,
            mouseDrag: true,
            freezable: false,
            responsive: {
                1200: {
                    controlsText: [
                        '<span class="news-slider__gallery-arrow arrow news-slider__gallery-arrow--prev"></span>',
                        '<span class="news-slider__gallery-arrow arrow news-slider__gallery-arrow--next"></span>',
                    ],
                    items: 3.4
                },
                1100: {
                    controlsText: [
                        '<span class="news-slider__gallery-arrow arrow news-slider__gallery-arrow--prev"></span>',
                        '<span class="news-slider__gallery-arrow arrow news-slider__gallery-arrow--next"></span>',
                    ],
                    items: 2.8
                },
                600: {
                    controlsText: [
                        '<span class="news-slider__gallery-arrow arrow news-slider__gallery-arrow--prev"></span>',
                        '<span class="news-slider__gallery-arrow arrow news-slider__gallery-arrow--next"></span>',
                    ],
                    items: 3
                },
                400: {
                    controlsText: [
                        '<span class="news-slider__gallery-arrow arrow news-slider__gallery-arrow--prev"></span>',
                        '<span class="news-slider__gallery-arrow arrow news-slider__gallery-arrow--next"></span>',
                    ],
                    items: 1
                }
            }
        });
    }

    destructor() {
        if (this._slider) {
            this._slider.destroy();
            this._slider = null;
        }

        this._newSlider = null;
    }
}

export default new NewSlider();