import validator from 'validator';

export interface SignUpField{
    field: string,
    method: string,
    validWhen: boolean,
    message: string,
    args?:any[]
}
class FormValidator {
    validations: SignUpField[];
    constructor(validations:SignUpField[]) {
        this.validations = validations;
    }
    validate(state:any) {
        let validation = this.valid();
        // for each validation rule
        this.validations.forEach((rule:SignUpField) => {
            if(!validation[rule.field].isInvalid) {
                const field_value = state[rule.field].toString();
                const args = rule.args || [];
                const validation_method:any = typeof rule.method === 'string' ? validator[rule.method as keyof typeof validator]: rule.method;
                if(validation_method(field_value, ...args, state) !== rule.validWhen) {
                    validation[rule.field] = {
                        isInvalid: true,
                        message: rule.message
                    }
                    validation.isValid = false;
                }
            }
        });
        return validation;
    }
    valid() {
        const validation :any= {}
        this.validations.map(rule => (validation[rule.field] = {
            isInvalid: false,
            message: ''
        }));
        return {
            isValid: true,
            ...validation
        };
    }
}
export default FormValidator;