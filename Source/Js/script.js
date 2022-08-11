let $ = document 

//////////////////////////////

// variables ///////////////////
const formInput = $.querySelector(".form-input")

formInput.addEventListener("focus" , () => {
  formLabel.classList.add("transform")
})

formInput.addEventListener("blur" , () => {
  !formInput.value ? formLabel.classList.remove("transform") : null
})

const formLabel = $.querySelector(".form-label")

formLabel.innerHTML = formLabel.innerHTML
                    .split("")
                    .map((letter , index) => `<span style="transition-delay:${50 * index}ms">${letter}</span>`)
                    .join("")