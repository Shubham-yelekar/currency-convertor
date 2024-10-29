import { useEffect, useState } from "react";

function useCurrencyInfo(currency){ //takes the currency as input parameter
  const [data, setData] = useState({}) // it has an emty array just so it does not crash
  useEffect(() => { // whenever the currency is changes it will call
      fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2024.10.28/v1/currencies/${currency}.json`)
      .then((res)=>res.json()) //convert to json
      .then((res)=>setData(res[currency])) // set in data

  }, [currency]) // dependancy on change of currency

return data //returning data

}
export default useCurrencyInfo;