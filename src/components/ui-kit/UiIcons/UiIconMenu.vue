<script lang="ts">
import { Component, Mixins } from 'vue-property-decorator';

import UiIconMixin from './_mixin.vue';

@Component
export default class UiIconMenu extends Mixins(UiIconMixin) {}
</script>

<template lang="pug">
    svg(
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 24 24'
        fill='none'
        stroke='currentColor'
        stroke-width='2'
        stroke-linecap='round'
        stroke-linejoin='round'
        :width='size'
        :height='size'
    )
        line(x1='3', y1='12', x2='21', y2='12')
        line(x1='3', y1='6', x2='21', y2='6')
        line(x1='3', y1='18', x2='21', y2='18')
</template>
