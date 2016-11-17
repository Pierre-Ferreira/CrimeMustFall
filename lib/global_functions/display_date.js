// Global function to create a display date.
export default function(isoDate) {
  let monthNames = [
    "January", "February", "March",
    "April", "May", "June", "July",
    "August", "September", "October",
    "November", "December"
  ];
  let day = isoDate.getDate();
  let monthIndex = isoDate.getMonth();
  let year = isoDate.getFullYear();
  return `${day} ${monthNames[monthIndex]} ${year}`
}
