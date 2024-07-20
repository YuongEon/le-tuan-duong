import React, { useEffect, useState } from 'react'
import SwapFormField from './SwapFormField'
import { ICoin, ICoinState } from '../../types/coin'
import { useSearchParams } from 'react-router-dom'

interface ISwapCoinField {
	data: ICoin[]
	currentCoin: ICoinState
	setCurrentCoin: (value: ICoinState) => void
	swapCoin: ICoinState
	setSwapCoin: (value: ICoinState) => void
}
const SwapCoinField = (props: ISwapCoinField) => {
	const { data, currentCoin, setCurrentCoin, swapCoin, setSwapCoin } = props

	const [currentQueryParameters, setSearchParams] = useSearchParams()

	const [value, setValue] = useState(swapCoin)

	useEffect(() => {
		setValue(swapCoin)
	}, [swapCoin])

	const handleSetSwapCoin = (val: ICoinState) => {
		const inputCoin = data.find((coin) => coin.currency === currentCoin.name)
		const outputCoin = data.find((coin) => coin.currency === val.name)

		if (!inputCoin || !outputCoin) return

		if (val.name !== value.name) {
			setCurrentCoin({
				amount: currentCoin.amount,
				name: currentCoin.name,
			})

			setSwapCoin({
				amount: (
					(+currentCoin.amount * +inputCoin.price) /
					+outputCoin.price
				).toString(),
				name: val.name,
			})
		}

		if (val.amount !== value.amount) {
			if (val.name !== inputCoin.currency) {
				setSwapCoin({
					amount: val.amount,
					name: val.name,
				})

				setCurrentCoin({
					amount: (
						(+val.amount * +outputCoin.price) /
						+inputCoin.price
					).toString(),
					name: inputCoin.currency,
				})
			} else {
				setSwapCoin({
					amount: val.amount,
					name: val.name,
				})

				setCurrentCoin({
					amount: val.amount,
					name: inputCoin.currency,
				})
			}
		}

		setSearchParams({ sell: inputCoin.currency, buy: outputCoin.currency })
	}

	return (
		<>
			<SwapFormField data={data} coin={value} setCoin={handleSetSwapCoin} lalel='Buy'/>
		</>
	)
}

export default SwapCoinField
