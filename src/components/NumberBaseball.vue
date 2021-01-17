<template>
  <div>
    <h1>{{ result }}</h1>
    <form @submit.prevent="onSubmitForm">
      <input ref="answer" maxlength="4" v-model="value" />
    </form>
    <button type="submit">Button</button>
    <div>Try:{{ tries.length }}</div>
    <ul>
      <li v-for="t in tries" :key="t.try">
        <div>{{ t.try }}</div>
        <div>{{ t.result }}</div>
      </li>
    </ul>
  </div>
</template>

<script>
const getNumbers = () => {
  const candidates = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const array = [];
  for (let i = 0; i < 4; i += 1) {
    const number = candidates.splice(Math.floor(Math.random() * (9 - i)), 1)[0];
    array.push(number);
  }
  //   console.log(number);
  return array;
};

export default {
  name: "NumberBaseBall",
  data() {
    return {
      answer: getNumbers(), // ex) [1,2,6,7] = this.answer.join('')
      tries: [],
      value: "",
      result: ""
    };
  },
  methods: {
    onSubmitForm() {
      if (this.value === this.answer.join("")) {
        // 정답이면
        this.tries.push({
          try: this.value,
          result: "HOME RUN!"
        });
        this.result = "HOME RUN!";
        this.tries = [];
        this.$refs.answer.focus();
      } else {
        // 틀리면
        if (this.tries.length >= 9) {
          // 10번째 시도
          this.result = ` Game Over... ${this.answer.join(",")} 였습니다.`;
          alert("New Game Start!");
          (this.value = ""), (this.answer = getNumbers());
          (this.tries = []), this.$refs.answer.focus();
        }
        let strike = 0;
        let ball = 0;
        const answerArray = this.value.split("").map(v => parseInt(v));
        for (let i = 0; i < 4; i += 1) {
          if (answerArray[i] === this.answer[i]) {
            // 숫자 자릿수 모두 정답
            strike++;
          } else if (this.answer.includes(answerArray[i])) {
            ball++;
          }
        }
        this.tries.push({
          try: this.value,
          result: `${strike} Strike, ${ball} Ball.`
        });
      }
      this.value = "";
      this.$refs.answer.focus();
    }
  }
};
</script>

<style></style>
