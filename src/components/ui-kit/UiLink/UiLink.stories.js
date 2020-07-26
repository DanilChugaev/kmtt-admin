import UiLink from './UiLink.vue';

import UiIconSettings from '~/components/ui-kit/UiIcons/UiIconSettings.vue';

export default {
    title: 'UiLink',
};

export const links = () => ({
    components: {
        UiLink,
        UiIconSettings,
    },
    template: '' +
        '<div>' +
            '<ui-link style="margin-bottom: 20px" href="https://google.com" target="_blank">Простая ссылка</ui-link>' +
            '<ui-link style="margin-bottom: 20px" href="https://google.com" target="_blank">56723</ui-link>' +
            '<ui-link style="margin-bottom: 20px" href="https://google.com" target="_blank" :hasDashed="false">' +
                '<ui-icon-settings size="30" slot="icon"/>' +
                'Ссылка c иконкой' +
            '</ui-link>' +
        '</div>',
});
