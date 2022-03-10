import {Component} from "../core/component";

export class HeaderComponent extends Component {
    constructor(id) {
        super(id);
    }

    init() {
        this.cycle = 0;
        // this.$headerId = this.$el.getAttribute('id');

        const btn = this.$el.querySelector('.js-header-start');

        btn.addEventListener('click', buttonHandler.bind(this));

        if (localStorage.getItem('visits') > 0) {
            this.hide();
        }
    }
}

function buttonHandler() {
    if (!localStorage.getItem('visits')) {
        this.cycle++;
        localStorage.setItem('visits', this.cycle);
    }
    this.hide();
}