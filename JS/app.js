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
 


/* ----------  Member Index --------
--------------------------------------------*/

const allMembers=[
    {
        name:'Mike Klaas',
        avatar:'images/member-2.jpg',
        email:'mike@klaas.au',
        joinDate:'15/04/2016',
        status: 'Old Hand'
    },
    {
        name:'Klaus Akt',
        avatar:'images/member-4.jpg',
        email:'akt@tion.ing',
        joinDate:'01/12/2017',
        status: 'Old Hand'
    },
    {
        name:'Eillean Inn',
        avatar:'images/member-1.jpg',
        email:'eilleaninn@gargle.com',
        joinDate:'23/10/2020',
        status: 'Newbie'
    },
    {
        name:'Kev Lars',
        avatar:'images/member-5.jpg',
        email:'kev.lars@bulletproof.ge',
        joinDate:'01/12/2020',
        status: 'Newbie'
    },
    {
        name:'Donna Gnoe',
        avatar:'images/member-3.jpg',
        email:'gnoe@nothing.org',
        joinDate:'30/09/2019',
        status: 'Newbie'
    },
];

/* ----------  New Member widget --------
--------------------------------------------*/  

let newMemberText = document.querySelector('.newMember');
let newMemberEntry = allMembers[4];

newMemberText.innerHTML = `<img src="${newMemberEntry.avatar}" alt="avatar"><h1>${newMemberEntry.name}</h1><h2>${newMemberEntry.email}</h2><p>${newMemberEntry.joinDate}`;

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

