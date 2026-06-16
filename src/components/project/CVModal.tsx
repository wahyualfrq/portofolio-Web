'use client';

import { useTranslations } from 'next-intl';
import { X, FileText, Printer } from 'lucide-react';
import { useEffect } from 'react';

interface CVModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CVModal({ isOpen, onClose }: CVModalProps) {
  const t = useTranslations();

  // Prevent scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const cvContentHtml = (
    <div className="space-y-6 text-left">
      <div className="border-b border-neutral-300 pb-4 flex justify-between items-start">
        <div>
          <h2 className="text-2xl font-bold text-black tracking-tight">{t('cv.title')}</h2>
          <p className="text-sm text-brandAccentBlue font-semibold tracking-wide">{t('cv.role')}</p>
          <p className="text-xs text-brandSecondary mt-1">{t('cv.location')} | +62 831-9351-1962</p>
        </div>
        <div className="text-right text-xs text-brandSecondary">
          <p>wahyudialfurqon109@gmail.com</p>
          <p>linkedin.com/in/wahyudi-alfurqon</p>
        </div>
      </div>

      {/* Work Experiences Section */}
      <div className="space-y-4">
        <h4 className="text-sm font-bold text-black border-l-4 border-brandAccentBlue pl-2 uppercase tracking-wider">{t('cv.experienceTitle')}</h4>
        <div className="space-y-3 text-xs">
          <div>
            <div className="flex justify-between font-bold text-neutral-800">
              <span>{t('cv.exp1Company')}</span>
              <span>{t('cv.exp1Period')}</span>
            </div>
            <p className="text-brandAccentBlue italic">{t('cv.exp1Role')}</p>
            <ul className="list-disc list-inside text-neutral-600 mt-1 space-y-1">
              <li>{t('cv.exp1Bullet1')}</li>
              <li>{t('cv.exp1Bullet2')}</li>
            </ul>
          </div>
          <div>
            <div className="flex justify-between font-bold text-neutral-800">
              <span>{t('cv.exp2Company')}</span>
              <span>{t('cv.exp2Period')}</span>
            </div>
            <p className="text-brandAccentBlue italic">{t('cv.exp2Role')}</p>
            <ul className="list-disc list-inside text-neutral-600 mt-1 space-y-1">
              <li>{t('cv.exp2Bullet1')}</li>
              <li>{t('cv.exp2Bullet2')}</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Education Section */}
      <div className="space-y-4">
        <h4 className="text-sm font-bold text-black border-l-4 border-brandAccentBlue pl-2 uppercase tracking-wider">{t('cv.educationTitle')}</h4>
        <div className="text-xs">
          <div className="flex justify-between font-bold text-neutral-800">
            <span>{t('cv.edu1School')}</span>
            <span>{t('cv.edu1Period')}</span>
          </div>
          <p className="text-neutral-600">{t('cv.edu1Degree')}</p>
        </div>
      </div>
    </div>
  );

  return (
    <>
      {/* Printable Area (hidden on screen, visible on print) */}
      <div className="hidden print:block printable-cv text-left p-10 font-sans">
        {cvContentHtml}
      </div>

      {/* Interactive Modal Screen Wrapper */}
      <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[99] flex items-center justify-center p-4 print:hidden">
        <div className="bg-white rounded-[28px] max-w-2xl w-full p-8 space-y-6 max-h-[90vh] overflow-y-auto premium-shadow relative">
          <button 
            onClick={onClose} 
            className="absolute top-6 right-6 text-brandSecondary hover:text-brandPrimary"
            aria-label="Close modal"
          >
            <X className="w-6 h-6" />
          </button>

          <div className="flex items-center gap-4 border-b border-brandBorder pb-4">
            <div className="p-3 bg-blue-50 text-brandAccentBlue rounded-2xl">
              <FileText className="w-8 h-8" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-brandPrimary">{t('cvExporter')}</h3>
              <p className="text-sm text-brandSecondary">{t('cvExporterSubtitle')}</p>
            </div>
          </div>

          {/* Scrollable CV Preview Frame */}
          <div className="border border-brandBorder rounded-2xl p-6 bg-white space-y-6 max-h-[50vh] overflow-y-auto">
            {cvContentHtml}
          </div>

          <div className="flex gap-4">
            <button 
              onClick={handlePrint} 
              className="flex-1 bg-brandAccentBlue hover:bg-blue-700 text-white font-medium rounded-full py-3 text-sm transition-all flex items-center justify-center gap-2"
            >
              <Printer className="w-4 h-4" />
              <span>{t('printSave')}</span>
            </button>
            <button 
              onClick={onClose} 
              className="flex-1 border border-brandBorder hover:border-brandPrimary text-brandSecondary hover:text-brandPrimary font-medium rounded-full py-3 text-sm transition-all"
            >
              {t('close')}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
