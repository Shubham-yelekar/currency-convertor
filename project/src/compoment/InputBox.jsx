import React from 'react'

const InputBox = ({
  label,
   amount,
   onAmountChange,
   onCurrencyChange,
   currencyOption = [],
   selectCurrency,
   amountDisabled = false,
   currencyDisabled = false,
  }) => {
  return (
    <div className ="flex items-center justify-center  gap-2 border border-e-slate-100">
      <div className='p-4 flex gap-2'>
        <label htmlFor="from" className=''>{label}</label>
        <input type="number" placeholder='Amount'
        disabled={amountDisabled }
        />
      </div>
      <div className='text-slate-300'>--------</div>
      <div className='p-4 flex gap-2'>
        <label htmlFor="from" className=''>Currency</label>
        <select name="currency-option" id="">
          <option value="usd">usd</option>
        </select>
      </div>
    </div>
  )
}

export default InputBox