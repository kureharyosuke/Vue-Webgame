<template>
  <div>
    <div>{{ word }}</div>
    <form @submit="onSubmitFrom">
      <input type="text" ref="answer" v-model="value" />
      <button type="submit">Button</button>
    </form>
    <div>{{ result }}</div>
  </div>
</template>

<script>
export default {
  name: "WordRelay",
  data() {
    return {
      word: "apple",
      result: "",
      value: ""
    };
  },
  methods: {
    onSubmitFrom(e) {
      e.preventDefault();
      if (this.word[this.word.length - 1] === this.value[0]) {
        this.result = "Yes";
        this.word = this.value;
        this.value = "";
        this.$refs.answer.focus();
      } else {
        this.result = "No";
        this.value = "";
        this.$refs.answer.focus();
      }
    }
  }
};
</script>

<style></style>
