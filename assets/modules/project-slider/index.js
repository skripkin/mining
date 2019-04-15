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
            responsive: {
                860: {
                    controlsText: [
                        '<span class="project-slider__gallery-arrow arrow project-slider__gallery-arrow--prev"></span>',
                        '<span class="project-slider__gallery-arrow arrow project-slider__gallery-arrow--next"></span>',
                    ],
                    items: 3
                },
                685: {
                    controlsText: [
                        '<span class="project-slider__gallery-arrow arrow project-slider__gallery-arrow--prev"></span>',
                        '<span class="project-slider__gallery-arrow arrow project-slider__gallery-arrow--next"></span>',
                    ],
                    items: 2
                },
                560: {
                    controlsText: [
                        '<span class="project-slider__gallery-arrow arrow project-slider__gallery-arrow--prev"></span>',
                        '<span class="project-slider__gallery-arrow arrow project-slider__gallery-arrow--next"></span>',
                    ],
                    items: 2.5
                },
                460: {
                    controlsText: [
                        '<span class="project-slider__gallery-arrow arrow project-slider__gallery-arrow--prev"></span>',
                        '<span class="project-slider__gallery-arrow arrow project-slider__gallery-arrow--next"></span>',
                    ],
                    items: 2
                },
                400: {
                    controlsText: [
                        '<span class="project-slider__gallery-arrow arrow project-slider__gallery-arrow--prev"></span>',
                        '<span class="project-slider__gallery-arrow arrow project-slider__gallery-arrow--next"></span>',
                    ],
                    items: 1
                },
            }
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