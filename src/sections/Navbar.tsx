"use client";

import Image from "next/image";
import Logo from "@/assets/Logo.svg";
import Button from "@/components/Button";
import { useState } from "react";
import { twMerge } from "tailwind-merge";
import { AnimatePresence, motion } from "framer-motion";

const navLinks = [
    { label: "Home", href: "#" },
    { label: "Features", href: "#features" },
    { label: "Integrations", href: "#integrations" },
    { label: "FAQs", href: "#faqs" },
];

const itemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: { delay: 0.3 + i * 0.1, duration: 0.4 },
    }),
};

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <section className="py-4 lg:py-8 fixed w-full top-0 z-50">
                <div className="container max-w-5xl">
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.4 }}
                        className="border border-white/15 rounded-[27px] bg-neutral-950/70 backdrop-blur"
                    >
                        <div className="grid grid-cols-2 lg:grid-cols-3 p-2 px-4 md:pr-2 items-center">
                            {/* Logo */}
                            <motion.div
                                variants={itemVariants}
                                initial="hidden"
                                animate="visible"
                                custom={0}
                            >
                                <Image
                                    src={Logo}
                                    alt="Logo Image"
                                    className="h-9 w-auto md:h-auto"
                                />
                            </motion.div>

                            {/* Nav links - desktop */}
                            <div className="lg:flex justify-center items-center hidden">
                                <nav className="flex gap-6 font-medium">
                                    {navLinks.map((link, i) => (
                                        <motion.a
                                            key={link.label}
                                            href={link.href}
                                            variants={itemVariants}
                                            initial="hidden"
                                            animate="visible"
                                            custom={i + 1}
                                        >
                                            {link.label}
                                        </motion.a>
                                    ))}
                                </nav>
                            </div>

                            {/* Right buttons and menu */}
                            <div className="flex justify-end gap-4">
                                {/* Hamburger menu */}
                                <motion.svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="feather feather-menu md:hidden"
                                    onClick={() => setIsOpen(!isOpen)}
                                    variants={itemVariants}
                                    initial="hidden"
                                    animate="visible"
                                    custom={navLinks.length + 1}
                                >
                                    <line
                                        x1="3"
                                        y1="6"
                                        x2="21"
                                        y2="6"
                                        className={twMerge(
                                            "origin-left transition",
                                            isOpen && "rotate-45 -translate-y-1"
                                        )}
                                    ></line>
                                    <line
                                        x1="3"
                                        y1="12"
                                        x2="21"
                                        y2="12"
                                        className={twMerge(
                                            "transition",
                                            isOpen && "opacity-0"
                                        )}
                                    ></line>
                                    <line
                                        x1="3"
                                        y1="18"
                                        x2="21"
                                        y2="18"
                                        className={twMerge(
                                            "origin-left transition",
                                            isOpen && "-rotate-45 translate-y-1"
                                        )}
                                    ></line>
                                </motion.svg>

                                {/* Buttons */}
                                <motion.div
                                    variants={itemVariants}
                                    initial="hidden"
                                    animate="visible"
                                    custom={navLinks.length + 2}
                                    className="hidden md:inline-flex"
                                >
                                    <Button variant="secondary">Log In</Button>
                                </motion.div>

                                <motion.div
                                    variants={itemVariants}
                                    initial="hidden"
                                    animate="visible"
                                    custom={navLinks.length + 3}
                                    className="hidden md:inline-flex"
                                >
                                    <Button variant="primary">Sign Up</Button>
                                </motion.div>
                            </div>
                        </div>

                        {/* Mobile dropdown */}
                        <AnimatePresence>
                            {isOpen && (
                                <motion.div
                                    initial={{ height: 0 }}
                                    animate={{ height: "auto" }}
                                    exit={{ height: 0 }}
                                    className="overflow-hidden"
                                >
                                    <div className="flex flex-col items-center gap-4 py-4">
                                        {navLinks.map((link) => (
                                            <a
                                                href={link.href}
                                                key={link.label}
                                            >
                                                {link.label}
                                            </a>
                                        ))}
                                        <Button variant="secondary">
                                            Log In
                                        </Button>
                                        <Button variant="primary">
                                            Sign Up
                                        </Button>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </motion.div>
                </div>
            </section>
            <div className="pb-[86px] md:pb-[98px] lg:pb-[130px]"></div>
        </>
    );
}
