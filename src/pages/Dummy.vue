<template lang="pug">
    .page
        h1.title._main Заглушка
        p.dummy-text
            | У сторибука есть возможность билдиться и размещаться на хостинге.
        p.dummy-text
            | Чтобы не делать двойную работу и не дублировать код, будет лучшим решением
            | открывать страницу с размещенным на сервере сторибуком в новой вкладке.
        p.dummy-text
            | Соответственно для различных кейсов использования компонентов останется продумать
            | в каком виде данную информацию предоставлять.

</template>

<style lang="scss">
    @import '~/components/ui-kit/styles/color.scss';
    @import '~/components/ui-kit/styles/typography.scss';
    @import '~/components/ui-kit/styles/pages.scss';

    .dummy-text {
        @include ui-kit-typography;

        color: $ui-kit-color-main-text;
        max-width: 800px;
        font-size: 24px;
    }

    .dummy-text + .dummy-text {
        margin-top: 15px;
    }
</style>
