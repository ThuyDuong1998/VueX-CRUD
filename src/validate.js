import { extend } from 'vee-validate';
import {required, alpha, alpha_dash} from 'vee-validate/dist/rules'

extend('required', {
    ...required,
    message: 'Don\'t empty'
})

extend('alpha', {
    ...alpha,
    message: 'Don\'t alpha'
})

extend('alpha_dash', {
    ...alpha_dash,
    message: "Don't contain special characters",
});
