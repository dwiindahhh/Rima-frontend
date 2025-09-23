"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

interface FAQ {
  id: number;
  question: string;
  answer: string;
}

const faqs: FAQ[] = [
  {
    id: 1,
    question: "Bagaimana cara menggunakan fitur chatbot di detail buku?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    id: 2,
    question: "Fitur chatbot bisa digunakan untuk apa saja?",
    answer:
      "Fitur chatbot dapat digunakan untuk berbagai keperluan seperti mendapatkan rekomendasi buku, mencari informasi detail tentang penulis, mendiskusikan plot cerita, dan mendapatkan ringkasan buku. Chatbot juga dapat membantu Anda menemukan buku serupa berdasarkan preferensi Anda.",
  },
  {
    id: 3,
    question: "Bagaimana cara membuat catatan dari buku yang di baca?",
    answer:
      "Untuk membuat catatan dari buku yang sedang dibaca, Anda dapat menggunakan fitur bookmark dan highlight yang tersedia. Klik pada teks yang ingin Anda catat, pilih opsi 'Add Note', kemudian tulis catatan Anda. Semua catatan akan tersimpan otomatis dan dapat diakses kapan saja melalui menu 'Notes'.",
  },
];

const FAQItem = ({ faq, index }: { faq: FAQ; index: number }) => {
  const [isOpen, setIsOpen] = useState(index === 0); // First item open by default

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="border border-gray-200 rounded-lg overflow-hidden  bg-white">
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
        whileHover={{ backgroundColor: "rgba(137, 141, 249, 0.05)" }}>
        <h3 className="font-semibold text-gray-900 pr-4">{faq.question}</h3>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}>
          <ChevronDown className="w-5 h-5 text-gray-500 flex-shrink-0" />
        </motion.div>
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden">
            <div className="px-6 pb-4">
              <motion.p
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -10, opacity: 0 }}
                transition={{ duration: 0.2, delay: 0.1 }}
                className="text-gray-600 leading-relaxed">
                {faq.answer}
              </motion.p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default function FAQSection() {
  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Frequently Asked Question
          </h2>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <FAQItem key={faq.id} faq={faq} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
