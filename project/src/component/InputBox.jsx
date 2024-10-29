import React, {useId} from 'react'

const InputBox = ({
  label,
   amount,
   onAmountChange,
   onCurrencyChange,
   currencyOptions = [],
   selectCurrency,
   amountDisabled = false,
   currencyDisabled = false,
  }) => {
    const amountInputId = useId()
  return (
    <div className ="flex items-center  gap-2 border border-slate-400">
      <div className='p-4 flex flex-col gap-2'>
        <label htmlFor={amountInputId} className=''>{label}</label>
        <input id={amountInputId} className='border border-slate-300 p-2 rounded-md'
        type="number"
        placeholder='Amount'
        disabled={amountDisabled }
        value={amount}
        onChange={(e) => onAmountChange &&
          onAmountChange(Number(e.target.value))
        }
        />
      </div>

      <div className='p-4 flex flex-col gap-2'>
        <label htmlFor="from" className=''>Currency</label>
        <select className='border border-slate-300 p-2 rounded-md' name="currency-option" id=""
        value={selectCurrency}
        onChange={(e)=> onCurrencyChange &&
          onCurrencyChange(e.target.value)
        }
        disabled={currencyDisabled}>

        {currencyOptions.map((currency) => (<option key={currency}
        value={currency}>{currency}</option>))}

        </select>
      </div>
    </div>
  )
}

export default InputBox