export interface ICoin {
	currency: string
	date: string | Date
	price: number
	image: string
}

export interface ICoinState {
	name: string
	amount: string
}