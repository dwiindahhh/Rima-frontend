import React, { useState, useRef, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

interface FeatureCardProps {
    icon: React.ReactNode;
    featureName: string;
    tagline: string;
    description: string;
    imageSrc: string;
    imageAlt: string;
    index: number;
    scrollSpeed?: number;
    scrollDistance?: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
    icon,
    featureName,
    tagline,
    description,
    imageSrc,
    imageAlt,
    index,
    scrollSpeed = 4,
    scrollDistance = "-60%",
}) => {
    const [isHovered, setIsHovered] = useState(false);
    const [imageLoaded, setImageLoaded] = useState(false);
    const imageRef = useRef<HTMLImageElement>(null);
    const controls = useAnimation();

    useEffect(() => {
        if (imageLoaded) {
            controls.start({
                y: isHovered ? scrollDistance : "-30%", 
                transition: {
                    duration: scrollSpeed,
                    ease: "easeInOut",
                },
            });
        }
    }, [isHovered, imageLoaded, controls, scrollSpeed, scrollDistance]);


    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    const handleImageLoad = () => {
        setImageLoaded(true);
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="bg-gradient-to-br from-indigo-500 to-purple-600 rounded-3xl p-6 sm:p-8 text-white shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105"
        >
            {/* Icon + Feature Name */}
            <div className="flex items-center mb-6">
                <div className="text-4xl mr-4 opacity-90">{icon}</div>
                <h4 className="ttext-lg sm:text-2xl md:text-[24px] font-semibold">{featureName}</h4>
            </div>

            {/* Title */}
            <h3 className="text-[42px] sm:text-[42px] md:text-[56px] font-bold mb-6 leading-tight">
                {tagline}
            </h3>

            {/* Description */}
            <p className="ttext-lg sm:text-2xl md:text-[24px] opacity-90 leading-relaxed mb-10">
                {description}
            </p>

            {/* Phone Mockup with Scroll Effect */}
            <div
                className="flex justify-center cursor-pointer"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                <div className="relative group">
                    <div className="bg-black rounded-[2.5rem] p-2 shadow-2xl transition-transform duration-300 group-hover:scale-105">
                        <div className="bg-white rounded-[2rem] overflow-hidden w-72 sm:w-96 md:w-[480px] h-[720px] md:h-[960px] relative">
                            {/* Loading placeholder */}
                            {!imageLoaded && (
                                <div className="w-full h-full bg-gray-200 animate-pulse rounded-[2rem] flex items-center justify-center">
                                    <div className="text-gray-400 text-sm">Loading...</div>
                                </div>
                            )}

                            {/* Scrollable Image */}
                            <motion.img
                                ref={imageRef}
                                src={imageSrc}
                                alt={imageAlt}
                                className="w-full h-auto absolute top-0 left-0 select-none"
                                animate={controls}
                                onLoad={handleImageLoad}
                                style={{
                                    minHeight: "180%", // Ensure image is much taller than container
                                    objectFit: "cover"
                                }}
                                draggable={false}
                            />

                            {/* Top gradient overlay */}
                            <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-white/30 to-transparent pointer-events-none z-10" />

                            {/* Bottom gradient overlay for smooth transition */}
                            <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white/80 via-white/40 to-transparent pointer-events-none z-10" />

                            {/* Hover indicator */}
                            <motion.div
                                className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/20 rounded-full px-3 py-1"
                                initial={{ opacity: 0, y: 10 }}
                                animate={{
                                    opacity: isHovered ? 1 : 0,
                                    y: isHovered ? 0 : 10
                                }}
                                transition={{ duration: 0.3 }}
                            >
                                <div className="text-xs text-white/80 flex items-center">
                                    <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                                    </svg>
                                    Scroll
                                </div>
                            </motion.div>
                        </div>
                    </div>

                    {/* Phone details */}
                    <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gray-800 rounded-full"></div>
                    <div className="absolute top-6 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-gray-800 rounded-full"></div>
                </div>
            </div>
        </motion.div>
    );
};

export default FeatureCard;

