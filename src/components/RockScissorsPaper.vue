<template>
  <div id="main">
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
  보: "-284px"
}; //background-position CSS

const scores = {
  가위: 1,
  바위: 0,
  보: -1
};

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
        background: `url(https://en.pimg.jp/023/182/267/1/23182267.jpg) ${this.imgCoord} 0`
      }; //Caching
    }
  },
  methods: {
    changeHand() {
      // 코드를 깨끗하게
      interval = setInterval(() => {
        if (this.imgCoord === rspCoords.바위) {
          this.imgCoord = rspCoords.가위;
        } else if (this.imgCoord === rspCoords.가위) {
          this.imgCoord = rspCoords.보;
        } else if (this.imgCoord === rspCoords.보) {
          this.imgCoord = rspCoords.바위;
        }
      }, 100);
    },
    onClickButton(choice) {
      clearInterval(interval);
      const myScore = scores[choice];
      const cpuScore = this.score;
      const diff = myScore - cpuScore;
      if (diff === 0) {
        this.result = "비겼습니다.";
      } else if ([-1, 2].includes(diff)) {
        this.result = "이겼습니다.";
        this.score += 1;
      } else {
        this.result = "졌습니다.";
        this.score -= 1;
      }
      setTimeout(() => {
        //#memory 문제
        this.changeHand();
      }, 1000);
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
    this.changeHand();
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

<style scoped>
#main {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
#computer {
  width: 142px;
  height: 200px;
  background-position: 0 0;
}
</style>
