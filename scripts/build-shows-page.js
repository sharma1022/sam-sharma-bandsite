const showsArr = [{
    date: "Mon Sept 09 2024",
    venue: "Ronald Lane",
    location: "San Francisco, CA"
},
{
    date: "Tue Sept 17 2024",
    venue: "Pier 3 East",
    location: "San Francisco, CA"
},
{
    date: "Sat Oct 12 2024",
    venue: "View Lounge",
    location: "San Francisco, CA"
},
{
    date: "Sat Nov 16 2024",
    venue: "Hyatt Agency",
    location: "San Francisco, CA"
},
{
    date: "Fri Nov 29 2024",
    venue: "Moscow Center",
    location: "San Francisco, CA"
},
{
    date: "Wed Dec 18 2024",
    venue: "Press Club",
    location: "San Francisco, CA"
}];

const mediaQueryTablet = window.matchMedia("(min-width: 768px)");
// //const mediaQueryDesktop = window.matchMedia("(min-widht: 1280px");
// console.log(mediaQueryTablet.matches);
const showsDiv = document.querySelector(".shows");



// const displayShows = (mediaQuery) =>{
//     if(mediaQuery.matches){
//         console.log(mediaQuery.matches);
//         const showsTable = document.createElement("table");
//     showsTable.classList.add("shows__table");
//     showsDiv.appendChild(showsTable);

//     const showsTopRow = document.createElement("tr");
//     showsTopRow.appendChild(showsTable);

//     const showsDate = document.createElement("th");
//     showsDate.classList.add("shows__title");
//     showsDate.innerText = "Date";
//     showsTopRow.appendChild(showsDate);

//     const showsVenue = document.createElement("th");
//     showsVenue.classList.add("shows__title");
//     showsVenue.innerText = "Venue";
//     showsTopRow.appendChild(showsVenue);

//     const showsLocation = document.createElement("th");
//     showsLocation.classList.add("shows__title");
//     showsLocation.innerText = "Location";
//     showsTopRow.appendChild(showsLocation);

//     showsArr.forEach(show => {
//         const showsRow = document.createElement("tr");
//         showsRow.classList.add("shows__row");
//         showsTable.appendChild(showsRow);

//         const date = document.createElement("td");
//         date.classList.add("shows__date");
//         date.innerText = show.date;
//         showsRow.appendChild(date);

//         const venue = document.createElement("td");
//         venue.classList.add("shows__venue");
//         venue.innerText = show.venue;
//         showsRow.appendChild(venue);

//         const location = document.createElement("td");
//         location.classList.add("shows__location");
//         location.innerText = show.location;
//         showsRow.appendChild(location);

//         const button = document.createElement("td");
//         showsRow.appendChild(button);

//         const buyTixBtn = document.createElement("button");
//         buyTixBtn.classList.add("shows__btn");
//         buyTixBtn.innerText = "Buy Tickets";
//         button.appendChild(buyTixBtn);
//     })
//     }
//     else{
//         showsArr.forEach(show => {
//             const showsContainer = document.createElement("div");
//             showsContainer.classList.add("shows__container");
//             showsDiv.appendChild(showsContainer);
    
//             const dateTitle = document.createElement("h4");
//             dateTitle.classList.add("shows__title");
//             dateTitle.innerText = "Date";
//             showsContainer.appendChild(dateTitle);
    
//             const date = document.createElement("h3");
//             date.classList.add("shows__date");
//             date.innerHTML = show.date;
//             showsContainer.appendChild(date);
    
//             const venueTitle = document.createElement("h4");
//             venueTitle.classList.add("shows__title");
//             venueTitle.innerText = "Venue";
//             showsContainer.appendChild(venueTitle);
            
//             const venue = document.createElement("h3");
//             venue.classList.add("shows__venue");
//             venue.innerHTML = show.venue;
//             showsContainer.appendChild(venue);
    
//             const locationTitle = document.createElement("h4");
//             locationTitle.classList.add("shows__title");
//             locationTitle.innerText = "Location";
//             showsContainer.appendChild(locationTitle);
    
//             const location = document.createElement("h3");
//             location.classList.add("shows__venue");
//             location.innerText = show.location;
//             showsContainer.appendChild(location);
    
//             const buyTixBtn = document.createElement("button");
//             buyTixBtn.classList.add("shows__btn");
//             buyTixBtn.innerText = "Buy Tickets";
//             showsContainer.appendChild(buyTixBtn);
//         })
//     }
// }
// displayShows(mediaQueryTablet);

// mediaQueryTablet.addEventListener("change",displayShows);
const displayShows = () => {
    showsArr.forEach(show => {
                    const showsContainer = document.createElement("div");
                    showsContainer.classList.add("shows__container");
                    showsDiv.appendChild(showsContainer);
            
                    const dateTitle = document.createElement("h4");
                    dateTitle.classList.add("shows__title");
                    dateTitle.innerText = "Date";
                    showsContainer.appendChild(dateTitle);
            
                    const date = document.createElement("h3");
                    date.classList.add("shows__date");
                    date.innerHTML = show.date;
                    showsContainer.appendChild(date);
            
                    const venueTitle = document.createElement("h4");
                    venueTitle.classList.add("shows__title");
                    venueTitle.innerText = "Venue";
                    showsContainer.appendChild(venueTitle);
                    
                    const venue = document.createElement("h3");
                    venue.classList.add("shows__venue");
                    venue.innerHTML = show.venue;
                    showsContainer.appendChild(venue);
            
                    const locationTitle = document.createElement("h4");
                    locationTitle.classList.add("shows__title");
                    locationTitle.innerText = "Location";
                    showsContainer.appendChild(locationTitle);
            
                    const location = document.createElement("h3");
                    location.classList.add("shows__venue");
                    location.innerText = show.location;
                    showsContainer.appendChild(location);
            
                    const buyTixBtn = document.createElement("button");
                    buyTixBtn.classList.add("shows__btn");
                    buyTixBtn.innerText = "Buy Tickets";
                    showsContainer.appendChild(buyTixBtn);
                })
}
const displayShowsTablet = () => {
    const showsTable = document.createElement("table");
    showsTable.classList.add("shows__table");
    showsDiv.appendChild(showsTable);

    const showsTblHead = document.createElement("thead");
    showsTable.appendChild(showsTblHead);

    const showsTopRow = document.createElement("tr");
    showsTblHead.appendChild(showsTopRow);

    const showsDate = document.createElement("th");
    showsDate.classList.add("shows__title");
    showsDate.innerText = "Date";
    showsTopRow.appendChild(showsDate);

    const showsVenue = document.createElement("th");
    showsVenue.classList.add("shows__title");
    showsVenue.innerText = "Venue";
    showsTopRow.appendChild(showsVenue);

    const showsLocation = document.createElement("th");
    showsLocation.classList.add("shows__title");
    showsLocation.innerText = "Location";
    showsTopRow.appendChild(showsLocation);

    const showsTblBody = document.createElement("tbody");
    showsTable.append(showsTblBody);

    showsArr.forEach(show => {
        const showsRow = document.createElement("tr");
        showsRow.classList.add("shows__row");
        showsTblBody.appendChild(showsRow);

        const date = document.createElement("td");
        date.classList.add("shows__date");
        date.innerText = show.date;
        showsRow.appendChild(date);

        const venue = document.createElement("td");
        venue.classList.add("shows__venue");
        venue.innerText = show.venue;
        showsRow.appendChild(venue);

        const location = document.createElement("td");
        location.classList.add("shows__location");
        location.innerText = show.location;
        showsRow.appendChild(location);

        const button = document.createElement("td");
        showsRow.appendChild(button);

        const buyTixBtn = document.createElement("button");
        buyTixBtn.classList.add("shows__btn");
        buyTixBtn.innerText = "Buy Tickets";
        button.appendChild(buyTixBtn);
    })
}



const mediaQuerySelector = () =>{
    if(mediaQueryTablet.matches){
        displayShowsTablet();
    }
    else{
        displayShows();
    }
}

mediaQueryTablet.addEventListener("change", mediaQuerySelector);