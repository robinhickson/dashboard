//Project 7 Web Dashboard


/* ----------  INTERACTIVITY --------
--------------------------------------------*/

const closeAlert = () =>{
    const getAlertArea = document.querySelector('.alertArea');
    getAlertArea.addEventListener('click', (e) => {
        
        if(e.target.className === 'closeIcon'){
            if(getAlertArea.style.display === "flex"){
                getAlertArea.style.display="none";
            }
            else{
                getAlertArea.style.display="flex";    
            }
        }
    });
};

closeAlert();


/* ----------  CHART AREA - CHART.JS --------
--------------------------------------------*/

import {webTrafficChartWeekly, webTrafficChartDaily, webTrafficChartMonthly, webTrafficChartHourly, dailyTrafficBarChart, mobileUsersDonutChart} from './charts.js';

//Line charts - traffic
webTrafficChartWeekly(); 
// webTrafficChartDaily();
// webTrafficChartMonthly();
// webTrafficChartHourly();

//Bar chart - daily traffic
dailyTrafficBarChart();

//Donut chart - mobile users
mobileUsersDonutChart();

