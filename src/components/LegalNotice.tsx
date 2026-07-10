import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X } from 'lucide-react';

interface LegalNoticeProps {
  isOpen: boolean;
  onClose: () => void;
  type: 'privacy' | 'terms' | 'accessibility';
}

const LegalNotice: React.FC<LegalNoticeProps> = ({ isOpen, onClose, type }) => {
  const content = {
    privacy: {
      title: "Privacy Policy",
      sections: [
        {
          heading: "Information Collection",
          text: "We collect personal and financial information solely for the purpose of preparing your tax returns. This includes but is not limited to: names, addresses, Social Security Numbers, income statements, and business records."
        },
        {
          heading: "Data Security",
          text: "Your documents are transmitted securely via encrypted file sharing. We do not transfer sensitive records through unsecured systems."
        },
        {
          heading: "Information Sharing",
          text: "We do not sell, rent, or trade your personal information. Information is only shared with government tax authorities (IRS/State) as required by law and as authorized through your client engagement agreement."
        },
        {
          heading: "Professional Credentials",
          text: "Calm Tax Co. is a registered tax preparation business. Our preparer holds an active Preparer Tax Identification Number (PTIN) issued by the IRS and is an authorized IRS e-file provider (EFIN). We are committed to maintaining compliance with all applicable IRS regulations."
        }
      ]
    },
    terms: {
      title: "Terms of Service",
      sections: [
        {
          heading: "Scope of Service",
          text: "Calm Tax Co. provides professional tax preparation services. Our workflow is 100% online and asynchronous. We do not provide legal or investment advice."
        },
        {
          heading: "Engagement and Accuracy",
          text: "Our preparation is based on information provided by you. You are responsible for the accuracy and completeness of all data submitted. We are not liable for penalties resulting from the omission of income or incorrect data provided."
        },
        {
          heading: "Service Area",
          text: "We provide services for all 50 U.S. states. However, we reserve the right to decline engagements that fall outside our area of expertise."
        }
      ]
    },
    accessibility: {
      title: "Accessibility Statement",
      sections: [
        {
          heading: "Our Commitment",
          text: "Calm Tax Co. is committed to ensuring digital accessibility for people with disabilities. We are continually improving the user experience for everyone and applying the relevant accessibility standards."
        },
        {
          heading: "Assistance",
          text: "If you have difficulty accessing any part of this website, please contact us at hello@calmtax.co and we will work with you to provide the information or service you need through a communication method that is accessible for you."
        }
      ]
    }
  };

  const currentContent = content[type];

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-[#3C3633]/40 backdrop-blur-sm"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-2xl bg-white rounded-[2.5rem] shadow-2xl overflow-hidden"
          >
            <div className="p-8 md:p-12 max-h-[80vh] overflow-y-auto">
              <div className="flex justify-between items-center mb-12">
                <div className="text-center w-full">
                  <h2 className="cormorant-font text-xl italic text-[#7D8E7E] mb-2">Legal Notice</h2>
                  <p className="cormorant-font text-3xl font-light text-[#3C3633] md:text-4xl">{currentContent.title}</p>
                </div>
                <button 
                  onClick={onClose}
                  className="absolute top-8 right-8 p-2 hover:bg-[#F9F7F2] rounded-full transition-colors"
                >
                  <X className="w-5 h-5 text-[#3C3633]/40" />
                </button>
              </div>

              <div className="space-y-10">
                {currentContent.sections.map((section, index) => (
                  <div key={index}>
                    <h3 className="cormorant-font text-xl md:text-2xl font-light text-[#3C3633] mb-3">{section.heading}</h3>
                    <p className="text-[#59524F] leading-relaxed font-sans">{section.text}</p>
                  </div>
                ))}
              </div>

              <div className="mt-16 pt-8 border-t border-[#3C3633]/5 text-center">
                <p className="text-[10px] uppercase tracking-widest text-[#3C3633]/30">
                  Last Updated: May 2026
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default LegalNotice;
