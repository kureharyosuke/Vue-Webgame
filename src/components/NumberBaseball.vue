<template>
  <div>
    <h1>{{ result }}</h1>
    <form @submit.prevent="onSubmitForm">
      <input ref="answer" maxlength="4" v-model="value" />
    </form>
    <button type="submit">Button</button>
    <div>Try:{{ tries.length }}</div>
    <ul>
      <li v-for="t in tries">
        <div>{{ t.try }}</div>
        <div>{{ t.result }}</div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "NumberBaseBall",
  data() {
    return {
      tries: [],
      value: "",
      result: ""
    };
  },
  methods: {
    onSubmitForm() {
      this.tries.push({
        try: this.value,
        result: "HOME RUN!"
      });
      this.value = "";
      this.$refs.answer.focus();
    }
  }
};
</script>

<style></style>
