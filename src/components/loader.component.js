import {Component} from "../core/component";

export class LoaderComponent extends Component {
    constructor(id) {
        super(id);
    }

    onShow() {
        this.$el.classList.remove('hide');
    }

    onHide() {
        setTimeout(() => {
            this.hide();
        }, 1000)
    }
}