const fs=require('fs')

const chalk=require('chalk')
const listNote=() => {
    console.log(chalk.bgMagenta('List of notes are'))
    notes=getNote()
    const printnotes=notes.forEach((note) => console.log(note.title))
    
}

const removeNote=(titlek) =>{
    notes=getNote()
    const notesTOkeep=notes.filter((note) => note.title !==titlek
    )
    
   
saveNote(notesTOkeep)
if(notesTOkeep.length===notes.length){
    return console.log(chalk.bgGreen('This title doesnt exist'))

}else{
    return console.log(chalk.bgRed('Note deleted'))
}}

const getNote=() => {
    try{
        notesbuffer=fs.readFileSync('notesfile.json')
        notestr=notesbuffer.toString()
        notes=JSON.parse(notestr)
        return notes
    }catch(e){
        return []
    }
}
const addNote=(title,body) =>{


notes=getNote()
const dupfind=notes.find((note) => note.title===title
)

if(!dupfind){
const adder={
    title:title,
    body:body
}
notes.push(adder)

saveNote(notes)
return console.log(chalk.bgGreen('success grand success'))}
else {
   return console.log(chalk.bgRed('Title taken'))
}
}
const readNote =(title) =>{
    notes=getNote()
    const note=notes.find((note)=> note.title===title)
    if(note){
        console.log(chalk.green(note.title))
        console.log(note.body)
    }else{
        console.log(chalk.red('No note with the name'))
    }
}
const saveNote =(notes) =>{
    noteJSOn=JSON.stringify(notes)
    fs.writeFileSync('notesfile.json',noteJSOn)
}
module.exports ={
    addNote:addNote,
    removeNote:removeNote,
    listNote:listNote,
    readNote:readNote
}