"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"
import { publications } from "@/lib/data"

export default function Featured() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  return (
    <section className="py-16" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <h2 className="text-2xl font-bold font-heading mb-4">Featured In</h2>
        </motion.div>

        <motion.div
          className="flex flex-wrap justify-center items-center gap-12 md:gap-16"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {publications.map((pub, index) => (
            <motion.div
              key={index}
              className="grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
              initial={{ y: 20, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <Image
                src={pub.logo || "/placeholder.svg"}
                alt={pub.name}
                width={150}
                height={40}
                className="h-8 md:h-10 w-auto"
              />
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-10 text-center"
        >
          <p className="text-muted-foreground italic">
            &lsquo;SoftSell is revolutionizing how businesses manage their software license assets.&rsquo;
            <span className="block mt-2 font-medium text-foreground">— TechCrunch</span>
          </p>
        </motion.div>
      </div>
    </section>
  )
}
