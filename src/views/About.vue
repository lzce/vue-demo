<template>
  <div class="about">
    <h1>This is an about page</h1>
    <button @click="gogo">跳转</button>
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  name: 'About',
  methods: {
    gogo () {
      this.$router.push('demo')
    }
  }
}
</script>
