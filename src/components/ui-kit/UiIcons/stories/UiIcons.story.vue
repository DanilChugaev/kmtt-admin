<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';

import UiIconActionCase from './cases/UiIconActionCase.vue';
import UiIconAtSignCase from './cases/UiIconAtSignCase.vue';
import UiIconCheckCase from './cases/UiIconCheckCase.vue';
import UiIconChevronDownCase from './cases/UiIconChevronDownCase.vue';
import UiIconDiscCase from './cases/UiIconDiscCase.vue';
import UiIconInfoCase from './cases/UiIconInfoCase.vue';
import UiIconListCase from './cases/UiIconListCase.vue';
import UiIconMenuCase from './cases/UiIconMenuCase.vue';
import UiIconSearchCase from './cases/UiIconSearchCase.vue';
import UiIconSettingsCase from './cases/UiIconSettingsCase.vue';
import UiIconUserCase from './cases/UiIconUserCase.vue';
import UiIconWarningCase from './cases/UiIconWarningCase.vue';
import UiIconLayersCase from './cases/UiIconLayersCase.vue';

@Component({
    components: {
        UiIconActionCase,
        UiIconAtSignCase,
        UiIconCheckCase,
        UiIconChevronDownCase,
        UiIconDiscCase,
        UiIconInfoCase,
        UiIconListCase,
        UiIconMenuCase,
        UiIconSearchCase,
        UiIconSettingsCase,
        UiIconUserCase,
        UiIconWarningCase,
        UiIconLayersCase,
    },
})
export default class UiIconsStories extends Vue {}
</script>

<template lang="pug">
    .icons-container
        UiIconActionCase.mb-20
        UiIconAtSignCase.mb-20
        UiIconCheckCase.mb-20
        UiIconChevronDownCase.mb-20
        UiIconDiscCase.mb-20
        UiIconInfoCase.mb-20
        UiIconListCase.mb-20
        UiIconMenuCase.mb-20
        UiIconSearchCase.mb-20
        UiIconSettingsCase.mb-20
        UiIconUserCase.mb-20
        UiIconWarningCase.mb-20
        UiIconLayersCase.mb-20
</template>

<style lang="scss">
    @import '~/components/ui-kit/styles/storybook.scss';
    @import '~/components/ui-kit/styles/color.scss';

    .icons-container {
        color: $ui-kit-color-main-text;
    }

    .icon-container {
        display: flex;align-items: flex-end;

        p {
            margin-left: 20px;
        }
    }
</style>
