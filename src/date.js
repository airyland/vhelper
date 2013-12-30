// get week 
Date.prototype.getWeek = function() {
  var onejan = new Date(this.getFullYear(),0,1);
  return Math.ceil((((this - onejan) / 86400000) + onejan.getDay()+1)/7);
}

// get the start and end date of curretn week

var getWeekDate = function(){
  var curr = new Date; // get current date
  var first = curr.getDate() - curr.getDay(); // First day is the day of the month - the day of the week
  var last = first + 6; // last day is the first day + 6

  var firstday = new Date(curr.setDate(first)).toUTCString();
  var lastday = new Date(curr.setDate(last)).toUTCString();
  
  return [firstday,lastday];
}

// get dates between two dates

   Date.prototype.addDays = function(days) {
       var dat = new Date(this.valueOf())
       dat.setDate(dat.getDate() + days);
       return dat;
   }

 function getDates(startDate, stopDate) {
    var dateArray = new Array();
    var currentDate = startDate;
    while (currentDate <= stopDate) {
      dateArray.push(currentDate)
      currentDate = currentDate.addDays(1);
    }
    return dateArray;
  }

var dateArray = getDates(new Date(), (new Date()).addDays(10));
for (i = 0; i < dateArray.length; i ++ ) {
    console.log(dateArray[i]);
}

var getDatesRange = function(){
  // not finished yet
}
