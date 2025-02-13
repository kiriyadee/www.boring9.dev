'use client';

import { motion } from 'framer-motion';
import { AnimationContainerProps } from '@/types';

const AnimationContainer = ({
  children,
  customDelay = 0.3
}: AnimationContainerProps) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay: customDelay }}
    >
      {children}
    </motion.div>
  );
};

export default AnimationContainer;
