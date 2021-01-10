<template>
  <div>
    <div>{{ first }} X {{ second }}?</div>
    <form @submit="onSubmitForm">
      <input type="number" ref="answer" v-model="value" />
      <button type="subimt">Button</button>
      <!-- <div>{{ value }}</div> -->
    </form>
    <div id="result">{{ result }}</div>
  </div>
</template>
<script>
export default {
  name: "GuGuDan",
  // React = state , vue =  data?
  data() {
    return {
      first: Math.ceil(Math.random() * 9),
      second: Math.ceil(Math.random() * 9),
      value: "",
      result: ""
    };
  },
  methods: {
    onSubmitForm(e) {
      e.preventDefault();
      console.log(this);
      console.log(this.first, this.second, this.value);
      if (this.first * this.second === parseInt(this.value)) {
        this.result = "Yes";
        this.first = Math.ceil(Math.random() * 9);
        this.second = Math.ceil(Math.random() * 9);
        this.value = "";
        // this.input.focus();
        this.$refs.answer.focus();
      } else {
        this.result = "No";
        this.value = "";
        // this.input.focus();
        this.$refs.answer.focus();
      }
    }
  }
};
</script>

<style></style>
