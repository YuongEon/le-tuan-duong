import React, {
	useState,
	useRef,
	useEffect,
	useMemo,
	cloneElement,
} from 'react'
import { IoIosArrowDown } from 'react-icons/io'

interface ICustomSelect {
	selected: any
	isDisable?: boolean
	children: React.ReactNode
}

const CustomSelect = ({
	selected,
	isDisable = false,
	children,
}: ICustomSelect) => {
	const [toggle, setToggle] = useState(false)
	const ref = useRef<HTMLDivElement>(null)

	const selectChild = useMemo(() => {
		const childArray = React.Children.toArray(children) as React.ReactElement[]
		const selectedChild = childArray.find(
			(child) => child.props.value === selected
		)

		if (!selectedChild) return null

		return cloneElement(selectedChild, {
			...selectedChild.props,
			children: React.cloneElement(selectedChild.props.children, {
				...selectedChild.props.children.props,
				className: 'flex flex-row items-center gap-2',
			}),
		})
	}, [children, selected])

	const handleToggle = () => {
		if (!isDisable) setToggle((prev) => !prev)
	}

	const handleClickOutside = (event: MouseEvent) => {
		if (ref.current && !ref.current.contains(event.target as Node)) {
			setToggle(false)
		}
	}

	useEffect(() => {
		document.addEventListener('mousedown', handleClickOutside)
		return () => {
			document.removeEventListener('mousedown', handleClickOutside)
		}
	}, [])

	return (
		<div className="relative" ref={ref}>
			<div
				onClick={handleToggle}
				className={`bg-white w-fit text-[#333] flex flex-row items-center cursor-pointer ${isDisable ? 'cursor-not-allowed opacity-50' : ''}`}
			>
				<span className="text-[#333]">
					{selected ? (
						<span className="w-fit bg-red-200">{selectChild}</span>
					) : (
						'Select your option'
					)}
				</span>
				<i className="text-[#333]">
					<IoIosArrowDown />
				</i>
			</div>
			{toggle && (
				<OptionList onClose={() => setToggle(false)}>{children}</OptionList>
			)}
		</div>
	)
}

export default CustomSelect

interface IOptionList {
	children: React.ReactNode
	onClose: () => void
}

const OptionList = ({ children, onClose }: IOptionList) => {
	return (
		<div className="absolute z-10 mt-5 top-[100%] right-0 bg-white text-[#333] rounded-[6px] overflow-hidden">
			<div className="max-h-[300px] overflow-y-auto p-3">
				{React.Children.map(children, (child) => {
					if (React.isValidElement(child)) {
						return React.cloneElement(child, {
							...child.props,
							handleCloseList: onClose,
						})
					}
					return child
				})}
			</div>
		</div>
	)
}

interface IOption extends React.ComponentPropsWithoutRef<'div'> {
	onSelect: (value: any) => void
	value: string | number
	handleCloseList?: () => void
}

CustomSelect.Option = ({
	children,
	onSelect,
	value,
	handleCloseList,
}: IOption) => {
	const handleSelect = () => {
		onSelect(value)
		handleCloseList?.()
	}

	return (
		<div onClick={handleSelect} className="text-[#333] cursor-pointer">
			{children}
		</div>
	)
}
