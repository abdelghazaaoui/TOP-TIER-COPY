const contactMe = document.querySelector("#con")

const buttons = document.querySelectorAll("button")
buttons.forEach( button => {
  button.addEventListener("click",e => {
    contactMe.scrollIntoView({
    behavior: "smooth",
    block: "start"
  })
  })
})