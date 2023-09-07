document.querySelector("#test-form").addEventListener("submit", function(event){
    event.preventDefault()
console.log(event)

    let firstName = event.target.elements.firstName.value  
    let secondName = event.target.elements.secondName.value  
    let email = event.target.elements.email.value  

    
    console.log(firstName)
    console.log(secondName)
    console.log(email)

//   let paragraph = document.createElement("p")

//     paragraph.textContent = event.target.elements.FirstName.value

//     document.querySelector("#fromInputs").appendChild(paragraph)

//     event.target.elements.FirstName.value = ""
})