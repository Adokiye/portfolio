import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md";
import { profile } from "data/profile";

const SocialProofModal = ({ isOpen, onClose }) => {
  const socialLinks = [
    {
      name: "GitHub",
      url: profile.github,
      icon: FaGithub,
      label: "github.com/Adokiye",
    },
    {
      name: "LinkedIn",
      url: profile.linkedin,
      icon: FaLinkedin,
      label: "linkedin.com/in/paul-iruene-5537a5163",
    },
    {
      name: "Email",
      url: `mailto:${profile.email}`,
      icon: MdEmail,
      label: profile.email,
    },
    {
      name: "Phone",
      url: `tel:${profile.phone}`,
      icon: MdPhone,
      label: profile.phone,
    },
    {
      name: "Location",
      url: "https://maps.google.com/?q=Lagos,+Nigeria",
      icon: MdLocationOn,
      label: profile.location,
    },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/45 backdrop-blur-sm"
            style={{ zIndex: 9998 }}
          />

          <div
            className="fixed inset-0 flex items-center justify-center px-4"
            style={{ zIndex: 9999 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 14 }}
              transition={{ duration: 0.22 }}
              className="bg-white dark:bg-zinc-950 shadow-[10px_10px_0_0_rgba(0,0,0,0.12)] dark:shadow-[10px_10px_0_0_rgba(255,255,255,0.08)] p-6 md:p-8 max-w-lg w-full border border-zinc-300 dark:border-zinc-800"
            >
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl md:text-2xl font-bold text-black dark:text-white">
                  Connect With Paul
                </h3>
                <button
                  onClick={onClose}
                  className="text-zinc-600 dark:text-zinc-300 hover:text-black dark:hover:text-white transition-colors text-2xl leading-none"
                  aria-label="Close modal"
                >
                  ×
                </button>
              </div>

              <div className="space-y-3">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 p-4 border border-zinc-300 dark:border-zinc-800 hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-colors group"
                    >
                      <Icon
                        size={26}
                        className="text-black dark:text-white flex-shrink-0"
                      />
                      <div className="flex-1 min-w-0">
                        <div className="font-semibold text-black dark:text-white uppercase tracking-wide text-sm">
                          {social.name}
                        </div>
                        <div className="text-sm text-zinc-600 dark:text-zinc-300 truncate font-avanir">
                          {social.label}
                        </div>
                      </div>
                    </a>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
};

export default SocialProofModal;
