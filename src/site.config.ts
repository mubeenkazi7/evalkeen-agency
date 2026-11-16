// ─────────────────────────────────────────────────────────────
// Everything you need to fill in lives in this one file.
// Leave a value empty ('') and the site falls back gracefully:
// buttons point to the contact section, videos show a placeholder.
// ─────────────────────────────────────────────────────────────

export const site = {
  name: 'evalkeen',
  description:
    'evalkeen finds where enquiries slip away — slow replies, missed calls, forgotten follow-ups — and fixes them with AI on WhatsApp, phone and email.',

  // Contact
  phone: '+91 90289 19227', // shown as text and used for "Call us", e.g. '+91 98765 43210'
  whatsapp: '+91 90289 19227', // digits only with country code, e.g. '919876543210'
  email: 'kmubeen.connect@gmail.com', // e.g. 'hello@evalkeen.com'

  // "Book a walkthrough" buttons. A Cal.com or Google Calendar booking link.
  bookingUrl: 'https://cal.com/mubeen-kazi-b4zbtq/30min',

  // Social profiles
  socials: {
    instagram: '',
    youtube: '',
    linkedin: '',
  },

  // Demo videos: paste a YouTube or Loom link, e.g.
  //   'https://youtu.be/AbCdEfGhIjK', 'https://www.youtube.com/shorts/AbCdEfGhIjK'
  //   'https://www.loom.com/share/0123456789abcdef0123456789abcdef'
  // vertical: true  → phone-shaped 9:16 frame (phone screen recordings, YouTube Shorts)
  // vertical: false → 16:9 frame (Loom screen recordings, normal YouTube videos)
  // poster (optional): a still image shown before play, e.g. '/videos/clinic-poster.jpg' in /public.
  videos: {
    clinic: { url: '', vertical: true, poster: '' },
    immigration: { url: '', vertical: true, poster: '' },
  },

  // Optional: Plausible analytics domain, e.g. 'evalkeen.com'. Leave empty to disable.
  plausibleDomain: '',
};

// Derived links (don't edit)
const digits = (s: string) => s.replace(/[^\d+]/g, '');
export const links = {
  book: site.bookingUrl || '#contact',
  bookExternal: Boolean(site.bookingUrl),
  whatsapp: site.whatsapp ? `https://wa.me/${site.whatsapp.replace(/\D/g, '')}` : '#contact',
  call: site.phone ? `tel:${digits(site.phone)}` : '#contact',
  email: site.email ? `mailto:${site.email}` : '#contact',
};
