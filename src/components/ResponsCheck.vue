<template>
  <div>
    <div id="screen" :class="state" @click="onClickScreen">{{ message }}</div>
    <!--  data 안에 state 의 waiting을 가리킨다. -->
    <!-- React className? -->
    <div>
      <div>평균 시간:{{ result }}</div>
      <button @click="onResetButton">Reset</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "ResponsCheck",
  data() {
    return {
      result: [],
      state: "waiting",
      message: "Click Me, Start!"
    };
  },
  methods: {
    onResetButton() {},
    onClickScreen() {
      if (this.state === "waiting") {
        this.state = "ready";
      } else if (this.state === "ready") {
        this.state = "now";
      } else if (this.state === "now") {
        this.state = "waiting";
      }
    }
  }
};
</script>

<style scoped>
/* scoped 사용하면 이 컴포넌트(ResponsCheck)안에서만 사용할수 있다. 스코프드 스타일 */
#screen {
  width: 300px;
  height: 300px;
  display: flex;
  justify-content: center;
  text-align: center;
  user-select: none;
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
