<script lang="ts">
import Vue from 'vue';
import {mapGetters, mapState} from 'vuex';
import { Component } from 'vue-property-decorator';

@Component({
    components: {
        UiLink: () => import('~/components/ui-kit/UiLink/UiLink.vue'),
    },
    computed: {
        ...mapState([
            'mainTitle',
            'sectionTitle',
        ]),
        ...mapGetters([
            'getComponentsForPage',
        ]),
    },
})
export default class AbstractPage extends Vue {}
</script>

<template lang="pug">
    .page
        h2.title._section(v-if="sectionTitle") {{ sectionTitle }}
        h1.title._main(v-if="mainTitle") {{ mainTitle }}

        .components-container(
            v-if="getComponentsForPage.length"
        )
            keep-alive
                component.component(
                    v-for="item in getComponentsForPage"
                    :key="item.id"
                    :is="item.name"
                    :dynamicProps="item.props"
                    :style="item.style"
                )
                    span(
                        v-if="item.text"
                    ) {{ item.text }}
</template>

<style lang="scss">
    @import '~/components/ui-kit/styles/color.scss';
    @import '~/components/ui-kit/styles/typography.scss';
    @import '~/components/ui-kit/styles/pages.scss';

    .components-container {
        display: flex;
        flex-direction: column;
    }

    .component + .component {
        margin-top: 20px;
    }
</style>
