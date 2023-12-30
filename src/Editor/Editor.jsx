import Markdown from 'react-markdown'
import { useState } from 'react'

import Header from './Header'

const Editor = ({ note, updateNote }) => {
	const [activeTab, setActiveTab] = useState('Preview')

	const handleChangeNote = (event) => {
		const { value } = event.target
		updateNote(note.id, value)
	}

	return (
		<>
			<Header activeTab={activeTab} setActiveTab={setActiveTab} />
			{activeTab === 'Preview' ? (
				<main className='p-8'>
					<Markdown className='flex flex-col gap-4 markdown'>
						{note.note}
					</Markdown>
				</main>
			) : (
				<main className='px-8 pt-8'>
					<textarea
						name='note-textarea'
						id='note-textarea'
						className='w-full h-[85vh] textarea textarea-bordered font-mono text-lg resize-none'
						defaultValue={note.note}
						onChange={handleChangeNote}
					></textarea>
				</main>
			)}
		</>
	)
}

export default Editor
