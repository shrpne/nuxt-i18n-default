// @see https://nuxt.com/docs/guide/directory-structure/plugins#advanced

import type {VueI18nDefault} from './default'

declare module '#app' {
    interface NuxtApp {
        $td: typeof VueI18nDefault.prototype.td;
    }
}

declare module 'vue' {
    interface ComponentCustomProperties {
        $td: typeof VueI18nDefault.prototype.td;
    }
}

export { }
