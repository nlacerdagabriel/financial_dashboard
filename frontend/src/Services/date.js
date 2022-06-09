export const months = [
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

export const years = [
  "2017",
  "2018",
  "2019",
  "2020",
  "2021",
  "2022",
  "2023",
  "2024",
  "2025",
  "2026",
];

export const currentMonth = new Date().toLocaleString("en-US", {
  month: "long",
});

export const currentYear = new Date().getFullYear();

export const currentDate = new Date();

export function formatDate(date) {
  const newDate = new Date(date);
  const year = newDate.getFullYear();
  const day = newDate.getDate();
  const month = newDate.getMonth() + 1;

  return `${day < 9 ? "0" + day : day}/${
    month < 9 ? "0" + month : month
  }/${year}`;
}
