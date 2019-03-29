const { resolve, join } = require('path');

const MODULE_DIR = 'nuxt-i18n-default';

export default function i18nDefault() {
    this.addTemplate({
        src: resolve(__dirname, 'translate-default.js'),
        fileName: join(MODULE_DIR, 'translate-default.js'),
        options: {},
    });
    this.addPlugin({
        src: resolve(__dirname, 'plugin.js'),
        fileName: join(MODULE_DIR, 'plugin.js'),
        options: {},
    });
}


module.exports.meta = require('../package.json');
