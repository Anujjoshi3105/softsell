"use client"

import { useEffect, useState, useRef } from "react"
import { useInView } from "framer-motion"

interface CountUpProps {
  end: number
  start?: number
  duration?: number
  decimals?: number
}

export default function CountUp({ end, start = 0, duration = 2, decimals = 0 }: CountUpProps) {
  const [count, setCount] = useState(start)
  const countRef = useRef<HTMLSpanElement>(null)
  const isInView = useInView(countRef, { once: true, margin: "-100px" })
  const [hasAnimated, setHasAnimated] = useState(false)

  useEffect(() => {
    if (isInView && !hasAnimated) {
      let startTimestamp: number | null = null
      const step = (timestamp: number) => {
        if (!startTimestamp) startTimestamp = timestamp
        const progress = Math.min((timestamp - startTimestamp) / (duration * 1000), 1)
        const currentCount = progress * (end - start) + start

        setCount(currentCount)

        if (progress < 1) {
          window.requestAnimationFrame(step)
        } else {
          setHasAnimated(true)
        }
      }

      window.requestAnimationFrame(step)
    }
  }, [isInView, end, start, duration, hasAnimated])

  return <span ref={countRef}>{count.toFixed(decimals)}</span>
}
