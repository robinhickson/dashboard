//Project 7 Web Dashboard

/* ----------  CHART AREA - CHART.JS --------
--------------------------------------------*/

import {webTrafficChartWeekly, webTrafficChartDaily, webTrafficChartMonthly, webTrafficChartHourly, dailyTrafficBarChart, mobileUsersDonutChart} from './charts.js';


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
const user = document.getElementById("recipient");
const message = document.getElementById("userMessage");
let getNotificationsBell = document.getElementById('notificationsBell');
let alertAreaText = document.getElementById('alertText');
let emailSwitch = document.getElementById('email-light-switch');
let profileSwitch = document.getElementById('profile-light-switch');
let timezoneSelect = document.getElementById('timezone');







/* ----------  Global Event Listener --------
--------------------------------------------*/ 

getListener.addEventListener('click', (e) => {
    const clickTarget = e.target;
    let targetClass = clickTarget.className; //remember the target  class names


        //--------Text read more toggle---------
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
                    if (user.value === "" && message.value === "") {
                        alert("Please fill out user and message fields before sending");
                        } else if (user.value === "" ) {
                        alert("Please fill out user field before sending");
                        } else if (message.value === "" ) {
                        alert("Please fill out message field before sending");
                        } else {
                        alert(`Message successfully sent to: ${user.value}`);
                        }   
                }  else {return null}
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
        userMessageOut: ['Well, it\'s really not that difficult! You should strip out the old code and start again...', 'I\'m hoping to get the new Playstation5 for Christmas!', 'One day I hope to run my own software development company!'],
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
        userMessageOut: ['When I started coding, we didn\'t even have electricity.', 'My father was a mathematician and programmer, so it\'s in the blood.', 'You know, I\'ve long been a fan of the WIlliam Gibson school of cyberpunk.'],
    },
    {
        name:'Eillean Inn',
        avatar:'images/member-1.jpg',
        email:'eilleaninn@gamble.com',
        joinDate:'23/10/2020',
        status: 'Newbie',
        activity: '',
        userMessageOut: ['Everything you say and do is just so yesterday :)', 'I am so fed up with my job as a top lawyer at an international law firm - so I\'ve decided to become a developer.', 'Which do you prefer, Flexbox or Grid?'],
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
        userMessageOut: ['I just don\'t understand....anything.', 'That\'s not strictly true. I know how to speak 6 languages, so I figured... let\'s program in a few more.', 'On mornings like this, I dunno, I just want to go back to bed. Hang on; I am still in bed...'], 
        userMessageIn: [''],
        lastActive: '',
        profileLink: '<a class="readMore">\></a>',
    },
];


/* ----------  Notifications handling --------
--------------------------------------------*/ 
function notifications(){
    let getNumberNotifications = Math.round(Math.random()* allMembers[0].notifications.length);
    if (getNumberNotifications === 0){
        getAlertArea.style.display = "none";        
    }
        while (getNumberNotifications > selectedNotifications.length) {
  
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
        
};

function notificationsWindow(){//get the expanded notifications window
    selectedNotifications.push(alertAreaText.textContent);//add the alert message back to notifications list and remove alert area
    getAlertArea.style.display = "none";
    getNotificationsBell.innerHTML = '<img src="icons/icon-bell.svg" height="30" alt="zero new notifications">';
    for (let i=0; i<selectedNotifications.length;i++){               
        getNotificationsBell.nextElementSibling.innerHTML +=`               
        <li class = "windowMessage">
        <span>${selectedNotifications[i]}</span>
        <a href="#"><img class="messageCloseIcon" src="icons/icon-close.svg" alt="close button" height="20"></a>
        </li>`;
        } ;                

    };


/* ----------  New Member and Recent Activity widget --------
--------------------------------------------*/ 

function memberActivityWidget(){

    let newMemberText = document.querySelector('.newMember');
    const recentActivityText = document.querySelector('.recentActivity');
    const firstFourSelector = [];
    for (let i=0; i<allMembers.length; i++){
        let member = allMembers[i];
        if (member.activity === 'Recent' && firstFourSelector.length < 4){ 
                firstFourSelector.push(member);
            }  
        }
    
        for (let j=0; j<firstFourSelector.length; j++){
            let fourSelected = firstFourSelector[j];
            let getUserMessage =  (Math.floor(Math.random()* fourSelected.userMessageOut.length));
            let fullMessage = fourSelected.userMessageOut[getUserMessage]
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
            if (member.status === 'Newbie' && i<=firstFourSelector.length){
           
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

function lastActiveCreator(){
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
    let suggestion = autocomplete.options[autocomplete.selectedIndex];
   
    // iterate through user name data text to check for user input text match
        searchBox.addEventListener('keydown', function(e) { 
        let inputKey = e.key.toLowerCase();
    
        const permittedKeys = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','backspace',' '];

        if (permittedKeys.includes(inputKey)){
    
            if (inputKey === 'backspace'  && searchEntry.length === 0){
                searchUser();
            } else if (inputKey === 'backspace'){//get proper behavious of backspace (delete last letter input)
                searchEntry.pop();
                autoCompleteOptions.pop();
                autocomplete.innerHTML = `<option selected>Do you mean...</option>`;
            } else {
                autocomplete.style.display = 'block';
                searchEntry.push(inputKey);
                let searchValue = searchEntry.join(''); 
                autoCompleteOptions.length = 0;
                for (let i=0; i<allMembers.length; i++){
                  for (let j=0; j<allMembers[i].name.length;j++){                      
                    let namePartial = allMembers[i].name.slice(j,j+searchValue.length).toLowerCase();//main part of search; iterate through all name arrays as partials
                    if ((searchValue === namePartial) && !autoCompleteOptions.includes(allMembers[i].name)){// check match and not already included 
                        autocomplete.innerHTML =`<option selected>Do you mean...</option>`;
                        autoCompleteOptions.push(allMembers[i].name);                    
                        for (let k=0; k<autoCompleteOptions.length; k++){                        
                        autocomplete.innerHTML += `<option>${autoCompleteOptions[k]}</option>`;//show the autocomplete suggestions                        
                        }                    
                    }
                  }                 
                }  
            }
        }
    });

    //Output the selected suggestion as User Name address and move to message field
     /* --------------------------------------*/ 

        autocomplete.addEventListener('change', function(){
        for (let i=0; i<autocomplete.options.length; i++){                                
            let option = autocomplete.options[i];
            if (option.selected){
                searchBox.value = option.text;
                message.focus();            
            }    
        }
    });  
   
}

 //--------Add settings to local storage/Delete settings from local storage
     /* --------------------------------------*/ 

const manageSettings = ()=>{
    if (!timezoneSelect.selectedIndex){localStorage.getItem('timezoneIndex')}
    
emailSwitch.addEventListener('change', function(){
if (emailSwitch.checked){
    console.log("It's on");
} else if (!emailSwitch.checked){
        console.log("It's off");
    }
});


profileSwitch.addEventListener('change', function(){
    if (profileSwitch.checked){
        console.log("It's on");
    } else if (!profileSwitch.checked){
            console.log("It's off");
        }
  
});
timezoneSelect.addEventListener('change', function(){
    for (let i=0; i<timezoneSelect.options.length; i++){                                
        let option = timezoneSelect.options[i];
        if (option.selected){
            let storeSelected = (timezoneSelect.selectedIndex); 
            localStorage.setItem('timezoneIndex', storeSelected);       
        }
    }   
  
});

}



/* ----------  INTERACTIVITY - FUNCTION CALLS --------
--------------------------------------------*/


webTrafficChartWeekly();// start with this chart as default
lastActiveCreator();// simulate user recent activity entries at random
searchUser(); // provide autocomplete suggestions
memberActivityWidget();//populate new members and recent activity
notifications();//populate the message and notification areas
manageSettings();//save and delete settings info in local storage












           
    

   
     
     
    
   





