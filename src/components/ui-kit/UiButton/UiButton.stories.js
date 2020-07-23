import UiButton from './UiButton.vue';

export default {
    title: 'UiButton',
};

export const simpleButton = () => ({
    components: { UiButton },
    template: '<ui-button>Добавить пользователя</ui-button>',
});

export const disabledButton = () => ({
    components: { UiButton },
    template: '<ui-button :disabled="true">Кнопка заблокирована</ui-button>',
});

export const greenButton = () => ({
    components: { UiButton },
    template: '<ui-button background="green">Подтвердить</ui-button>',
});

export const redButton = () => ({
    components: { UiButton },
    template: '<ui-button background="red">Удалить</ui-button>',
});
