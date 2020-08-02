<script lang="ts">
import Vue from 'vue';
import { mapState } from 'vuex';
import { Component } from 'vue-property-decorator';

@Component({
    components: {},
    computed: {
        ...mapState([
            'mainTitle',
            'sectionTitle',
        ]),
    },
})
export default class AbstractPage extends Vue {}
</script>

<template lang="pug">
    .page
        h2.title._section(
            v-if="sectionTitle"
        ) {{ sectionTitle }}
        h1.title._main(
            v-if="mainTitle"
        ) {{ mainTitle }}

        .components-container
            //- component(
            //-     v-for="componentItem in components"
            //-     :is="componentItem.name"
            //-     :props="componentItem.props"
            //-     :style="componentItem.style"
            //- )
</template>

<style lang="scss">
    @import '~/components/ui-kit/styles/color.scss';
    @import '~/components/ui-kit/styles/typography.scss';
    @import '~/components/ui-kit/styles/pages.scss';
</style>
