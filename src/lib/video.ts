// Turns a YouTube / Loom share link (or an .mp4 path) into something the page can play.
export type Embed =
  | { kind: 'youtube'; id: string; src: string }
  | { kind: 'loom'; id: string; src: string }
  | { kind: 'mp4'; src: string };

export function toEmbed(url: string): Embed | null {
  if (!url) return null;
  if (/\.mp4(\?|$)/i.test(url)) return { kind: 'mp4', src: url };

  const yt = url.match(/(?:youtube\.com\/(?:watch\?(?:.*&)?v=|shorts\/|embed\/|live\/)|youtu\.be\/)([\w-]{11})/);
  if (yt) {
    const id = yt[1];
    return { kind: 'youtube', id, src: `https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0&playsinline=1&modestbranding=1` };
  }

  const loom = url.match(/loom\.com\/(?:share|embed)\/([a-f0-9]{32})/i);
  if (loom) {
    const id = loom[1];
    return { kind: 'loom', id, src: `https://www.loom.com/embed/${id}?autoplay=1&hide_owner=true&hide_share=true&hide_title=true&hideEmbedTopBar=true` };
  }

  console.warn(`[evalkeen] Unrecognised video link, ignoring: ${url}`);
  return null;
}
