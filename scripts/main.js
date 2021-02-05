const select = document.querySelector('#theme-select')
const options = document.querySelectorAll('#theme-select > li')

const root = document.documentElement
select.addEventListener('click', (event) => {
  if (event.currentTarget.classList.contains('colapsed')) {
    openThemeMenu()
    event.currentTarget.classList.remove('colapsed')
  } else {
    closeThemeMenu()
    closeHamburgerMenu()
  }
})

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

const openThemeMenu = () => {
  options.forEach((opt) => {
    opt.classList.replace('hidden', 'visible')
    opt.classList.remove('selected')
  })
}

const closeThemeMenu = () => {
  options.forEach((opt) => {
    if (!opt.classList.contains('selected')) {
      opt.classList.replace('visible', 'hidden')
    }
  })
  select.classList.add('colapsed')
}

const themeChanger = (themeName) => {
  const elements = ['background', 'menu', 'text', 'border', 'body', 'ruby']
  elements.forEach((element) => {
    root.style.setProperty(`--theme-${element}-color`, themes[themeName][element])
  })
}


const themes = {
  america: {
    body: 'transparent',
    background: '#0000FF',
    menu: '#0000FF',
    text: '#FF0000',
    border: '#FF0000',
    ruby: '#A52A2A',
  },
  soft: {
    body: 'transparent',
    background: '#FFC0CB',
    menu: '#FFC0CB',
    text: '#A52A2A',
    border: '#A52A2A',
    ruby: '#A52A2A',
  },
  default: {
    body: 'transparent',
    background: '#000000',
    menu: '#000000',
    text: '#FFFFFF',
    border: '#FFFFFF',
    ruby: '#FF0000',
  },
  dahlia: {
    body: 'transparent',
    background: '#5F4B8BFF',
    menu: '#5F4B8BFF',
    text: '#E69A8DFF',
    border: '#E69A8DFF',
    ruby: '#A52A2A',
  },
  grey: {
    body: 'transparent',
    background: '#6C757D',
    menu: '#6C757D',
    text: '#343a40',
    border: '#343a40',
    ruby: '#212529',
  },
  taipei: {
    body: 'transparent',
    background: '#14213d',
    menu: '#14213d',
    text: '#fca311',
    border: '#fca311',
    ruby: '#fca311',
  },
  chicago: {
    body: 'transparent',
    background: '#fca311',
    menu: '#fca311',
    text: '#14213d',
    border: '#14213d',
    ruby: '#14213d',
  },
  gradient: {
    body: 'linear-gradient(180deg, #FF0055 0%, #000066 100%)',
    menu: 'linear-gradient(180deg, #FF0055 0%, #000066 100%)',
    background: 'transparent',
    text: '#FFFFFF',
    border: '#FFFFFF',
    ruby: '#000000',
  },
}

const closeHamburgerMenu = () => {
  menu.classList.remove('is-open')
  hamburger.classList.remove("is-active")
}

const menu = document.querySelector(".menu")
const hamburger = document.querySelector(".hamburger");
hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("is-active")
  menu.classList.toggle('is-open')
})

document.addEventListener('keyup', (event) => {
  if (event.isComposing || event.key === 'Escape') {
    closeHamburgerMenu()
  }
})
