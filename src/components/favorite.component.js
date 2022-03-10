import {Component} from "../core/component";
import {apiService} from "../services/api.service";
import {renderPosts} from "../templates/post.template";

export class FavoriteComponent extends Component {
    constructor(id, {loader}) {
        super(id);

        this.loader = loader;
    }

    init() {
        this.$el.addEventListener('click', linkHandler.bind(this));
    }

    onShow() {
        const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
        const html = renderList(favorites);
        this.$el.insertAdjacentHTML('afterbegin', html);
    }

    onHide() {
        this.$el.innerHTML = '';
    }
}

function renderList(favorites) {
    let html;
    if (favorites.length) {
        html = `
            <ul>
                ${favorites.map(el => `<li><a href="" class="js-link" data-id="${el.id}">${el.title}</a></li>`).join('')}
            </ul>`
    } else {
        html = '<p class="center">Список пуст!</p>';
    }
    return html;
}

async function linkHandler(event) {
    event.preventDefault();

    const $el = event.target;

    if ($el.classList.contains('js-link')) {
        this.$el.innerHTML = '';
        this.loader.show();

        const post = await apiService.getPostById($el.dataset.id);

        //console.log(post);

        this.loader.hide();
        this.$el.innerHTML = renderPosts(post, false);
    }
}
