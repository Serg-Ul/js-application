export class Form {
    constructor(form, controls) {
        this.form = form;
        this.controls = controls;
    }

    value() {
        const value = {};

        Object.keys(this.controls).forEach(el => {
            value[el] = this.form[el].value;
        });

        return value;
    }

    isValid() {
        let isFormValid = true;

        Object.keys(this.controls).forEach(control => {
            const validators = this.controls[control];

            let isValid = true;

            validators.forEach(validator => {
                isValid = validator(this.form[control].value) && isValid;
            });

            !isValid ? setError(this.form[control]) : clearError(this.form[control]);

            isFormValid = isFormValid && isValid;
        });

        return isFormValid;
    }

    clearForm(){
        Object.keys(this.controls).forEach(el => {
            this.form[el].value = '';
        });
    }
}

function setError($control) {
    clearError($control);
    let error = '<p class="validation-error">Введите корректные данные</p>';
    $control.classList.add('invalid');
    $control.insertAdjacentHTML('afterend', error);
}

function clearError($control) {
    if ($control.nextSibling) {
        $control.classList.remove('invalid');
        $control.parentNode.removeChild($control.nextSibling);
    }
}
