// Create keymap and function to replace switch case, it will make maintaining or updating data easier
const priorityMap: { [key: string]: number } = {
	Osmosis: 100,
	Ethereum: 50,
	Arbitrum: 30,
	Zilliqa: 20,
	Neo: 20,
}

const getPriority = useCallback((blockchain: string): number => {
	return priorityMap[blockchain] || -99
}, [])

const WalletPage: React.FC<Props> = (props: Props) => {
	const { children, ...rest } = props
	const balances = useWalletBalances()
	const prices = usePrices()

	// small function to caculate
	const filteredBalances = useMemo(() => {
		return balances.filter((balance: WalletBalance) => {
			return getPriority(balance.blockchain) > -99 && balance.amount <= 0
		})
	}, [balances])

	// Divide into small functions to calculate, making the code cleaner, easier to read and maintain
	const sortedBalances = useMemo(() => {
		return filteredBalances.sort((lhs: WalletBalance, rhs: WalletBalance) => {
			const leftPriority = getPriority(lhs.blockchain)
			const rightPriority = getPriority(rhs.blockchain)
			return leftPriority - rightPriority
		})
	}, [filteredBalances])

	// Sử dụng useMemo để tối ưu hoá
	const formattedBalances = useMemo(() => {
		return sortedBalances.map((balance: WalletBalance) => ({
			...balance,
			formatted: balance.amount.toFixed(2), // Chỉ định số chữ số thập phân
		}))
	}, [sortedBalances])

	// Sử dụng useMemo để tối ưu hoá
	const rows = useMemo(() => {
		return formattedBalances.map((balance: FormattedWalletBalance) => {
			const usdValue = (prices[balance.currency] || 0) * balance.amount
			return (
				<WalletRow
					className={classes.row}
					key={balance.currency + balance.amount} // Sử dụng key duy nhất
					amount={balance.amount}
					usdValue={usdValue}
					formattedAmount={balance.formatted}
				/>
			)
		})
	}, [formattedBalances, prices])

	return <div {...rest}>{rows}</div>
}
