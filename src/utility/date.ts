const NextDay = (x) => {
  let now = new Date();    
  now.setDate(now.getDate() + (x+(7-now.getDay())) % 7);
  return now;
}

const GetFirstDayOfMonth = (dayOfTheWeek, month, year)=>{
  const date = new Date(year, month, 1);
  date.setDate(date.getDate() + ((7 + dayOfTheWeek) - date.getDay()) % 7)
  return date;
}

const GetFirstNextFirstDayOfTheWeek = (currentDate, day)=>{
  const returnValue = GetFirstDayOfMonth(day, currentDate.getMonth(), currentDate.getFullYear());

  if(returnValue.getDate() < currentDate.getDate()){
      return GetFirstNextFirstDayOfTheWeek(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1), day);
  }

  return returnValue;
}



const GetFirstNextFirstTuesday = (day)=>{
    return GetFirstNextFirstDayOfTheWeek(new Date(), day);
}


export { NextDay, GetFirstNextFirstTuesday }