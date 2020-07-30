<script lang="ts">
import { Component, Mixins } from 'vue-property-decorator';

import UiIconMixin from './_mixin.vue';

@Component
export default class UiIconChevronDown extends Mixins(UiIconMixin) {}
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
        polyline(points='6 9 12 15 18 9')
</template>
