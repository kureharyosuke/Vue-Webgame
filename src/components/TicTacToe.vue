<template>
  <div>
    <table-component :table-data="tableData" />
    <div>{{ turn }} is Turn </div>
  </div>
</template>

<script>
import TableComponent from "./oranlsms/TableComponent";

export default {
  components: {
    TableComponent
  },
  data() {
    return {
      tableData: [
        ['', '', ''],
        ['', '', ''],
        ['', '', ''],
      ],
      turn: 'O',
    };
  }
};
</script>

<style></style>
