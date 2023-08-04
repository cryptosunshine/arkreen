

export function addDays(date:Date, days:number) {
    var dat = new Date(date)
    dat.setDate(dat.getDate() + days);
    return dat;
}

export function getDates(startDate:Date, stopDate:Date) {
   var dateArray = []
   var currentDate = startDate;
   while (currentDate <= stopDate) {
     dateArray.push(currentDate)
     currentDate = addDays(currentDate, 1);
   }
   return dateArray;
 }

