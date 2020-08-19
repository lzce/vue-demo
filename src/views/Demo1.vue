<template>
  <div>
    <div class="aaa" id="aaa">
      <img id="image" :src="src" alt="Picture">
      <!-- <img id="image" :src="src" alt="Picture">
      <img id="image" :src="src" alt="Picture"> -->
    </div>
  </div>
</template>

<script>
import Viewer from 'viewerjs';
export default {
  name: 'Demo1',
  data () {
    return {
      src: 'http://img3.imgtn.bdimg.com/it/u=2534506313,1688529724&fm=26&gp=0.jpg'
    }
  },
  mounted () {
    const viewer = new Viewer(document.getElementById('aaa'), {
      // inline: true,
      viewed() {
        viewer.zoomTo(1);
      },
    })
  }
}
</script>

<style lang="scss" scoped>
.aaa {
  img {
    width: 200px;
    height: 200px;
    cursor: pointer;
  }
}
</style>