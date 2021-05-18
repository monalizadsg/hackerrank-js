function getDayName(dateString) {
  let dayName;
  const dayNames = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const day = new Date(dateString);
  dayName = dayNames[day.getDay()];

  return dayName;
}
