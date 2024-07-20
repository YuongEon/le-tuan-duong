import React from 'react'
import { Link } from 'react-router-dom'

const Logo = () => {
	const scrollToTop = () => {
		window.requestAnimationFrame(() => {
			window.scrollTo(0, 0)
		})
	}

	return (
		<Link
			to="/"
			onClick={() => scrollToTop()}
			className="uppercase text-[30px] text-white font-semibold cursor-pointer"
		>
			<span className="text-main-light">S</span>wapper
		</Link>
	)
}

export default Logo
