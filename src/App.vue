<script lang="ts">
import Vue from 'vue';
import { mapGetters, mapActions } from 'vuex';
import { Component } from 'vue-property-decorator';

import AsideColumn from '~/components/AsideColumn/AsideColumn.vue';

@Component({
    components: {
        AsideColumn,
    },
    computed: {
        ...mapGetters([
            'getConfig',
            'getMainMenu',
            'getSections',
        ]),
    },
    methods: {
        ...mapActions(['getProjectConfig']),
    },
})
export default class App extends Vue {
    async created() {
        await (this as any).getProjectConfig();
    }
}
</script>

<template lang="pug">
    .layout
        AsideColumn(
            :sections="getSections"
            :mainMenu="getMainMenu"
        )

        router-view
</template>

<style lang="scss">
    @import './static/fonts.css';
    @import '~/components/ui-kit/styles/color.scss';

    .layout {
        display: flex;
        align-items: flex-start;
    }

    html,
    body,
    .layout {
        height: 100%;
    }

    *,
    *::before,
    *::after {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    ::-webkit-scrollbar {
        width: 5px;
    }

    ::-webkit-scrollbar-thumb {
        background-color: $ui-kit-color-placeholder-text;
    }

    ::-webkit-scrollbar-track {
        background-color: $ui-kit-color-background;
    }
</style>
