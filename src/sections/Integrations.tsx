"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Tag from "@/components/Tag";
import figmaIcon from "@/assets/images/figma-logo.svg";
import notionIcon from "@/assets/images/notion-logo.svg";
import slackIcon from "@/assets/images/slack-logo.svg";
import relumeIcon from "@/assets/images/relume-logo.svg";
import framerIcom from "@/assets/images/framer-logo.svg";
import githubIcon from "@/assets/images/github-logo.svg";
import Column from "@/components/Columns";

const integrations = [
    {
        name: "Figma",
        icon: figmaIcon,
        description: "Figma is a collaborative interface design tool.",
    },
    {
        name: "Notion",
        icon: notionIcon,
        description: "Notion is an all-in-one workspace for notes and docs.",
    },
    {
        name: "Slack",
        icon: slackIcon,
        description: "Slack is a powerful team communication platform.",
    },
    {
        name: "Relume",
        icon: relumeIcon,
        description: "Relume is a no-code website builder and design system.",
    },
    {
        name: "Framer",
        icon: framerIcom,
        description: "Framer is a professional website prototyping tool.",
    },
    {
        name: "GitHub",
        icon: githubIcon,
        description: "GitHub is the leading platform for code collaboration.",
    },
];

export type IntegrationType = typeof integrations;

export default function Integrations() {
    const leftRef = useRef(null);
    const rightRef = useRef(null);
    const leftInView = useInView(leftRef, { once: true, margin: "-100px" });
    const rightInView = useInView(rightRef, { once: true, margin: "-100px" });
    const textRef = useRef(null);
    const isInView = useInView(textRef, { once: true, margin: "-100px" });

    return (
        <section className="py-24 overflow-hidden">
            <div className="container">
                <div className="grid lg:grid-cols-2 items-center lg:gap-16">
                    <motion.div
                        ref={textRef}
                        initial={{ opacity: 0, x: -50 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8 }}
                    >
                        <Tag>Integrations</Tag>
                        <h2 className="text-6xl font-medium mt-6">
                            Plays well with{" "}
                            <span className="text-lime-400">others</span>.
                        </h2>
                        <p className="text-white/50 mt-4 text-lg">
                            Cocomo seamlessely connects with your favorite tool,
                            streamlines workflow, and enables collaboration
                            accross brands, platform, and teams.
                        </p>
                    </motion.div>

                    <div>
                        <div className="h-[400px] lg:h-[800px] mt-8 lg:mt-0 overflow-hidden grid md:grid-cols-2 gap-4 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)]">
                            <motion.div
                                ref={leftRef}
                                initial={{ opacity: 0, y: 40 }}
                                animate={leftInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.6, ease: "easeOut" }}
                            >
                                <Column integrations={integrations} />
                            </motion.div>

                            <motion.div
                                ref={rightRef}
                                initial={{ opacity: 0, y: 40 }}
                                animate={
                                    rightInView ? { opacity: 1, y: 0 } : {}
                                }
                                transition={{
                                    duration: 0.6,
                                    ease: "easeOut",
                                    delay: 0.1,
                                }}
                                className="hidden md:flex"
                            >
                                <Column
                                    integrations={integrations
                                        .slice()
                                        .reverse()}
                                    reverse
                                />
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
