// calendar
const currentdate=document.querySelector(".current-date");
var daystag=document.querySelector(".days");
var prevNextIcon =document.querySelectorAll(".icons span")

let date=new Date();
currentYear=date.getFullYear();
currentMonth=date.getMonth();

let currentmontharraystring=["January" ,"February" ,"March" ,"April" ,"May","June","July",
"August","september","October","November" ,"December"]

console.log(date,currentYear ,currentMonth)

function rendercalendar() {
   let lastDateOfMonth=new Date(currentYear,currentMonth+1,0).getDate();
   let firstdayofMonth=new Date(currentYear,currentMonth,1).getDay();
   let lastDateofPreviousMonth=new Date(currentYear,currentMonth,lastDateOfMonth).getDate();
   let lastDayofMonth=new Date(currentYear,currentMonth,0).getDay();
   let liTag="";


   for(let i=firstdayofMonth; i>0; i--)
   {
       liTag +=`<li class="inactive">${lastDateofPreviousMonth-i+1}</li>`;
   }


   for(let i=1;i<=lastDateOfMonth;i++){
       let isToday=i===date.getDate()&& currentMonth===new Date().getMonth() && currentYear===new Date().getFullYear()?"active":"";
       liTag +=`<li class=${isToday}>${i}</li>`;
   }

   for(let i=lastDayofMonth;i<6;i++){
       liTag +=`<li class="inactive">${i-lastDayofMonth+1}</li>`;
   }
   currentdate.innerHTML=`${currentmontharraystring[currentMonth]} ${currentYear}`;
   daystag.innerHTML=liTag
}

rendercalendar();


prevNextIcon.forEach(icon=>{
icon.addEventListener("click",()=>{
    currentMonth=icon.id==="prev"?currentMonth-1:currentMonth+1;
    rendercalendar();
   if(currentMonth<0 || currentMonth>11){
       date=new Date(currentYear,currentMonth);
       currentYear=date.getFullYear();
       currentMonth=date.getMonth();
   }
   else
   {
       date=new Date();
   }




})
})