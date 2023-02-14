<template id="modal-template">
  <div class="modal" @click="$emit('close')">
    <div class="modal-content" @click.stop>
      <slot></slot>
    </div>
  </div>
</template>