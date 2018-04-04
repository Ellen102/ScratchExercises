# Scratch Exercises

[![Join the chat at https://gitter.im/ScratchExercises/Lobby](https://badges.gitter.im/ScratchExercises/Lobby.svg)](https://gitter.im/ScratchExercises/Lobby?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

Scratch exercises made with [scratch-LN](https://github.com/scratch4d/scratch-LN).

Write scratch exercises in markdown.

The exercises are then avaible in web form or in pdf form. 

Scripts for: *markdown -> html -> pdf*


## Developping 

### Prerequisites
- [pandoc](https://github.com/jgm/pandoc)
- recent version of [node](https://nodejs.org/en/) (I used v8.11.1)
- [puppeteer](https://github.com/GoogleChrome/puppeteer), ( `npm install puppeteer -g`)
- I used [cygwin](http://www.cygwin.com/) to run scripts

### Running scripts
You first have to generate the html with pandoc, next you can use the puppeteer script to make a pdf. Some script are provided but might need some adjustments to work for you.

#### Generating html

The file `create-web.sh` generates a html file using pandoc. Give as argument the 'name' of one or more files in the `markdown`-directory, this is without extension, it will output a html file in the `web`-directory. The html file contains the header defined in `head.html`. This header contains the reference to [scratch-LN](https://github.com/scratch4d/scratch-LN). If the option `-a` is provided all files in the `markdown`-directory will be generated.

verify in the `create-web.sh`:
- how you run pandoc

This script can be runned as 
- `./create-web.sh -a`
- `./create-web.sh test`
- `./create-web.sh test test2`

#### Generating pdf

The file `makePDF.js` generates the pdf using puppeteer. No arguments generates all files in the `web`-directory, the name(s) (same as above without extension) of selected files is also possible.

verify in the `makePDF.js`:
- module.paths
- directory const

This script can be runned as 
- `node makePDF.js`
- `node makePDF.js test`
- `node makePDF.js test test2`

## Authors

* **Ellen Vanhove** - ellen.vanhove@ugent.be



