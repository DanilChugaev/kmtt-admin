export const publicationsComponents = [
    {
        name: 'UiLink',
        props: {
            href: "https://google.com",
            target: "_blank",
        },
        text: 'Ссылка на гугл',
        style: {
            alignSelf: 'center', // { 'flex-start' | 'center' | 'flex-end' }
        },
    },
];

// TODO: childrens у компонентов надо продумать...

export const messengerComponents = [
    {
        name: 'UiInput',
        props: {
            placeholder: 'Введите ваше имя',
        },
        style: {
            width: '500px',
            alignSelf: 'flex-start', // { 'flex-start' | 'center' | 'flex-end' }
        },
    },
    {
        name: 'UiInput',
        props: {
            placeholder: 'Введите вашу фамилию',
        },
        style: {
            width: '500px',
            alignSelf: 'flex-start', // { 'flex-start' | 'center' | 'flex-end' }
        },
    },
    {
        name: 'UiButton',
        text: 'Авторизоваться',
        style: {
            width: '500px',
            alignSelf: 'flex-start', // { 'flex-start' | 'center' | 'flex-end' }
        },
    },
];

export const weeklyNewsletterSubscribeComponents = [];

export const availableCitiesComponents = [];

export const blockedUsersComponents = [];

export const blacklistLinksComponents = [];

export const userManagementComponents = [];

export const firstComponents = [];

export const secondComponents = [];

export const thirdComponents = [];

export const fourthComponents = [];

