import { useState, useEffect } from 'react'

export const useDebounce = (value, milliSeconds, setLoading) => {
  const [debouncedValue, setDebouncedValue] = useState(value)

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value)
      setLoading(false)
    }, milliSeconds)
    setLoading(true)
    return () => {
      clearTimeout(handler)
    }
  }, [value, milliSeconds])

  return debouncedValue
}
