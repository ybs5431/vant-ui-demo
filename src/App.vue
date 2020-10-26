<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <div class="slide-container">
    <slide-verify ref="slideblock" @again="onAgain" @fulfilled="onFulfilled" @success="onSuccess" @fail="onFail"
      @refresh="onRefresh" :accuracy="accuracy" :slider-text="text"></slide-verify>
    </div>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";

export default {
  name: "App",
  components: {
    HelloWorld,
  },
  data() {
    return {
      msg: "",
      text: "xiang",
      // 精确度小，可允许的误差范围小；为1时，则表示滑块要与凹槽完全重叠，才能验证成功。默认值为5
      accuracy: 1,
    };
  },
  methods: {
    onSuccess(times) {
      console.log(times);
      this.msg = "111";
    },
    onFail() {
      console.log("验证不通过");
      this.msg = "";
    },
    onRefresh() {
      console.log("点击了刷新小图标");
      jjjjjjjjj
      this.msg = "";
    },
    onFulfilled() {
      console.log("刷新成功啦！");
    },
    onAgain() {
      console.log("检测到非人为操作的哦！");
      this.msg = "try again";
      // 刷新
      this.$refs.slideblock.reset();
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.slide-container{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
}
</style>
