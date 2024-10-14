import { motion } from 'framer-motion';
import React from 'react'

export default function No1Herbal() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }} // Hide the element initially
      animate={{ opacity: 1, y: 0 }} // Animate it to full opacity and position when in view
      transition={{ duration: 0.5, delay: 0.2 }}
      whileInView={{ opacity: 1, y: 0 }} // Maintain the visible state while in view
      className="flex flex-col mx-[5%]  gap-4 mt-6  justify-center items-center"
    >
      <h1 className="md:text-3xl text-2xl text-primary font-bold   py-2 w-fit">
        NO. 1 HERBAL MEDICINE
      </h1>
      <div className="text-center   text-secondary text-sm w-[100%]  ">
        Sluri herbal non-alcoholic drink is made with 100% natural ingredients.
        It is an ultimate libido boosting drink packed with many health
        benefits, which includes increasing vaginal lubrication, increasing
        libido and sexual desire, detoxifying the body system, eases bowel
        movement, being high in disease fighting antioxidants, helps to control
        blood sugar, helping to regulate hormones and many more.
      </div>
    </motion.div>
  );
}
