const languageSelect = document.querySelector('select.language-select')
const samplesSection = document.querySelector('section.samples')
const sampleOne = document.querySelector('p.sample-one')
const sampleTwo = document.querySelector('p.sample-two')
const sampleThree = document.querySelector('p.sample-three')
const sampleFour = document.querySelector('p.sample-four')
const sampleFive = document.querySelector('p.sample-five')
const sampleSix = document.querySelector('p.sample-six')
const sampleSeven = document.querySelector('p.sample-seven')
const sampleEight = document.querySelector('p.sample-eight')
const sampleNine = document.querySelector('p.sample-nine')
const sampleTen = document.querySelector('p.sample-ten')
const sampleEleven = document.querySelector('p.sample-eleven')
const sampleTwelve = document.querySelector('p.sample-twelve')

languageSelect.addEventListener('change', ()=>{
    const language = languageSelect.value

    if(language=='French'){
      sampleOne.innerHTML = french.one
      sampleTwo.innerHTML = french.two
      sampleThree.innerHTML = french.three
      sampleFour.innerHTML = french.four
      sampleFive.innerHTML = french.five
      sampleSix.innerHTML = french.six
      sampleSeven.innerHTML = french.seven
      sampleEight.innerHTML = french.eight
      sampleNine.innerHTML = french.nine
      sampleTen.innerHTML = french.ten
      sampleEleven.innerHTML = french.eleven
      sampleTwelve.innerHTML = french.twelve
    } else if(language=='German'){
      console.log('German')
    } else if(language=='Italian'){
      console.log('Italian')
    } else if(language=='Dutch'){
      console.log('Dutch')
    } else if(language=='Norwegian'){
      console.log('Norwegian')
    } else if(language=='Danish'){
      console.log('Danish')
    } else if(language=='Spanish'){
      console.log('Spanish')
    } else if(language=='Portugese'){
      // samplesSection.innerHTML = languageObject.portugese
    } else if(language=='Swedish'){
      console.log('Swedish')
    } else if(language=="English"){
      sampleOne.innerHTML = english.one
      sampleTwo.innerHTML = english.two
      sampleThree.innerHTML = english.three
      sampleFour.innerHTML = english.four
      sampleFive.innerHTML = english.five
      sampleSix.innerHTML = english.six
      sampleSeven.innerHTML = english.seven
      sampleEight.innerHTML = english.eight
      sampleNine.innerHTML = english.nine
      sampleTen.innerHTML = english.ten
      sampleEleven.innerHTML = english.eleven
      sampleTwelve.innerHTML = english.twelve
    }
})

const english = {
  one:``,
  two: ``,
  three: ``,
  four: ``,
  five: ``,
  six: ``,
  seven: ``,
  eight: ``,
  nine: ``,
  ten: ``,
  eleven: ``,
  twelve: ``
}
const french = {
  one:``,
  two: ``,
  three: ``,
  four: ``,
  five: ``,
  six: ``,
  seven: ``,
  eight: ``,
  nine: ``,
  ten: ``,
  eleven: ``,
  twelve: ``
}

