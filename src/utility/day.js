const WEEK = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
]

export const currentDay = () => {
  const date = new Date();
  const hour = date.getHours();

  let timeOfDay;
  if (hour <= 12) {
    timeOfDay = 'morning';
  } else if (hour <= 18) {
    timeOfDay = 'afternoon';
  } else {
    timeOfDay = 'night';
  }

  return WEEK[date.getDay()] + " " + timeOfDay;
}

