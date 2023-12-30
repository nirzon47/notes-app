import { FaPlus } from 'react-icons/fa6'

const Header = () => {
	return (
		<header className='flex justify-between items-center bg-accent border-b-2'>
			<h1 className='text-3xl font-bold font-neon p-4 text-zinc-900'>
				Notes
			</h1>
			<div className='p-4'>
				<button className='btn btn-circle bg-black btn-sm'>
					<FaPlus />
				</button>
			</div>
		</header>
	)
}
export default Header
