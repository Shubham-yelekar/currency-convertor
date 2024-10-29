import './App.css'
import { InputBox } from './component'
import useCurrencyInfo from './hooks/useCurrencyInfo'
import { useState , useEffect} from 'react'
function App() {
  const [amount, setAmount] = useState(0)
  const [from , setFrom] = useState("usd")
  const [to , setTo] = useState("inr")
  const [convertedAmount , setConvertedAmount] = useState(0)

  const currencyInfo = useCurrencyInfo(from)
  const options = Object.keys(currencyInfo)
  // console.log("from -" + amount + "; to - " + convertedAmount)
  const calculate = (amt = amount, fromCurrency = from, toCurrency = to) => {
    const rate = currencyInfo[toCurrency]
    if(rate){
      setConvertedAmount(amt * rate)
    }
  }
  const swapCurrency = () => {
    setFrom(to)
    setTo(from)

    setAmount(convertedAmount)
    setConvertedAmount(amount)
    calculate(convertedAmount, to, from)
    console.log("from -" + amount + "; to - " + convertedAmount)
  }

  useEffect(() => {
    calculate()
  }, [from, to])



  return (
    <>
      <h4 className='text-xl '>Currency Convertor 💵 </h4>
      <form onSubmit={(e) => {
        e.preventDefault()
        calculate()
      }}>
        <div className='bg-slate-100'>
          <InputBox
          label='From'
          amount={amount}
          onAmountChange={(amt)=> setAmount(amt)}
          currencyOptions={options}
          onCurrencyChange={(currency) => setAmount(currency)}
          selectCurrency={from}
          />
        </div>
        <button onClick={swapCurrency} className='bg-slate-200 py-2 px-4'>Swap</button>
        <div className='bg-slate-100'>
          <InputBox
          label='To'
          amount={convertedAmount}
          currencyOptions={options}
          onCurrencyChange={(currency) => setTo(currency)}
          selectCurrency={to}
          amountDisabled
          />
        </div>
        <button className='bg-stone-900 text-slate-50 px-4 py-2' type='submit '>Convert {from} to {to}</button>
      </form>
    </>
  )
}

export default App
