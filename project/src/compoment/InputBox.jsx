import React from 'react'

const InputBox = ({label, amount, onAmountOption}) => {
  return (
    <div className ="flex items-center justify-center  gap-2 border border-e-slate-100">
    <div className='p-4 flex gap-2'>
      <label htmlFor="from" className=''>From</label>
      <input type="number" placeholder='Amount' />
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