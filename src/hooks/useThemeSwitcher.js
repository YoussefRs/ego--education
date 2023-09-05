import { useEffect, useState } from 'react'

const  useThemeSwitcher = () => {
  const [isNight, setIsNight] = useState(true)

  useEffect(() => {
    const isLight = window.matchMedia('(prefers-color-scheme: light)').matches
    if (isLight) {
      setIsNight(false)
    }
  }, [])

  return { isNight }
}

export default useThemeSwitcher