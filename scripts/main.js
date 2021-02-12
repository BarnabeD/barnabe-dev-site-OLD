// Change site theme
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

// Hamburger menu behaviors
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

// drop down for stack list
const clickListener = (event) => {
  const div = event.currentTarget
  const ul = div.querySelector('ul')
  const dropdownTitle = div.firstElementChild
  let dropdownTitleText = dropdownTitle.innerHTML
  div.removeEventListener('click', clickListener)
  ul.classList.replace('stack-hidden', 'stack-display') || ul.classList.replace('stack-display', 'stack-hidden')
  dropdownTitle.classList.add('fadeout')
  const fadeInOutTitle = (text) => {
    setTimeout(() => {
      dropdownTitle.innerHTML = text
      dropdownTitle.classList.remove('fadeout')
      dropdownTitle.classList.add('fadein')
      div.addEventListener('click', clickListener)
    }, 250)
  }
  if (dropdownTitle.innerHTML === 'Show me under the hood <span class="material-icons">expand_more</span>') {
    fadeInOutTitle('Close it <span class="material-icons">expand_less</span>')
  } else {
    fadeInOutTitle('Show me under the hood <span class="material-icons">expand_more</span>')
  }
}

const stackLinksDropdown = document.querySelectorAll(".stack-links-dropdown")
stackLinksDropdown.forEach((el) => {
  el.addEventListener('click', clickListener)
})


let smallDeviceMediaQuery = window.matchMedia("(max-width: 639px)")
const headerBar = document.querySelector('.left-container')
const ruby = document.querySelector('#ruby')

const scrollNavbar = () => {
  console.log(window.pageYOffset)
  if (window.pageYOffset > 100 && window.pageYOffset <= 250) {
    headerBar.classList.add('left-container-reduced')
  } else if (window.pageYOffset > 250) {
    headerBar.classList.add('left-container-hidden')
  } else {
    headerBar.classList.remove('left-container-reduced')
    headerBar.classList.remove('left-container-hidden')
  }
}

if (smallDeviceMediaQuery.matches) {
  window.addEventListener('scroll', scrollNavbar)
}


// Console easterEgg
const art = `%c
\n\
\n\
\n\
\n\
  --------------------8<-------------[ cut here ]-------------------------------\n\
\n\
\n\
\n\
\n\
                                    _..__\n\
                                  .' I   '.\n\
                                  |.-"""-.|\n\
                                 _;.-"""-.;_\n\
                             _.-' _..-.-.._ '-._\n\
                            ';--.-(_o_I_o_)-.--;'\n\
                             \`. | |  | |  | | .\`\n\
                               \`-\\|  | |  |/-'\n\
                                  |  | |  |\n\
                                  |  \\_/  |\n\
                               _.'; ._._. ;'._\n\
                          _.-'\`; | \\  -  / | ;'-.\n\
                        .' :  /  |  |   |  |  \\  '.\n\
                       /   : /__ \\  \\___/  / __\\ : \`.\n\
                      /    |   /  '._/_\_.'  \\   :   \`\\ \n\
                     /     .  \`---;"""""'-----\`  .     \\ \n\
                    /      |      |()    ()      |      \\ \n\
                   /      /|      |              |\\      \\ \n\
                  /      / |      |()    ()      | \\      \\ \n\
                  |     /  |                     |  \\     | \n\
                  \\     \\   |][     |   |    ][ |   /     / \n\
                   \\     \\ ;=""====='"""'====""==; /     / \n\
                    |/\`\\  \\/      |()    ()      \\/  /\`\\| \n\
                     |_/.-';      |              |\`-.\\_| \n\
                       /   |      ;              :   \\ \n\
     .-----------------|__. |-------------------/ .__|-----------------.\n\
     | .--------------/     /------------------/     /---------------. |\n\
     | |              \`-\`-\`-'                  \`-\`-\`-'               | |\n\
     | |                                                             | |\n\
     | |                    Hello dear inspector !                   | |\n\
     | |                                                             | |\n\
     | |         Welcome on my humble, small developer portfolio.    | |\n\
     | |           You are maybe here to investigate my job,         | |\n\
     | |         so please let me explain to you my approach.        | |\n\
     | |                                                             | |\n\
     | |       As a Ruby developer, I work with the magic of Rails,  | |\n\
     | |              my goal here was to build the boring ways      | |\n\
     | |         no framework, no site builder, no SSG, no CMS,      | |\n\
     | |                no package manager, no bundle.               | |\n\
     | |                        no magic here.                       | |\n\
     | |                                                             | |\n\
     | |                Old-fashioned, 1999 stylish brew.            | |\n\
     | |                                                             | |\n\
     | |         Just index.html, style.css and main.js files        | |\n\
     | |                       on github pages.                      | |\n\
     | |                                                             | |\n\
     | |                                                             | |\n\
     | |           By the way : I'm curently looking for a job,      | |\n\
     | |                but no more ASCII Art, I promise.            | |\n\
     | |                                                             | |\n\
     | |                                                B.           | |\n\
     | |_____________________________________________________________| |\n\
     |_________________________________________________________________|\n\
                           ;      |              |\n\
                           |      :              ;\n\
                           |      |              ;\n\
                           |      |              ;\n\
                           '-._   ;           _.-'\n\
                               \`;"--.....--";\`\n\
                                |    | |    |\n\
                                |    | |    |\n\
                                |    | |    |\n\
                                T----T T----T\n\
                           _..._L____J L____J _..._\n\
                         .\` "-. \`%   | |    %\` .-" \`.\n\
                        /      \\    .: :.     /      \\ \n\
                        '-..___|_..=:\` \`-:=.._|___..-'\n\
\n\
\n\
\n\
--------------------8<-------------[ cut here ]-------------------------------\n\
\n\
\n\
`
// console.log(art, "font-family:monospace; font-style:italic; color:violet")
