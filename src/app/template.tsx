'use client';
import { motion } from 'framer-motion';
import { useEffect } from 'react';

interface TemplatesProps {
  children: React.ReactNode;
}

export function TemplateTopHome({ children }: TemplatesProps) {
  useEffect(() => {}, []);

  return (
    <motion.div
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ ease: 'linear', duration: 0.4 }}
    >
      <div>{children}</div>
    </motion.div>
  );
}

function Template({ children }: TemplatesProps) {
  useEffect(() => {}, []);

  return (
    <motion.div
      initial={{ y: 30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ ease: 'easeInOut', duration: 0.3 }}
    >
      <div>{children}</div>
    </motion.div>
  );
}

export default Template;
