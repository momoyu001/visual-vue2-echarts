<template>
<!-- 基础折线图 -->
    <div class="basic-line-module common-echarts">
        基础折线图
        <div id="basic_echart" :style="$echartsCommonStyle"></div>
    </div>
</template>

<script>
export default {
    name: 'BasicLineChart',
    data() {
        return {
            basicChartInstance: null
        }
    },
    computed:{},
    watch: {},
    created() {},
    mounted() {
        this.initChart();
    },
    methods: {
        initChart() {
            this.basicChartInstance = this.$echarts.init(document.getElementById('basic_echart'));

            // 基础折线图配置
            let options = {
                xAxis: {
                    type: 'category', // 类目 类型
                    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
                },
                yAxis: {
                    type: 'value'
                },
                series: [
                    {
                        data: [160, 230, 80, 200, 150, 140, 180],
                        type: 'line'
                    },
                    {
                        data: [10, 20, 30, 40 ,30 ,20, 10],
                        type: 'line'
                    }
                ]
            };

            this.basicChartInstance.setOption(options);
        }
    }
}
</script>

<style scoped lang="scss">
</style>
