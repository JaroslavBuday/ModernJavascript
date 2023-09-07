document.querySelector("#test-form").addEventListener("submit", function(event){
    event.preventDefault()
console.log(event)

    let firstName = event.target.elements.firstName.value  
    let secondName = event.target.elements.secondName.value  
    let email = event.target.elements.email.value  

    
  let paragraph = document.createElement("p")

    paragraph.innerHTML = `Meno: ${firstName}, <br> Priezvisko: ${secondName}, <br>mail: ${email}<br>   - - - - - - - - - - - - - - - - -  `

    document.querySelector("#from-form").appendChild(paragraph)

    event.target.elements.firstName.value = ""
    event.target.elements.secondName.value = ""
    event.target.elements.email.value = ""
})