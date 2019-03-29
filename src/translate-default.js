import _get from 'lodash-es/get';
import decode from 'entity-decode';

export default function translateDefaultFactory(i18nPath, storePath) {
    /**
     *
     * @param defaultText
     * @param path
     * @param otherArgs
     * @return {*}
     */
    return function td(defaultText, path, ...otherArgs) {
        const translation = _get(this[storePath].state.i18n.messages, path);
        return decode(translation ? this[i18nPath].t(path, ...otherArgs) : defaultText);
    };
}
