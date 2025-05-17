"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Logo from "@/assets/Logo.svg";
import Image from "next/image";

const footerLinks = [
    { href: "#", label: "Contact" },
    { href: "#", label: "Privacy Policy" },
    { href: "#", label: "Terms & Conditions" },
];

export default function Footer() {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: "-100px" });

    // parent + stagger for links
    const containerVariants = {
        hidden: { opacity: 0, y: 30 },
        show: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: "easeOut",
                staggerChildren: 0.1,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 10 },
        show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
    };

    return (
        <motion.section
            ref={ref}
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "show" : "hidden"}
            className="py-16"
        >
            <div className="container">
                <div className="flex flex-col md:flex-row justify-center md:justify-between items-center gap-6">
                    {/* logo */}
                    <motion.div variants={itemVariants}>
                        <Image src={Logo} alt="COCOMO LOGO" />
                    </motion.div>

                    {/* links */}
                    <motion.nav variants={itemVariants} className="flex gap-6">
                        {footerLinks.map((link) => (
                            <motion.a
                                key={link.label}
                                href={link.href}
                                variants={itemVariants}
                                className="text-white/50 text-sm"
                            >
                                {link.label}
                            </motion.a>
                        ))}
                    </motion.nav>
                </div>
            </div>
        </motion.section>
    );
}
