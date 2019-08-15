const inquirer = require('inquirer')
const package = require('../package.json')
const kexec = require('kexec')
const { red, black, blue, green, yellow } = require('chalk')
const stripAnsi = require('strip-ansi')
const path = require ('path')
const Rx = require('rxjs')
const fuzzy = require('fuzzy');

const keys = Object.keys(package.scripts)
const ignore = [ 'select', 's' ]

const descKey = []

keys.filter(k => !ignore.includes(k)).forEach((key)=>{
  let relativeHelpFilePath = package['script-help-files'][key]
  if (!relativeHelpFilePath) relativeHelpFilePath = 'scripts/no-help.json'
  const AbsoluteDirectoryPath = path.resolve(__dirname)
  const AbsouluteHelpFilePath = AbsoluteDirectoryPath + '/../' + relativeHelpFilePath
  const helpFile = require(AbsouluteHelpFilePath)
  descKey.push(yellow(key)+' -> '+green(helpFile.description))
})

inquirer.registerPrompt('autocomplete', require('inquirer-autocomplete-prompt'))

const searchScripts = (answers, input) => {
  input = input || ''
  return new Promise((resolve) => {
      const fuzzyResult = fuzzy.filter(input, descKey)
      resolve(
        fuzzyResult.map((el) => {
          return el.original
        })
      )
  })
}

inquirer.prompt([
  {
    type: 'autocomplete',
    name: 'script',
    message: 'select script',
    source: searchScripts,
  }
]).then(({ script }) => { 

  // Grabbing necessary data:
  const actualScript = stripAnsi(script.split(' ')[0])

  let relativeHelpFilePath = package['script-help-files'][actualScript]
  
  if (!relativeHelpFilePath) relativeHelpFilePath = 'scripts/no-help.json'
  const AbsoluteDirectoryPath = path.resolve(__dirname)
  const AbsouluteHelpFilePath = AbsoluteDirectoryPath + '/../' + relativeHelpFilePath
  const helpFile = require(AbsouluteHelpFilePath)

  if (!helpFile.params){
    kexec('yarn', [actualScript])
  }
  else {  
    const helpParams = helpFile.params
    const arrayOfHelpParams = []
    helpParams.forEach( (param)=> {
      if (param.mandatory === undefined || param.longForm === undefined || param.shortForm === undefined || param.expects === undefined || param.desc === undefined || param.name === undefined){
        throw new Error(red('In the help file, params are not complete!')) //TODO: change the error to something more meaningful
      }
      arrayOfHelpParams.push(param)
    })
    const pairOfOptionAndAnswer = []

    const prompts = new Rx.Subject()

    const createMessage = (item) => {
      const mand = !item.mandatory ? '[optional] - (leave blank if you dont want this option)' : '[mandatory]'
      return `Please Input ${item.name} as a ${item.expects}. ${mand} \n  Description: ${item.desc}`
    }

    const makePrompt = (msg) => (
      {
        type: 'input',
        name: `${msg}`,
        message: `${msg}\n`,
      })

    // starting the prompt if there are options
    
    inquirer.prompt(prompts).ui.process.subscribe(({ answer }) => {
      if (!!answer){
        pairOfOptionAndAnswer.push('-'+arrayOfHelpParams[0].shortForm)
        pairOfOptionAndAnswer.push(answer)
        arrayOfHelpParams.shift()
      }
      else {
        arrayOfHelpParams.shift()
      }
      if (arrayOfHelpParams.length !== 0) { 
        prompts.next(makePrompt(blue(createMessage(arrayOfHelpParams[0]))))
      } else {
        prompts.complete();
      }
    }, (err) => {
      console.warn(err);
    }, () => {
      kexec(`yarn`, [
        actualScript,
        ...pairOfOptionAndAnswer
      ])
      
    })
    
    if (arrayOfHelpParams.length !== 0){
      prompts.next(makePrompt(blue(createMessage(arrayOfHelpParams[0]))))
    }
  }
})