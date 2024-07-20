import { useEffect, useState } from 'react'
import { ICoin, ICoinState } from '../../types/coin'
import CustomSelect from '../CustomSelect'

interface ISwapFormField {
	coin: ICoinState
	setCoin: (value: ICoinState) => void
	data: ICoin[]
	lalel: string
}

const SwapFormField = (props: ISwapFormField) => {
	const { coin, setCoin, data, lalel } = props

	const { name } = coin

	useEffect(() => {
		setValue(coin)
	}, [coin])

	const [value, setValue] = useState(coin)

	const handleChangeValue = (event: React.ChangeEvent<HTMLInputElement>) => {
		let { value } = event.target

		const splitValue = value.split('')

		let valueConvert =
			splitValue.length > 1 && splitValue[0] === '0' && splitValue[1] !== '.'
				? splitValue[1] !== '.'
					? splitValue[1]
					: ''
				: value

		if (
			splitValue[0] === '.' ||
			(splitValue[splitValue.length - 1] === '.' &&
				splitValue[splitValue.length - 2] === '.')
		)
			return

		const regex = new RegExp('^[0-9.]*$')

		if (!regex.test(valueConvert)) return

		setValue({
			amount: valueConvert,
			name: name,
		})
		setCoin({
			amount: valueConvert,
			name: name,
		})
	}

	const handleChangeCoin = (name: string) => {
		setCoin({
			amount: value.amount,
			name: name,
		})
	}

	const handleCheckBlur = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { value } = e.target
		if (value === '') {
			setValue((prev) => ({
				...prev,
				amount: '0',
			}))
		}
	}

	return (
		<div className="flex flex-col w-[424px] max-w-[424px]">
			<label htmlFor="" className="text-white pb-1">
				{lalel}
			</label>
			<div className="text-[#333] text-[18px] font-semibold flex flex-row items-center bg-white px-4 gap-4 rounded-[6px] ">
				<input
					type="text"
					className="flex-[1] h-[60px] outline-none"
					value={value.amount}
					onChange={(e) => handleChangeValue(e)}
					onBlur={(e) => handleCheckBlur(e)}
				/>

				<CustomSelect selected={name}>
					{data?.map((coin) => (
						<CustomSelect.Option
							key={coin.currency}
							value={coin.currency}
							onSelect={handleChangeCoin}
						>
							<div className="flex flex-row items-center gap-2 w-[200px] px-2 py-1 rounded hover:bg-main/20 transition-all">
								<img src={coin.image} alt="coin_iamge" width={20} />
								<span>{coin.currency}</span>
							</div>
						</CustomSelect.Option>
					))}
				</CustomSelect>
			</div>
		</div>
	)
}

export default SwapFormField
