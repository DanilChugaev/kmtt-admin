<template>
  <button type="button">
    {{ buttonTextComputed }}
  </button>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';

@Component
export default class Button extends Vue {
    @Prop([String]) readonly text: string;

    buttonText: string = 'просто кнопка';

    get buttonTextComputed() {
        return this.text ? this.text : this.buttonText;
    }
}
</script>
