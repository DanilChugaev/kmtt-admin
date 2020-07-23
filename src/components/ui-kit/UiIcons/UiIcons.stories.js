import UiIconAtSign from './UiIconAtSign.vue';
import UiIconChevronDown from './UiIconChevronDown.vue';
import UiIconDisc from './UiIconDisc.vue';
import UiIconInfo from './UiIconInfo.vue';
import UiIconList from './UiIconList.vue';
import UiIconMenu from './UiIconMenu.vue';
import UiIconSearch from './UiIconSearch.vue';
import UiIconSettings from './UiIconSettings.vue';
import UiIconUser from './UiIconUser.vue';
import UiIconWarning from './UiIconWarning.vue';

export default {
    title: 'UiIcons',
};

export const icons = () => ({
    components: {
        UiIconAtSign,
        UiIconChevronDown,
        UiIconDisc,
        UiIconInfo,
        UiIconList,
        UiIconMenu,
        UiIconSearch,
        UiIconSettings,
        UiIconUser,
        UiIconWarning,
    },
    template:
    '<div style="display: flex; flex-direction: column;">' +
        '<div>' +
            '<ui-icon-at-sign :size="100"/>' +
            '<ui-icon-at-sign :size="50"/>' +
            '<ui-icon-at-sign/>' +
        '</div>' +

        '<div>' +
            '<ui-icon-chevron-down :size="100"/>' +
            '<ui-icon-chevron-down :size="50"/>' +
            '<ui-icon-chevron-down/>' +
        '</div>' +

        '<div>' +
            '<ui-icon-disc :size="100"/>' +
            '<ui-icon-disc :size="50"/>' +
            '<ui-icon-disc/>' +
        '</div>' +

        '<div>' +
            '<ui-icon-info :size="100"/>' +
            '<ui-icon-info :size="50"/>' +
            '<ui-icon-info/>' +
        '</div>' +

        '<div>' +
            '<ui-icon-list :size="100"/>' +
            '<ui-icon-list :size="50"/>' +
            '<ui-icon-list/>' +
        '</div>' +

        '<div>' +
            '<ui-icon-menu :size="100"/>' +
            '<ui-icon-menu :size="50"/>' +
            '<ui-icon-menu/>' +
        '</div>' +

        '<div>' +
            '<ui-icon-search :size="100"/>' +
            '<ui-icon-search :size="50"/>' +
            '<ui-icon-search/>' +
        '</div>' +

        '<div>' +
            '<ui-icon-settings :size="100"/>' +
            '<ui-icon-settings :size="50"/>' +
            '<ui-icon-settings/>' +
        '</div>' +

        '<div>' +
            '<ui-icon-user :size="100"/>' +
            '<ui-icon-user :size="50"/>' +
            '<ui-icon-user/>' +
        '</div>' +

        '<div>' +
            '<ui-icon-warning :size="100"/>' +
            '<ui-icon-warning :size="50"/>' +
            '<ui-icon-warning/>' +
        '</div>' +
    '</div>',
});
