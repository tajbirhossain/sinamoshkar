var options1 = {
    chart: {
        type: 'line',
        toolbar: {
            show: false,
        }
    },
    series: [
        {
            name: "Series A",
            data: [80, 85, 75, 68, 55, 55, 59, 62, 65]
        },
        {
            name: "Series B",
            data: [50, 45, 35, 40, 45, 50, 50, 20, 10]
        }
    ],
    xaxis: {
        categories: [0, 75, 150, 225, 300, 375, 450, 525, 600],
        labels: {
            style: {
                colors: '#9BBAC2'
            }
        },
        axisTicks: {
            show: false,
        },
    },
    yaxis: {
        min: 0,
        max: 100,
        tickAmount: 5,
        labels: {
            style: {
                colors: ['#9BBAC2']
            }
        }
    },
    stroke: {
        curve: 'smooth',
        width: 2,
        colors: ['#52B6BC', '#FFB200']
    },
    legend: {
        show: false
    },
    grid: {
        borderColor: '#414141',
    },
}


var options2 = {
    chart: {
        type: 'line',
        toolbar: {
            show: false,
        }
    },
    series: [
        {
            name: "Series A",
            data: [800, 850, 750, 680, 550, 550, 590, 620, 650]
        },
    ],
    xaxis: {
        categories: [0, 75, 150, 225, 300, 375, 450, 525, 600],
        labels: {
            style: {
                colors: '#9BBAC2'
            }
        },
        axisTicks: {
            show: false,
        },
    },
    yaxis: {
        min: 0,
        max: 1000,
        tickAmount: 5,
        labels: {
            style: {
                colors: ['#9BBAC2']
            }
        }
    },
    stroke: {
        curve: 'smooth',
        width: 2,
        colors: ['#FFB200']
    },
    legend: {
        show: false
    },
    grid: {
        borderColor: '#414141',
    },
}

var chart1 = new ApexCharts(document.querySelector("#chart1"), options1);
var chart2 = new ApexCharts(document.querySelector("#chart2"), options1);
var chart3 = new ApexCharts(document.querySelector("#chart3"), options2);

chart1.render();
chart2.render();
chart3.render();