import React from 'react'
import { cn } from '../utils/cn'

interface IButtonBase extends React.HTMLAttributes<HTMLButtonElement> {}
export const ButtonBase = (props: IButtonBase) => {
	return (
		<button
			{...props}
			className={cn(
				'bg-white text-[#333] font-semibold',
				props.className
			)}
		>
			{props.children}
		</button>
	)
}

interface IButtonPrimary extends React.HTMLAttributes<HTMLButtonElement> {}
export const ButtonPrimary = (props: IButtonPrimary) => {
	return (
		<button
			{...props}
			className={cn(
				'bg-main text-white font-semibold',
				props.className
			)}
		>
			{props.children}
		</button>
	)
}

interface IButtonPrimaryLight extends React.HTMLAttributes<HTMLButtonElement> {
	disabled?: boolean
}
export const ButtonPrimaryLight = (props: IButtonPrimaryLight) => {
	const { disabled } = props
	return (
		<button
			{...props}
			disabled={disabled}
			className={cn(
				'bg-main-light text-[#333] font-semibold transition-all',
				disabled ? '' : 'hover:bg-[#d2beff]',
				props.className
			)}
		>
			{props.children}
		</button>
	)
}

