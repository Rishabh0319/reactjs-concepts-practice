import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
    const [data,setData] = useState({});
    const url = `https://currency-conversion-and-exchange-rates.p.rapidapi.com/latest?from=${currency}&to=EUR%2CGBP`;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '7f27bae43dmsh9491baff274926ap169b6ajsn219808f8e97c',
            'X-RapidAPI-Host': 'currency-conversion-and-exchange-rates.p.rapidapi.com'
        }
    };

    useEffect(()=>{
        fetch(url, options)
        .then((res)=> res.json())
        .then((res)=>{
           setData(res); 
           console.log(data);
        }); 
    },[currency])
    return data;
}

export default useCurrencyInfo;