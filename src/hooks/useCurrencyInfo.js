import { useEffect, useState } from "react"

const useCurrencyInfo = () => {
  const [data, setData] = useState({});
  useEffect(() => {
    console.log("api called");
    fetch("https://api.currencyapi.com/v3/latest?apikey=cur_live_BOCJJUUPEUJ18aRtP178GkySdSB7upZblkRUYPpJ")
      .then((res) => res.json())
      .then(res => setData(res.data));
  }, []);

  return data;
}

export default useCurrencyInfo;
