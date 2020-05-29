const validator=require('validator')
const notes=require('./notes.js' )
const chalk=require('chalk')
const yargs=require('yargs')
console.log(chalk.blue.bgBlack('successSs'))


yargs.command({
    command:'remove',
    describe:'removes the entry using the title',
    builder:{
        title:{
            describe:'title',
            demandOption:true,
            type:'string'
        }
    },
    handler(argv) {
        notes.removeNote(argv.title)
        
        
    }
})

yargs.command({
    command:'add',
    describe:'Adding a note',
    builder:{
        title:{
            describe:'notes title',
            demandOption:true,
            type:'string'
        },
        body:{
            describe:'body of the notes',
            demandOption:true,
            typr:'string'
        }
    },
    handler(argv){
        notes.addNote(argv.title,argv.body)
    }

})


yargs.command({
    command:'list',
    describe:'lists out the list',
    handler:function(){
        notes.listNote()
    }
})
yargs.command({
    command:'read',
    describe:'reads whatever',
    builder:{
        title:{
            demandOption:true,
            type:'string'
        }
    },
    handler(argv){
        notes.readNote(argv.title)
    }
})
yargs.parse()