<template>
  <div>
    <b-alert show :variant="variant">{{ alertText }}</b-alert>
  </div>
</template>

<script>
export default {
  props: {
    alertText: {
      type: String,
      required: true
    },

    variant: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped></style>
