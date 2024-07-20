import React from 'react'
import Logo from './Logo'

const Footer = () => {
	return (
		<footer className="bg-main-light/40 rounded-t-[10px] p-5">
			<div className='flex justify-center'>
				<Logo />
			</div>
			<h6 className="text-white text-center">
				© 2024 Swapper made by DuongMach
			</h6>
		</footer>
	)
}

export default Footer
