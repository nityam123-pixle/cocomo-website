"use client";

import FeatureCard from "@/components/FeatureCard";
import Tag from "@/components/Tag";
import avatar1 from "@/assets/images/avatar-ashwin-santiago.jpg";
import avatar2 from "@/assets/images/avatar-lula-meyers.jpg";
import avatar3 from "@/assets/images/avatar-florence-shaw.jpg";
import avatar4 from "@/assets/images/avatar-owen-garcia.jpg";
import Image from "next/image";
import Avatar from "@/components/Avatar";
import Key from "@/components/Key";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const features = [
    "Asset Library",
    "Code Preview",
    "Flow Mode",
    "Smart Sync",
    "Auto Layout",
    "Fast Search",
    "Smart Guides",
];

export default function Features() {
    const tagRef = useRef(null);
    const isTagInView = useInView(tagRef, { once: true, margin: "-50px" });

    const cardRefs = Array(3)
        .fill(null)
        .map(() => useRef(null));

    const cardInViews = cardRefs.map((ref) =>
        useInView(ref, { once: true, margin: "-100px" })
    );

    const featuresRef = useRef(null);
    const featuresInView = useInView(featuresRef, {
        once: true,
        margin: "-50px",
    });

    return (
        <section className="py-24">
            <div className="container">
                <motion.div
                    ref={tagRef}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isTagInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="flex justify-center"
                >
                    <Tag>Features</Tag>
                </motion.div>

                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    animate={isTagInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-6xl font-medium text-center mt-6 max-w-2xl mx-auto"
                >
                    Where power meets{" "}
                    <span className="text-lime-400">Simplicity</span>
                </motion.h2>

                <div className="mt-12 grid grid-cols-1 md:grid-cols-4 lg:grid-cols-3 gap-8">
                    {[
                        {
                            ref: cardRefs[0],
                            inView: cardInViews[0],
                            className: "md:col-span-2 lg:col-span-1",
                            element: (
                                <FeatureCard
                                    title="Real-time Collaboration"
                                    description="Work together seamlessly with conflict-free editing."
                                    className="group"
                                >
                                    <div className="aspect-video flex items-center justify-center">
                                        <Avatar className="z-40">
                                            <Image
                                                src={avatar1}
                                                alt="avatar1"
                                                className="rounded-full"
                                            />
                                        </Avatar>
                                        <Avatar className="-ml-6 border-indigo-500 z-30">
                                            <Image
                                                src={avatar2}
                                                alt="avatar2"
                                                className="rounded-full"
                                            />
                                        </Avatar>
                                        <Avatar className="-ml-6 border-amber-500 z-20">
                                            <Image
                                                src={avatar3}
                                                alt="avatar3"
                                                className="rounded-full"
                                            />
                                        </Avatar>
                                        <Avatar className="-ml-6 border-transparent group-hover:border-green-500 transition">
                                            <div className="size-full bg-neutral-700 rounded-full inline-flex items-center justify-center gap-1 relative">
                                                <Image
                                                    src={avatar4}
                                                    alt="avatar4"
                                                    className="absolute size-full rounded-full opacity-0 group-hover:opacity-100 transition"
                                                />
                                                {Array.from({ length: 3 }).map(
                                                    (_, i) => (
                                                        <span
                                                            className="size-1.5 rounded-full bg-white inline-flex"
                                                            key={i}
                                                        ></span>
                                                    )
                                                )}
                                            </div>
                                        </Avatar>
                                    </div>
                                </FeatureCard>
                            ),
                        },
                        {
                            ref: cardRefs[1],
                            inView: cardInViews[1],
                            className: "md:col-span-2 lg:col-span-1",
                            element: (
                                <FeatureCard
                                    title="Interactive Prototyping"
                                    description="Engage your clients with prototype that react to user actions."
                                    className="group"
                                >
                                    <div className="aspect-video flex items-center justify-center">
                                        <p className="text-4xl font-extrabold text-white/20 group-hover:text-white/10 text-center transition duration-500">
                                            We&apos; achieved{" "}
                                            <span className="bg-gradient-to-r from-purple-400 to bg-pink-400 bg-clip-text text-transparent relative">
                                                <span>incredible</span>
                                                <video
                                                    src="/assets/gif-incredible.mp4"
                                                    autoPlay
                                                    loop
                                                    muted
                                                    playsInline
                                                    className="absolute bottom-full left-1/2 -translate-x-1/2 rounded-2xl shadow-2xl opacity-0 group-hover:opacity-100 transition duration-500 pointer-events-none"
                                                />
                                            </span>{" "}
                                            growth this year
                                        </p>
                                    </div>
                                </FeatureCard>
                            ),
                        },
                        {
                            ref: cardRefs[2],
                            inView: cardInViews[2],
                            className:
                                "md:col-span-2 md:col-start-2 lg:col-span-1 lg:col-start-auto",
                            element: (
                                <FeatureCard
                                    title="Keyboard Quick Actions"
                                    description="Powerful commands to help you create design more quickly"
                                    className="group"
                                >
                                    <div className="aspect-video flex items-center justify-center gap-4">
                                        <Key className="w-28 outline outline-2 outline-offset-4 outline-transparent group-hover:outline-lime-400 transition-all duration-500 group-hover:translate-y-1">
                                            shift
                                        </Key>
                                        <Key className="outline outline-2 outline-offset-4 outline-transparent group-hover:outline-lime-400 transition-all duration-500 group-hover:translate-y-1 delay-150">
                                            alt
                                        </Key>
                                        <Key className="outline outline-2 outline-offset-4 outline-transparent group-hover:outline-lime-400 transition-all duration-500 group-hover:translate-y-1 delay-300">
                                            C
                                        </Key>
                                    </div>
                                </FeatureCard>
                            ),
                        },
                    ].map(({ ref, inView, element, className }, i) => (
                        <motion.div
                            ref={ref}
                            key={i}
                            className={className}
                            initial={{ opacity: 0, y: 40 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{
                                duration: 0.6,
                                delay: i * 0.2,
                            }}
                        >
                            {element}
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    ref={featuresRef}
                    className="mt-8 flex flex-wrap gap-3 justify-center"
                    initial="hidden"
                    animate={featuresInView ? "visible" : "hidden"}
                    variants={{
                        visible: {
                            transition: {
                                staggerChildren: 0.1,
                            },
                        },
                        hidden: {},
                    }}
                >
                    {features.map((feature) => (
                        <motion.div
                            key={feature}
                            variants={{
                                hidden: { opacity: 0, y: 20 },
                                visible: { opacity: 1, y: 0 },
                            }}
                            transition={{ duration: 0.4 }}
                            className="bg-neutral-900 border border-white/10 inline-flex px-3 md:px-5 py-1.5 md:py-2 rounded-2xl gap-3 items-center hover:scale-105 transition duration-500 group cursor-pointer"
                        >
                            <span className="bg-lime-400 text-neutral-950 size-5 rounded-full inline-flex items-center justify-center text-xl group-hover:rotate-45 transition duration-500">
                                &#10038;
                            </span>
                            <span className="font-medium md:text-lg">
                                {feature}
                            </span>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
