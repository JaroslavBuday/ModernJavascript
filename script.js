let myCheckBox = document.querySelector("#my-check-box")

myCheckBox.addEventListener("change", function(event){
  console.log(event.target.checked)
})

let mySelect = document.querySelector("#my-select").addEventListener("change", function(event){
  console.log(event.target.value)
})

let heading = document.querySelector("h1")
heading.addEventListener("mouseenter", function(event){
  heading.style.color = "white"
  heading.style.backgroundColor = "blue"
  heading.style.fontWeight = 100
})
heading.addEventListener("mouseleave", function(event){
  heading.style.color = "red"
  heading.style.backgroundColor = "black"
  heading.style.fontWeight = 600
})