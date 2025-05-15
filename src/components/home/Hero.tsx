"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { ArrowRight, CheckCircle2 } from "lucide-react"
import Image from "next/image"

export default function Hero() {

  return (
    <section className="relative py-24 md:py-36 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-background" />

        <div className="absolute top-0 left-0 right-0 h-[500px] overflow-hidden">
          <motion.div
            className="absolute top-[-350px] left-[-350px] w-[700px] h-[700px] rounded-full bg-primary/5"
            animate={{
              x: [0, 50, 0],
              y: [0, 30, 0],
            }}
            transition={{
              duration: 15,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
            }}
          />
          <motion.div
            className="absolute top-[-200px] right-[-300px] w-[600px] h-[600px] rounded-full bg-primary/5"
            animate={{
              x: [0, -50, 0],
              y: [0, 50, 0],
            }}
            transition={{
              duration: 18,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
            }}
          />
          <motion.div
            className="absolute top-[100px] left-[30%] w-[300px] h-[300px] rounded-full bg-primary/3"
            animate={{
              x: [0, 30, 0],
              y: [0, -30, 0],
            }}
            transition={{
              duration: 12,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
            }}
          />
        </div>
      </div>

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left column - Text content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-xl"
          >
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              <span className="flex h-2 w-2 rounded-full bg-primary mr-2"></span>
              The #1 Software License Marketplace
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading tracking-tight mb-6">
              Transform Unused Licenses Into
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/80">
                {" "}
                Revenue
              </span>
            </h1>

            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              SoftSell helps enterprises and businesses sell their unused software licenses at premium rates. Our
              AI-powered valuation engine ensures you get the best possible price, every time.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button
                size="lg"
                className="text-lg px-8 bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70"
              >
                Sell My Licenses
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8">
                Get a Free Valuation
              </Button>
            </div>

            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-2 text-sm">
                <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                <span>No upfront fees - we only earn when you sell</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                <span>Secure transactions with escrow protection</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                <span>Valuations in 24 hours, payments in 3 days</span>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >

              <div className="relative h-[400px] md:h-[500px] w-full">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary/5 rounded-2xl overflow-hidden">
                  <div className="absolute inset-0 bg-grid-white/10 [mask-image:linear-gradient(0deg,white,transparent)]" />
                </div>

                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative w-[80%] h-[80%]">
                    <Image
                      src="/hero.png"
                      alt="Software License Dashboard"
                      fill
                      className="object-contain"
                    />

                    {/* Floating elements */}
                    <motion.div
                      className="absolute top-[10%] right-[10%] bg-background rounded-lg p-3 shadow-lg border"
                      animate={{ y: [0, -10, 0] }}
                      transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
                    >
                      <div className="flex items-center gap-2">
                        <div className="h-8 w-8 rounded-full bg-green-500/20 flex items-center justify-center">
                          <CheckCircle2 className="h-4 w-4 text-green-500" />
                        </div>
                        <div>
                          <div className="text-xs font-medium">Valuation Complete</div>
                          <div className="text-xs text-muted-foreground">Adobe CC: $12,500</div>
                        </div>
                      </div>
                    </motion.div>

                    <motion.div
                      className="absolute bottom-[15%] left-[5%] bg-background rounded-lg p-3 shadow-lg border"
                      animate={{ y: [0, 10, 0] }}
                      transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, delay: 1 }}
                    >
                      <div className="flex items-center gap-2">
                        <div className="h-8 w-8 rounded-full bg-primary/20 flex items-center justify-center">
                          <svg className="h-4 w-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                          </svg>
                        </div>
                        <div>
                          <div className="text-xs font-medium">Payment Sent</div>
                          <div className="text-xs text-muted-foreground">Microsoft: $8,750</div>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
