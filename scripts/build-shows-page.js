// const showsArr = [
//   {
//     date: "Mon Sept 09 2024",
//     venue: "Ronald Lane",
//     location: "San Francisco, CA",
//   },
//   {
//     date: "Tue Sept 17 2024",
//     venue: "Pier 3 East",
//     location: "San Francisco, CA",
//   },
//   {
//     date: "Sat Oct 12 2024",
//     venue: "View Lounge",
//     location: "San Francisco, CA",
//   },
//   {
//     date: "Sat Nov 16 2024",
//     venue: "Hyatt Agency",
//     location: "San Francisco, CA",
//   },
//   {
//     date: "Fri Nov 29 2024",
//     venue: "Moscow Center",
//     location: "San Francisco, CA",
//   },
//   {
//     date: "Wed Dec 18 2024",
//     venue: "Press Club",
//     location: "San Francisco, CA",
//   },
// ];

import {BandSiteApi} from "./band-site-api.js";

const api_key = "58ea0e78-00f1-4e80-a261-702cce710763";
const api = new BandSiteApi(api_key);

const showsData = await api.getShows();

const timestampToDate = (timestamp) => {
  const date = new Date(timestamp);
  const options = {weekday: 'short', month: 'short',day: '2-digit', year: 'numeric'};

  return date.toLocaleDateString('en-US', options).replace(",","");
}

const labels = ["Date", "Venue", "Location"];

const shows = document.querySelector(".shows");
const showsRight = document.createElement("div");
showsRight.classList.add("shows__right");
shows.appendChild(showsRight);

const displayTableHeader = () => {
  const tableHeadingList = document.createElement("ul");
  tableHeadingList.classList.add("shows__labels__list");
  showsRight.appendChild(tableHeadingList);

  labels.forEach((label) => {
    const tableHeadingLabel = document.createElement("li");
    tableHeadingLabel.classList.add("shows__label");
    tableHeadingLabel.innerText = label;
    tableHeadingList.appendChild(tableHeadingLabel);
  });
};

const displayShows = () => {
  showsData.forEach((show) => {
    const showsContainer = document.createElement("div");
    showsContainer.classList.add("shows__container");
    showsRight.appendChild(showsContainer);

    const showsList = document.createElement("ul");
    showsList.classList.add("shows__list");
    showsContainer.appendChild(showsList);

    const showsDateLabel = document.createElement("li");
    showsDateLabel.classList.add("shows__label", "shows__label--tablet");
    showsDateLabel.innerText = labels[0];

    const showsDate = document.createElement("li");
    showsDate.classList.add("shows__item", "shows__item--bold");
    showsDate.innerText = timestampToDate(show.date);

    const showsVenueLabel = document.createElement("li");
    showsVenueLabel.classList.add("shows__label", "shows__label--tablet");
    showsVenueLabel.innerText = labels[1];

    const showsVenue = document.createElement("li");
    showsVenue.classList.add("shows__item");
    showsVenue.innerText = show.place;

    const showsLocationLabel = document.createElement("li");
    showsLocationLabel.classList.add("shows__label", "shows__label--tablet");
    showsLocationLabel.innerText = labels[2];

    const showsLocation = document.createElement("li");
    showsLocation.classList.add("shows__item");
    showsLocation.innerText = show.location;

    showsList.append(
      showsDateLabel,
      showsDate,
      showsVenueLabel,
      showsVenue,
      showsLocationLabel,
      showsLocation
    );

    const showsButton = document.createElement("button");
    showsButton.classList.add("shows__btn");
    showsButton.innerText = "Buy Tickets";
    showsContainer.appendChild(showsButton);
  });
};

displayTableHeader();
displayShows();

const tableRow = document.querySelectorAll(".shows__container");

let activeRow = null;

const rowClick = (e) => {
  if (activeRow !== null) {
    activeRow.classList.remove("shows__container--active");
  }
  activeRow = e.currentTarget;
  activeRow.classList.add("shows__container--active");
};

tableRow.forEach((row) => {
  row.addEventListener("click", rowClick);
});
