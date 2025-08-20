import express from "express";
import {createNote, getAllNotes, updateNote ,deleteNote ,getNoteById
}  from "../controllers/NoteController.js";

const router = express.Router();

router.get("/",getAllNotes);

router.get("/:id",getNoteById);

router.post("/create-note",createNote);

router.put("/:id",updateNote);

router.delete("/:id",deleteNote);


export default router;