/* eslint-disable-next-line */
import Vue from 'vue';
import translateDefaultFactory from './translate-default.js';

Vue.mixin({
    methods: {
        $td: translateDefaultFactory(),
    },
});

export default ({ app } /* inject */) => {
    // Set `$td` method on `app`
    // This way we can use it in middleware and pages `asyncData`/`fetch`
    /* eslint-disable-next-line no-param-reassign */
    app.$td = translateDefaultFactory();
};
