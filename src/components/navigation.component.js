import {Component} from "../core/component";

export class NavigationComponent extends Component {
    constructor(id) {
        super(id);
        this.tabs = [];
    }

    init() {
        //const tabs = this.$el.querySelectorAll('.tab');
        this.$el.addEventListener('click', tabHandler.bind(this));
    }

    register(tabs) {
        this.tabs = tabs;
        // this.tabs.forEach(el => {
        //     el.obj.$el.classList.add('hide');
        // });
    }
}

function tabHandler(event) {
    event.preventDefault();
    if (event.target.classList.contains('tab')) {
        // Array.from(this.$el.querySelectorAll('.tab')).forEach(el => {
        //     el.classList.remove('active');
        // });
        // or
        this.$el.querySelector('.tab.active').classList.remove('active');
        event.target.classList.add('active');

        // const activeTab = this.tabs.find(el => el.name === event.target.dataset.name);
        // this.tabs.forEach(el => {
        //     el.obj.hide();
        // });
        // activeTab.obj.show();
        // or
        this.tabs.forEach(el => {
            if (el.name === event.target.dataset.name) {
                el.obj.show();
            } else {
                el.obj.hide();
            }
        });
    }
}