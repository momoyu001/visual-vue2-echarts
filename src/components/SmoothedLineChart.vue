<template>
    <div class="smooth-line-chart-module">
        基础平滑折线图
        <div id="smooth_line_chart" :style="$echartsCommonStyle"></div>
    </div>
</template>

<script>
export default {
    name: 'SmoothedLineChart',
    data() {
        return {
            smoothLineInstance: null
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
            this.smoothLineInstance = this.$echarts.init(document.getElementById('smooth_line_chart'));

            let option = {
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
                        type: 'line',
                        smooth: true // 平滑曲线设置
                    },
                    {
                        data: [40, 20, 30, 40 ,30 ,20, 40],
                        type: 'line',
                        smooth: true
                    }
                ]
            }

            this.smoothLineInstance.setOption(option);
        }
    }
}
</script>

<style scoped lang="scss">
</style>
