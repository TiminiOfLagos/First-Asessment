
//Declaration of variables

let apiUrl = `https://randomuser.me/api/`
let url = `https://randomuser.me/api/`
let title = document.getElementById("title")
let details = document.getElementById("detail")
let picture = document.getElementById("pic")
let email = document.getElementById("email")
let address = document.getElementById("address")
let telephone = document.getElementById("cell")
let button = document.getElementById("btn")



// Generating user details using the fetch API Method
let cardDetails = () => {
    fetch(apiUrl).then(response =>{
        return response.json()
    }).then(data => {
    let pictureApi = data.results[0].picture.large
    picture.src = pictureApi
    details.textContent = `${data.results[0].name.title + " " + data.results[0].name.first + " " + data.results[0].name.last}`
    email.textContent = `${"Email:" + " " + data.results[0].email}`
    address.textContent = `${"Address:" + " " + data.results[0].location.street.number  + " " + data.results[0].location.street.name + " " + data.results[0].location.city + " " + data.results[0].location.state + " "  + data.results[0].location.country}`
    telephone.textContent = `${"Telephone:" + " " + data.results[0].phone + " " + "Cell:" + " " + data.results[0].cell}`
        
    
    })
}

cardDetails() 

//Generating another user


let cardDetails2 = () => {
    fetch(url).then(response =>{
        return response.json()
    }).then(data => {
    let pictureApi = data.results[0].picture.large
    picture.src = pictureApi
    details.textContent = `${data.results[0].name.title + " " + data.results[0].name.first + " " + data.results[0].name.last}`
    email.textContent = `${"Email:" + " " + data.results[0].email}`
    address.textContent = `${"Address:" + " " + data.results[0].location.street.number  + " " + data.results[0].location.street.name + " " + data.results[0].location.city + " " + data.results[0].location.state + " "  + data.results[0].location.country}`
    telephone.textContent = `${"Telephone:" + " " + data.results[0].phone + " " + "Cell:" + " " + data.results[0].cell}`
        
    
    })
}

button.addEventListener("click", cardDetails2)