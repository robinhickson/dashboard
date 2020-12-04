//Project 7 Web Dashboard


//default charts config

Chart.defaults.global.defaultFontSize = 8;
Chart.defaults.global.defaultFontFamily = 'Lato';
Chart.defaults.global.defaultFontStyle = 'bold';

//line chart Web traffic


export function webTrafficChartWeekly() {
const ctx = document.getElementById('trafficLineChart');
    new Chart(ctx, {
        type: 'line',        
        data: {
            labels: [ '16-22', '23-29', '30-5', '6-12', '13-19', '20-26', '27-3', '4-10', '11-17', '18-24', '25-31', '1-7'],
            datasets: [{                
                data: [ 1200, 680, 950, 1200, 1250, 960, 1100, 1400, 1800, 2300, 1800, 2000],
                backgroundColor:          
                    'rgba(100, 100, 200, 0.4)',                  
                borderColor: 
                    'rgba(154, 162, 255, 1)',
                borderWidth: 1,
                lineTension: 0,
                pointRadius: 4,
                pointBorderWidth: 2,
                pointBackgroundColor: 'rgba(255,255,255,1)',
            }]
        },
        options: {
            
            layout: {
                padding:50,
        },
            legend: {
                display: false
            },
            title: {
                display: false
            },
            scales: {
                scaleLabel:{
                    align: 'right'
                },
                xAxes: [{
                    gridLines:{
                        tickMarkLength: 0,
                        gridOffsetGridLines: true,
                    },
                    ticks: {
                        beginAtZero: false,
                        labelOffset: 0,
                        padding: 10,
                    }
                }],
                yAxes: [{
                    gridLines:{
                            tickMarkLength: 0,
                    },
                    ticks: {
                        beginAtZero: false,
                        stepSize: 500,
                        padding: 10
                    }
                }]
            }
        }
    })

};

export function webTrafficChartDaily() {
    const ctx = document.getElementById('myTrafficChart');
        new Chart(ctx, {
            type: 'line',        
            data: {
                labels: [ 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday',],
                datasets: [{                
                    data: [ 120, 60, 90, 120, 130, 90, 110, ],
                    backgroundColor:          
                        'rgba(100, 100, 200, 0.4)',                  
                    borderColor: 
                        'rgba(154, 162, 255, 1)',
                    borderWidth: 1,
                    lineTension: 0,
                }]
            },
            options: {
                
                layout: {
                    padding:50,
            },
                legend: {
                    display: false
                },
                title: {
                    display: false
                },
                scales: {
                    scaleLabel:{
                        align: 'right'
                    },
                    xAxes: [{
                        gridLines:{
                            tickMarkLength: 0,
                            gridOffsetGridLines: true,
                        },
                        ticks: {
                            beginAtZero: false,
                            labelOffset: 0,
                            padding: 10
                        }
                    }],
                    yAxes: [{
                        gridLines:{
                                tickMarkLength: 0,
                            },
                        ticks: {
                            beginAtZero: true,
                            stepSize: 20,
                            padding: 10
                        }
                    }]
                }
            }
        })
    
};

export function webTrafficChartHourly() {
        const ctx = document.getElementById('myTrafficChart');
            new Chart(ctx, {
                type: 'line',        
                data: {
                    labels: [ '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '18', '17', '18', '19', '20', '21', '22', '23','24' ],
                    datasets: [{                
                        data: [ 5, 7, 6, 3, 2, 2, 1, 3, 6, 8, 9, 11, 11, 14, 12, 11, 15, 14, 16, 13, 10, 8, 8, 6, 5, 4 ],
                        backgroundColor:          
                            'rgba(100, 100, 200, 0.4)',                  
                        borderColor: 
                            'rgba(154, 162, 255, 1)',
                        borderWidth: 1,
                        lineTension: 0,
                    }]
                },
                options: {
                    
                    layout: {
                        padding:50,
                },
                    legend: {
                        display: false
                    },
                    title: {
                        display: false
                    },
                    scales: {
                        scaleLabel:{
                            align: 'right'
                        },
                        xAxes: [{
                            gridLines:{
                                tickMarkLength: 0,
                                gridOffsetGridLines: true,
                            },
                            ticks: {
                                beginAtZero: false,
                                labelOffset: 0,
                                padding: 10
                            }
                        }],
                        yAxes: [{
                            gridLines:{
                                    tickMarkLength: 0,
                                },
                            ticks: {
                                beginAtZero: false,
                                stepSize: 1,
                                padding: 10
                            }
                        }]
                    }
                }
            })
        
};

export function webTrafficChartMonthly() {
            const ctx = document.getElementById('myTrafficChart');
                new Chart(ctx, {
                    type: 'line',        
                    data: {
                        labels: [ 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                        datasets: [{                
                            data: [ 1000, 850, 900, 1000, 1100, 920, 1000, 1100, 1000, 1320, 1300, 1200],
                            backgroundColor:          
                                'rgba(100, 100, 200, 0.4)',                  
                            borderColor: 
                                'rgba(154, 162, 255, 1)',
                            borderWidth: 1,
                            lineTension: 0,
                        }]
                    },
                    options: {
                        
                        layout: {
                            padding:50,
                    },
                        legend: {
                            display: false
                        },
                        title: {
                            display: false
                        },
                        scales: {
                            scaleLabel:{
                                align: 'right'
                            },
                            xAxes: [{
                                gridLines:{
                                    tickMarkLength: 0,
                                    gridOffsetGridLines: true,
                                },
                                ticks: {
                                    beginAtZero: false,
                                    labelOffset: 0,
                                    padding: 10
                                }
                            }],
                            yAxes: [{
                                gridLines:{
                                        tickMarkLength: 0,
                                    },
                                ticks: {
                                    beginAtZero: false,
                                    stepSize: 100,
                                    padding: 10
                                }
                            }]
                        }
                    }
                })
            
};


//bar chart daily traffic

export function dailyTrafficBarChart() {
    const ctx = document.getElementById('barChart');
        new Chart(ctx, {
            type: 'bar',        
            data: {
                labels: [ 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                datasets: [{                
                    data: [ 50, 100, 150, 125, 210, 200, 75],
                    backgroundColor:          
                        'rgba(100, 100, 200, 1)',    
                }]
            },
            options: {
                
                layout: {
                    padding:50,
            },
                legend: {
                    display: false
                },
                title: {
                    display: false
                },
                scales: {
                    scaleLabel:{
                        align: 'right'
                    },
                    xAxes: [{
                        gridLines:{
                            tickMarkLength: 0,
                            gridOffsetGridLines: true,
                        },
                        ticks: {
                            beginAtZero: false,
                            labelOffset: 0,
                            padding: 10
                        }
                    }],
                    yAxes: [{
                        gridLines:{
                                tickMarkLength: 0,
                            },
                        ticks: {
                            beginAtZero: false,
                            stepSize: 100,
                            padding: 10
                        }
                    }]
                }
            }
        })
    
};


//donut chart mobile users

export function mobileUsersDonutChart() {
    
    const ctx = document.getElementById('donutChart');
   
        new Chart(ctx, {
            
            type: 'doughnut',        
            data: {
                labels: [ 'Phones', 'Tablets', 'Desktop',],
                datasets: [{                
                    data: [ 15, 15, 70,],
                    backgroundColor: [  
                    'rgba(80, 220, 220, 1)',      
                    'rgba(100, 255, 200, 1)',                    
                    'rgba(2, 100, 200, 1)',
                    ],
                    borderWidth: 0,
                  
                }]
            },
            options: {
                
                layout: {
                    padding:50,
            },
                legend: {
                    display: true,
                    position: 'right',
                    
                    labels:{
                        boxWidth: 10,
                        fontSize: 10,
                        }
                },
                title: {
                    display: false
                },
            
            }
        })
    
};
