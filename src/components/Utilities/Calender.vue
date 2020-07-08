<template>
  <b-row>
    <b-col md="auto">
      <b-calendar
        v-model="value"
        disabled
        @context="onContext"
        locale="en-US"
      ></b-calendar>
    </b-col>
  </b-row>
</template>

<script>
export default {
  data() {
    return {
      value: '',
      context: null
    }
  },
  methods: {
    onContext(ctx) {
      this.context = ctx
    }
  }
}
</script>
