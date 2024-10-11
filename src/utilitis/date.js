const GetDate = () => {
  const months = [
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
    "December",
  ];
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const d = new Date();
  let dayOfTheWeek = days[d.getDay()];
  let date = d.getDate();
  let month = months[d.getMonth()];

  return `${dayOfTheWeek} ${date} ${month}`;
};

export default GetDate;
