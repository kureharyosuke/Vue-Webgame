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

const computerChoice = imgCoord => {
  return Object.entries(rspCoords).find(function(v) {
    return v[1] === imgCoord;
  });
};

let interval = null;

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
    onClickButton(choice) {
      clearInterval(interval);
      const myScore = scores[choice];
      const cpuScore = this.score;
    }
  },
  beforeCreate() {},
  created() {
    console.log("created");
    // 화면 보여지기는 하지만,
  },
  beforeMount() {},
  mounted() {
    console.log("mounted");
    interval = setInterval(() => {
      if (this.imgCoord === this.rspCoords.바위) {
        this.imgCoord = rspCoords.가위;
      } else if (this.imgCoord === this.rspCoords.가위) {
        this.imgCoord = rspCoords.보;
      } else if (this.imgCoord === this.rspCoords.보) {
        this.imgCoord = rspCoords.바위;
      }
    }, 100);
  },
  beforeUpdate() {},
  updated() {
    console.log("updated");
  },
  beforeDestroy() {
    console.log("beforeDestory");
  },
  destroyed() {
    console.log("destroyed");
    clearInterval(interval);
  }
};
</script>

<style>
#computer {
  width: 142px;
  height: 200px;
  background-position: 0 0;
}
</style>
