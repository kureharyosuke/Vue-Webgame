<template>
  <td @click="onClickTd">{{cellData}}</td>
</template>

<script>
export default {
    props: {
        cellData: String,
        rowIndex: Number,
        cellIndex: Number,
    },
    methods: {
        onClickTd() {
            console.log( this.$root.$data.turn)
            console.log(this.$root.$data)
            console.log(this.$parent.$data)
            console.log(this.$root.$data.tableData) // undefined
            const rootData = this.$root.$data;
            rootData.tableData[this.rowIndex][this.cellIndex] = rootData.turn;
            rootData.turn = rootData.turn === 'O' ? 'X' : 'O';
        }
    }

}
</script>

<style>

</style>