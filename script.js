fetch('https://api.spacexdata.com/v5/launches')
    .then((response) => response.json())
    .then((result) => {
        console.log(result)
        /*    for (i = 0; i < 10; i++) {
               let j = i + 1;
               launchInfoContainers[j].childNodes[0].textContent = result[i].name
               launchInfoContainers[j].childNodes[1].textContent = result[i].id
               launchInfoContainers[j].childNodes[2].textContent = result[i].flight_number
               launchInfoContainers[j].childNodes[3].textContent = result[i].date_local
           } */

        for (i = 0; i < 10; i++) {
            let j = i + 1;
            launchNames[j].textContent = result[i].name
            launchIds[j].textContent = result[i].id
            launchFlightNumbers[j].textContent = result[i].flight_number
            launchDates[j].textContent = result[i].date_local
        }
        /*
                document.querySelector("button").addEventListener("click", () => {
                    statusInfo.textContent = "STATUS success:" + result[1].success + "(" + result[1].details + ")"
                })
         */

    })

const launchSection = document.querySelector("#launch-section")

const launchName = document.querySelector("#launch-name")
const launchId = document.querySelector("#launch-id")
const launchFlightNumber = document.querySelector("#launch-flightnumber")
const launchDate = document.querySelector("#launch-date")

/* for (i = 0; i < 10; i++) {
    let launchInfoContainer = document.createElement("div")
    for (j = 0; j < 4; j++) {
        let launchInfo = document.createElement("p")
        launchInfoContainer.appendChild(launchInfo)
    }
    launchSection.appendChild(launchInfoContainer)
} */

for (i = 0; i < 10; i++) {
    launchName.appendChild(document.createElement("p"))
    launchId.appendChild(document.createElement("p"))
    launchFlightNumber.appendChild(document.createElement("p"))
    launchDate.appendChild(document.createElement("p"))

}

const launchNames = document.querySelectorAll("#launch-name > p")
const launchIds = document.querySelectorAll("#launch-id > p")
const launchFlightNumbers = document.querySelectorAll("#launch-flightnumber > p")
const launchDates = document.querySelectorAll("#launch-date > p")

console.log(launchNames);




const launchInfoContainers = document.querySelectorAll("#launch-section > div")

console.log(launchInfoContainers[1].childNodes[0]);




/* for (i = 0; i < 10; i++) {
    launchInfoContainers[i].childNodes[0].textContent =
        launchInfoContainers[i].childNodes[1]
    launchInfoContainers[i].childNodes[2]
    launchInfoContainers[i].childNodes[3]
}
 */
console.log(document.querySelectorAll("#launch-section > div"));
console.log(document.querySelectorAll("div > p"));




/* för eventet gör så att man kan trycka på en knapp som gör att den visar om
launches va succesful eller inte */

const statusInfo = document.querySelector("#status>h3")
