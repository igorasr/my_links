const toggleButton = document.getElementById('toggle-switch')
const html = document.documentElement

toggleButton.addEventListener('change', (event)=>{
  html.classList.toggle("light")
})
