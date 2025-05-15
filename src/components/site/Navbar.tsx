"use client"

import { useEffect, useState } from "react"
import { Menu, X } from "lucide-react"
import AnimatedLink from "@/lib/animate"
import { AnimatePresence, motion } from "framer-motion"
import { gsap } from "gsap"
import Link from "next/link"
import Image from "next/image"
import { navLinks } from "@/lib/data"
import { Button } from "@/components/ui/button"
import { Mode } from "./Mode"

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const toggleMenu = () => {
    setOpen((prevOpen) => !prevOpen)
  }

  // Initial animation for navbar
  useEffect(() => {
    gsap.fromTo(
      "#navbar",
      { scale: 0.5, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        duration: 0.7,
        ease: "power.out",
      },
    )
  }, [])

  // Animation variants
  const menuVars = {
    initial: {
      scaleY: 0,
    },
    animate: {
      scaleY: 1,
      transition: {
        duration: 0.5,
        ease: [0.12, 0, 0.39, 0],
      },
    },
    exit: {
      scaleY: 0,
      transition: {
        delay: 0.2,
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  }

  const containerVars = {
    initial: {
      transition: {
        staggerChildren: 0.09,
        staggerDirection: -1,
      },
    },
    open: {
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.09,
        staggerDirection: 1,
      },
    },
  }

  const mobileLinkVars = {
    initial: {
      y: "30vh",
      transition: {
        duration: 0.5,
        ease: [0.37, 0, 0.63, 1],
      },
    },
    open: {
      y: 0,
      transition: {
        ease: [0, 0.55, 0.45, 1],
        duration: 0.7,
      },
    },
  }

  return (
    <>
      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            variants={menuVars}
            initial="initial"
            animate="animate"
            exit="exit"
            className="fixed z-[100] top-0 left-0 h-screen w-screen font-semibold bg-primary text-background origin-top"
          >
            <button
              onClick={toggleMenu}
              className="absolute right-8 top-6 cursor-pointer text-2xl active:scale-x-75"
              aria-label="Close menu"
            >
              <X className="h-6 w-6" />
            </button>

            <motion.div
              variants={containerVars}
              initial="initial"
              animate="open"
              exit="initial"
              className="flex flex-col h-full justify-center items-center font-bold gap-8"
            >
              {navLinks.map((link) => (
                <motion.div
                  key={link.href}
                  variants={mobileLinkVars}
                  className="text-3xl sm:text-4xl md:text-5xl uppercase hover:opacity-70"
                >
                  <Link href={link.href} onClick={toggleMenu}>
                    {link.title}
                  </Link>
                </motion.div>
              ))}
              <motion.div className="space-x-4 mt-5" variants={mobileLinkVars}>
                <Button>Get Started</Button>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Desktop Menu */}
      <div
        id="navbar"
        className="fixed top-5 left-1/2 -translate-x-1/2 w-full md:w-[80%] rounded-full z-50 bg-foreground/5 backdrop-blur-md shadow-sm"
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between h-18 px-6 sm:px-4 lg:px-12">
          <Link href="/" className="hover:scale-105 transition-transform">
            <Image src="/logo.svg" alt="NicoGauge" width={30} height={30} />
          </Link>

          <div className="hidden lg:flex items-center gap-8 font-semibold">
            {navLinks.map((link) => (
              <AnimatedLink title={link.title} href={link.href} key={link.href} />
            ))}
          </div>

          <div className="flex items-center gap-2">
            <Button className="hidden lg:flex">Get Started</Button>
            <Mode />
            <Button className="lg:hidden" size="icon" variant="ghost" onClick={toggleMenu} aria-label="Open menu">
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </>
  )
}
