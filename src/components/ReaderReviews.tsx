"use client";

import { motion } from "framer-motion";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";

interface Review {
  id: number;
  name: string;
  rating: number;
  text: string;
  avatar: string;
}

const reviews: Review[] = [
  {
    id: 1,
    name: "Azadel Santo",
    rating: 5,
    text: "Aplikasi yang luar biasa! Sangat membantu dalam mengelola tugas sehari-hari. Interface yang intuitif dan fitur-fitur yang lengkap membuat pekerjaan menjadi lebih efisien.",
    avatar: "AS",
  },
  {
    id: 2,
    name: "Azadel Santo",
    rating: 5,
    text: "Saya sangat terkesan dengan aplikasi ini. Desain yang menarik dan fungsionalitas yang sempurna. Sangat direkomendasikan untuk semua orang!",
    avatar: "AS",
  },
  {
    id: 3,
    name: "Azadel Santo",
    rating: 5,
    text: "Pengalaman menggunakan aplikasi ini sangat memuaskan. Fitur-fitur yang disediakan sangat berguna dan mudah digunakan. Terima kasih!",
    avatar: "AS",
  },
  {
    id: 4,
    name: "Azadel Santo",
    rating: 5,
    text: "Aplikasi terbaik yang pernah saya gunakan! Sangat membantu dalam produktivitas sehari-hari. Interface yang clean dan user-friendly.",
    avatar: "AS",
  },
];

const StarRating = ({ rating }: { rating: number }) => {
  return (
    <div className="flex gap-1">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className={`w-4 h-4 ${
            i < rating
              ? "fill-[#898DF9] text-[#898DF9]"
              : "fill-gray-200 text-gray-200"
          }`}
        />
      ))}
    </div>
  );
};

const ReviewCard = ({ review, index }: { review: Review; index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9, y: 20 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: 0.5,
        delay: index * 0.1,
        ease: "easeOut",
      }}
      className="bg-white rounded-lg p-4 sm:p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300 h-full flex flex-col">
      <div className="flex items-center gap-3 mb-4">
        <div
          className="w-10 h-10 rounded-full flex items-center justify-center text-white font-semibold text-sm flex-shrink-0"
          style={{ backgroundColor: "#898DF9" }}>
          {review.avatar}
        </div>
        <div className="min-w-0 flex-1">
          <h4 className="font-semibold text-gray-900 truncate">
            {review.name}
          </h4>
          <StarRating rating={review.rating} />
        </div>
      </div>
      <p className="text-gray-600 text-sm leading-relaxed flex-1">
        {review.text}
      </p>
    </motion.div>
  );
};

export default function ReaderReviews() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(3);

  // Update items per page based on screen size
  useEffect(() => {
    const updateItemsPerPage = () => {
      if (window.innerWidth < 768) {
        setItemsPerPage(1); // Mobile: 1 item
      } else if (window.innerWidth < 1024) {
        setItemsPerPage(2); // Tablet: 2 items
      } else {
        setItemsPerPage(3); // Desktop: 3 items
      }
    };

    updateItemsPerPage();
    window.addEventListener("resize", updateItemsPerPage);
    return () => window.removeEventListener("resize", updateItemsPerPage);
  }, []);

  const totalPages = Math.ceil(reviews.length / itemsPerPage);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % totalPages);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + totalPages) % totalPages);
  };

  // Reset currentIndex if it exceeds totalPages when itemsPerPage changes
  useEffect(() => {
    if (currentIndex >= totalPages) {
      setCurrentIndex(0);
    }
  }, [totalPages, currentIndex]);

  return (
    <section className="py-12 sm:py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-2">
            Reader Reviews
          </h2>
        </motion.div>

        <div className="relative">
          {/* Reviews Container */}
          <div className="overflow-hidden">
            <motion.div
              className="flex"
              animate={{ x: `${-currentIndex * 100}%` }}
              transition={{ duration: 0.5, ease: "easeInOut" }}>
              {Array.from({ length: totalPages }).map((_, pageIndex) => (
                <div
                  key={pageIndex}
                  className={`flex gap-4 sm:gap-6 min-w-full ${
                    itemsPerPage === 1 ? "justify-center" : ""
                  }`}>
                  {reviews
                    .slice(
                      pageIndex * itemsPerPage,
                      (pageIndex + 1) * itemsPerPage
                    )
                    .map((review, index) => (
                      <div
                        key={review.id}
                        className={`${
                          itemsPerPage === 1
                            ? "w-full max-w-md"
                            : itemsPerPage === 2
                            ? "w-1/2"
                            : "w-1/3"
                        }`}>
                        <ReviewCard review={review} index={index} />
                      </div>
                    ))}
                </div>
              ))}
            </motion.div>
          </div>

          {/* Navigation Arrows - Only show on desktop and tablet */}
          {totalPages > 1 && (
            <>
              <button
                onClick={prevSlide}
                className="absolute left-2 sm:-left-4 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow-lg hover:shadow-xl transition-shadow duration-200 hover:bg-gray-50 z-10"
                disabled={currentIndex === 0}>
                <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-gray-600" />
              </button>

              <button
                onClick={nextSlide}
                className="absolute right-2 sm:-right-4 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow-lg hover:shadow-xl transition-shadow duration-200 hover:bg-gray-50 z-10"
                disabled={currentIndex === totalPages - 1}>
                <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-gray-600" />
              </button>
            </>
          )}
        </div>

        {/* Pagination Dots */}
        {totalPages > 1 && (
          <div className="flex justify-center mt-6 sm:mt-8 gap-2">
            {Array.from({ length: totalPages }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full transition-colors duration-200 ${
                  index === currentIndex ? "bg-[#898DF9]" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
