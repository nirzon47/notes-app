import Split from 'react-split'
import './react-split.css'
import Sidebar from './Sidebar/Sidebar'

const App = () => {
	return (
		<Split
			className='split h-screen'
			sizes={[20, 80]}
			gutterSize={3}
			gutterAlign='start'
			minSize={250}
		>
			<div>
				<Sidebar />
			</div>
			<div></div>
		</Split>
	)
}

export default App
