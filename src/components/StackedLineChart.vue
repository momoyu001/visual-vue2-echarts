<template>
    <!-- 折线图堆叠 -->
    <div class="stacked-line-chart-module">
        折线堆叠图
        <div id="stacked_line" :style="$echartsCommonStyle"></div>
    </div>
</template>

<script>
export default {
    name: 'StackedLineChart',
    data() {
        return {
            stackedLineInstance: null
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
            this.stackedLineInstance = this.$echarts.init(document.getElementById('stacked_line'));

            let option = {
                title: {
                    text: 'Stacked Line'
                },
                tooltip: { // tooltip可设置在全局，也可以设置在坐标系中，即grid.tooltip polar.tooltip single.tooltip
                    trigger: 'axis'
                },
                legend: { // 图例组件 ，展现了不同系列的标记、颜色和名称。可以通过点击图例控制哪些不显示
                    data: ['Email', 'Union Ads', 'Video Ads', 'Direct', 'Search Engine'] // 每一项为一个系列的的name
                },
                grid: {
                    left: '3%',
                    right: '4%',
                    bottom: '3%',
                    containLabel: true
                },
                toolbox: { // 工具栏  内置有 导出图片、数据视图、动态类型切换、数据区域缩放、重置
                    feature: {  // 各个工具配置项
                        saveAsImage: {}, // 导出图片
                        // myTool1: { // 自定义的工具名称，只能以 my 开头
                        //     show: true,
                        //     title: '自定义扩展方法1',
                        //     icon: '',
                        //     onclick: function() {
                        //         alert('myToolHandler1')
                        //     }
                        // }
                    }
                },
                xAxis: {
                    type: 'category',
                    boundaryGap: false,
                    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
                },
                yAxis: {
                    type: 'value'
                },
                series: [
                    {
                        name: 'Email',
                        type: 'line',
                        stack: 'Total',
                        data: [120, 132, 101, 134, 90, 230, 210]
                    },
                    {
                        name: 'Union Ads',
                        type: 'line',
                        stack: 'Total',
                        data: [220, 182, 191, 234, 290, 330, 310]
                    },
                    {
                        name: 'Video Ads',
                        type: 'line',
                        stack: 'Total',
                        data: [150, 232, 201, 154, 190, 330, 410]
                    },
                    {
                        name: 'Direct',
                        type: 'line',
                        stack: 'Total',
                        data: [320, 332, 301, 334, 390, 330, 320]
                    },
                    {
                        name: 'Search Engine',
                        type: 'line',
                        stack: 'Total',
                        data: [820, 932, 901, 934, 1290, 1330, 1320]
                    }
                ]
            }

            this.stackedLineInstance.setOption(option);
        }
    }
}
</script>

<style scoped lang="scss">
</style>
