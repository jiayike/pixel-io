<svelte:options tag="pixel-button" />

<script lang="ts">
</script>

<button class="pixel-button" on:click>
  <slot />
</button>

<style lang="scss">
  @use '@pixel-ui/styles/dist/style';
</style>
