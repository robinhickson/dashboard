//Project 7 Web Dashboard


/* ----------  INTERACTIVITY --------
--------------------------------------------*/

const getListener = document.querySelector('body');
const getAlertArea = document.querySelector('.alertArea');
getListener.addEventListener('click', (e) => {
    if (e.target.className === 'closeIcon') {
      getAlertArea.style.display = "none";
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
        status: 'Old Hand',
        activity: 'Recent',
        lastMessage: 'Well, it\'s really not that difficult!',
        lastActive: '1 hour ago',
        profileLink: '<a href="#">\></a>',
    },
    {
        name:'Klaus Akt',
        avatar:'images/member-4.jpg',
        email:'akt@tion.ing',
        joinDate:'01/12/2017',
        status: 'Old Hand',
        activity: 'Old',
        lastMessage: 'I remember, when I started coding, we didn\'t even have electricity.',
        lastActive: '32 hours ago',
        profileLink: '<a href="#">\></a>',
    },
    {
        name:'Eillean Inn',
        avatar:'images/member-1.jpg',
        email:'eilleaninn@gamble.com',
        joinDate:'23/10/2020',
        status: 'Newbie',
        activity: 'Recent',
        lastMessage: 'Everything you say and do is just so yesterday.',
        lastActive: '4 hours ago',
        profileLink: '<a href="#">\></a>',
    },
    {
        name:'Kev Lars',
        avatar:'images/member-5.jpg',
        email:'kev.lars@bulletproof.ge',
        joinDate:'01/12/2020',
        status: 'Newbie',
        activity: 'Recent',
        lastMessage: 'Is this chess club?',
        lastActive: '8 hours ago',
        profileLink: '<a href="#">\></a>',
    },
    {
        name:'Donna Gnoe',
        avatar:'images/member-3.jpg',
        email:'gnoe@nothing.org',
        joinDate:'30/09/2019',
        status: 'Newbie',
        activity: 'Recent',
        lastMessage: 'I just don\'t understand....anything.',
        lastActive: '6 hours ago',
        profileLink: '<a href="#">\></a>',
    },
];

/* ----------  New Member widget --------
--------------------------------------------*/  

let newMemberText = document.querySelector('.newMember');
for (let i=0; i<allMembers.length; i++){
    if (allMembers[i].status === 'Newbie'){
        let newMemberEntry = allMembers[i];    
        newMemberText.innerHTML += `<div class="aNewMember"><img class="newMemberAvatar" src="${newMemberEntry.avatar}" alt="avatar">
        <div class="newMemberNameContact">
        <h3>${newMemberEntry.name}</h3><h4>${newMemberEntry.email}</h4></div>
        <p class="date">${newMemberEntry.joinDate}</p></div>`;
           }
   
    };

/* ----------  Recent Activity widget --------
--------------------------------------------*/  

let recentActivityText = document.querySelector('.recentActivity');
for (let i=0; i<allMembers.length; i++){
    if (allMembers[i].activity === 'Recent'){
        let recentActivityEntry = allMembers[i];    
        recentActivityText.innerHTML += `<div class="aRecentActivity"><img class="recentMemberAvatar" src="${recentActivityEntry.avatar}" alt="avatar">
        <div class="recentActivityNameActivity">
        <h3>${recentActivityEntry.name}</h3><h4>${recentActivityEntry.lastMessage}</h4><h4>${recentActivityEntry.lastActive}</h4>
        </div>
        <h3 class="profileLink">${recentActivityEntry.profileLink}</h3>
        </div>`;
           }
   
    };




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

