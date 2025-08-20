import Note from "../models/Note.js";

export async function getAllNotes(_,res){
    try{
        const notes = await Note.find(undefined, undefined,undefined).sort({createdAt:-1}); //newest first
        if(notes.length === 0){
           return res.status(404).json({message:"There is no note in database"})
        }
        res.status(200).json(notes);

    }catch(error){
        console.error("Error in getAllNotes Method",error);
        res.status(500).json({error:"Internal Server Error"})
    }
}

export async function getNoteById(req,res){
    try{
        const {id} = req.params;
        const note = await Note.findById(id);
        if(!note) return res.status(404).json({message:"Not Found"});
        res.status(200).json(note);
    }catch(error){
        console.error("Error in getAllNotes Method",error);
        res.status(500).json({error:"Internal Server Error"})
    }
}

export async function createNote(req,res){
    try{
        const {title,content} = req.body;
        const newNote = new Note({title,content});
        const newData = await newNote.save();
        res.status(201).json(newData );
    }catch(error){
        console.error("Error in create Note Method",error);
        res.status(500).json({error:"Internal Server Error"})
    }

}

export async function updateNote(req,res){
    try {
        const {title,content} = req.body;
        const {id} = req.params;
        const updateData = await Note.findByIdAndUpdate(id,{title,content},{new:"true"});
        if(!updateData) return res.status(404).json({message:"Not Found"})

        res.status(200).json({message:"Successfully updated note"});
    }catch(error){
        console.error("Error in update Note Method",error);
        res.status(500).json({error:"No note with this ID"})
    }
    res.status(200).json({message:"Note Updated Successfully!"});
}

export async function deleteNote(req,res) {
    try{
        const {id}= req.params;
        const deleteNote = await Note.findByIdAndDelete(id);
        res.status(200).json({message:"Successfully deleted note"});
    }catch(error){
        console.error("Error in delete Note Method",error);
        res.status(500).json({error:"No note with this ID"})
    }

}





