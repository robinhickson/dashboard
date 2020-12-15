//Project 7 Web Dashboard
/*jshint esversion: 6 */
/* ----------  CHART AREA - CHART.JS --------
--------------------------------------------*/
//default charts config

Chart.defaults.global.defaultFontSize = 8;
Chart.defaults.global.defaultFontFamily = 'Lato';
Chart.defaults.global.defaultFontStyle = 'bold';
let trafficWeekly;
let trafficHourly;
let trafficMonthly;
let trafficDaily;
let barChart;
let donutChart;

//line chart Web traffic


function webTrafficChartWeekly() {
const ctx = document.getElementById('trafficLineChart');
    trafficWeekly = new Chart(ctx, {
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
    });

}

function webTrafficChartDaily() {
    const ctx = document.getElementById('trafficLineChart');
       trafficDaily = new Chart(ctx, {
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
        });
    
}

function webTrafficChartHourly() {
        const ctx = document.getElementById('trafficLineChart');
            trafficHourly = new Chart(ctx, {
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
            });
        
}

 function webTrafficChartMonthly() {
            const ctx = document.getElementById('trafficLineChart');
                trafficMonthly = new Chart(ctx, {
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
                });
            
}


//bar chart daily traffic

 function dailyTrafficBarChart() {
    const ctx = document.getElementById('barChart');
       barChart = new Chart(ctx, {
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
                animation: {duration: 0},
                layout: {
                    padding:50,
            },
                legend: {
                    display: false
                },
                title: {
                    display: false,
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
        });
    
}


//donut chart mobile users

function mobileUsersDonutChart() {
    
    const ctx = document.getElementById('donutChart');
   
        donutChart = new Chart(ctx, {
            
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
        });
    
}


//Bar chart - daily traffic
dailyTrafficBarChart();

//Donut chart - mobile users
mobileUsersDonutChart();



/* ----------  Global Variables --------
--------------------------------------------*/
const getListener = document.querySelector('body');
const getAlertArea = document.querySelector('.alertArea');
const getTabs = document.querySelectorAll('.tab');
const selectedNotifications =[];
const user = document.getElementById('recipient');
const message = document.getElementById('userMessage');
let getNotificationsBell = document.getElementById('notificationsBell');
let alertAreaText = document.getElementById('alertText');
let emailSwitch = document.getElementById('email-light-switch');
let profileSwitch = document.getElementById('profile-light-switch');
let timezoneSelect = document.getElementById('timezone');
let settingsObject = JSON.parse(localStorage.getItem('settings'));

if(settingsObject){ // if there is localStorage, load it
   
    emailSwitch.checked = settingsObject.email;
    profileSwitch.checked = settingsObject.profile;
    timezoneSelect.selectedIndex = settingsObject.timezone;    
}


/* ----------  Global Event Listener (body) and dependent conditionals (functionality)--------
--------------------------------------------*/ 

getListener.addEventListener('click', (e) => {
    const clickTarget = e.target;
    let targetClass = clickTarget.className; //remember the target  class names
    

        //--------Text 'read more' toggle---------
        if (targetClass === "readMore"){

            let fullSelect = clickTarget.parentNode.previousElementSibling;
        
            if (fullSelect.style.display === 'none'){
                fullSelect.style.display = 'inline';
                fullSelect.previousElementSibling.style.display = 'none';
            } else {
                fullSelect.style.display = 'none';
                fullSelect.previousElementSibling.style.display = 'inline';
                }
            
            }

        //-------Close Alert and Message boxes --------

        if (targetClass==='closeIcon'){
            getAlertArea.style.display = "none";
            return;
        } else if (targetClass==='messageCloseIcon'){
            clickTarget.parentNode.parentNode.remove();
        } else if (targetClass==='notificationsBell'){
            notificationsWindow();//get the expanded notifications window
        } else if (e.target.classList.contains('tab')) {
           

        //----Navigation tabs for charts

        if (!clickTarget.classList.contains('activeTab')){//do not change if clicked tab === current active tab 
            for(let i = 0; i<getTabs.length; i++){
                getTabs[i].classList.remove('activeTab');//remove 'activeTab' class if present in sibling class list
                }
            } 

                switch (targetClass){//apply the new activeTab
                
                    case ('hourly tab' || 'hourly tab activeTab'):            
                        clickTarget.className = 'hourly tab activeTab';    
                        webTrafficChartHourly();
                        break;
                    case 'daily tab': 
                        clickTarget.className = 'daily tab activeTab';
                        webTrafficChartDaily();
                        break;
                    case 'weekly tab': 
                        clickTarget.className = 'weekly tab activeTab';
                        webTrafficChartWeekly();
                        break;
                    case 'monthly tab': 
                        clickTarget.className = 'monthly tab activeTab';
                        webTrafficChartMonthly();
                        break;
                    default:
                        webTrafficChartWeekly();
                    }
                } else if (targetClass==='button-send') {
                    e.preventDefault();
                    if (user.value === "" && message.value === "") {
                        alert("Please fill out user and message fields before sending");
                        } else if (user.value === "" ) {
                        alert("Please fill out user field before sending");
                        } else if (message.value === "" ) {
                        alert("Please fill out message field before sending");
                        } else {
                        alert(`Message successfully sent to: ${user.value}`);
                        user.value = message.value = '';
                        }   
                } else if (targetClass==='button-save'){
                    saveSettingsLocalStorage();
                } else if (targetClass==='button-cancel'){
                    clearSettingsLocalStorage();
                } else {return null;}
            
});


/* ----------  Member Index Database--------
--------------------------------------------*/

const allMembers=[
    {
        name:'Mike Klaas',
        avatar:'images/member-2.jpg',
        email:'mike@klaas.au',
        joinDate:'15/04/2016',
        status: 'Golden',
        notifications: ['You have a new message!', 'A message to make sure you\'re still alert.', 'Time for a coffee?', 'Another alert, for good measure.',],
        activity: '',        
        lastActive: '',
        profileLink: '<a class="readMore">\></a>',
        userMessageIn: [''],
        userMessageOut: ['When I started coding, we didn\'t even have electricity.', 'I\'m hoping to get the new Playstation5 for Christmas!', 'One day I hope to run my own software development company!'],
    },
    {
        name:'Klaus Akt',
        avatar:'images/member-4.jpg',
        email:'akt@tion.ing',
        joinDate:'01/12/2017',
        status: 'Newbie',
        activity: '',       
        lastActive: '',
        profileLink: '<a class="readMore">\></a>',
        userMessageIn: [''],
        userMessageOut: ['Well, it\'s really not that difficult! You should strip out the old code and start again...', 'My father was a mathematician and programmer, so it\'s in the blood.', 'You know, I\'ve long been a fan of the WIlliam Gibson school of cyberpunk.'],
    },
    {
        name:'Eillean Inn',
        avatar:'images/member-1.jpg',
        email:'eilleaninn@gamble.com',
        joinDate:'23/10/2020',
        status: 'Newbie',
        activity: '',
        userMessageOut: ['Everything you say and do is just so yesterday :)', 'I am so fed up with my job - so I\'ve decided to become a developer.', 'Which do you prefer, Flexbox or Grid?'],
        userMessageIn: [''],
        lastActive: '',
        profileLink: '<a class="readMore">\></a>',
    },
    {
        name:'Kev Lars',
        avatar:'images/member-5.jpg',
        email:'kev.lars@bulletproof.man',
        joinDate:'01/12/2020',
        status: 'Newbie',
        activity: '',
        userMessageOut: ['Is this chess club?', 'This was my mum\'s idea.', 'I\'m excited, but at the same time, nervous. I don\'t know my Java Script from my bible script!'],
        userMessageIn: [''],
        lastActive: '',
        profileLink: '<a class="readMore">\></a>',
    },
    {
        name:'Donna Gnoe',
        avatar:'images/member-3.jpg',
        email:'gnoe@nothing.org',
        joinDate:'30/09/2019',
        status: 'Newbie',
        activity: '',
        userMessageOut: ['I just don\'t understand....anything.', 'That\'s not strictly true. I know how to speak 6 languages, so I figured... let\'s program in a few more.', 'On mornings like this... I dunno, I just want to go back to bed.'], 
        userMessageIn: [''],
        lastActive: '',
        profileLink: '<a class="readMore">\></a>',
    },
];


/* ----------  Notifications handling --------
--------------------------------------------*/ 
function notifications(){
    let getNumberNotifications = Math.max(2,Math.round(Math.random()* allMembers[0].notifications.length));
    //ensure min 2 notifications (but better without restriction -
    //remove Math.max (2, ) for more realistic behaviour)

    if (getNumberNotifications === 0){//if Math.max, above, removed, also remove the alert box if there are zero notifications selected
        getAlertArea.style.display = "none";        
    }
        while (getNumberNotifications > selectedNotifications.length) {
            // get a random selection of notification messages (without repeating)
            let selectRandomNumber = Math.floor(Math.random()*getNumberNotifications);
            let randomNotification = allMembers[0].notifications[selectRandomNumber];
        
            if (!selectedNotifications.includes(randomNotification)){      
                selectedNotifications.push(randomNotification);        
                } 
         }
  
    if (!selectedNotifications.length){    //bell icon 'new notifications' and 'zero notifications' toggle    
        getNotificationsBell.innerHTML = '<img  src="icons/icon-bell.svg" height="30" alt="zero new notifications">';
        } else {
        getNotificationsBell.innerHTML = '<img class="notificationsBell" src="icons/icon-bell-new-notes.svg" height="30" alt="new notifications">';
        }   
    alertAreaText.textContent = selectedNotifications.pop();//get message from notifications list (and remove from array)
                                                            // and display message in alert box   
        
}

function notificationsWindow(){//get the expanded notifications window
    selectedNotifications.push(alertAreaText.textContent);//add the alert message back to notifications list and remove alert area
    getAlertArea.style.display = "none";
    getNotificationsBell.innerHTML = '<img src="icons/icon-bell.svg" height="30" alt="zero new notifications">';//change bell icon to indicate zero new notifications
    for (let i=0; i<selectedNotifications.length;i++){    //list the current notifications (with close button)          
        getNotificationsBell.nextElementSibling.innerHTML +=`               
        <li class = "windowMessage">
        <span>${selectedNotifications[i]}</span>
        <a href="#"><img class="messageCloseIcon" src="icons/icon-close.svg" alt="close button" height="20"></a>
        </li>`;
        }                

    }


/* ----------  New Member and Recent Activity widget --------
--------------------------------------------*/ 

function memberActivityWidget(){

    const newMemberText = document.querySelector('.newMember');
    const recentActivityText = document.querySelector('.recentActivity');
    const firstFourSelector = []; //create an array of randomly selected number of members' recent activities
    for (let i=0; i<allMembers.length; i++){
        let member = allMembers[i];
        if (member.activity === 'Recent' && firstFourSelector.length < 4){ 
                firstFourSelector.push(member);
            }  
        }
    
        for (let j=0; j<firstFourSelector.length; j++){ // from each selected member object, randomly select a message and display truncated
            let fourSelected = firstFourSelector[j];
            let getUserMessage =  (Math.floor(Math.random()* fourSelected.userMessageOut.length));
            let fullMessage = fourSelected.userMessageOut[getUserMessage];
            let truncMessage = fullMessage.substring(0, 30);
            
    
            recentActivityText.innerHTML += 
            `<div class="aRecentActivity">                
                <div class="recentActivityNameActivity">
                    <img class="recentMemberAvatar" src="${firstFourSelector[j].avatar}" alt="avatar">
                    <div>
                        <div class ="nameTitle">${fourSelected.name}  said: </div>
                        <div class="lastActive">${fourSelected.lastActive}</div>
                    </div>
                </div>
                <span class="truncMessageOut" id="truncMessageOut${j}" style="display:inline;">${truncMessage}...</span>
                <span class="fullMessageOut" id="fullMessageOut${j}" style="display:none;">${fullMessage}</span>
                <span class="profileLink">${fourSelected.profileLink}</span> 
            </div>`;
        }
    
        for (let i=0; i<allMembers.length; i++){
            let member = allMembers[i];
            if (member.status === 'Newbie' && i<=firstFourSelector.length){ // select and display new members' details (same number of entries as recent activity)
           
                newMemberText.innerHTML += 
                `<div class="aNewMember">
                    <img class="newMemberAvatar" src="${member.avatar}" alt="avatar">
                    <div class="newMemberNameContact">
                        <div class ="nameTitle">${member.name}</div>
                        <div class="emailMember">${member.email}</div>
                    </div>
                    <span class="date">${member.joinDate}</span>
                </div>`;
                } 
            }
 }


/*--------------Create live-database simulation ---------------------*/ 
            /* --------------------------------------*/ 

function lastActiveCreator(){ //randomize the possible recent activity selections (modify members' object entry)
    for (let i=0; i<allMembers.length; i++){
        let randomizer = Math.round(Math.random() * 10) +1;
        allMembers[i].lastActive = `${randomizer} hours ago`;
        if (randomizer<8){
                allMembers[i].activity = 'Recent';
            } else {
                allMembers[i].activity = 'Old';
            }
    }

}

//Create autocomplete feature - compare user names to user search input
 /* --------------------------------------*/ 

function searchUser(){
    const searchEntry = [];
    const autoCompleteOptions =[];
    let searchBox = document.getElementById('recipient');
    let autocomplete = document.getElementById('dropdown');
   
   
    // iterate through user name data text to check for user input text match
        searchBox.addEventListener('keydown', function(e) { 
        let inputKey = e.key.toLowerCase();
    
        const permittedKeys = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','backspace',' '];

        if (permittedKeys.includes(inputKey)){
    
            if (inputKey === 'backspace'  && searchEntry.length === 0){
                searchUser();
            } else if (inputKey === 'backspace'){//get proper behaviour of backspace (delete last letter input)
                searchEntry.pop();
                autoCompleteOptions.pop();
                autocomplete.innerHTML = ``;
            } else {
                autocomplete.style.display = 'block';
                searchEntry.push(inputKey);
                let searchValue = searchEntry.join(''); 
                autoCompleteOptions.length = 0;
                for (let i=0; i<allMembers.length; i++){
                  for (let j=0; j<allMembers[i].name.length;j++){                      
                    let namePartial = allMembers[i].name.slice(j,j+searchValue.length).toLowerCase();//main part of search; iterate through all name arrays as partials
                    if ((searchValue === namePartial) && !autoCompleteOptions.includes(allMembers[i].name)){// check match and not already included 
                        autocomplete.innerHTML =``;
                        autoCompleteOptions.push(allMembers[i].name);                    
                        for (let k=0; k<autoCompleteOptions.length; k++){                        
                        autocomplete.innerHTML += `<div>${autoCompleteOptions[k]}</div>`;//show the autocomplete suggestions                        
                        }                    
                    }
                  }                 
                }  
            }
        }
    });

    //Output the selected autocomplete suggestion as User Name address and move focus to message field
     /* --------------------------------------*/ 

        autocomplete.addEventListener('click', e=>{
            autocomplete.style.display="none";
            searchBox.value = e.target.textContent;
            message.focus(); 
    });
}  
   
 //--------Add settings to local storage/Delete settings from local storage (SAVE/CANCEL buttons)
     /* --------------------------------------*/ 


function saveSettingsLocalStorage(){
    settingsObject = {email: emailSwitch.checked, profile: profileSwitch.checked, timezone: timezoneSelect.selectedIndex};   
    localStorage.setItem('settings', JSON.stringify(settingsObject));
   
}

function clearSettingsLocalStorage(){
    localStorage.clear();
}



/* ----------  INTERACTIVITY - FUNCTION CALLS --------
--------------------------------------------*/


webTrafficChartWeekly();// start with this chart as default
lastActiveCreator();// simulate user recent activity entries at random
searchUser(); // provide autocomplete suggestions
memberActivityWidget();//populate new members and recent activity
notifications();//populate the message and notification areas
