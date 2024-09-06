$(function () {

    // 获取时间
    var t = null;
    t = setTimeout(time, 1000); //開始运行
    function time() {
        clearTimeout(t); //清除定时器
        dt = new Date();
        var y = dt.getFullYear();
        var mt = dt.getMonth() + 1;
        var day = dt.getDate();
        var h = dt.getHours(); //获取时
        var m = dt.getMinutes(); //获取分
        var s = dt.getSeconds(); //获取秒
        document.getElementById("showTime").innerHTML =
            y + "年" + mt + "月" + day + "-" + h + "时" + m + "分" + s + "秒";
        t = setTimeout(time, 1000); //设定定时器，循环运行
    }

    // 公告栏滚动
    $("#message1").marquee({
        //'left' or 'right'
        direction: 'left',
        // pixels:2,
        speed: 50,
        // gap: 80,
        pauseOnHover: true

    })

    //切换页签
    $(".clicktab li").on("click", function () {
        var indexli = $(this).index();
        $(this).addClass("actab").siblings().removeClass("actab");
        $(this).parents(".itembox").find(".contenttab li").eq(indexli).addClass("actent").siblings().removeClass("actent");
        if (indexli == 0) {
            table1();
        } else if (indexli == 1) {
            table2();
        }
    });


    // 水球图部分-----------------------------------------------------
    // 水球图1
    echart1();

    function echart1() {
        var dom = document.getElementById("echart1");
        var myChart = echarts.init(dom);
        //自适应宽高
        $(window).resize(function () {
            myChart.resize();
        });

        // 指定图表的配置项和数据
        var value = 0.3;
        var real = '+' + 30;
        var title = '35268';
        var data = [value, value, value];

        // 水球中心添加箭头图标
        // let icon = '<svg t="1601254603945" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3976" width="32" height="32"><path d="M535.113143 29.461943a29.9008 29.9008 0 0 0-46.226286 0L109.246171 466.563657c-12.726857 14.5408-7.197257 26.565486 12.346515 26.565486H263.606857c19.543771 0 35.459657 15.681829 35.459657 34.991543v250.733714c0 19.309714 15.945143 35.108571 35.459657 35.108571h354.976915c19.514514 0 35.459657-15.798857 35.459657-35.108571v-250.733714c0-19.309714 15.915886-34.991543 35.459657-34.991543h141.897143c19.543771 0 25.1904-12.024686 12.463543-26.565486L535.113143 29.461943z" fill="#F9807D" p-id="3977"></path><path d="M325.690514 1024h372.618972a29.257143 29.257143 0 0 0 29.257143-29.257143v-87.771428a29.257143 29.257143 0 0 0-29.257143-29.257143H325.690514a29.257143 29.257143 0 0 0-29.257143 29.257143v87.771428a29.257143 29.257143 0 0 0 29.257143 29.257143z" fill="#FCBFBE" p-id="3978"></path></svg>'
        // icon = encodeURIComponent(icon) // 转译
        // icon = 'data:image/svg+xml;utf8,' + icon // 添加url前缀
        // icon = 'image://' + icon // 添加ECharts需要的前缀

        option = {
            title: { //配置title
                text: title,
                textStyle: {
                    fontSize: 28,
                    fontFamily: 'Microsoft Yahei',
                    fontWeight: 'normal',
                    color: '#FEA900',
                },
                x: 'center', //title位置
                y: '18%'
            },
            graphic: [{ //同比增减配置
                type: 'group',
                left: 'center',
                top: '75%',
                children: [{
                    type: 'text',
                    z: 100,
                    left: '10',
                    top: 'middle',
                    style: {
                        fill: '#ffffff',
                        text: '同比：' + real,
                        font: '16px Microsoft YaHei',

                    }
                }]
            }],
            series: [{ //图形配置
                type: 'liquidFill',
                radius: '98%',
                center: ['50%', '50%'],
                data: data, //数据项
                backgroundStyle: { //配置水球里面属性
                    color: {
                        type: 'linear',
                        x: 1,
                        y: 0,
                        x2: 0.5,
                        y2: 1,
                        colorStops: [{
                            offset: 1,
                            color: 'rgba(255, 255, 255, .1)'
                        }, {
                            offset: 1,
                            color: 'rgba(255, 255, 255, .0)'
                        }, {
                            offset: 1,
                            color: 'rgba(255, 255, 255, .1)'
                        }],
                        globalCoord: false
                    },
                },
                outline: { //边框
                    borderDistance: 6, //边框距离
                    itemStyle: {
                        borderWidth: 2,
                        borderColor: {
                            type: 'linear',
                            x: 0,
                            y: 0,
                            x2: 0,
                            y2: 1,
                            colorStops: [{
                                offset: 1,
                                color: 'rgba(255, 255, 255, .1)'
                            }, {
                                offset: 1,
                                color: 'rgba(255, 255, 255, .0)'
                            }, {
                                offset: 1,
                                color: 'rgba(255, 255, 255, .1)'
                            }],
                            globalCoord: false
                        },
                        shadowBlur: 10,
                        shadowColor: '#000',
                    }
                },

                // 水球波纹渐变配置
                itemStyle: {
                    normal: {
                        color: new echarts.graphic.LinearGradient(
                            0, 0, 0, 1, //4个参数用于配置渐变色的起止位置, 这4个参数依次对应右/下/左/上四个方位. 而0 0 0 1则代表渐变色从正上方开始
                            [{
                                    offset: 0,
                                    color: '#FF6464'
                                },
                                {
                                    offset: 0.5,
                                    color: '#FF6464'
                                },
                                {
                                    offset: 1,
                                    color: '#AA3131'
                                }] //数组, 用于配置颜色的渐变过程. 每一项为一个对象, 包含offset和color两个参数. offset的范围是0 ~ 1, 用于表示位置
                        )
                    }
                },
                // 水波比率文本配置     
                label: {
                    normal: {
                        formatter: (value * 100).toFixed(0) + '%', //字段拼接
                        textStyle: {
                            color: 'white', //波浪上文本颜色
                            insideColor: 'white', //波浪内部字体颜色
                            fontSize: 22
                        },
                        position: ['50%', '54%'],
                    }
                }
            }, ]
        };

        // 使用刚指定的配置项和数据显示图表。
        if (option && typeof option === "object") {
            myChart.setOption(option, true);
        }
    }

    // 水球图2
    echart2();

    function echart2() {
        var dom = document.getElementById("echart2");
        var myChart = echarts.init(dom);
        //自适应宽高
        $(window).resize(function () {
            myChart.resize();
        });

        // 指定图表的配置项和数据
        var value = 0.5;
        var real = -20;
        var title = '1268';
        var data = [value, value, value];

        option = {
            title: {
                text: title,
                textStyle: {
                    fontSize: 28,
                    fontFamily: 'Microsoft Yahei',
                    fontWeight: 'normal',
                    color: '#FEA900',

                },
                x: 'center',
                y: '18%'
            },
            graphic: [{
                type: 'group',
                left: 'center',
                top: '75%',
                children: [{
                    type: 'text',
                    z: 100,
                    left: '10',
                    top: 'middle',
                    style: {
                        fill: '#ffffff',
                        text: '同比：' + real,
                        font: '16px Microsoft YaHei',

                    }
                }]
            }],
            series: [{
                type: 'liquidFill',
                radius: '98%',
                center: ['50%', '50%'],
                data: data,
                backgroundStyle: {
                    color: {
                        type: 'linear',
                        x: 1,
                        y: 0,
                        x2: 0.5,
                        y2: 1,
                        colorStops: [{
                            offset: 1,
                            color: 'rgba(255, 255, 255, .1)'
                        }, {
                            offset: 1,
                            color: 'rgba(255, 255, 255, 0)'
                        }, {
                            offset: 1,
                            color: 'rgba(255, 255, 255, .1)'
                        }],
                        globalCoord: false
                    },
                },
                outline: {
                    borderDistance: 6, //边框距离
                    itemStyle: {
                        borderWidth: 2,
                        borderColor: {
                            type: 'linear',
                            x: 0,
                            y: 0,
                            x2: 0,
                            y2: 1,
                            colorStops: [{
                                offset: 1,
                                color: 'rgba(255, 255, 255, .1)'
                            }, {
                                offset: 1,
                                color: 'rgba(255, 255, 255, .0)'
                            }, {
                                offset: 1,
                                color: 'rgba(255, 255, 255, .1)'
                            }],
                            globalCoord: false
                        },
                        shadowBlur: 10,
                        shadowColor: '#000',
                    }
                },
                // 水球波纹渐变配置
                itemStyle: {
                    normal: {
                        color: new echarts.graphic.LinearGradient(
                            0, 0, 0, 1, //4个参数用于配置渐变色的起止位置, 这4个参数依次对应右/下/左/上四个方位. 而0 0 0 1则代表渐变色从正上方开始
                            [{
                                    offset: 0,
                                    color: '#153f4d'
                                },
                                {
                                    offset: 0.5,
                                    color: '#19967a'
                                },
                                {
                                    offset: 1,
                                    color: '#3feeae'
                                }] //数组, 用于配置颜色的渐变过程. 每一项为一个对象, 包含offset和color两个参数. offset的范围是0 ~ 1, 用于表示位置
                        )
                    }
                },
                label: {
                    normal: {
                        formatter: (value * 100).toFixed(0) + '%',
                        textStyle: {
                            color: 'white', //波浪上文本颜色
                            insideColor: 'white', //波浪内部字体颜色
                            fontSize: 22
                        },
                        position: ['50%', '54%'],
                    }
                }
            }, ]
        };



        // 使用刚指定的配置项和数据显示图表。
        if (option && typeof option === "object") {
            myChart.setOption(option, true);
        }
    }

    // 水球图3
    echart3();

    function echart3() {
        var dom = document.getElementById("echart3");
        var myChart = echarts.init(dom);
        //自适应宽高
        $(window).resize(function () {
            myChart.resize();
        });

        // 指定图表的配置项和数据
        var value = 0.3;
        var real = -30;
        var title = '2368';
        var data = [value, value, value];

        option = {
            backgroundColor: 0,
            title: {
                text: title,
                textStyle: {
                    fontSize: 28,
                    fontFamily: 'Microsoft Yahei',
                    fontWeight: 'normal',
                    color: '#FEA900',

                },
                x: 'center',
                y: '18%'
            },
            graphic: [{
                type: 'group',
                left: 'center',
                top: '75%',
                children: [{
                    type: 'text',
                    z: 100,
                    left: '10',
                    top: 'middle',
                    style: {
                        fill: '#ffffff',
                        text: '同比：' + real,
                        font: '16px Microsoft YaHei',

                    }
                }]
            }],
            series: [{
                type: 'liquidFill',
                radius: '98%',
                center: ['50%', '50%'],
                data: data,
                backgroundStyle: {
                    color: {
                        type: 'linear',
                        x: 1,
                        y: 0,
                        x2: 0.5,
                        y2: 1,
                        colorStops: [{
                            offset: 1,
                            color: 'rgba(255, 255, 255, .1)'
                        }, {
                            offset: 1,
                            color: 'rgba(255, 255, 255, .0)'
                        }, {
                            offset: 1,
                            color: 'rgba(255, 255, 255, .1)'
                        }],
                        globalCoord: false
                    },
                },
                outline: {
                    borderDistance: 6, //边框距离
                    itemStyle: {
                        borderWidth: 2,
                        borderColor: {
                            type: 'linear',
                            x: 0,
                            y: 0,
                            x2: 0,
                            y2: 1,
                            colorStops: [{
                                offset: 1,
                                color: 'rgba(255, 255, 255, .1)'
                            }, {
                                offset: 1,
                                color: 'rgba(255, 255, 255, .0)'
                            }, {
                                offset: 1,
                                color: 'rgba(255, 255, 255, .1)'
                            }],
                            globalCoord: true
                        },
                        shadowBlur: 50,
                        shadowColor: 'red',
                    }
                },
                // 水球波纹渐变配置
                itemStyle: {
                    normal: {
                        color: new echarts.graphic.LinearGradient(
                            0, 0, 0, 1, //4个参数用于配置渐变色的起止位置, 这4个参数依次对应右/下/左/上四个方位. 而0 0 0 1则代表渐变色从正上方开始
                            [{
                                    offset: 0,
                                    color: '#153f4d'
                                },
                                {
                                    offset: 0.5,
                                    color: '#19967a'
                                },
                                {
                                    offset: 1,
                                    color: '#3feeae'
                                }
                            ] //数组, 用于配置颜色的渐变过程. 每一项为一个对象, 包含offset和color两个参数. offset的范围是0 ~ 1, 用于表示位置
                        )
                    }
                },
                label: {
                    normal: {
                        formatter: (value * 100).toFixed(0) + '%',
                        textStyle: {
                            color: 'white', //波浪上文本颜色
                            insideColor: 'white', //波浪内部字体颜色
                            fontSize: 22
                        },
                        position: ['50%', '54%'],
                    }
                }
            }, ]
        };



        // 使用刚指定的配置项和数据显示图表。
        if (option && typeof option === "object") {
            myChart.setOption(option, true);
        }
    }

    // 水球图4
    echart4();

    function echart4() {
        var dom = document.getElementById("echart4");
        var myChart = echarts.init(dom);
        //自适应宽高
        $(window).resize(function () {
            myChart.resize();
        });

        // 指定图表的配置项和数据
        var value = 0.3;
        var real = '+' + 30;
        var title = '2513';
        var data = [value, value, value];

        option = {
            backgroundColor: 0,
            title: {
                text: title,
                textStyle: {
                    fontSize: 28,
                    fontFamily: 'Microsoft Yahei',
                    fontWeight: 'normal',
                    color: '#FEA900',

                },
                x: 'center',
                y: '18%'
            },
            graphic: [{
                type: 'group',
                left: 'center',
                top: '75%',
                children: [{
                    type: 'text',
                    z: 100,
                    left: '10',
                    top: 'middle',
                    style: {
                        fill: '#ffffff',
                        text: '同比：' + real,
                        font: '16px Microsoft YaHei',

                    }
                }]
            }],
            series: [{
                type: 'liquidFill',
                radius: '98%',
                center: ['50%', '50%'],
                data: data,
                backgroundStyle: {
                    color: {
                        type: 'linear',
                        x: 1,
                        y: 0,
                        x2: 0.5,
                        y2: 1,
                        colorStops: [{
                            offset: 1,
                            color: 'rgba(255, 255, 255, .1)'
                        }, {
                            offset: 1,
                            color: 'rgba(255, 255, 255, .0)'
                        }, {
                            offset: 1,
                            color: 'rgba(255, 255, 255, .1)'
                        }],
                        globalCoord: false
                    },
                },
                outline: {
                    borderDistance: 6, //边框距离
                    itemStyle: {
                        borderWidth: 2,
                        borderColor: {
                            type: 'linear',
                            x: 0,
                            y: 0,
                            x2: 0,
                            y2: 1,
                            colorStops: [{
                                offset: 1,
                                color: 'rgba(255, 255, 255, .1)'
                            }, {
                                offset: 1,
                                color: 'rgba(255, 255, 255, .0)'
                            }, {
                                offset: 1,
                                color: 'rgba(255, 255, 255, .1)'
                            }],
                            globalCoord: false
                        },
                        shadowBlur: 10,
                        shadowColor: '#000',
                    }
                },
                // 水球波纹渐变配置
                itemStyle: {
                    normal: {
                        color: new echarts.graphic.LinearGradient(
                            0, 0, 0, 1, //4个参数用于配置渐变色的起止位置, 这4个参数依次对应右/下/左/上四个方位. 而0 0 0 1则代表渐变色从正上方开始
                            [{
                                    offset: 0,
                                    color: '#FF6464'
                                },
                                {
                                    offset: 0.5,
                                    color: '#FF6464'
                                },
                                {
                                    offset: 1,
                                    color: '#AA3131'
                                }
                            ] //数组, 用于配置颜色的渐变过程. 每一项为一个对象, 包含offset和color两个参数. offset的范围是0 ~ 1, 用于表示位置
                        )
                    }
                },
                label: {
                    normal: {
                        formatter: (value * 100).toFixed(0) + '%',
                        textStyle: {
                            color: '#fff', //波浪上文本颜色
                            insideColor: 'white', //波浪内部字体颜色
                            fontSize: 22
                        },
                        position: ['50%', '54%'],
                    }
                }
            }, ]
        };



        // 使用刚指定的配置项和数据显示图表。
        if (option && typeof option === "object") {
            myChart.setOption(option, true);
        }
    }

    //table1 事故数分布统计
    table1();

    function table1() {
        var dom = document.getElementById("table1");
        var myChart = echarts.init(dom);
        //自适应宽高
        $(window).resize(function () {
            myChart.resize();
        });


        // 配置部分
        var data1 = [-40, -50, -30, -10, -20, -15, -16, -45, -58, -45, -32, -2, -65, -12];
        var data2 = [100, 80, 70, 60, 80, 75, 76, 45, 98, 56, 123, 102, 95, 89];
        var xData = ['未央', '新城', '莲湖', '碑林', '灞桥', '雁塔', '阎良', '临潼', '长安', '高陵', '西咸', '长安', '阎良', '阎良']
        var option = {
            tooltip: {
                trigger: 'axis',
                axisPointer: { // 坐标轴指示器，坐标轴触发有效
                    type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
                }
            },
            grid: { //图形在dom中的位置
                left: '4%',
                right: '2%',
                bottom: '18%',
                top: '13%',
            },

            legend: { //图例
                data: ['事故总数', '同比增减值'],
                right: 20,
                top: 0,
                textStyle: {
                    color: "#fff"
                },
                itemWidth: 12,
                itemHeight: 10,
                itemGap: 30
            },
            xAxis: { //X轴属性配置
                type: 'category',
                data: xData,
                axisLine: {
                    lineStyle: {
                        color: '#425873'
                    }
                },
                axisLabel: {
                    textStyle: {
                        color: '#C4D3F5' //X坐标轴字颜色
                    },
                    margin: 8,
                },
                splitLine: {
                    show: false
                },
                axisTick: {
                    show: false
                }

            },

            yAxis: { //Y轴属性
                type: 'value',
                axisLine: {
                    show: true,
                    lineStyle: {
                        color: 'rgba(107,107,107,0.37)'
                    }
                },

                axisLabel: {
                    textStyle: {
                        color: "#999",

                    }
                },
                splitLine: {
                    show: false
                },
                axisTick: {
                    show: true
                }
            },
            series: [{
                    name: '事故总数',
                    type: 'bar',
                    barWidth: '24',
                    itemStyle: {
                        normal: {
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 0,
                                color: '#20BAFF'
                            }, {
                                offset: 1,
                                color: '#023B59'
                            }]),
                        },
                    },
                    data: data2
                },
                {
                    name: '同比增减值',
                    type: 'bar',
                    barWidth: '24',
                    itemStyle: {
                        normal: {
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 0,
                                color: '#06FFC5'
                            }, {
                                offset: 1,
                                color: '#02574F'
                            }]),
                        }

                    },
                    data: data1
                }
            ]
        };
        // 配置部分end
        if (option && typeof option === "object") {
            myChart.setOption(option, true);
        }

    }

    //table2 死亡数分布统计
    //    table2();
    function table2() {
        var dom = document.getElementById("table2");
        var myChart = echarts.init(dom);
        //自适应宽高
        $(window).resize(function () {
            myChart.resize();
        });


        // 配置部分
        var data1 = [-40, -50, -30, -10, -20, -15, -16, -45, -58, -45, -32, -2, -65, -12];
        var data2 = [100, 80, 70, 60, 80, 75, 76, 45, 98, 56, 123, 102, 95, 89];
        var xData = ['未央', '新城', '莲湖', '碑林', '灞桥', '雁塔', '阎良', '临潼', '长安', '高陵', '西咸', '长安', '阎良', '阎良']
        var option = {
            //  backgroundColor:'#030A12',
            tooltip: {
                trigger: 'axis',
                axisPointer: { // 坐标轴指示器，坐标轴触发有效
                    type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
                }
            },
            grid: {
                left: '4%',
                right: '2%',
                bottom: '18%',
                top: '13%',
                //   containLabel: true
            },

            legend: {
                data: ['死亡人数', '同比增减值'],
                right: 20,
                top: 0,
                textStyle: {
                    color: "#fff"
                },
                itemWidth: 12,
                itemHeight: 10,
                // itemGap: 35
            },
            xAxis: {
                type: 'category',
                data: xData,
                axisLine: {
                    lineStyle: {
                        color: '#425873'

                    }
                },
                axisLabel: {
                    textStyle: {
                        color: '#C4D3F5' //坐标轴字颜色
                    },
                    margin: 8,
                },
                splitLine: {
                    show: false
                },
                axisTick: {
                    show: false
                }

            },

            yAxis: {
                type: 'value',
                axisLine: {
                    show: true,
                    lineStyle: {
                        color: 'rgba(107,107,107,0.37)'
                    }
                },

                axisLabel: {
                    textStyle: {
                        color: "#999",

                    }
                },
                splitLine: {
                    show: false
                },
                axisTick: {
                    show: true
                }
            },
            series: [{
                    name: '死亡人数',
                    type: 'bar',
                    barWidth: '24',
                    itemStyle: {
                        normal: {
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 0,
                                color: '#FF3D3D'
                            }, {
                                offset: 1,
                                color: '#FF3D3D'
                            }]),
                        },
                    },
                    data: data2
                },
                {
                    name: '同比增减值',
                    type: 'bar',
                    barWidth: '24',
                    itemStyle: {
                        normal: {
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 0,
                                color: '#06FFC5'
                            }, {
                                offset: 1,
                                color: '#02574F'
                            }]),
                        }

                    },
                    data: data1
                }
            ]
        };


        // 配置部分end
        if (option && typeof option === "object") {
            myChart.setOption(option, true);
        }

    }

    //table3 事故总数/死亡人数同比增减率图表
    table3();

    function table3() {
        var dom = document.getElementById("table3");
        var myChart = echarts.init(dom);
        //自适应宽高
        $(window).resize(function () {
            myChart.resize();
        });

        var xData = ['未央', '新城', '莲湖', '碑林', '灞桥', '雁塔', '阎良', '临潼', '长安', '高陵', '西咸', '长安', '阎良', '阎良']
        option = {
            legend: {
                icon: 'circle',
                top: '2%',
                right: '2%',
                itemWidth: 9,
                itemGap: 20,
                textStyle: {
                    color: '#fffff'
                }
            },
            tooltip: {
                trigger: 'axis',
                backgroundColor: 'rgba(0,0,0,.75)',
                textStyle: {
                    color: '#ffffff'
                },
                padding: [10, 10],
                extraCssText: 'box-shadow: 1px 0 2px 0 rgba(0,0,0,.75)'
            },
            grid: {
                top: '15%',
                left: '5%',
                right: '3%',
                bottom: '12%'
            },
            xAxis: [{
                type: 'category',
                data: ['未央', '新城', '莲湖', '碑林', '灞桥', '雁塔', '阎良', '临潼', '长安', '高陵', '西咸', '长安', '阎良', '阎良'],
                axisLine: {
                    show: true,
                    lineStyle: {
                        color: 'rgba(107,107,107,0.37)', //y轴颜色
                    }
                },
                axisTick: {
                    show: false
                },
                axisLabel: {
                    interval: 0,
                    textStyle: {
                        color: '#C4D3F5' //坐标轴字颜色
                    },
                    margin: 10
                },
                axisPointer: {
                    type: 'shadow', // 默认为直线，可选为：'line' | 'shadow'
                    label: {
                        padding: [11, 5, 7],
                        backgroundColor: {
                            type: 'linear',
                            x: 0,
                            y: 0,
                            x2: 0,
                            y2: 1,
                            colorStops: [{
                                offset: 0,
                                color: '#fff' // 0% 处的颜色
                            }, {
                                offset: 0.9,
                                color: '#fff' // 0% 处的颜色
                            }, {
                                offset: 0.9,
                                color: '#33c0cd' // 0% 处的颜色
                            }, {
                                offset: 1,
                                color: '#33c0cd' // 100% 处的颜色
                            }],
                            global: false // 缺省为 false
                        }
                    }
                },
                boundaryGap: false
            }],
            yAxis: [{
                type: 'value',
                axisTick: {
                    show: false
                },
                axisLine: {
                    show: true,
                    lineStyle: {
                        color: 'rgba(107,107,107,0.37)', //y轴颜色
                    }
                },
                axisLabel: {
                    textStyle: {
                        color: '#999'
                    }
                },
                splitLine: {
                    show: false
                }
            }],
            series: [{
                    name: '事故总数增减率',
                    type: 'line',
                    data: [10, 10, 30, -12, 15, 3, 7, 8, 9, -10, 20, 25, 23, 16],
                    symbolSize: 1,
                    symbol: 'circle',
                    smooth: false,
                    yAxisIndex: 0,
                    showSymbol: false,
                    lineStyle: {
                        width: 3,
                        color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
                                offset: 0,
                                color: '#FEA900'
                            },
                            {
                                offset: 1,
                                color: '#FEA900'
                            }
                        ]),
                    },
                    itemStyle: {
                        normal: {
                            color: '#FEA900',
                            borderColor: '#FEA900'
                        }
                    }
                },
                {
                    name: '死亡人数增减率',
                    type: 'line',
                    data: [-5, 12, -11, 14, 25, 16, 10, 14, -16, 18, 20, 23, 25, 29],
                    symbolSize: 1,
                    symbol: 'circle',
                    smooth: false,
                    yAxisIndex: 0,
                    showSymbol: false,
                    lineStyle: {
                        width: 3,
                        color: new echarts.graphic.LinearGradient(1, 1, 0, 0, [{
                                offset: 0,
                                color: '#FF3D3D'
                            },
                            {
                                offset: 1,
                                color: '#FF3D3D'
                            }
                        ]),
                    },
                    itemStyle: {
                        normal: {
                            color: '#FF3D3D',
                            borderColor: '#FF3D3D'
                        }
                    }
                }
            ]
        };

        // 图表轮播显示
        // let i = 0
        // setInterval(function () {
        //     console.log(i)
        //     i = i === xData.length ? 0 : i + 1
        //     myChart.dispatchAction({
        //         type: 'showTip',
        //         seriesIndex: 0,  // 显示第几个series
        //         dataIndex: i // 显示第几个数据
        //     });
        // }, 5000)


        // 使用刚指定的配置项和数据显示图表。
        if (option && typeof option === "object") {
            myChart.setOption(option, true);
        }
    }

    //table4 事故总数月度统计
    table4();

    function table4() {
        var dom = document.getElementById("table4");
        var myChart = echarts.init(dom);
        //自适应宽高
        $(window).resize(function () {
            myChart.resize();
        });

        option = {
            // backgroundColor: '#080b30',

            tooltip: {
                trigger: 'axis',
                backgroundColor: 'rgba(0,0,0,.75)',
                textStyle: {
                    color: '#999'
                },
                axisPointer: { // 坐标轴指示器，坐标轴触发有效
                    type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
                }
            },
            grid: {
                top: '10%',
                left: '8%',
                right: '3%',
                bottom: '10%',
                // containLabel: true
            },
            xAxis: [{
                type: 'category',
                axisLine: {
                    show: true
                },
                splitArea: {
                    // show: true,
                    color: '#f00',
                    lineStyle: {
                        color: '#f00'
                    },
                },
                axisLabel: {
                    color: '#fff',
                    interval: 0,
                    rotate: 40,
                    textStyle: {
                        color: '#c3dbff', //更改坐标轴文字颜色
                        fontSize: 10 //更改坐标轴文字大小
                    }
                },
                splitLine: {
                    show: false
                },
                boundaryGap: false,
                data: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'],

            }],

            yAxis: [{
                type: 'value',
                min: 0,
                // max: 140,
                splitNumber: 4,
                splitLine: {
                    show: false,
                    lineStyle: {
                        color: 'rgba(255,255,255,0.1)'
                    }
                },
                axisLine: {
                    show: true,
                },
                axisLabel: {
                    show: true,
                    margin: 10,
                    textStyle: {
                        color: '#999',

                    },
                },
                axisTick: {
                    show: true,
                },
            }],
            series: [{
                name: '事故总数',
                type: 'line',
                smooth: false, //是否平滑
                showAllSymbol: true,
                symbol: 'circle',
                symbolSize: 3,
                lineStyle: {
                    normal: {
                        color: "#FEA900",
                        shadowColor: 'rgba(0, 0, 0, .1)',
                        shadowBlur: 0,
                        shadowOffsetY: 2,
                        shadowOffsetX: 2,
                    },
                },
                label: {
                    show: true,
                    position: 'top',
                    textStyle: {
                        color: '#FEA900',
                    }
                },
                itemStyle: {
                    color: "#FEA900",
                    borderColor: "#fff",
                    borderWidth: 3,
                    shadowColor: 'rgba(0, 0, 0, .3)',
                    shadowBlur: 0,
                    shadowOffsetY: 2,
                    shadowOffsetX: 2,
                },
                tooltip: {
                    show: true
                },
                areaStyle: {
                    normal: {
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 0,
                                color: 'rgba(254,169,0,0.3)'
                            },
                            {
                                offset: 1,
                                color: 'rgba(254,169,0,0)'
                            }
                        ], false),
                        shadowColor: 'rgba(254,169,0,0.9)',
                        shadowBlur: 10
                    }
                },
                data: [502.84, 205.97, 332.79, 281.55, 398.35, 214.02, 254, 584, 231, 102, 158, 268]
            }, ]
        };
        if (option && typeof option === "object") {
            myChart.setOption(option, true);
        }
    }

    //table5 死亡人数月度统计
    table5();

    function table5() {
        var dom = document.getElementById("table5");
        var myChart = echarts.init(dom);
        //自适应宽高
        $(window).resize(function () {
            myChart.resize();
        });

        var data1 = [4, 5, 3, 2, 1, 5, 8, 7, 6, 3, 6, 2];
        option = {
            tooltip: {
                trigger: 'axis',
                backgroundColor: 'rgba(0,0,0,.75)',
                textStyle: {
                    color: '#ffffff'
                },
                axisPointer: { // 坐标轴指示器，坐标轴触发有效
                    type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
                }
            },
            grid: {
                top: '10%',
                left: '5%',
                right: '3%',
                bottom: '10%',
            },
            xAxis: [{
                type: 'category',
                axisLine: {
                    show: true
                },
                splitArea: {
                    // show: true,
                    color: '#f00',
                    lineStyle: {
                        color: '#f00'
                    },
                },
                axisLabel: {
                    color: '#fff',
                    interval: 0,
                    rotate: 40,
                    textStyle: {
                        color: '#c3dbff', //更改坐标轴文字颜色
                        fontSize: 10 //更改坐标轴文字大小
                    }
                },
                splitLine: {
                    show: false
                },
                boundaryGap: false,
                data: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'],

            }],

            yAxis: [{
                type: 'value',
                min: 0,
                // max: 140,
                splitNumber: 4,
                splitLine: {
                    show: false,
                },
                axisLine: {
                    show: true
                },
                axisLabel: {
                    show: true,
                    margin: 10,
                    textStyle: {
                        color: '#999',

                    },
                },
                axisTick: {
                    show: true,
                },
            }],
            series: [{
                name: '死亡人员总数',
                type: 'line',
                smooth: false, //是否平滑
                showAllSymbol: true,
                symbol: 'circle',
                symbolSize: 3,
                lineStyle: {
                    normal: {
                        color: "#FF3D3D",
                        shadowColor: 'rgba(0, 0, 0, .1)',
                        shadowBlur: 0,
                        shadowOffsetY: 2,
                        shadowOffsetX: 2,
                    },
                },
                label: {
                    show: true,
                    position: 'top',
                    textStyle: {
                        color: '#FF3D3D',
                    }
                },
                itemStyle: {
                    color: "#FF3D3D",
                    borderColor: "#fff",
                    borderWidth: 3,
                    shadowColor: 'rgba(0, 0, 0, .3)',
                    shadowBlur: 0,
                    shadowOffsetY: 2,
                    shadowOffsetX: 2,
                },
                tooltip: {
                    show: true
                },
                areaStyle: {
                    normal: {
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 0,
                                color: 'rgba(255,61,61,0.3)'
                            },
                            {
                                offset: 1,
                                color: 'rgba(255,61,61,0)'
                            }
                        ], false),
                        shadowColor: 'rgba(255,61,61,0.9)',
                        shadowBlur: 10
                    }
                },
                data: data1
            }, ]
        };
        if (option && typeof option === "object") {
            myChart.setOption(option, true);
        }
    }

    //地图图表部分
    map();

    function map() {
        var dom = document.getElementById("map");
        var myChart = echarts.init(dom);
        $(window).resize(function () {
            myChart.resize();
        });
        var uploadedDataURL = "./js/shanxi.json";

        var gdpdata = [{
                name: '榆林市',
                value: 1
            },
            {
                name: '延安市',
                value: 0
            },
            {
                name: '铜川市',
                value: 2
            },
            {
                name: '咸阳市',
                value: 0
            },
            {
                name: '渭南市',
                value: 4
            },
            {
                name: '西安市',
                value: 0
            },
            {
                name: '商洛市',
                value: 6
            },
            {
                name: '宝鸡市',
                value: 7
            },
            {
                name: '安康市',
                value: 0
            },
            {
                name: '渭南市',
                value: 5
            },
            {
                name: '汉中市',
                value: 4
            }
        ];
        var seriesdata = [{
            name: 'GDP',
            type: 'map',
            map: '陕西',
            itemStyle: {
                normal: {
                    areaColor: 'orange', //背景颜色
                    label: {
                        show: true
                    }
                },
                emphasis: {
                    label: {
                        show: true
                    }
                }
            },
            data: gdpdata
        }, ];
        option = {
            visualMap: {
                type: 'piecewise', //分段型。
                splitNumber: 6,
                inverse: true,

                pieces: [{
                    min: 0,
                    max: 0,
                    color: '#02cc99'
                }, {
                    min: 1,
                    max: 3,
                    color: '#f5cb58'
                }, {
                    min: 4,
                    max: 6,
                    color: '#f59c4e'
                }, {
                    min: 6,
                    max: 100,
                    color: '#f16c6c'
                }],
                right: '15',
                bottom: '25',
                textStyle: {
                    color: '#99b8ff'
                }
            },
            toolbox: {
                show: false,
                orient: 'vertical',
                left: 'right',
                top: 'center',
                feature: {
                    dataView: {
                        readOnly: false
                    },
                    restore: {},
                    saveAsImage: {}
                }
            },
            graphic: [{
                type: 'group',
                bounding: 'raw',
                rotation: Math.PI / 4,
                right: 100,
                bottom: 100,
                z: 100,

                onmouseover: function () {
                    body.appendChild(div);
                },
                onmouseout: function () {
                    body.removeChild(div);
                }
            }],
            tooltip: {
                formatter: function (params) {
                    return params.value + params.name;
                }
            },
            series: seriesdata
        }
        $.get(uploadedDataURL, function (gdMap) {
            echarts.registerMap('陕西', gdMap);
            myChart.setOption(option, true);
        });
        myChart.on('legendselectchanged', function (params) {
            myChart.setOption(option, true);
        });
    }

    //图表自适应
    function chartResize(chart) {
        $(window).on('resize', function () {
            chart.resize();
        });
    }

    // 实时信息滚动方法
    // var i = 1,
    //     l;
    // $('#scroll').hover(function () {
    //     i = 0
    // }, function () {
    //     i = 1
    // }); //鼠标经过时设置i=0达到鼠标经过停止效果

    // $(function () {
    //     $("#scroll").scrollForever();
    // })

    $('#scroll').scrollbox({
        linear: true,
        step: 1,
        delay: 0,
        speed: 50

});
})