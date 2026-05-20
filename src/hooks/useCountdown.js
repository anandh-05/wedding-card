import { useEffect, useState } from 'react'

function getTimeLeft(targetDate) {
  const target = new Date(targetDate).getTime()
  const difference = target - Date.now()

  if (Number.isNaN(target) || difference <= 0) {
    return {
      isComplete: true,
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    }
  }

  return {
    isComplete: false,
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((difference / (1000 * 60)) % 60),
    seconds: Math.floor((difference / 1000) % 60),
  }
}

export default function useCountdown(targetDate) {
  const [timeLeft, setTimeLeft] = useState(() => getTimeLeft(targetDate))

  useEffect(() => {
    const timer = window.setInterval(() => {
      setTimeLeft(getTimeLeft(targetDate))
    }, 1000)

    return () => {
      window.clearInterval(timer)
    }
  }, [targetDate])

  return timeLeft
}
