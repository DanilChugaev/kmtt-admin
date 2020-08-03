<script lang="ts">
import Vue from 'vue';
import { mapGetters, mapActions, mapMutations } from 'vuex';
import { Component, Watch } from 'vue-property-decorator';

import AsideColumn from '~/components/AsideColumn/AsideColumn.vue';

import RouteParams from "~/interfaces/RouteParams.ts";

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
        ...mapActions([
            'getProjectConfig',
        ]),
        ...mapMutations([
            'setSectionTitle',
            'setMainTitle',
            'setPageId',
        ]),
    },
})
export default class App extends Vue {
    async created() {
        await (this as any).getProjectConfig();
    }

    @Watch('$route', { immediate: true, deep: true })
    onRouteChanged({ query }: RouteParams) {
        const { section, name, id } = query;

        if (id) {
            (this as any).setPageId(id);
            (this as any).setSectionTitle(section && section !== 'undefined' ? section : '');
            (this as any).setMainTitle(name && name !== 'undefined' ? name : '');
        }
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
        background-color: $ui-kit-color-background;
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
        height: 5px;
    }

    ::-webkit-scrollbar-thumb {
        background-color: $ui-kit-color-placeholder-text;
    }

    ::-webkit-scrollbar-track {
        background-color: $ui-kit-color-background;
    }
</style>
