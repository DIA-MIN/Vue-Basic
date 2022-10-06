<template>
  <div>
    <button @click="increase">Add 1</button>
    <p>{{ counter }}</p>
  </div>
</template>
<script>
export default {
  components: {},
  data() {
    return {
      counter: 0
    }
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {
    increase() {
      this.counter++
    }
  }
}
</script>
