import React, { useState, useEffect } from 'react';
import { X, MessageCircle, Send, CheckCircle2, ShieldCheck, Sparkles } from 'lucide-react';
import { COMPANY_WHATSAPP } from '../utils/whatsapp';

interface LeadModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultService?: string;
}

export const GlobalLeadModal: React.FC<LeadModalProps> = ({
  isOpen,
  onClose,
  defaultService = '',
}) => {
  const [name, setName] = useState('');
  const [mobile, setMobile] = useState('');
  const [service, setService] = useState(defaultService || 'Website Development');
  const [budget, setBudget] = useState('₹25,000 – ₹50,000');
  const [projectBrief, setProjectBrief] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  useEffect(() => {
    if (defaultService) {
      setService(defaultService);
    }
  }, [defaultService]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) {
      setErrorMsg('Please enter your full name');
      return;
    }
    if (!mobile.trim() || mobile.trim().length < 8) {
      setErrorMsg('Please enter a valid mobile number');
      return;
    }

    setErrorMsg('');
    setSubmitted(true);

    // Format pre-filled WhatsApp message
    const formattedMessage = `*New Lead Inquiry - Webtech IT Solution*
----------------------------------------
*Client Name:* ${name.trim()}
*Phone Number:* ${mobile.trim()}
*Service Interested In:* ${service}
*Estimated Budget:* ${budget}
${projectBrief.trim() ? `*Project Details:* ${projectBrief.trim()}` : ''}
----------------------------------------
_Inquiry via webtechitsolution.com lead form_`;

    const waUrl = `https://wa.me/91${COMPANY_WHATSAPP}?text=${encodeURIComponent(formattedMessage)}`;

    // Open WhatsApp in new tab / redirect
    setTimeout(() => {
      window.open(waUrl, '_blank', 'noopener,noreferrer');
      onClose();
      setSubmitted(false);
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-lg bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl overflow-hidden p-6 sm:p-8"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        {/* Close / Skip button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
          aria-label="Skip and close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="text-center py-8 space-y-4 animate-in zoom-in-95 duration-200">
            <div className="w-16 h-16 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-white">Connecting with WhatsApp...</h3>
            <p className="text-sm text-slate-400 max-w-xs mx-auto">
              Redirecting you directly to founder Noman Khan on WhatsApp (9594319442).
            </p>
          </div>
        ) : (
          <div>
            {/* Header */}
            <div className="mb-6">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-mono mb-2">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Quick Free Consultation · 100% Direct Response</span>
              </div>
              <h2 id="modal-title" className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                Get a Fast Quote &amp; Technical Scope
              </h2>
              <p className="text-xs sm:text-sm text-slate-400 mt-1">
                Fill this quick form to instantly chat with founder Noman Khan on WhatsApp.
              </p>
            </div>

            {errorMsg && (
              <div className="mb-4 p-2.5 rounded-lg bg-rose-500/10 border border-rose-500/20 text-rose-300 text-xs">
                {errorMsg}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">
                  Your Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Rahul Sharma"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">
                  Mobile / WhatsApp Number *
                </label>
                <input
                  type="tel"
                  required
                  placeholder="e.g. 9876543210"
                  value={mobile}
                  onChange={(e) => setMobile(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">
                    Service Required
                  </label>
                  <select
                    value={service}
                    onChange={(e) => setService(e.target.value)}
                    className="w-full px-3 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white focus:outline-none focus:border-blue-500"
                  >
                    <option value="Website Development">Website Development</option>
                    <option value="UI/UX Design">UI/UX Design</option>
                    <option value="WordPress Development">WordPress Development</option>
                    <option value="Shopify & E-commerce">Shopify &amp; E-commerce</option>
                    <option value="B2B Solutions">B2B Solutions</option>
                    <option value="AI Development">AI Development</option>
                    <option value="Mobile App Development">Mobile App Development</option>
                    <option value="Custom Software & SaaS">Custom Software &amp; SaaS</option>
                    <option value="SEO & Website Optimization">SEO &amp; Optimization</option>
                    <option value="Whatsapp Bulk Software">Whatsapp Bulk Software</option>
                    <option value="CRM Management Product">CRM Management Product</option>
                    <option value="Appointment Booking App">Appointment Booking App</option>
                    <option value="Invoice & Bill Maker">Invoice &amp; Bill Maker</option>
                    <option value="PDF Tools App">PDF Tools App</option>
                    <option value="Kids Puzzle Game">Kids Puzzle Game</option>
                    <option value="Other Custom Project">Other Custom Project</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">
                    Service Budget
                  </label>
                  <select
                    value={budget}
                    onChange={(e) => setBudget(e.target.value)}
                    className="w-full px-3 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white focus:outline-none focus:border-blue-500"
                  >
                    <option value="Under ₹25,000">Under ₹25,000</option>
                    <option value="₹25,000 – ₹50,000">₹25,000 – ₹50,000</option>
                    <option value="₹50,000 – ₹1,50,000">₹50,000 – ₹1,50,000</option>
                    <option value="₹1,50,000 – ₹5,00,000">₹1,50,000 – ₹5,00,000</option>
                    <option value="₹5,00,000+ (Enterprise)">₹5,00,000+ (Enterprise)</option>
                    <option value="Need Estimate Discussion">Need Estimate Discussion</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">
                  Brief Project Requirements (Optional)
                </label>
                <textarea
                  rows={2}
                  placeholder="Tell us what you want to build or improve..."
                  value={projectBrief}
                  onChange={(e) => setProjectBrief(e.target.value)}
                  className="w-full px-3.5 py-2 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors resize-none"
                />
              </div>

              <div className="pt-2 flex items-center justify-between gap-3">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-2.5 rounded-xl text-xs font-medium text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
                >
                  Skip for Now
                </button>

                <button
                  type="submit"
                  className="flex-1 flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs transition-all shadow-lg shadow-emerald-900/40"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Send to WhatsApp (9594319442)</span>
                </button>
              </div>
            </form>

            <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400">
              <span className="flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-blue-400" />
                Zero Spam · Direct Founder Confidentiality
              </span>
              <span>Rohini, Delhi 110085</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
