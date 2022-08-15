const html = document.querySelector('html')
const checkbox = document.querySelector('input[name=switch-theme]')

const getStyle = (element, style) => 
    window
    .getComputedStyle(element)
    .getPropertyValue(style)

const initialColors = {
    bg: getStyle(html, '--bg')
}
const darkMode = {
    bg: "#292C35"
}

const transformKey = key => 
    "--" + key.replace(/([A-Z])/, "-$1").toLowerCase()

const changedColors = (colors) => {
    Object.keys(colors).map(key => 
        html.style.setProperty(transformKey(key), colors[key])    
    )
}
const checkboxColorMode = JSON.parse(localStorage.getItem('color-mode'))

if (checkboxColorMode) {
    checkbox.checked = checkboxColorMode
    changedColors(darkMode)
}
checkbox.addEventListener('change', ({ target }) => {
  target.checked ? changedColors(darkMode) : changedColors(initialColors)  

  localStorage.setItem('color-mode', target.checked)
  console.log(target)
})
