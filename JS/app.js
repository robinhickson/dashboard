//Project 7 Web Dashboard


/* ----------  INTERACTIVITY --------
--------------------------------------------*/

const getListener = document.querySelector('.gridContainer');
const getAlertArea = document.querySelector('.alertArea');
getListener.addEventListener('click', (e) => {
    if(e.target.className === 'closeIcon'){
        
        if(getAlertArea.style.display === "none" || getAlertArea.style.display === ""){
            getAlertArea.style.display="flex";
        }
        else {
            getAlertArea.style.display="none";    
        }

    }
});
   




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

