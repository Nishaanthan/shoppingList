yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function(argv){
        console.log('Title' + argv.title)
    }

})

yargs.parse

const bookJSON = JSON.stringify(book)
const parsedData = JSON.parse(bookJSON)

const dataBuffer = fs.readFileSync('1-json.json')
const data = dataBuffer.toString()

