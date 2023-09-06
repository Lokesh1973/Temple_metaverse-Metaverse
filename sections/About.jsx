"use client";

import { motion } from "framer-motion";
import { TypingText } from "../components";

import styles from "../styles";
import { fadeIn, staggerContainer } from "../utils/motion";

const About = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <div className="gradient-02 z-0" />
    <motion.div
      variant={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
    >
      <TypingText title="| About Pilgr-Image Styler" textStyles="text-center" />

      <motion.p
        variants={fadeIn("up", "tween", 0.2, 1)}
        className="mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white"
      >
        <span className="font-etrabold text-white">Pilgrimage Styler:</span> 
        Transform Your Photos with Creative Madness. Unleash the
        <span className="font-etrabold text-white"> creative madness </span> 
        within with Pilgrimage Styler, the app that takes your photos to
        extraordinary heights. Discover a range of <span className="font-etrabold text-white"> 
        stunning styles, from vintage elegance to avant-garde innovation, </span> and watch as your images come alive with <span className="font-etrabold text-white"> vibrant colours</span> and
        captivating textures. Share your transformed masterpieces and join a
        community of like-minded artists. Embrace the <span className="font-etrabold text-white"> madness of creativity</span> with Pilgrimage Styler and embark on a visual journey like no
        other.Let's the madness begin
      </motion.p>

      <motion.img
        variants={fadeIn('up', 'tween', 0.3, 1)}
        src="/arrow-down.svg"
        alt="arrow down"
        className="w-[18px] h-[28px] object-contain mt-[28px]"
      />
    </motion.div>
  </section>
);

export default About;
