import { useEffect, useState } from 'react'

const formatTime = (date) =>
  new Intl.DateTimeFormat('pt-PT', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
  }).format(date)

const formatDate = (date) => {
  const formattedDate = new Intl.DateTimeFormat('pt-PT', {
    weekday: 'long',
    day: '2-digit',
    month: 'long',
  }).format(date)

  return `${formattedDate.charAt(0).toUpperCase()}${formattedDate.slice(1)}`
}

const useCurrentTime = () => {
  const [now, setNow] = useState(() => new Date())

  useEffect(() => {
    const timer = setInterval(() => {
      setNow(new Date())
    }, 60000)

    return () => clearInterval(timer)
  }, [])

  return {
    currentTime: formatTime(now),
    currentDate: formatDate(now),
  }
}

export default useCurrentTime