const samples = document.querySelectorAll('p.sample')
const weightTag = optionsContainer.querySelector('input[name="weight"]')
const weightOutput = optionsContainer.querySelector('span.weight-output')
const widthTag = optionsContainer.querySelector('input[name="width"]')
const widthOutput = optionsContainer.querySelector('span.width-output')
const lineHeightTag = optionsContainer.querySelector('input[name="line-height"]')
const lineHeightOutput = optionsContainer.querySelector('span.line-height-output')
const letterSpacingTag = optionsContainer.querySelector('input[name="letter-spacing"]')
const letterSpacingOutput = optionsContainer.querySelector('span.letter-spacing-output')




weightTag.addEventListener('input', ()=>{
    let weight = weightTag.value
    let width = widthTag.value

    samples.forEach(sample=>{
      sample.style['font-variation-settings'] = `"wght" ${weight}, "wdth" ${width}`
    })
 
})

widthTag.addEventListener('input', ()=>{
  let weight = weightTag.value
  let width = widthTag.value

  samples.forEach(sample=>{
    sample.style['font-variation-settings'] = `"wght" ${weight}, "wdth" ${width}`
  })
})

lineHeightTag.addEventListener('input', ()=>{
  let lineHeight = lineHeightTag.value

  samples.forEach(sample=>{
    sample.style.lineHeight = lineHeight
    console.log(lineHeight)
  })
})

letterSpacingTag.addEventListener('input', ()=>{
  let letterSpacing = letterSpacingTag.value + 'em'
  console.log(letterSpacing)
  samples.forEach(sample=>{
    sample.style.letterSpacing = letterSpacing
  })
})

