export function renderPosts(post, isRendered) {
    const {id, title, fulltext, date, type} = post;
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];

    const favorite = favorites.find(favoriteObj => favoriteObj.id === id);

    let $btn;
    if (isRendered) {
        $btn = `${ !favorite
            ? '<button class="button-round button-small button-primary" data-id="' + id + '" data-title="' + title + '">Сохранить</button>'
            : '<button class="button-round button-small button-danger" data-id="' + id + '">Удалить</button>'}`;
    } else {
        $btn = '';
    }

    return `<div class="panel">
                    <div class="panel-head">
                        <p class="panel-title">${title}</p>
                            <ul class="tags">
                              ${type === 'news' ? '<li class="tag tag-blue tag-rounded">Новость</li>' : '<li class="tag tag-grey tag-rounded">Заметка</li>'}
                            </ul>
                    </div>
                    <div class="panel-body">
                        <p class="multi-line">${fulltext}</p>
                    </div>
                    <div class="panel-footer w-panel-footer">
                        <small>${date}</small>
                        ${$btn}
                    </div>                  
               </div>`

}