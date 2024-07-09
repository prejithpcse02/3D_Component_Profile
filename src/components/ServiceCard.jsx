import React from "react";
import { Tilt } from "react-tilt";
import { textVariant, fadeIn } from "../utils/motion";
import { motion } from "framer-motion";
export default function ServiceCard({ index, title, icon }) {
  return (
    <>
      <Tilt className="xs:w-[250px] w-full">
        <motion.div
          variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
          className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
        ></motion.div>
      </Tilt>
    </>
  );
}
