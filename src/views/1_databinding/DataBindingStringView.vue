<template>
  <div>
    <h1>Hellow {{ userName }}</h1>
    <!-- 문자열 databinding -> {{}} -->
    <p>{{ msg }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userName: 'min.gr8',
      msg: "i'm G-IDLE illustrator :)",
      arr: [],
      obj: {}
    }
  }
}
</script>

<style scoped></style>
