import {Component} from "../core/component";
import {Form} from "../core/form";
import {Validators} from "../core/validators";
import {apiService} from "../services/api.service";

export class CreateComponent extends Component {
    constructor(id) {
        super(id);
    }

    init() {
        this.$el.addEventListener('submit', submitHandler.bind(this));
        this.form = new Form(this.$el, {
            title: [
                Validators.required,
            ],
            fulltext: [
                Validators.required,
                Validators.minLength(5),
            ]
        });
    }
}

async function submitHandler(event) {
    event.preventDefault();

    if (this.form.isValid()) {
        const formData = {
            type: this.$el.type.value,
            date: new Date().toLocaleDateString(),
            ...this.form.value(),
        };

        const json = await apiService.createPost(formData);

        console.log(json);

        this.form.clearForm();
    } else {
        console.log('Form is invalid')
    }
}

// fetch('url', {
//     method: 'POST',
//     body: formData,
// })
//     .then(response => response.json())
//     .then(json => console.log(json));
// =>
// async function uploadData() {
//     const response = await fetch('url', {
//         method: 'POST',
//         body: formData,
//     });
//
//     const json = await response.json();
// }