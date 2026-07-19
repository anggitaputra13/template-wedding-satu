"use client";

import { motion } from "framer-motion";
import { useLanguage } from "../contexts/LanguageContext";

export default function ClosingMessage({
  groom = "Satria",
  bride = "Heppa",
}: {
  groom?: string;
  bride?: string;
}) {
  const { t } = useLanguage();
  return (
    <section className="relative py-16 px-6">
      <div className="max-w-lg mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-brittany text-white text-4xl md:text-5xl mb-6">
            {groom} &amp; {bride}
          </h2>
          <p className="font-garet text-white/80 text-sm md:text-base leading-relaxed">
            {t("Merupakan suatu kebahagiaan dan kehormatan bagi kami apabila Bapak/Ibu/Saudara/i berkenan hadir untuk memberikan doa restu kepada kami. Atas kehadirannya kami ucapkan terima kasih.", "It would be our great happiness and honor if you would attend to give us your blessings. We thank you for your presence.")}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
