// Central business configuration. Edit values here, not in components.

export const SITE = {
  name: "Influexe Media",
  tagline: "Turn Attention Into Measurable Growth.",
  // TODO: replace with the real production domain once it is confirmed.
  url: "https://influexe-media-website.vercel.app",
  email: "influexe.media@gmail.com",
  // WhatsApp number in international format, digits only.
  whatsappNumber: "918126676779",
  // Leave empty until a scheduling link (Calendly etc.) is supplied.
  // When empty, "Book a Strategy Call" falls back to the contact section.
  bookingUrl: "https://calendly.com/influexe-media",
} as const;

export const WHATSAPP_HREF = `https://wa.me/${SITE.whatsappNumber}`;

export const BOOK_CALL_HREF = SITE.bookingUrl || "/#contact";

// External scheduling links (Calendly etc.) open in a new tab; in-page anchors do not.
export const BOOK_CALL_IS_EXTERNAL = /^https?:\/\//.test(BOOK_CALL_HREF);
export const BOOK_CALL_LINK_PROPS = BOOK_CALL_IS_EXTERNAL
  ? { target: "_blank", rel: "noopener noreferrer" }
  : {};

export const EMAIL_HREF = `mailto:${SITE.email}`;

// Message pre-filled for customised package enquiries.
export const WHATSAPP_CUSTOM_HREF = `${WHATSAPP_HREF}?text=${encodeURIComponent(
  "Hi Influexe Media, I'd like to discuss a customised package for my business."
)}`;

export const SOCIAL = {
  instagram: "https://www.instagram.com/influexemedia/",
  threads: "https://www.threads.com/@influexemedia",
} as const;
