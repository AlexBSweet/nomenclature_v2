const bodyTag = document.querySelector('body')
const siteTitle = document.querySelector('div.site-title')
const optionsContainer = document.querySelector('div.options')
const optionsHeaders = document.querySelectorAll('div.options-header')
const optionsLink = document.querySelector('div.options-link')
const header = document.querySelector('header')
const headerInner = document.querySelector('div.header-inner')
const headerTypeTitle = document.querySelector('.header-typeface-title')
const typeMenu = document.querySelector('div.type-menu')
const testerText = document.querySelector('div.tester-text')


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


  var body = document.body,
  html = document.documentElement;

  var height = Math.max( body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight );
  var lowerVal = height -1000
  if(pxScrolled>2500 && pxScrolled < lowerVal ){
    optionsLink.style.opacity = 1
  } else{
    optionsLink.style.opacity = 0
  }

  if(pxScrolled<2000 || pxScrolled>lowerVal){
    optionsContainer.classList.remove('open')
  }



  
 
})

function makeMarquee (){
  const alphabetText = 'AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz0123456789'
  const marqueeText = new Array(400).fill(alphabetText)
  
  alphabet.innerHTML = marqueeText
}
makeMarquee()







// GLYPHS CONTAINER SECTION ===============================================================================

const glyphContainerOuter = document.querySelector('div.tf-three-right')
const glyphsContainerInner = document.querySelector('div.glyphs-container')
const hoverGlyph = document.querySelector('div.hover-glyph')
const activeGlyphContainer = document.querySelector('div.active-glyph-container p')

const glyphsCategoryContainer = document.querySelectorAll('div.glyphs-category')
const glyphsDivs= document.querySelectorAll('section.glyphs-category div')

const glyphsDetailsOne = document.querySelector('div.glyph-details-one')
const glyphsDetailsTwo = document.querySelector('div.glyph-details-two')
const glyphsDetailsThree = document.querySelector('div.glyph-details-three xmp')

glyphsDivs.forEach(div=>{
  div.addEventListener('mousemove', ()=>{
    const hoveredGlyph = div.innerHTML

    hoverGlyph.innerHTML = hoveredGlyph

    activeGlyphContainer.innerHTML = hoveredGlyph


    const glyphName = div.getAttribute('data-name')
    glyphsDetailsOne.innerHTML = glyphName
        

        var hex = hoveredGlyph.codePointAt(0).toString(16);
        var result = "\\u" + "0000".substring(0, 4 - hex.length) + hex;
        var unicode = result.substr(1);
        var formattedUnicode = 'U+' + unicode.slice(1, 5)

        glyphsDetailsTwo.innerHTML = formattedUnicode


    var htmlEntity = hoveredGlyph.replace(/[\u00A0-\u9999<>\&]/gim, function(i) {
          return '&#'+i.charCodeAt(0)+';';
       });

       glyphsDetailsThree.innerHTML = `${htmlEntity}`
  })

})

const hoverContainer = ()=>{
        let mouseX = 0
        let mouseY = 0
        let ballX = 0
        let ballY = 0
        let speed = 0.1

        function animate(){

          let distX = mouseX - ballX
          let distY = mouseY - ballY

          ballX = ballX + (distX * speed)
          ballY = ballY + (distY * speed)

          hoverGlyph.style.left = ballX + 'px'
          hoverGlyph.style.top = ballY + 'px'

          requestAnimationFrame(animate)
        }

        animate()


      glyphContainerOuter.addEventListener('mousemove', (e)=>{
        mouseX = e.pageX
        mouseY = e.pageY

      

        const W = window.innerWidth
        const rightBorder = (W - 400)

        if(mouseX > rightBorder){
          hoverGlyph.style.left=rightBorder + 'px'
          hoverGlyph.style.transform= 'translateX(-80%)'
        }   else{
          hoverGlyph.style.transform= 'translateX(0%)'
        }

        // THIS CODE IS TRYING TO GET THE HOVER GLYPH TO STAY VERTICALLY IN THE VIEWPORT
        // const H = window.innerHeight
        // const containerHeight = hoverGlyph.offsetHeight
        // const heightCheck = H - containerHeight

        // const windowY = e.clientY
        // const tt = H - windowY
        // const test = H - windowY 
        // const t = -((400 - test) /4)
        // if(tt<400){
        //   hoverGlyph.style.transform= `translateY(${t}%)`
        // }

        // console.log(t)

      })
      

      glyphContainerOuter.addEventListener('mouseenter', ()=>{
      hoverGlyph.style.visibility = 'visible'
      })

      glyphContainerOuter.addEventListener('mouseleave', ()=>{
      hoverGlyph.style.visibility = 'hidden'
      })
}
hoverContainer()











// NAV SECTION OBSERVER CODE ========================================================

const sections = document.querySelectorAll('.section-start')
const stylesLink = document.querySelector('p.styles-link')
const samplesLink = document.querySelector('p.samples-link')
const glyphsLink = document.querySelector('p.glyphs-link')
const testerLink = document.querySelector('p.tester-link')
const infoLink = document.querySelector('p.info-link')
const buyLink = document.querySelector('p.buy-link')

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.intersectionRatio >= 0.1 && entry.target.classList.contains('styles')) {
        stylesLink.classList.add('current-section')
        samplesLink.classList.remove('current-section')
        glyphsLink.classList.remove('current-section')
      } else if(entry.intersectionRatio >= 0.1 && entry.target.classList.contains('samples')) {
        samplesLink.classList.add('current-section')
        stylesLink.classList.remove('current-section')
        glyphsLink.classList.remove('current-section')
      } else if(entry.intersectionRatio >= 0.1 && entry.target.classList.contains('glyphs-start')) {
        optionsContainer.classList.remove('open')
        glyphsLink.classList.add('current-section')
        samplesLink.classList.remove('current-section')
        stylesLink.classList.remove('current-section')
        testerLink.classList.remove('current-section')
        infoLink.classList.remove('current-section')
      } else if(entry.intersectionRatio >= 0.1 && entry.target.classList.contains('tester-start')) {
        optionsContainer.classList.add('open')
        testerLink.classList.add('current-section')
        glyphsLink.classList.remove('current-section')
        samplesLink.classList.remove('current-section')
        stylesLink.classList.remove('current-section')
        buyLink.classList.remove('current-section')
        infoLink.classList.remove('current-section')
      }  else if(entry.intersectionRatio >= 0.1 && entry.target.classList.contains('info-start')) {
        optionsContainer.classList.remove('open')
        infoLink.classList.add('current-section')
        glyphsLink.classList.remove('current-section')
        samplesLink.classList.remove('current-section')
        stylesLink.classList.remove('current-section')
        testerLink.classList.remove('current-section')
        buyLink.classList.remove('current-section')
      }
      else if(entry.intersectionRatio >= 0.1 && entry.target.classList.contains('buy-start')) {
        buyLink.classList.add('current-section')
        glyphsLink.classList.remove('current-section')
        samplesLink.classList.remove('current-section')
        stylesLink.classList.remove('current-section')
        testerLink.classList.remove('current-section')
        infoLink.classList.remove('current-section')
      } else{
        stylesLink.classList.remove('current-section')
      }
    })
  },
  {
    threshold: [0, 0.1, 1]
  }
)



sections.forEach(section=>{
  observer.observe(section)
})







// TESTER SECTION CLEAR TEXT====================================================

// const clearText = ()=>{
//   testerText.addEventListener('click', ()=>{
//     testerText.innerHTML = ''
//   })
// }
// clearText()










// DOWNLOAD SECTION -----------------------------------------------------

const downloadSection = document.querySelector('section.download')
const downloadCircleMain = downloadSection.querySelector('div.download-circle-main')
const hoverCirclesDown = document.querySelectorAll('div.hover-circle-down')
const hoverCirclesUp = document.querySelectorAll('div.hover-circle-up')

downloadCircleMain.addEventListener('mouseover', ()=>{

    hoverCirclesDown.forEach(circle=>{
      const x = (Math.random() *80)
      const y = (Math.random() *80)

      circle.style.transform = `translate(${x}px, ${y}px)`
      circle.style.opacity = 1
    })
})

downloadCircleMain.addEventListener('mouseout', ()=>{
    hoverCirclesDown.forEach(circle=>{
      circle.style.transform = 'translate(0, 0)'
      circle.style.opacity = 0
    })
})

downloadCircleMain.addEventListener('mouseover', ()=>{

  hoverCirclesUp.forEach(circle=>{
    const x = -(Math.random() *80)
    const y = -(Math.random() *80)

    circle.style.transform = `translate(${x}px, ${y}px)`
    circle.style.opacity = 1
  })
})

downloadCircleMain.addEventListener('mouseout', ()=>{
  hoverCirclesUp.forEach(circle=>{
    circle.style.transform = 'translate(0, 0)'
    circle.style.opacity = 0
  })
})