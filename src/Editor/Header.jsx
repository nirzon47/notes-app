import {
	FaHeading,
	FaBold,
	FaItalic,
	FaStrikethrough,
	FaLink,
	FaQuoteRight,
	FaCode,
	FaImage,
} from 'react-icons/fa6'

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
				<div className='flex items-center gap-6'>
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
					</div>
					<div className='flex items-center gap-2'>
						<button className='btn btn-sm' title='Heading'>
							<FaHeading />
						</button>
						<button className='btn btn-sm' title='Bold'>
							<FaBold />
						</button>
						<button className='btn btn-sm' title='Italic'>
							<FaItalic />
						</button>
						<button className='btn btn-sm' title='Strike through'>
							<FaStrikethrough />
						</button>
					</div>
					<div className='flex items-center gap-2'>
						<button className='btn btn-sm' title='Link'>
							<FaLink />
						</button>
						<button className='btn btn-sm' title='Blockquote'>
							<FaQuoteRight />
						</button>
						<button className='btn btn-sm' title='Code Block'>
							<FaCode />
						</button>
						<button className='btn btn-sm' title='Image'>
							<FaImage />
						</button>
					</div>
				</div>
			)}
		</div>
	)
}

export default Header
