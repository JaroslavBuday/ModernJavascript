let myCheckBox = document.querySelector("#my-check-box")

myCheckBox.addEventListener("change", function(event){
  console.log(event.target.checked)
})