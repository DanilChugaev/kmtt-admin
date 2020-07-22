import UiButton from './UiButton.vue';

export default {
    title: 'UiButton',
};

export const simpleButton = () => ({
    components: { UiButton },
    template: '<ui-button>Добавить пользователя</ui-button>',
});

export const withColor = () => ({
    components: { UiButton },
    template: '<ui-button color="green">Подтвердить действие</ui-button>',
});
