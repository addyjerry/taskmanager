"use client";

import * as React from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

import { Variants } from "framer-motion";

interface CustomAnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  variants?: Variants;
}

const defaultVariants: Variants = {
  hidden: { opacity: 0, x: -100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const CustomAnimatedSection: React.FC<CustomAnimatedSectionProps> = ({
  children,
  className,
  variants,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "0px 0px -100px 0px" });

  return (
    <motion.section
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={variants || defaultVariants}
      className={className}
    >
      {children}
    </motion.section>
  );
};

export default CustomAnimatedSection;
