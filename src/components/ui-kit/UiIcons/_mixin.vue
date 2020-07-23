<script lang="ts">
import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';

@Component
export default class UiIconMixin extends Vue {
    /** Размер */
    @Prop({
        default: 24,
    }) readonly size!: number;
}
</script>
