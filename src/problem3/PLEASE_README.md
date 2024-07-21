# $\color{#AD88C6}{\textsf{Optimization React Typescript Code}}$

## 1. $\color{#E1AFD1}{\textsf{Key-map}}$

Old code

```example.tsx

const getPriority = (blockchain: any): number => {
	  switch (blockchain) {
	    case 'Osmosis':
	      return 100
	    case 'Ethereum':
	      return 50
	    case 'Arbitrum':
	      return 30
	    case 'Zilliqa':
	      return 20
	    case 'Neo':
	      return 20
	    default:
	      return -99
	  }
	}

```

New code

```example.tsx

const priorityMap: { [key: string]: number } = {
	Osmosis: 100,
	Ethereum: 50,
	Arbitrum: 30,
	Zilliqa: 20,
	Neo: 20,
}

const getPriority = (blockchain: string): number => {
	return priorityMap[blockchain] || -99
}

```

$\color{#EADFB4}{\textsf{=> The old code is less efficient and harder to maintain due to its repetitive and bulky switch-case structure. The new code is better because it uses a concise, scalable, and more readable object mapping for priorities, making it easier to extend and faster to execute.}}$

## 2. $\color{#E1AFD1}{\textsf{Split code}}$

Old code

```example.tsx

  const sortedBalances = useMemo(() => {
    return balances.filter((balance: WalletBalance) => {
		  const balancePriority = getPriority(balance.blockchain);
		  if (lhsPriority > -99) {
		     if (balance.amount <= 0) {
		       return true;
		     }
		  }
		  return false
		}).sort((lhs: WalletBalance, rhs: WalletBalance) => {
			const leftPriority = getPriority(lhs.blockchain);
		  const rightPriority = getPriority(rhs.blockchain);
		  if (leftPriority > rightPriority) {
		    return -1;
		  } else if (rightPriority > leftPriority) {
		    return 1;
		  }
    });
  }, [balances, prices]);

```

New code

```example.tsx

	const filteredBalances = useMemo(() => {
		return balances.filter((balance: WalletBalance) => {
			return getPriority(balance.blockchain) > -99 && balance.amount <= 0
		})
	}, [balances])

	const sortedBalances = useMemo(() => {
		return filteredBalances.sort((lhs: WalletBalance, rhs: WalletBalance) => {
			const leftPriority = getPriority(lhs.blockchain)
			const rightPriority = getPriority(rhs.blockchain)
			return leftPriority - rightPriority
		})
	}, [filteredBalances])

```

$\color{#EADFB4}{\textsf{=> Divide into small functions to calculate, making the code cleaner, easier to read and maintain.}}$

## 3. $\color{#E1AFD1}{\textsf{Use useMemo()}}$

Old code

```example.tsx

  const formattedBalances = sortedBalances.map((balance: WalletBalance) => {
    return {
      ...balance,
      formatted: balance.amount.toFixed()
    }
  })

  const rows = sortedBalances.map((balance: FormattedWalletBalance, index: number) => {
    const usdValue = prices[balance.currency] * balance.amount;
    return (
      <WalletRow
        className={classes.row}
        key={index}
        amount={balance.amount}
        usdValue={usdValue}
        formattedAmount={balance.formatted}
      />
    )
  })


```

New code

```example.tsx

	const formattedBalances = useMemo(() => {
		return sortedBalances.map((balance: WalletBalance) => ({
			...balance,
			formatted: balance.amount,
		}))
	}, [sortedBalances])

	const rows = useMemo(() => {
		return formattedBalances.map((balance: FormattedWalletBalance) => {
			const usdValue = (prices[balance.currency] || 0) * balance.amount
			return (
				<WalletRow
					className={classes.row}
					key={index}
					amount={balance.amount}
					usdValue={usdValue}
					formattedAmount={balance.formatted}
				/>
			)
		})
	}, [formattedBalances, prices])

```

$\color{#EADFB4}{\textsf{=> Use useMemo to reduce the number of loops and achieve better performance.}}$

## 4. $\color{#E1AFD1}{\textsf{Unique key}}$

Old code

```example.tsx

const rows = sortedBalances.map((balance: FormattedWalletBalance, index: number) => {
    const usdValue = prices[balance.currency] * balance.amount;
    return (
      <WalletRow
        className={classes.row}
        key={index}
        amount={balance.amount}
        usdValue={usdValue}
        formattedAmount={balance.formatted}
      />
    )
  })

```

New code

```example.tsx

	const rows = useMemo(() => {
		return formattedBalances.map((balance: FormattedWalletBalance) => {
			const usdValue = (prices[balance.currency] || 0) * balance.amount
			return (
				<WalletRow
					className={classes.row}
					key={index}
					amount={balance.amount}
					usdValue={usdValue}
					formattedAmount={balance.formatted}
				/>
			)
		})
	}, [formattedBalances, prices])

```

$\color{#EADFB4}{\textsf{=> Use unique keys to help React recognize elements, increase performance, and help React optimize the rendering process.}}$

## 5. $\color{#E1AFD1}{\textsf{Shorten Amount (Optional)}}$

Old code

```example.tsx
	const formattedBalances = useMemo(() => {
		return sortedBalances.map((balance: WalletBalance) => ({
			...balance,
			formatted: balance.amount,
		}))
	}, [sortedBalances])

```

New code

```example.tsx

		const formattedBalances = useMemo(() => {
		return sortedBalances.map((balance: WalletBalance) => ({
			...balance,
			formatted: balance.amount$\color{#F6995C}{\textsf{.toFixed(2)}}$,
		}))
	}, [sortedBalances])

```

$\color{#EADFB4}{\textsf{=> Use unique keys to help React recognize elements, increase performance, and help React optimize the rendering process.}}$

## $\color{#E1AFD1}{\textsf{Contact}}$

If you have any questions or suggestions, feel free to reach out:

- Email: [letuanduong03@gmail.com](letuanduong03@gmail.com)
- GitHub: [YuongEon](https://github.com/YuongEon)

