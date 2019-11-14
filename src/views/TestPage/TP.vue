<template>
  <div>

  </div>
</template>

<script>
export default {

  data() {
    return {
    }
  },

  computed: {

  },

  mounted() {
    this.jsontogo();
  },

  methods: {
   
  }
}
</script>
<style lang='scss' scoped>
h1 {
  background: red;
  width: 375px;
}
.icons-warp {
  border-radius: 25px;
  .float-icon-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
    width: 50px;
    height: 50px;
    img {
      width: 25px;
      height: 25px;
      margin-bottom: 3px;
    }
    span {
      font-size: 9px;
      color: #666666;
    }
  }
}
</style>
