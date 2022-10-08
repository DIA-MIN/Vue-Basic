<template>
  <div>
    <button @click="increase">Add 1</button>
    <p>{{ counter }}</p>
    <ul class="city-buttons">
      <il
        @click="selectCity(city)"
        class="city-button"
        :class="{ isSelected: city.selected === true }"
        v-for="city in cities"
        :key="city.code"
        >{{ city.label }}</il
      >
    </ul>
  </div>
</template>
<script>
export default {
  components: {},
  data() {
    return {
      counter: 0,
      cities: [
        { code: 'Seoul', label: '서울', selected: false },
        { code: 'London', label: '런던', selected: false },
        { code: 'Chicago', label: '시카고', selected: false }
      ]
    }
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {
    increase() {
      this.counter++
    },
    selectCity(city) {
      city.selected = !city.selected
    }
  }
}
</script>
<style>
.city-buttons {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
}
.city-button {
  cursor: pointer;
}
.isSelected {
  background: #333;
  color: #fff;
}
</style>
