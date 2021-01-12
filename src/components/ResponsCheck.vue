<template>
  <div>
    <div id="screen">{{ message }}</div>
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
      message: "Click Me, Start"
    };
  },
  methods: {
    onResetButton() {}
  }
};
</script>

<style></style>
