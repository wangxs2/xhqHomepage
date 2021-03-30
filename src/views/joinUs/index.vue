<template>
  <div class="join-us-box">
    <img
      src="../../assets/image/joinus.jpg"
      style="width: 100%"
      @click="goDetail"
    />
  </div>
</template>

<script>

export default {
  mounted () {
  },
  methods: {
    goDetail () {
      this.$router.push('/joinUsDetail')
    }
  }

}
</script>

<style>
.join-us-box {
  width: 100%;
  height: 100%;
}
</style>
