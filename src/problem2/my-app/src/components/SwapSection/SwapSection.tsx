import React from 'react'
import Glassmorphism from '../Glassmorphism'
import SwapForm from './SwapForm'

const SwapSection = () => {
	return (
		<section className="py-20" id="swap">
			<div className="relative">
				<h3 className="text-center text-[30px] uppercase text-main-light font-semibold">
					Swap
				</h3>
				<img
					src={'./assets/images/swapSection/eth_coin.png'}
					alt="coin_image"
					className="absolute left-0 top-[120px] w-[326px] animate-suspend"
				/>

				<Glassmorphism className="mt-5 max-w-[1028px] min-w-[1028px] mx-auto p-[40px]">
					<SwapForm />
				</Glassmorphism>

				<img
					src={'./assets/images/swapSection/usd_coin.png'}
					alt="coin_image"
					className="ml-auto w-[244px] animate-[suspend_3s_ease-in-out_infinite]"
				/>
			</div>
		</section>
	)
}

export default SwapSection
