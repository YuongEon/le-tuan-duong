import React, { useEffect, useState } from 'react'
import SwapFormField from './SwapFormField'
import { ICoin, ICoinState } from '../../types/coin'
import { useSearchParams } from 'react-router-dom'

interface ICurrentCoinField {
	data: ICoin[]
	currentCoin: ICoinState
	setCurrentCoin: (value: ICoinState) => void
	swapCoin: ICoinState
	setSwapCoin: (value: ICoinState) => void
}
const CurrentCoinField = (props: ICurrentCoinField) => {
	const { data, currentCoin, setCurrentCoin, swapCoin, setSwapCoin } = props

	const [currentQueryParameters, setSearchParams] = useSearchParams()

	const [value, setValue] = useState(currentCoin)

	useEffect(() => {
		setValue(currentCoin)
	}, [currentCoin])

	const handleSetCurrentCoin = (val: ICoinState) => {
		const inputCoin = data.find((coin) => coin.currency === val.name)
		const outputCoin = data.find((coin) => coin.currency === swapCoin.name)

		if (!inputCoin || !outputCoin) return

		setCurrentCoin({
			amount: val.amount,
			name: val.name,
		})

		if (val.name !== outputCoin.currency) {
			setSwapCoin({
				amount: (
					(+val.amount * +inputCoin.price) /
					+outputCoin.price
				).toString(),
				name: outputCoin.currency,
			})
		} else {
			setSwapCoin({
				amount: val.amount,
				name: outputCoin.currency,
			})
		}

		setSearchParams({ sell: inputCoin.currency, buy: outputCoin.currency })
	}

	return (
		<>
			<SwapFormField data={data} coin={value} setCoin={handleSetCurrentCoin} lalel='Sell'/>
		</>
	)
}

export default CurrentCoinField
