function todaycalender(){
      var months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
      ];
      var dt=new Date();
      console.log(dt);
      document.getElementById("date_string").innerHTML=dt.toDateString();
      var month=dt.getMonth();
      var year=dt.getFullYear();
      dt=new Date(year,month,01);
      var first_day=dt.getDay();
      console.log(first_day);
      var today=dt.getDay();//get the current day of the date
      console.log(today);
      dt.setMonth(month+1,0); // Set to next month and one day backward.
      var last_date=dt.getDate(); // Last date of present month
      dt.getMonth(month-1,0)
      var predate=dt.getDate();
      document.getElementById("month").innerHTML=months[month];
      var cells = "";
      for(let j=first_day;j>0;j--){
        cells+="<div>"+(predate-j) +"</div>";
      }
      for(let i=1;i<=last_date;i++){
        if(i==today){
          cells+= "<div class='today'>" + i + "</div>";
        }else
        {cells += "<div>" + i + "</div>";}
      }
      document.getElementsByClassName("days")[0].innerHTML = cells;
    }