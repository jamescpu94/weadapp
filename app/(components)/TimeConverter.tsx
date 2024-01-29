export default function convertUnixUTCto12Hour(unixUTC: number): string {
  const date = new Date(unixUTC * 1000);
  const hours = date.getHours() % 12 || 12;
  const minutes = ("0" + date.getMinutes()).slice(-2);
  const ampm = date.getHours() >= 12 ? "PM" : "AM";
  const formattedTime = `${hours}:${minutes} ${ampm}`;

  return formattedTime;
}
