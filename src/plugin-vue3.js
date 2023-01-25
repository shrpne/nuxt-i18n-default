/* eslint-disable-next-line */
import { defineNuxtPlugin } from '#imports';
import translateDefaultFactory from './translate-default.js';


export default defineNuxtPlugin(() => {
    return {
        provide: {
            td: translateDefaultFactory(),
        },
    };
});
