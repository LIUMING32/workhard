/**
 * 请在index.html页面中添加一个表格和一张图表;
 * 表格和图表的数据请使用下面的链接获取,链接支持jsonp请求;
 * 样式可以参考文件夹中的图片（样式不要求相同，只需功能实现即可）;
 * 功能要求表格可以点击表头排序，数据可分页预览;
 * 图表使用显示为折线图，请使用链接返回数据中的“purchases”作为y轴数据来源;
 * 可以使用自己擅长的任何框架及类库来完成;
 */
$(function(){ 
    var link = 'http://pm.linkworld.cn/json/test';
    function getGraph(){
        $.ajax({
            dataType: 'jsonp',
            url: link,
            success: function(data){
                //处理data数据
                var result = data;
               
                var nickArr = [];
                var res = [];               
                for(var i=0;i<result.length;i++){
                    var nick =  result[i].nick;
                    var purchases =  result[i].purchases;                  
                    nickArr.push(nick);
                    res.push(purchases);
                }      
                //基于准备好的dom，初始化echarts图表
                var myChart = echarts.init(document.getElementById('graph'));
                var option = {
                    title: {
                        // text: 'Step Line'
                    },
                    tooltip: {
                        trigger: 'axis'
                    },
                    legend: {
                        textStyle: {
                          color:"#000",
                        },
                        data: ['图形表单']
                    },
                    xAxis: {
                        type: 'category',
                        axisLabel: {
                        　　show: true,
                        　　textStyle: {
                        　　    color: '#000',
                        　　}
                      　　},
                        data:nickArr,
                    },
                    yAxis: {
                        type: 'value',
                        axisLabel: {
                        　　show: true,
                        　　textStyle: {
                        　　    color: '#000',
                        　　}
                      　　},
                    },
                    series: [{
                        name: '图形表单',
                        type: 'line',
                        data: res
                    }]
                };
                //为echarts对象加载数据 
                myChart.setOption(option); 
                myChart.on('click', function (params) {
                    
                });  
               
            }
        })
    }
    getGraph();
    
})
var option2 = {
    backgroundColor: '#2c343c',

    title: {
        text: 'Customized Pie',
        left: 'center',
        top: 20,
        textStyle: {
            color: '#ccc'
        }
    },

    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },

    visualMap: {
        show: false,
        min: 80,
        max: 600,
        inRange: {
            colorLightness: [0, 1]
        }
    },
    series: [
        {
            name:'访问来源',
            type:'pie',
            radius : '55%',
            center: ['50%', '50%'],
            data:[
                {value:335, name:'直接访问'},
                {value:310, name:'邮件营销'},
                {value:274, name:'联盟广告'},
                {value:235, name:'视频广告'},
                {value:400, name:'搜索引擎'}
            ].sort(function (a, b) { return a.value - b.value}),
            // data:[],
            roseType: 'angle',
            label: {
                normal: {
                    textStyle: {
                        color: 'rgba(255, 255, 255, 0.3)'
                    }
                }
            },
            labelLine: {
                normal: {
                    lineStyle: {
                        color: 'rgba(255, 255, 255, 0.3)'
                    },
                    smooth: 0.2,
                    length: 10,
                    length2: 20
                }
            },
            itemStyle: {
                normal: {
                    color: '#c23531',
                    shadowBlur: 200,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            },

            animationType: 'scale',
            animationEasing: 'elasticOut',
            animationDelay: function (idx) {
                return Math.random() * 200;
            }
        }
    ]
};
function getGraph2(data){
    //图表表单
    var result = data;
    var res = [];
    // for(var k in result){
    //     var nick =  result[k].nick;
    //     var purchases =  result[k].purchases;
    //     res.push({"value":nick,name:"purchases",});
    // }
    option2.series.data = res;
    //基于准备好的dom，初始化echarts图表
    var myChart = echarts.init(document.getElementById('graph2'));
    myChart.setOption(option2);
}    

	

