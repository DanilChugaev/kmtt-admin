import MyButton from './Button.vue';

export default {
    title: 'Button',
};

export const withText = () => ({
    components: { MyButton },
    template: '<my-button></my-button>',
});

export const asAComponent = () => ({
    components: { MyButton },
    template: '<my-button :text="`Добавить пользователя`"></my-button>',
});
