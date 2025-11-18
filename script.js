fetch('https://api.spacexdata.com/v5/launches')
    .then((response) => response.json())
    .then((result) => {
        console.log(result)
        for (i = 0; i < 11; i++) {
            let j = i + 1;
            launchInfoContainers[j].childNodes[0].textContent = result[i].name
            launchInfoContainers[j].childNodes[1].textContent = result[i].id
            launchInfoContainers[j].childNodes[2].textContent = result[i].flight_number
            launchInfoContainers[j].childNodes[3].textContent = result[i].date_local
        }
    })

const launchSection = document.querySelector("#launch-section")

for (i = 0; i < 10; i++) {
    let launchInfoContainer = document.createElement("div")
    for (j = 0; j < 4; j++) {
        let launchInfo = document.createElement("p")
        launchInfoContainer.appendChild(launchInfo)
    }
    launchSection.appendChild(launchInfoContainer)
}

const launchInfoContainers = document.querySelectorAll("#launch-section > div")




/* för eventet gör så att man kan trycka på en knapp som gör att den visar om
launches va succesful eller inte */
