const Header = ({ activeTab, setActiveTab }) => {
	const handleClick = () => {
		if (activeTab === 'Preview') {
			setActiveTab('Edit')
		} else {
			setActiveTab('Preview')
		}
	}

	return (
		<div className='h-[8vh] bg-emerald-300 border-b-2 p-4 flex items-center text-black'>
			{activeTab === 'Preview' ? (
				<div className='flex items-center gap-2'>
					<button
						className='border-2 border-black px-2 py-0.5 rounded-md'
						disabled
					>
						Preview
					</button>
					<button className='btn btn-sm' onClick={handleClick}>
						Edit
					</button>
				</div>
			) : (
				<div className='flex items-center gap-2'>
					<button className='btn btn-sm' onClick={handleClick}>
						Preview
					</button>
					<button
						className='border-2 border-black px-2 py-0.5 rounded-md'
						disabled
					>
						Edit
					</button>
					<button></button>
				</div>
			)}
		</div>
	)
}

export default Header
