import { motion } from 'framer-motion';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';

const imageList = [
  '/photo-brand/video/1.jpg',
  '/photo-brand/video/2.jpg',
  '/photo-brand/video/3.jpg',
  '/photo-brand/video/4.jpg',
  '/photo-brand/video/5.jpg',
];

const imageVariants = {
  center: { x: '0%', scale: 1, zIndex: 5, opacity: 1 },
  left1: { x: '-50%', scale: 0.7, zIndex: 3, opacity: 1 },
  left: { x: '-90%', scale: 0.5, zIndex: 2, opacity: 1 },
  right: { x: '90%', scale: 0.5, zIndex: 2, opacity: 1 },
  right1: { x: '50%', scale: 0.7, zIndex: 3, opacity: 1 },
  hidden: { opacity: 0, scale: 0.5, zIndex: 0 },
};

export default function VideoCarousel() {
  const [centerIndex, setCenterIndex] = useState(0);
  const total = imageList.length;

  const getRelativeIndex = (index: number) => {
    const diff = (index - centerIndex + total) % total;
    switch (diff) {
      case 0: return 'center';
      case 1: return 'right1';
      case 2: return 'right';
      case total - 1: return 'left1';
      case total - 2: return 'left';
      default: return 'hidden';
    }
  };

  return (
    <div className="relative w-full flex flex-col items-center justify-center mt-6">
      <div className="relative w-[320px] h-[240px]">
        {imageList.map((image, index) => (
          <motion.div
            key={index}
            initial="hidden"
            animate={getRelativeIndex(index)}
            variants={imageVariants}
            transition={{ duration: 0.5 }}
            className="absolute"
            style={{ width: '100%', height: '100%' }}
          >
            <Image
              src={image}
              alt={`Slide ${index}`}
              fill
              className="rounded-[40px] object-cover"
              priority
            />
          </motion.div>
        ))}
      </div>
      <div className="flex items-center justify-center gap-4 mt-3">
        <button className="text-gray-700 hover:text-purple-700" onClick={() => setCenterIndex((centerIndex - 1 + total) % total)}>
          <ChevronLeft size={20} />
        </button>
        <div className="flex items-center gap-1">
          {imageList.map((_, index) => (
            <span
              key={index}
              className="w-1.5 h-1.5 rounded-full"
              style={{
                backgroundColor: index === centerIndex ? 'rgba(120, 60, 145, 1)' : 'rgba(180, 180, 180, 0.5)',
              }}
            />
          ))}
        </div>
        <button className="text-gray-700 hover:text-purple-700" onClick={() => setCenterIndex((centerIndex + 1) % total)}>
          <ChevronRight size={20} />
        </button>
      </div>
    </div>
  );
}
