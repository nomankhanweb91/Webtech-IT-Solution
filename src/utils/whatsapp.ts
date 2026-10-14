export const COMPANY_PHONE = '7977117717';
export const COMPANY_WHATSAPP = '9594319442';
export const COMPANY_EMAIL = 'nomankhanweb@gmail.com';
export const COMPANY_ADDRESS = 'Mangolpur Kalan, Rohini, Delhi 110085';
export const COMPANY_FOUNDER = 'Webtech IT Solution';
export const COMPANY_FOUNDED = '2023';

/**
 * Builds a direct WhatsApp click-to-chat URL with a prefilled, cleanly encoded message.
 */
export function getWhatsAppUrl(message?: string): string {
  const defaultText = `Hello Webtech IT Solution! I am looking for software and web development services. Please share details.`;
  const textToSend = message?.trim() ? message.trim() : defaultText;
  return `https://wa.me/91${COMPANY_WHATSAPP}?text=${encodeURIComponent(textToSend)}`;
}

/**
 * Build a tel: protocol URL for direct calling.
 */
export function getPhoneUrl(): string {
  return `tel:+91${COMPANY_PHONE}`;
}
