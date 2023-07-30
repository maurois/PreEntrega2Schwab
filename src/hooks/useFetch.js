import { useEffect, useState } from "react";

const useFetch = (url) => {

  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState()

  useEffect(() => {
    fetch(url, {mode: 'no-cors'})
      .then(res => res.json())
      .then(dat => {
        setData(dat)
        setLoading(false)
      })
      .catch(err => setError(err))
  }, [url])

  return {data, loading, error};
}
 
export default useFetch;