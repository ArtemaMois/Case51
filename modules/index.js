export class Slider {
    constructor(parrent, items, dots, styleName, nextBtn, prevBtn, auto) {
        this.parrent = parrent;
        this.items = items;
        this.dots = dots;
        this.offset = 0;
        this.styleName = styleName;
        this.step = 1;
        this.nextBtn = nextBtn;
        this.prevBtn = prevBtn;
        this.auto = auto;
        this.timer = 0;
        this.autoSlider;
        if(nextBtn !== null){
            this.nextSlide();
        }
        if(prevBtn !== null){
            this.prevSlide();
        }
    }
    
    autoSlider() {
        this.timer = setTimeout(() => {
            this.next();
            this.autoSlider();
        }, 2000);
        console.log(this.step)
    }

    next() {
        if (this.step === 0) {
            if (this.items[this.items.length - 1].classList.contains(this.styleName)) {
                this.items[this.items.length - 1].classList.remove(this.styleName);
            }
            if (this.dots !== null) {
                this.dots[this.items.length - 1].classList.remove('active')
            }
        } else {
            if (this.items[this.step - 1].classList.contains(this.styleName)) {
                this.items[this.step - 1].classList.remove(this.styleName);
            }
            if (this.dots !== null) {
                this.dots[this.step - 1].classList.remove('active')
            }
        }
        this.parrent.style.right = this.offset + 'px';
        this.items[this.step].classList.add(this.styleName);
        if (this.dots !== null) {
            this.dots[this.step].classList.add('active');
        }
        if (this.step === this.items.length - 1) {
            this.step = 0;
        } else {
            this.step += 1;
        }
        this.offset += this.items[0].clientWidth;
        if (this.offset > (this.items[0].clientWidth + 40)) {
            this.offset = -this.items[0].clientWidth;
        }
    };

        nextSlide() {
            this.nextBtn.addEventListener('click', () => {
                this.prevBtn.removeAttribute('disabled');
                if (this.step === this.items.length - 1) {
                    this.nextBtn.disabled = true;
                } else {
                    this.nextBtn.disabled = false;
                    this.step++;
                    this.offset += this.items[0].clientWidth;
                    if (this.offset > (this.items[0].clientWidth + 40)) {
                        this.offset = -this.items[0].clientWidth;
                    }
                    this.parrent.style.right = this.offset + 'px';
                }
    
            })

        }

        prevSlide() {
            this.prevBtn.addEventListener('click', () => {
                this.nextBtn.removeAttribute('disabled');
                if (this.step === 0) {
                    this.prevBtn.setAttribute('disabled', true)
                } else {
                    this.step -= 1;
                    this.offset -= this.items[0].clientWidth;
                    if (this.offset < -this.items[0].clientWidth) {
                        this.offset = this.items[0].clientWidth;
                    }
                    this.parrent.style.right = this.offset + 'px';
                }
            })
        }

}

export default Slider;


