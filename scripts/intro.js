const samplesContainers = document.querySelectorAll('div.sample')
const samples = document.querySelectorAll('p.sample')
const pTags = document.querySelectorAll('p')
const aTags = document.querySelectorAll('a')
const weightTag = optionsContainer.querySelector('input[name="weight"]')
const weightOutput = optionsContainer.querySelector('span.weight-output')
const slantTag = optionsContainer.querySelector('input[name="slant"]')
const slantOutput = optionsContainer.querySelector('span.slant-output')
const lineHeightTag = optionsContainer.querySelector('input[name="line-height"]')
const lineHeightOutput = optionsContainer.querySelector('span.line-height-output')
const letterSpacingTag = optionsContainer.querySelector('input[name="letter-spacing"]')
const letterSpacingOutput = optionsContainer.querySelector('span.letter-spacing-output')
const openTypeSection = optionsContainer.querySelector('div.options-opentype')
const openTypeCheckboxes = optionsContainer.querySelectorAll('div.checkbox')
const colorCircleContainer = optionsContainer.querySelector('div.color-container')
const colorCircles = optionsContainer.querySelectorAll('div.color-circle')
const testerStart = document.querySelector('div.tester-start')
const selects = document.querySelectorAll('select.select-css')
const labels = document.querySelectorAll('div.option label')
const rangeTags = document.querySelectorAll('input[type="range"]')
const styleSpans = document.querySelectorAll('div.style span')


const fgColorOne = '#333'
const bgColorOne = '#f5c0ab'
const fgColorTwo = 'white'
const bgColorTwo = '#2c3ebb'
const fgColorThree = '#e25822'
const bgColorThree = '#0f1010'
const fgColorFour = '#ed6663'
const bgColorFour = '#552244'
const fgColorFive = '#fff'
const bgColorFive = '#f70047'
const fgColorSix = '#ffd567'
const bgColorSix = '#1c4f50'
const fgColorSeven = '#effcef'
const bgColorSeven = '#ffa56a'
const fgColorEight = '#222b2b'
const bgColorEight = '#bcf9dd'



const introOptions = ()=>{

      colorCircles.forEach(circle=>{
        circle.addEventListener('click', ()=>{
            const num = circle.getAttribute('data-num')

            if(num=='one'){
                bodyTag.style.color = fgColorOne
                pTags.forEach(tag=>{
                tag.style.color = fgColorOne
              })
              aTags.forEach(tag=>{
                tag.style.color = fgColorOne
              })
              headerInner.style.backgroundColor = bgColorOne
              bodyTag.style.backgroundColor = bgColorOne
              selects.forEach(select=>{
                select.style.color = fgColorOne
                select.style.borderColor = fgColorOne
              })
              optionsContainer.style.backgroundColor = bgColorOne
              optionsContainer.style.borderColor = fgColorOne
              optionsHeaders.forEach(header=>{
                header.style.backgroundColor = bgColorOne
              })
              labels.forEach(label=>{
                label.style.color = fgColorOne
              })
              rangeTags.forEach(tag=>{
                tag.classList.add('dark')
                tag.classList.remove('light')
              })
              hoverGlyph.style.backgroundColor = bgColorOne
              hoverGlyph.style.boxShadow = `10px 10px 45px 1px ${bgColorOne}`
              typeMenu.style.backgroundColor = bgColorOne
              styleSpans.forEach(span=>{
                span.style.color = fgColorOne
              })
              openTypeCheckboxes.forEach(checkbox=>{
                checkbox.style.borderColor = fgColorOne
              })
              selects.forEach(select=>{
                select.classList.add('dark')
              })
              colorCircleContainer.style.borderColor = fgColorOne



            } else if(num=="two"){
              bodyTag.style.color = fgColorTwo
              pTags.forEach(tag=>{
                tag.style.color = fgColorTwo
              })
              aTags.forEach(tag=>{
                tag.style.color = fgColorTwo
              })
              headerInner.style.backgroundColor = bgColorTwo
              bodyTag.style.backgroundColor = bgColorTwo
              selects.forEach(select=>{
                select.style.color = fgColorTwo
                select.style.borderColor = fgColorTwo
              })
              optionsContainer.style.backgroundColor = bgColorTwo
              optionsContainer.style.borderColor = fgColorTwo
              optionsHeaders.forEach(header=>{
                header.style.backgroundColor = bgColorTwo
              })
              labels.forEach(label=>{
                label.style.color = fgColorTwo
              })
              rangeTags.forEach(tag=>{
                tag.classList.add('light')
                tag.classList.remove('dark')
              })
              hoverGlyph.style.backgroundColor = bgColorTwo
              hoverGlyph.style.boxShadow = `10px 10px 45px 1px ${bgColorTwo}`
              typeMenu.style.backgroundColor = bgColorTwo
              styleSpans.forEach(span=>{
                span.style.color = fgColorTwo
              })
              openTypeCheckboxes.forEach(checkbox=>{
                checkbox.style.borderColor = fgColorTwo
              })
              selects.forEach(select=>{
                select.classList.remove('dark')
              })
              colorCircleContainer.style.borderColor = fgColorTwo


            } else if(num=="three"){
              bodyTag.style.color = fgColorThree
              pTags.forEach(tag=>{
                tag.style.color = fgColorThree
              })
              aTags.forEach(tag=>{
                tag.style.color = fgColorThree
              })
              headerInner.style.backgroundColor = bgColorThree
              bodyTag.style.backgroundColor = bgColorThree
              selects.forEach(select=>{
                select.style.color = fgColorThree
                select.style.borderColor = fgColorThree
              })
              optionsContainer.style.backgroundColor = bgColorThree
              optionsContainer.style.borderColor = fgColorThree
              optionsHeaders.forEach(header=>{
                header.style.backgroundColor = bgColorThree
              })
              labels.forEach(label=>{
                label.style.color = fgColorThree
              })
              rangeTags.forEach(tag=>{
                tag.classList.add('light')
                tag.classList.remove('dark')
              })
              hoverGlyph.style.backgroundColor = bgColorThree
              hoverGlyph.style.boxShadow = `10px 10px 45px 1px ${bgColorThree}`
              typeMenu.style.backgroundColor = bgColorThree
              styleSpans.forEach(span=>{
                span.style.color = fgColorThree
              })
              openTypeCheckboxes.forEach(checkbox=>{
                checkbox.style.borderColor = fgColorThree
              })
              selects.forEach(select=>{
                select.classList.remove('dark')
              })
              colorCircleContainer.style.borderColor = fgColorThree


            } else if(num=="four"){
              bodyTag.style.color = fgColorFour
              pTags.forEach(tag=>{
                tag.style.color = fgColorFour
              })
              aTags.forEach(tag=>{
                tag.style.color = fgColorFour
              })
              headerInner.style.backgroundColor = bgColorFour
              bodyTag.style.backgroundColor = bgColorFour
              selects.forEach(select=>{
                select.style.color = fgColorFour
                select.style.borderColor = fgColorFour
              })
              optionsContainer.style.backgroundColor = bgColorFour
              optionsContainer.style.borderColor = fgColorFour
              optionsHeaders.forEach(header=>{
                header.style.backgroundColor = bgColorFour
              })
              labels.forEach(label=>{
                label.style.color = fgColorFour
              })
              rangeTags.forEach(tag=>{
                tag.classList.add('light')
                tag.classList.remove('dark')
              })
              hoverGlyph.style.backgroundColor = bgColorFour
              hoverGlyph.style.boxShadow = `10px 10px 45px 1px ${bgColorFour}`
              typeMenu.style.backgroundColor = bgColorFour
              styleSpans.forEach(span=>{
                span.style.color = fgColorFour
              })
              openTypeCheckboxes.forEach(checkbox=>{
                checkbox.style.borderColor = fgColorFour
              })
              colorCircleContainer.style.borderColor = fgColorFour


            } else if(num=="five"){
              bodyTag.style.color = fgColorFive
              pTags.forEach(tag=>{
                tag.style.color = fgColorFive
              })
              aTags.forEach(tag=>{
                tag.style.color = fgColorFive
              })
              headerInner.style.backgroundColor = bgColorFive
              bodyTag.style.backgroundColor = bgColorFive
              selects.forEach(select=>{
                select.style.color = fgColorFive
                select.style.borderColor = fgColorFive
              })
              optionsContainer.style.backgroundColor = bgColorFive
              optionsContainer.style.borderColor = fgColorFive
              optionsHeaders.forEach(header=>{
                header.style.backgroundColor = bgColorFive
              })
              labels.forEach(label=>{
                label.style.color = fgColorFive
              })
              rangeTags.forEach(tag=>{
                tag.classList.add('dark')
                tag.classList.remove('light')
              })
              hoverGlyph.style.backgroundColor = bgColorFive
              hoverGlyph.style.boxShadow = `10px 10px 45px 1px ${bgColorFive}`
              typeMenu.style.backgroundColor = bgColorFive
              styleSpans.forEach(span=>{
                span.style.color = fgColorFive
              })
              openTypeCheckboxes.forEach(checkbox=>{
                checkbox.style.borderColor = fgColorFive
              })
              selects.forEach(select=>{
                select.classList.remove('dark')
              })
              colorCircleContainer.style.borderColor = fgColorFive


            } else if(num=="six"){
              bodyTag.style.color = fgColorSix
              pTags.forEach(tag=>{
                tag.style.color = fgColorSix
              })
              aTags.forEach(tag=>{
                tag.style.color = fgColorSix
              })
              headerInner.style.backgroundColor = bgColorSix
              bodyTag.style.backgroundColor = bgColorSix
              selects.forEach(select=>{
                select.style.color = fgColorSix
                select.style.borderColor = fgColorSix
              })
              optionsContainer.style.backgroundColor = bgColorSix
              optionsContainer.style.borderColor = fgColorSix
              optionsHeaders.forEach(header=>{
                header.style.backgroundColor = bgColorSix
              })
              labels.forEach(label=>{
                label.style.color = fgColorSix
              })
              rangeTags.forEach(tag=>{
                tag.classList.add('dark')
                tag.classList.remove('dark')
              })
              hoverGlyph.style.backgroundColor = bgColorSix
              hoverGlyph.style.boxShadow = `10px 10px 45px 1px ${bgColorSix}`
              typeMenu.style.backgroundColor = bgColorSix
              styleSpans.forEach(span=>{
                span.style.color = fgColorSix
              })
              openTypeCheckboxes.forEach(checkbox=>{
                checkbox.style.borderColor = fgColorSix
              })
              colorCircleContainer.style.borderColor = fgColorSix


            } else if(num=="seven"){
              bodyTag.style.color = fgColorSeven
              pTags.forEach(tag=>{
                tag.style.color = fgColorSeven
              })
              aTags.forEach(tag=>{
                tag.style.color = fgColorSeven
              })
              headerInner.style.backgroundColor = bgColorSeven
              bodyTag.style.backgroundColor = bgColorSeven
              selects.forEach(select=>{
                select.style.color = fgColorSeven
                select.style.borderColor = fgColorSeven
              })
              optionsContainer.style.backgroundColor = bgColorSeven
              optionsContainer.style.borderColor = fgColorSeven
              optionsHeaders.forEach(header=>{
                header.style.backgroundColor = bgColorSeven
              })
              labels.forEach(label=>{
                label.style.color = fgColorSeven
              })
              rangeTags.forEach(tag=>{
                tag.classList.add('light')
                tag.classList.remove('dark')
              })
              hoverGlyph.style.backgroundColor = bgColorSeven
              hoverGlyph.style.boxShadow = `10px 10px 45px 1px ${bgColorSeven}`
              typeMenu.style.backgroundColor = bgColorSeven
              styleSpans.forEach(span=>{
                span.style.color = fgColorSeven
              })
              openTypeCheckboxes.forEach(checkbox=>{
                checkbox.style.borderColor = fgColorSeven
              })
              colorCircleContainer.style.borderColor = fgColorSeven


            } else if(num=="eight"){
              bodyTag.style.color = fgColorEight
              pTags.forEach(tag=>{
                tag.style.color = fgColorEight
              })
              aTags.forEach(tag=>{
                tag.style.color = fgColorEight
              })
              headerInner.style.backgroundColor = bgColorEight
              bodyTag.style.backgroundColor = bgColorEight
              selects.forEach(select=>{
                select.style.color = fgColorEight
                select.style.borderColor = fgColorEight
              })
              optionsContainer.style.backgroundColor = bgColorEight
              optionsContainer.style.borderColor = fgColorEight
              optionsHeaders.forEach(header=>{
                header.style.backgroundColor = bgColorEight
              })
              labels.forEach(label=>{
                label.style.color = fgColorEight
              })
              rangeTags.forEach(tag=>{
                tag.classList.add('dark')
                tag.classList.remove('light')
              })
              hoverGlyph.style.backgroundColor = bgColorEight
              hoverGlyph.style.boxShadow = `10px 10px 45px 1px ${bgColorEight}`
              typeMenu.style.backgroundColor = bgColorEight
              styleSpans.forEach(span=>{
                span.style.color = fgColorEight
              })
              openTypeCheckboxes.forEach(checkbox=>{
                checkbox.style.borderColor = fgColorEight
              })
              selects.forEach(select=>{
                select.classList.add('dark')
              })
              colorCircleContainer.style.borderColor = fgColorEight


            }
        })
      })



// GLYPHS CONTAINER SELECT SECTION ===============================================

const glyphsSelect = document.querySelector('select.glyphs-select')


glyphsSelect.addEventListener('change', ()=>{
  const typeValue = glyphsSelect.value

  if(typeValue=="Extra-Light"){
    glyphsContainerInner.style['font-variation-settings'] = `"wght" 100, "slnt" 0`
    hoverGlyph.style['font-variation-settings'] = `"wght" 100, "slnt" 0`
    activeGlyphContainer.style['font-variation-settings'] = `"wght" 100, "slnt" 0`
  }else if(typeValue=="Extra-Light Italic"){
    glyphsContainerInner.style['font-variation-settings'] = `"wght" 100, "slnt" 1`
    hoverGlyph.style['font-variation-settings'] = `"wght" 100, "slnt" 1`
    activeGlyphContainer.style['font-variation-settings'] = `"wght" 100, "slnt" 1`
  }else if(typeValue=="Light"){
    glyphsContainerInner.style['font-variation-settings'] = `"wght" 200, "slnt" 0`
    hoverGlyph.style['font-variation-settings'] = `"wght" 200, "slnt" 0`
    activeGlyphContainer.style['font-variation-settings'] = `"wght" 200, "slnt" 0`
  }else if(typeValue=="Light Italic"){
    glyphsContainerInner.style['font-variation-settings'] = `"wght" 200, "slnt" 1`
    hoverGlyph.style['font-variation-settings'] = `"wght" 200, "slnt" 1`
    activeGlyphContainer.style['font-variation-settings'] = `"wght" 200, "slnt" 1`
  }else if(typeValue=="Regular"){
    glyphsContainerInner.style['font-variation-settings'] = `"wght" 400, "slnt" 0`
    hoverGlyph.style['font-variation-settings'] = `"wght" 400, "slnt" 0`
    activeGlyphContainer.style['font-variation-settings'] = `"wght" 400, "slnt" 0`
  }else if(typeValue=="Regular Italic"){
    glyphsContainerInner.style['font-variation-settings'] = `"wght" 400, "slnt" 1`
    hoverGlyph.style['font-variation-settings'] = `"wght" 400, "slnt" 1`
    activeGlyphContainer.style['font-variation-settings'] = `"wght" 400, "slnt" 1`
  }else if(typeValue=="Medium"){
    glyphsContainerInner.style['font-variation-settings'] = `"wght" 500, "slnt" 0`
    hoverGlyph.style['font-variation-settings'] = `"wght" 500, "slnt" 0`
    activeGlyphContainer.style['font-variation-settings'] = `"wght" 500, "slnt" 0`
  }else if(typeValue=="Medium Italic"){
    glyphsContainerInner.style['font-variation-settings'] = `"wght" 500, "slnt" 1`
    hoverGlyph.style['font-variation-settings'] = `"wght" 500, "slnt" 1`
    activeGlyphContainer.style['font-variation-settings'] = `"wght" 500, "slnt" 1`
  }else if(typeValue=="Semi-Bold"){
    glyphsContainerInner.style['font-variation-settings'] = `"wght" 600, "slnt" 0`
    hoverGlyph.style['font-variation-settings'] = `"wght" 600, "slnt" 0`
    activeGlyphContainer.style['font-variation-settings'] = `"wght" 600, "slnt" 0`
  }else if(typeValue=="Semi-Bold Italic"){
    glyphsContainerInner.style['font-variation-settings'] = `"wght" 600, "slnt" 1`
    hoverGlyph.style['font-variation-settings'] = `"wght" 600, "slnt" 1`
    activeGlyphContainer.style['font-variation-settings'] = `"wght" 600, "slnt" 1`
  }else if(typeValue=="Bold"){
    glyphsContainerInner.style['font-variation-settings'] = `"wght" 700, "slnt" 0`
    hoverGlyph.style['font-variation-settings'] = `"wght" 700, "slnt" 0`
    activeGlyphContainer.style['font-variation-settings'] = `"wght" 700, "slnt" 0`
  }else if(typeValue=="Bold Italic"){
    glyphsContainerInner.style['font-variation-settings'] = `"wght" 700, "slnt" 1`
    hoverGlyph.style['font-variation-settings'] = `"wght" 700, "slnt" 1`
    activeGlyphContainer.style['font-variation-settings'] = `"wght" 700, "slnt" 1`
  }else if(typeValue=="Black"){
    glyphsContainerInner.style['font-variation-settings'] = `"wght" 800, "slnt" 0`
    hoverGlyph.style['font-variation-settings'] = `"wght" 800, "slnt" 0`
    activeGlyphContainer.style['font-variation-settings'] = `"wght" 800, "slnt" 0`
  }else if(typeValue=="Black Italic"){
    glyphsContainerInner.style['font-variation-settings'] = `"wght" 800, "slnt" 1`
    hoverGlyph.style['font-variation-settings'] = `"wght" 800, "slnt" 1`
    activeGlyphContainer.style['font-variation-settings'] = `"wght" 800, "slnt" 1`
  }
  
})




// OPTIONS SECTION ==============================================================

      const samplesObserver = new IntersectionObserver(
        entries => {
          entries.forEach(entry => {
            if (entry.intersectionRatio >= 0.1) {
              entry.target.classList.add('active-sample')
              
            } else {
              entry.target.classList.remove('active-sample')
            }
          })
        },
        {
          threshold: [0, 0.1, 1]
        }
      )
      
      
      samplesContainers.forEach(sample=>{
        samplesObserver.observe(sample)
      })
      samplesObserver.observe(testerStart)
      // samplesContainers.forEach(container=>{
      //   samplesObserver.observe(container)
      // })


      

      weightTag.addEventListener('input', ()=>{
          let weight = weightTag.value
          let slant = slantTag.value
          const activeSamples = document.querySelectorAll('.active-sample')

          activeSamples.forEach(sample=>{
            const sampleText = sample.querySelector('p.sample')
            if(sampleText){
              sampleText.style['font-variation-settings'] = `"wght" ${weight}, "slnt" ${slant}`
            }
            

            const sampleStyleOutput = sample.querySelector('span')
            if(sampleStyleOutput){
              sampleStyleOutput.innerHTML = `Custom: "wght" ${weight}, "slnt" ${slant}`
            }
            
          })
          testerText.style['font-variation-settings'] = `"wght" ${weight}, "slnt" ${slant}`
          weightOutput.innerHTML = weight

          
      })

      slantTag.addEventListener('input', ()=>{
        let weight = weightTag.value
        let slant = slantTag.value
        const activeSamples = document.querySelectorAll('.active-sample')

        activeSamples.forEach(sample=>{
            const sampleText = sample.querySelector('p.sample')
            if(sampleText){
              sampleText.style['font-variation-settings'] = `"wght" ${weight}, "slnt" ${slant}`
            }
            

            const sampleStyleOutput = sample.querySelector('span')
            if(sampleStyleOutput){
              sampleStyleOutput.innerHTML = `Custom: "wght" ${weight}, "slnt" ${slant}`
            }
            
        })

        slantOutput.innerHTML = slant
        testerText.style['font-variation-settings'] = `"wght" ${weight}, "slnt" ${slant}`

      })

      lineHeightTag.addEventListener('input', ()=>{
        

        let lineHeight = lineHeightTag.value
        const activeSamples = document.querySelectorAll('.active-sample')

        activeSamples.forEach(sample=>{
          const sampleText = sample.querySelector('p.sample')
          if(sampleText){
            sampleText.style.lineHeight = lineHeight
          }
          
          
        })
        testerText.style.lineHeight = lineHeight
        lineHeightOutput.innerHTML = lineHeight

      })

      letterSpacingTag.addEventListener('input', ()=>{

        let letterSpacing = letterSpacingTag.value 
        const activeSamples = document.querySelectorAll('.active-sample')
        
        activeSamples.forEach(sample=>{
          const sampleText = sample.querySelector('p.sample')
          if(sampleText){
            sampleText.style.letterSpacing = letterSpacing + 'em'
          }
          
        })
        testerText.style.letterSpacing = letterSpacing + 'em'
        letterSpacingOutput.innerHTML = letterSpacing 

      })



        openTypeCheckboxes.forEach(checkbox=>{
          checkbox.addEventListener('click', ()=>{
              checkbox.classList.toggle('selected')
              if(checkbox.classList.contains('ss01')){

                document.querySelector('p.ss01').classList.toggle('selected')
                samples.forEach(sample=>{
                  sample.classList.toggle('ss01')
                })
                testerText.classList.toggle('ss01')

              }  else if(checkbox.classList.contains('liga')){

                document.querySelector('p.liga').classList.toggle('selected')
                samples.forEach(sample=>{
                  sample.classList.toggle('liga')
                })
                testerText.classList.toggle('liga')
              }  else if(checkbox.classList.contains('dlig')){

                document.querySelector('p.dlig').classList.toggle('selected')
                samples.forEach(sample=>{
                  sample.classList.toggle('dlig')
                })
                testerText.classList.toggle('dlig')
              }  else if(checkbox.classList.contains('frac')){
                
                document.querySelector('p.frac').classList.toggle('selected')
                samples.forEach(sample=>{
                  sample.classList.toggle('frac')
                })
                testerText.classList.toggle('frac')
              }
          })
        })


      const optionsSelect = document.querySelector('select.options-select')
        optionsSelect.addEventListener('change', ()=>{
          const typeValue = optionsSelect.value

          if(typeValue=="Extra-Light"){
            samples.forEach(sample=>{
              sample.style['font-variation-settings'] = `"wght" 100, "slnt" 0`
            })
          }else if(typeValue=="Extra-Light Italic"){
            samples.forEach(sample=>{
              sample.style['font-variation-settings'] = `"wght" 100, "slnt" 1`
            })
          }else if(typeValue=="Light"){
            samples.forEach(sample=>{
              sample.style['font-variation-settings'] = `"wght" 200, "slnt" 0`
            })
          }else if(typeValue=="Light Italic"){
            samples.forEach(sample=>{
              sample.style['font-variation-settings'] = `"wght" 200, "slnt" 1`
            })
          }else if(typeValue=="Regular"){
            samples.forEach(sample=>{
              sample.style['font-variation-settings'] = `"wght" 400, "slnt" 0`
            })
          }else if(typeValue=="Regular Italic"){
            samples.forEach(sample=>{
              sample.style['font-variation-settings'] = `"wght" 400, "slnt" 1`
            })
          }else if(typeValue=="Medium"){
            samples.forEach(sample=>{
              sample.style['font-variation-settings'] = `"wght" 500, "slnt" 0`
            })
          }else if(typeValue=="Medium Italic"){
            samples.forEach(sample=>{
              sample.style['font-variation-settings'] = `"wght" 500, "slnt" 1`
            })
          }else if(typeValue=="Semi-Bold"){
            samples.forEach(sample=>{
              sample.style['font-variation-settings'] = `"wght" 600, "slnt" 0`
            })
          }else if(typeValue=="Semi-Bold Italic"){
            samples.forEach(sample=>{
              sample.style['font-variation-settings'] = `"wght" 600, "slnt" 1`
            })
          }else if(typeValue=="Bold"){
            samples.forEach(sample=>{
              sample.style['font-variation-settings'] = `"wght" 700, "slnt" 0`
            })
          }else if(typeValue=="Bold Italic"){
            samples.forEach(sample=>{
              sample.style['font-variation-settings'] = `"wght" 700, "slnt" 1`
            })
          }else if(typeValue=="Black"){
            samples.forEach(sample=>{
              sample.style['font-variation-settings'] = `"wght" 800, "slnt" 0`
            })
          }else if(typeValue=="Black Italic"){
            samples.forEach(sample=>{
              sample.style['font-variation-settings'] = `"wght" 800, "slnt" 1`
            })
          }
        })

        


}


introOptions()


