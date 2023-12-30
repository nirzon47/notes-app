import SimpleMDE from 'react-simplemde-editor'
import 'easymde/dist/easymde.min.css'

import ReactMarkdown from 'react-markdown'
import { useMemo } from 'react'
import ReactDOMServer from 'react-dom/server'

const Editor = ({ note, updateNote }) => {
	const handleChangeNote = (value) => {
		updateNote(note.id, value)
	}

	const customRendererOptions = useMemo(() => {
		return {
			previewRender() {
				return ReactDOMServer.renderToString(
					<ReactMarkdown className='markdown'>{note.note}</ReactMarkdown>
				)
			},
			minHeight: '83vh',
		}
	}, [note])

	return (
		<SimpleMDE
			value={note.note}
			onChange={handleChangeNote}
			options={customRendererOptions}
		/>
	)
}

export default Editor
