<template>
  <div>
    <p>{{ myDataProperty }}</p>
    <input
      :value="myDataProperty"
      @input="updateMyProperty($event)"
    >
    <ui-button text="sdd"></ui-button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';

import temp from './temp';
import UiButton from './Button.vue';

@Component({
    components: {
        UiButton,
    },
})
export default class App extends Vue {
    // Data property
    myDataProperty: string = ''

    // Lifecycle hook
    mounted() {
        this.myDataProperty = 'Boop';
    }

    // Component method
    updateMyProperty($event: any) {
        this.myDataProperty = temp($event.target.value);
    }
}
</script>
