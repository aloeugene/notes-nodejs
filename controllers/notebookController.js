import note from '../models/notebookModel.js';

const getNote = (req, res) => {
  note.findById(req.params.noteId, (err, note) => {
    if (err) res.send(err);

    res.json(note);
  });
};

const getAllNotes = (req, res) => {
  note.find({}, (err, notes) => {
    if (err) res.send(err);

    res.json(notes);
  });
};

const createNote = (req, res) => {
  const newNote = new note(req.body);

  newNote.save((err, note) => {
    if (err) res.send(err);

    res.json(note);
  });
};

const updateNote = (req, res) => {
  note.findOneAndUpdate({ _id: req.params.noteId }, req.body, (err, note) => {
    if (err) res.send(err);

    res.json(note);
  });
};

const deleteNote = (req, res) => {
  note.remove({ _id: req.params.noteId }, err => {
    if (err) res.send(err);

    res.json({
      message: `note ${req.params.noteId} successfully deleted`
    });
  });
};

export default {
  getNote,
  getAllNotes,
  createNote,
  deleteNote,
  updateNote
}
