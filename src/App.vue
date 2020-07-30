<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';

import AsideColumn from '~/components/AsideColumn/AsideColumn.vue';

@Component({
    components: {
        AsideColumn,
    },
})
export default class App extends Vue {}
</script>

<template lang="pug">
    .layout
        //- AsideColumn

        router-view
</template>

<style lang="scss">
    @import './static/fonts.css';

    .layout {
        display: flex;
    }

    *,
    *::before,
    *::after {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }
</style>
