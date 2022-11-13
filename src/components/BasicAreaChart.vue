<template>
    <div class="basic-area-chart-module">
        基础面积图
        <div id="basic_area_chart" :style="$echartsCommonStyle"></div>
    </div>
</template>

<script>
export default {
    name: 'BasicAreaChart',
    data() {
        return {
            basicAreaInstance: null
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
            this.basicAreaInstance = this.$echarts.init(document.getElementById('basic_area_chart'));
            let option = {
                xAxis: {
                    type: 'category', // 类目 类型
                    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                    boundaryGap: false // 坐标轴两边留白策略，
                    /**
                     * boundaryGap：坐标轴两边的留白策略
                     * 类目轴：可设置true/false。默认true，这时候刻度只是作为分割线，标签和数据点都会在两个刻度之间的带(band)之间
                     * 非类目轴：
                     * **/
                },
                yAxis: {
                    type: 'value'
                },
                series: [
                    {
                        data: [160, 230, 80, 200, 150, 140, 180],
                        type: 'line',
                        areaStyle: {}
                    },
                    {
                        data: [40, 20, 30, 40 ,30 ,20, 40],
                        type: 'line',
                        areaStyle: {}
                    }
                ]
            };

            this.basicAreaInstance.setOption(option);
        }
    }
}
</script>

<style scoped lang="scss">
</style>
