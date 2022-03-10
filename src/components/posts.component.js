import {Component} from "../core/component";
import {apiService} from "../services/api.service";
import {TransformService} from "../services/transform.service";
import {renderPosts} from "../templates/post.template";

export class PostsComponent extends Component {
    constructor(id, {loader}) {
        super(id);

        this.loader = loader;
    }

    init() {
        this.$el.addEventListener('click', buttonHandler.bind(this));
    }

    async onShow() {
        this.loader.show();
        const fbData = await apiService.getPosts();
        const posts = TransformService.fbObjectToArray(fbData);
        this.loader.hide();
        const html = posts.map(post => renderPosts(post, true)).join('');
        this.$el.insertAdjacentHTML('afterbegin', html);
    }

    onHide() {
        this.$el.innerHTML = '';
    }
}

function buttonHandler(event) {
    const $el = event.target;
    const id = $el.dataset.id;

    if (id) {
        let favorites = JSON.parse(localStorage.getItem('favorites')) || [];

        const favorite = favorites.find(favoriteObj => favoriteObj.id === id);

        if (favorite) {
            $el.textContent = 'Сохранить';
            $el.classList.add('button-primary');
            $el.classList.remove('button-danger');

            favorites = favorites.filter(fObj => fObj.id !== id);
        } else {
            $el.textContent = 'Удалить';
            $el.classList.remove('button-primary');
            $el.classList.add('button-danger');

            favorites.push({
                id,
                title: $el.dataset.title
            });
        }

        localStorage.setItem('favorites', JSON.stringify(favorites));

        console.log(favorites);
    }
}
