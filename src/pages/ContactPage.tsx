import React, { useState } from 'react';
import {
  Phone,
  MessageCircle,
  Mail,
  MapPin,
  Clock,
  Send,
  CheckCircle2,
  ShieldCheck,
  Building2,
  Sparkles,
} from 'lucide-react';
import {
  COMPANY_PHONE,
  COMPANY_WHATSAPP,
  COMPANY_EMAIL,
  COMPANY_ADDRESS,
  COMPANY_FOUNDER,
  COMPANY_FOUNDED,
  getWhatsAppUrl,
  getPhoneUrl,
} from '../utils/whatsapp';

export const ContactPage: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [service, setService] = useState('Website Development');
  const [budget, setBudget] = useState('₹25,000 – ₹50,000');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone) return;

    setSubmitted(true);

    const formattedMessage = `*New Contact Request - Webtech IT Solution*
----------------------------------------
*Name:* ${name.trim()}
*Phone:* ${phone.trim()}
*Email:* ${email.trim() || 'Not specified'}
*Service:* ${service}
*Budget Range:* ${budget}
*Message:* ${message.trim() || 'Looking for technical quotation.'}
----------------------------------------
_Sent from Contact Page on webtechitsolution.com_`;

    const waUrl = `https://wa.me/91${COMPANY_WHATSAPP}?text=${encodeURIComponent(formattedMessage)}`;

    setTimeout(() => {
      window.open(waUrl, '_blank', 'noopener,noreferrer');
    }, 1000);
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-16">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-mono">
          <span>DIRECT CONTACT &amp; OFFICE CONSULTATION</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
          Let&apos;s Discuss Your Project with Founder Noman Khan
        </h1>
        <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
          Reach out via phone, direct WhatsApp, email, or schedule an in-person meeting at our Rohini, Delhi office.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        
        {/* Left Column: Contact Form */}
        <div className="lg:col-span-7 bg-slate-900/70 border border-slate-800 rounded-3xl p-6 sm:p-10 space-y-6">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              Send a Detailed Project Scope
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 mt-1">
              Submissions automatically route to our technical desk and launch direct WhatsApp chat for instant response.
            </p>
          </div>

          {submitted ? (
            <div className="p-8 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-center space-y-4 animate-in fade-in duration-200">
              <div className="w-14 h-14 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-bold text-white">Inquiry Sent Successfully!</h3>
              <p className="text-xs sm:text-sm text-slate-300 max-w-md mx-auto">
                Redirecting your details to founder Noman Khan on WhatsApp (9594319442). If the chat did not open automatically, click the button below:
              </p>
              <a
                href={getWhatsAppUrl(`Hi Noman Khan, I just submitted an inquiry on the Webtech IT Solution website.`)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Open WhatsApp Chat Directly</span>
              </a>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Noman Khan"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">
                    Mobile Number (WhatsApp) *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="e.g. 9594319442"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">
                  Email Address (Optional)
                </label>
                <input
                  type="email"
                  placeholder="e.g. contact@yourcompany.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-500"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
                    <option value="SEO & Website Optimization">SEO &amp; Website Optimization</option>
                    <option value="Software Products License">Software Products License</option>
                    <option value="Other Project">Other Custom Project</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">
                    Estimated Budget
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
                    <option value="Flexible / Need Consultation">Flexible / Need Consultation</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">
                  Project Description &amp; Objectives
                </label>
                <textarea
                  rows={4}
                  required
                  placeholder="Describe what you want to achieve, features required, or reference websites..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs sm:text-sm transition-all shadow-lg shadow-blue-600/30 cursor-pointer"
              >
                <Send className="w-4 h-4" />
                <span>Submit &amp; Open Direct WhatsApp Discussion</span>
              </button>
            </form>
          )}
        </div>

        {/* Right Column: Direct Info & Physical Map Placeholder */}
        <div className="lg:col-span-5 space-y-6">
          
          {/* Quick Direct Contacts */}
          <div className="bg-slate-900/60 border border-slate-800 rounded-3xl p-6 sm:p-8 space-y-5">
            <h3 className="text-lg font-bold text-white tracking-tight">
              Direct Contact Channels
            </h3>

            <div className="space-y-4 text-xs sm:text-sm">
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs text-slate-400">Direct Phone Line</p>
                  <a href={getPhoneUrl()} className="text-white font-mono font-bold hover:text-blue-400 transition-colors">
                    +91 {COMPANY_PHONE}
                  </a>
                  <p className="text-[11px] text-slate-400">Direct line to Noman Khan</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0">
                  <MessageCircle className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs text-slate-400">WhatsApp Instant Chat</p>
                  <a
                    href={getWhatsAppUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-emerald-400 font-mono font-bold hover:underline"
                  >
                    +91 {COMPANY_WHATSAPP}
                  </a>
                  <p className="text-[11px] text-slate-400">Average response &lt; 15 mins</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs text-slate-400">Email Address</p>
                  <a href={`mailto:${COMPANY_EMAIL}`} className="text-white font-medium hover:text-cyan-400 transition-colors">
                    {COMPANY_EMAIL}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs text-slate-400">Headquarters Address</p>
                  <p className="text-white font-medium">{COMPANY_ADDRESS}</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 shrink-0">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs text-slate-400">Working Hours</p>
                  <p className="text-white font-medium">Monday – Saturday: 09:30 AM – 08:00 PM IST</p>
                </div>
              </div>
            </div>
          </div>

          {/* Embedded Google Map Placeholder Card */}
          <div className="bg-slate-900/60 border border-slate-800 rounded-3xl p-5 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-white">Rohini Delhi Location Map</span>
              <span className="text-[11px] font-mono text-cyan-400">PIN 110085</span>
            </div>

            <div className="w-full h-48 rounded-xl bg-slate-950 border border-slate-800 flex flex-col items-center justify-center p-4 text-center relative overflow-hidden group">
              {/* Subtle map grid styling */}
              <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:16px_16px] opacity-40 pointer-events-none" />
              <MapPin className="w-8 h-8 text-rose-500 mb-2 z-10 animate-bounce" />
              <p className="text-xs font-bold text-white z-10">Webtech IT Solution</p>
              <p className="text-[11px] text-slate-400 z-10 mt-0.5">Mangolpur Kalan, Rohini, Delhi 110085</p>
              <a
                href="https://maps.google.com/?q=Mangolpur+Kalan+Rohini+Delhi+110085"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 px-3 py-1.5 rounded-lg bg-blue-600/20 hover:bg-blue-600/40 text-blue-300 border border-blue-500/30 text-xs font-semibold z-10 transition-colors"
              >
                Open in Google Maps
              </a>
            </div>
          </div>

        </div>

      </div>

    </div>
  );
};
