import Note from './Note'

const Notes = ({ notes }) => {
	return notes.map((note) => (
		<Note
			key={note.id}
			note={note.note}
			color={note.color}
			title={note.title}
		/>
	))
}

export default Notes
