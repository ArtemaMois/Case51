export class Slider{
    constructor(parrent, items,dots, styleName, nextBtn, prevBtn){
        this.parrent = parrent;
        this.items = items;
        this.dots  = dots;
        this.offset = 0;
        this.styleName = styleName
        this.step = 2;
        this.nextBtn = nextBtn;
        this.prevBtn = prevBtn;

        parrent.addEventListener('click', () => {
            if(this.step === 0) {
                items[items.length-1].classList.remove(styleName);
                if(dots !== null) {
                    dots[items.length-1].classList.remove('active')
                }
            } else {
                items[this.step-1].classList.remove(styleName);
                if (dots !== null) {
                    dots[this.step-1].classList.remove('active')
                }
            }
            this.offset += items[0].clientWidth;
            if (this.offset > (items[0].clientWidth + 40)){
                this.offset = -items[0].clientWidth;
            }
            parrent.style.right = this.offset + 'px';
            items[this.step].classList.add(styleName);
            dots[this.step].classList.add('active');
            if (this.step === items.length-1 ){
                this.step = 0;
            } else{
                this.step +=1;
            }
        })
        if(nextBtn !== null) {
            nextBtn.addEventListener('click', () => {
                if(this.step === 0) {
                    items[items.length-1].classList.remove(styleName);
                } else {
                    items[this.step-1].classList.remove(styleName);
                }
                this.offset += items[0].clientWidth;
                console.log(this.offset)
                if (this.offset > (items[0].clientWidth + 40)){
                    this.offset = -items[0].clientWidth;
                }
                parrent.style.right = this.offset + 'px';
                items[this.step].classList.add(styleName);
                if (this.step === items.length-1 ){
                    this.step = 0;
                } else{
                    this.step +=1;
                }
            })
        }
        if(prevBtn !== null){
            prevBtn.addEventListener('click', () => {
                if(this.step === 0) {
                    items[items.length-1].classList.remove(styleName);
                } else {
                    items[this.step-1].classList.remove(styleName);
                }
                this.offset -= items[0].clientWidth;
                console.log(this.offset)
                if (this.offset < -items[0].clientWidth){
                    this.offset = items[0].clientWidth;
                }
                parrent.style.right = this.offset + 'px';
                items[this.step].classList.add(styleName);
                if (this.step === items.length-1 ){
                    this.step = 0;
                } else{
                    this.step +=1;
                }
            })

        }
        
    }

}


