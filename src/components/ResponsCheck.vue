<template>
  <main>
    <div id="screen" :class="state" @click="onClickScreen">{{ message }}</div>
    <!--  data 안에 state 의 waiting을 가리킨다. -->
    <!-- React className? -->
    <template v-if="result.length">
      <div>평균 시간:{{ average }}ms</div>
      <button @click="onResetButton">Reset</button>
    </template>
  </main>
</template>

<script>
let startTime = 0;
let endTime = 0;
let timeout = null;

export default {
  name: "ResponsCheck",
  data() {
    return {
      result: [],
      state: "waiting",
      message: "Click Me, Start!"
    };
  },
  computed: {
    average() {
      return this.result.reduce((a, c) => a + c, 0) / this.result.length || 0;
    }
  },
  methods: {
    onResetButton() {
      this.result = [];
    },
    onClickScreen() {
      if (this.state === "waiting") {
        this.state = "ready";
        this.message = "Click on the green color.";
        setTimeout(() => {
          this.state = "now";
          this.message = "Click Me, Now!";
          startTime = new Date();
        }, Math.floor(Math.random() * 1000) + 2000); // 2~3
      } else if (this.state === "ready") {
        clearTimeout(timeout);
        this.state = "waiting";
        this.message = "You're too fast.";
      } else if (this.state === "now") {
        endTime = new Date();
        this.state = "waiting";
        this.state = "Start over again.";
        this.result.push(endTime - startTime);
      }
    }
  }
};
</script>

<style scoped>
/* scoped 사용하면 이 컴포넌트(ResponsCheck)안에서만 사용할수 있다. 스코프드 스타일 */
main {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

#screen {
  width: 300px;
  height: 300px;
  text-align: center;
  user-select: none;
  background-color: aqua;
}
#screen.wating {
  background-color: aqua;
}
#screen.ready {
  background-color: red;
  color: white;
}
#screen.now {
  background-color: greenyellow;
}
</style>
