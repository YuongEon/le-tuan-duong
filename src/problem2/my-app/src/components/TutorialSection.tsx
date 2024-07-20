import React from 'react'

const tutorialData = [
	{
		step: 1,
		title: 'Enter your coins',
		desc: 'Enter the number of coins you want to swap',
	},
	{
		step: 2,
		title: 'Select your coin type',
		desc: 'Click the drop-down list to select your coin',
	},
	{
		step: 3,
		title: 'Select your receive coin',
		desc: 'Click the drop-down list in the “Receive box” to select the coin you want to receive',
	},
	{
		step: 4,
		title: 'Well done!',
		desc: 'Congratulations! You have successfully swapped your coins',
	},
]

const TutorialSection = () => {
	return (
		<section className="pb-40" id='tutorial'>
			<h3 className="text-center text-white text-[30px] font-semibold pb-6">
				How to <span className="uppercase text-main-light">swap</span> your
				coins
			</h3>

			<TutorialCardList />
		</section>
	)
}

export default TutorialSection

export const TutorialCardList = () => {
	return (
		<div className="grid grid-cols-4 gap-[24px]">
			{tutorialData.map((item) => (
				<TutorialCard
					key={item.step}
					step={item.step}
					title={item.title}
					description={item.desc}
				/>
			))}
		</div>
	)
}

interface TTutorialCard {
	title: string
	description: string
	step: number
}
const TutorialCard = (props: TTutorialCard) => {
	const { title, description, step } = props
	return (
		<div className="bg-main p-6 rounded-[10px] flex flex-col text-white">
			<h1 className="text-[60px] font-bold">{step}</h1>
			<h3 className="text-[30px] font-semibold mt-[20px]">{title}</h3>
			<p className="text-[16px] text-white/80 mt-[40px]">{description}</p>
		</div>
	)
}
