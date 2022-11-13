<template>
    <div id="app">
        <BasicLineChart></BasicLineChart>
        <BasicCandleStick></BasicCandleStick>
        <SmoothedLineChart></SmoothedLineChart>
        <BasicAreaChart></BasicAreaChart>
        <StackedLineChart></StackedLineChart>
    </div>
</template>

<script>
export default {
    name: 'App',
};
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}

.common-echarts {
    width: 300px;
    height: 300px;
    margin: 20px;
    border-radius: 4px;
}
</style>
