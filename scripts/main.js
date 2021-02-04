const select = document.querySelector('#theme-select')
const options = document.querySelectorAll('#theme-select > li')

const root = document.documentElement
select.addEventListener('click', (event) => {
  if (event.currentTarget.classList.contains('colapsed')) {
    openMenu()
    event.currentTarget.classList.remove('colapsed')
  } else {
    closeMenu()
  }
})

const themeChanger = (themeName) => {
  setBackgroundColor(themes[themeName].background)
  setTextColor(themes[themeName].text)
  setBorderColor(themes[themeName].border)
}

const setBackgroundColor = (color) => {
  root.style.setProperty('--theme-background-color', color)
}

const setTextColor = (color) => {
  root.style.setProperty('--theme-text-color', color)
}

const setBorderColor = (color) => {
  root.style.setProperty('--theme-border-color', color)
}

options.forEach((opt) => {
  opt.addEventListener('click', (event) => {
    options.forEach((opt) => {
      opt.classList.replace('visible', 'hidden')
    })
    event.currentTarget.classList.add('selected')
    event.currentTarget.classList.replace('hidden', 'visible')
    themeChanger(event.currentTarget.dataset.value)
  })
})

const openMenu = () => {
  options.forEach((opt) => {
    opt.classList.replace('hidden', 'visible')
    opt.classList.remove('selected')
  })
}

const closeMenu = () => {
  options.forEach((opt) => {
    if (!opt.classList.contains('selected')) {
      opt.classList.replace('visible', 'hidden')
    }
  })
  select.classList.add('colapsed')
}

const themes = {
  america: {
    background: 'blue',
    text: 'red',
    border: 'black',
  },
  soft: {
    background: 'pink',
    text: 'brown',
    border: 'lightgreen',
  },
  default: {
    background: 'black',
    text: 'white',
    border: 'white',
  }
}
