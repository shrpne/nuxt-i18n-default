import { defineNuxtModule, addPlugin, addTemplate, createResolver, isNuxt2 as _isNuxt2 } from '@nuxt/kit';

/** @type {import('@nuxt/types').Module} */
export default defineNuxtModule({
    setup(options, nuxt) {
        const isNuxt2 = _isNuxt2(nuxt);
        // Create resolver to resolve relative paths
        const { resolve } = createResolver(import.meta.url);

        addTemplate(resolve('./translate-default.js'));
        if (isNuxt2) {
            addPlugin(resolve('./plugin.js'));
        } else {
            addPlugin(resolve('./plugin-vue3.js'));
        }
    },
});
