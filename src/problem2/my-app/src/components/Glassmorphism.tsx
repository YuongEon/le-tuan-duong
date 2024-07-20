import React from 'react'
import { cn } from '../utils/cn'

interface Props extends React.HTMLAttributes<HTMLDivElement> {
	children: React.ReactNode
	className?: string
}
const Glassmorphism = (props: Props) => {
	const { children, className = '' } = props
	return (
		<div
      {...props}
			className={cn(
				'backdrop-blur-md bg-white/25 rounded-[10px] border border-white/20 transition-all',
				className
			)}
		>
			{children}
		</div>
	)
}

export default Glassmorphism
