import Markdown from 'react-markdown'
import { useState } from 'react'

import Header from './Header'

const Editor = ({ note }) => {
	const [activeTab, setActiveTab] = useState('Preview')

	return (
		<>
			<Header activeTab={activeTab} setActiveTab={setActiveTab} />
			{activeTab === 'Preview' ? (
				<main className='p-8 markdown'>
					<Markdown>{note.note}</Markdown>
				</main>
			) : (
				<main className='px-8 pt-8'>
					<textarea
						name='note-textarea'
						id='note-textarea'
						className='w-full h-[85vh] textarea textarea-bordered font-mono text-lg resize-none'
						value={note.note}
					></textarea>
				</main>
			)}
		</>
	)
}

export default Editor
