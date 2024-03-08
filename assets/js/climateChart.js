var options1 = {
    chart: {
        type: 'area',
        toolbar: {
            show: false,
        },
        height: 130,
    },
    responsive: [
        {
            breakpoint: 800, // Adjust the breakpoint as needed
            options: {
                chart: {
                    height: 200, // Set the desired height for smaller screens
                }
            }
        }
    ],
    series: [
        {
            name: "Series A",
            data: [1, 0.5, 0.3, 0.3, 0.4, 0.5, 1, 1, 0.7, 0.5, 0.5, 0.9],
        },
    ],

    fill: {
        type: 'gradient',
        gradient: {
            shadeIntensity: 0.4,
            opacityFrom: 0.3,
            opacityTo: 0.1,
            stops: [0, 90, 100]
        }
    },
    dataLabels: {
        enabled: false,
    },
    xaxis: {
        categories: ["Wed 08:14", "", "", "Thu 08:14", "", "", "", "Fri 08:14", "", "", "", "Sat 08:14"],
        labels: {
            style: {
                colors: '#9BBAC2'
            }
        },
        axisTicks: {
            show: false,
        },
        tickPlacement: 'on',
    },
    yaxis: {
        min: 0,
        max: 1,
        tickAmount: 2,
        labels: {
            style: {
                colors: ['#9BBAC2']
            }
        }
    },
    stroke: {
        curve: 'smooth',
        width: 2,
        colors: ['#52B6BC']
    },
    legend: {
        show: false
    },
    grid: {
        show: false,
        borderColor: '#414141',
    },
}



var chart1 = new ApexCharts(document.querySelector("#temp1"), options1);
var chart2 = new ApexCharts(document.querySelector("#temp2"), options1);
var chart3 = new ApexCharts(document.querySelector("#temp3"), options1);
var chart4 = new ApexCharts(document.querySelector("#temp4"), options1);
var chart5 = new ApexCharts(document.querySelector("#temp5"), options1);
var chart6 = new ApexCharts(document.querySelector("#temp6"), options1);
var chart7 = new ApexCharts(document.querySelector("#temp7"), options1);
var chart8 = new ApexCharts(document.querySelector("#temp8"), options1);

chart1.render();
chart2.render();
chart3.render();
chart4.render();
chart5.render();
chart6.render();
chart7.render();
chart8.render();
