import Split from 'react-split'
import { useState } from 'react'

import Sidebar from './Sidebar/Sidebar'

import './react-split.css'

const App = () => {
	const [notes, setNotes] = useState(
		JSON.parse(localStorage.getItem('notes')) || []
	)

	const addNote = (note) => {
		const newNotes = [...notes, note]
		console.log(newNotes)
		setNotes(newNotes)
		localStorage.setItem('notes', JSON.stringify([...notes, note]))
	}

	return (
		<Split
			className='h-screen split'
			sizes={[17, 83]}
			gutterSize={3}
			gutterAlign='start'
			minSize={250}
		>
			<div>
				<Sidebar addNote={addNote} notes={notes} />
			</div>
			<div></div>
		</Split>
	)
}

export default App
