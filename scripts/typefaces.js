const siteTitle = document.querySelector('div.site-title')
const optionsContainer = document.querySelector('div.options')
const optionsLink = document.querySelector('div.options-link')
const header = document.querySelector('header')
const headerTypeTitle = document.querySelector('.header-typeface-title')
const typeMenu = document.querySelector('div.type-menu')


optionsLink.addEventListener('click', ()=>{
  optionsContainer.classList.toggle('open')
  optionsLink.classList.toggle('open')
})
headerTypeTitle.addEventListener('click', ()=>{
  typeMenu.classList.toggle('open')
})



const alphabetContainer = document.querySelector('section.alphabet')
const alphabet = alphabetContainer.querySelector('span')



window.addEventListener('scroll', ()=>{
  let pxScrolled = window.pageYOffset
  let opacity = 1- (pxScrolled /1000)

  alphabetContainer.style.opacity = opacity

  let headerOpacity = pxScrolled / 1000
  
  siteTitle.style.opacity = headerOpacity
  headerTypeTitle.style.opacity = headerOpacity

optionsLink.style.opacity = headerOpacity
  
})

function makeMarquee (){
  const alphabetText = 'AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz0123456789'
  const marqueeText = new Array(400).fill(alphabetText)
  
  alphabet.innerHTML = marqueeText
}
makeMarquee()







// GLYPHS CONTAINER SECTION ===============================================================================

const glyphContainerOuter = document.querySelector('div.tf-three-right')
const hoverGlyph = document.querySelector('div.hover-glyph')
const activeGlyphContainer = document.querySelector('div.active-glyph-container')

const glyphsCategoryContainer = document.querySelectorAll('div.glyphs-category')
const glyphsDivs= document.querySelectorAll('section.glyphs-category div')


glyphsDivs.forEach(div=>{
  div.addEventListener('mousemove', ()=>{
    const hoveredGlyph = div.innerHTML
    console.log(hoveredGlyph)
    hoverGlyph.innerHTML = hoveredGlyph

    activeGlyphContainer.innerHTML = hoveredGlyph
  })

})



glyphContainerOuter.addEventListener('mousemove', (e)=>{
    const X = e.pageX
    const Y = e.pageY

    hoverGlyph.style.left = X + 'px'
    hoverGlyph.style.top = Y + 'px'

})
glyphContainerOuter.addEventListener('mouseenter', ()=>{
  hoverGlyph.style.visibility = 'visible'
})
glyphContainerOuter.addEventListener('mouseleave', ()=>{
  hoverGlyph.style.visibility = 'hidden'
})



