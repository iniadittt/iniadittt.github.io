const experinces = document.getElementById('experinces')
const connectme = document.getElementById('connect-me')

const xhttpExperience = new XMLHttpRequest()
xhttpExperience.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        const dataExperiences = JSON.parse(xhttpExperience.responseText)
        const template = dataExperiences.map((data, index) => {
            if (index % 2 === 0) {
                return `<div class="w-full lg:w-1/2 flex flex-col gap-2 lg:pr-2">
                        <img src="${data.image}" class="w-full rounded-md">
                        <h1 class="text-lg text-white font-medium mt-2">${data.title}</h1>
                        <p class="text-sm text-white font-medium">${data.description}</p>
                    </div>`
            } else {
                return `<div class="w-full lg:w-1/2 flex flex-col gap-2 lg:pl-2">
                <img src="${data.image}" class="w-full rounded-md">
                <h1 class="text-lg text-white font-medium mt-2">${data.title}</h1>
                <p class="text-sm text-white font-medium">${data.description}</p>
            </div>`
            }
        })
        const newTemplate = template.join('')
        experinces.innerHTML = newTemplate
    }
}
xhttpExperience.open("GET", "../public/sources/data/experiences.json", true)
xhttpExperience.send()


const xhttpConnectMe = new XMLHttpRequest()
xhttpConnectMe.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        const dataConnect = JSON.parse(xhttpConnectMe.responseText)
        const template = dataConnect.map(data => {
            return `<a href="${data.url}">
                        <div class="bg-[#37193a] flex px-4 py-1 rounded-md gap-4">
                            <img width="30" height="30"
                                src="${data.image}" alt="${data.title}" />
                            <p class="my-auto text-white text-center text-xs">${data.title}</p>
                        </div>
                    </a>`
        })
        const newTemplate = template.join('')
        connectme.innerHTML = newTemplate
    }
}
xhttpConnectMe.open("GET", "../public/sources/data/connect.json", true)
xhttpConnectMe.send()