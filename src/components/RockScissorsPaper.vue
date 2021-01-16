<template>
  <div>
    <div id="computer" :style="computedStyleObject"></div>
    <div>
      <button @click="onClickButton('바위')">바위</button>
      <button @click="onClickButton('가위')">가위</button>
      <button @click="onClickButton('보')">보</button>
    </div>
    <div>{{ result }}</div>
    <div>현재 {{ score }}</div>
  </div>
</template>

<script>
const rspCoords = {
  바위: "0",
  가위: "-142px",
  보: "-284"
}; //background-position CSS

export default {
  name: "RockScissorsPaper",
  data() {
    return {
      // vue.js 는 항상 데이터를 생각해라
      imgCoord: rspCoords.바위,
      result: "",
      score: 0
    };
  },
  computed: {
    computedStyleObject() {
      return {
        background: `url(https://en.pimg.jp/023/182/267/1/23182267.jpg) ${this.imageCoord} 0`
      }; //Caching
    }
  },
  methods: {
    onClickButton(choice) {}
  },
  created() {},
  mounted() {},
  updated() {},
  destroyed() {}
};
</script>

<style>
#computer {
  width: 142px;
  height: 200px;
  background-position: 0 0;
}
</style>
