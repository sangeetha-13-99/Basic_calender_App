'use strict'
var year= new Date().getFullYear();
var month= new Date().getMonth();
var date= new Date().getDate(); 
var day= new Date(`${year}`,`${month}`,30).getDay();
var months=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
var weeks=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
let heading=document.getElementById("head-row");
let previous_btn=document.getElementById('prev');
let next_btn=document.getElementById('next');
previous_btn.onclick=operation;
next_btn.onclick=operation;

// leap year checking 
let leapyear=(currentyear)=>{
    if (currentyear%400 == 0) return 29;
    else if(currentyear%100 == 0) return 28;
    else if(currentyear%4 == 0) return 29;
    else return 28;
}
//  intializing calender to current month 
function showcalender(month,year){
    var daysofmonth={"Jan":31,"Feb":leapyear(year),"Mar":31,"Apr":30,"May":31,"Jun":30,"Jul":31,"Aug":31,"Sep":30,"Oct":31,"Nov":30,"Dec":31}
    heading.innerHTML=`${months[month]}`+"  "+ `${year}`;
    callcalender(month,year,daysofmonth);
    
}
showcalender(month,year);
// creating calender
function callcalender(month,year,daysofmonth){

    
    let firstday=new Date(`${year}`,`${month}`,1).getDay();
    
    let ele=document.getElementsByTagName('table')[0];
    let bodyy=document.getElementsByTagName("tbody")[0];
    
    
    

    // for empty columns in first row
    
    
    // initializing 
    let c_row=0;
    let val=Object.keys(daysofmonth)[month];
    let day=firstday;

    // if first row is not at 0
    if (day!==0) {
        c_row=1
        let row1=document.createElement("tr");
        bodyy.appendChild(row1);
        let colspanday=0;
        while(colspanday<day){
            row1.innerHTML+=`<td></td>`
            colspanday+=1
        }
        

    }

    //  adding dates to calender

    for(let i=1;i<=daysofmonth[val];i++)
    { 
        if(day%7==0){
            c_row+=1
            day=0
            let row=document.createElement("tr");
            bodyy.appendChild(row); 
            // console.log(bodyy)  
        }
        ele.rows[c_row].innerHTML+=`<td>${i}</td>`
        
        
        if (i == new Date().getDate() && year == new Date().getFullYear() && month == new Date().getMonth()){
            ele.rows[c_row].cells[day].style.cssText +="background-color:blue;color:white";
            console.log(i);
        }
        
        day+=1 

    } 
    //today

} 
// clear calender 
function clearcalender()
{  
    let  ttable=document.getElementsByTagName('table')[0]
    let len=ttable.rows.length;
    // let count=1;
    while (len!==1){
        // ttable.rows[1]

        len-=1
        console.log(ttable.rows[1].remove());
        
    }
      
}
// operation of previous and next
function operation(){
    if (this.id === "prev")
    {
        // month-=1 
        if (month-1<=0) {
            year-=1;
            month=11
        }
        else{
            month-=1
        }
        
    }
    if(this.id === "next")
    { 
        console.log(month);
        if(month+1>=12){
            year+=1
            month=0
        } 
        else{
            month+=1
        }
    }
    clearcalender();
    showcalender(month,year);


}