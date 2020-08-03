<script lang="ts">
import { Component, Mixins } from 'vue-property-decorator';

import UiIconMixin from './_mixin.vue';

@Component
export default class UiIconArrowLeft extends Mixins(UiIconMixin) {}
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
        line(x1='19', y1='12', x2='5', y2='12')
        polyline(points='12 19 5 12 12 5')
</template>
