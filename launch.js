fetch('https://api.spacexdata.com/v5/launches')
    .then((response) => response.json())
    .then((result) => {
        console.log(result)
        button.addEventListener("click", () => {
            statusInfo.textContent = "ACCOMPLISHMENT: " + result[0].details;
        })
        video.setAttribute("src", "https://www.youtube.com/embed/" + result[0].links.youtube_id)

    })

console.log(document.querySelector("button"));

const button = document.querySelector("button");

const statusInfo = document.querySelector("#status>h3")

const video = document.querySelector("iframe")
