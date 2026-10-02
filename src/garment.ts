// Colorways: one per piece Lukas wears often.
export const G = {
  cardigan: { name: 'Olive cashmere cardigan', bg: '#56614A', fg: '#F5F3EB', muted: '#D5D9C8', accent: '#EBDCA9', scheme: 'dark' },
  denim: { name: 'Blue denim jeans', bg: '#34465F', fg: '#EEF1F5', muted: '#BAC5D5', accent: '#DDB283', scheme: 'dark' },
  tee: { name: 'Black cotton tee', bg: '#1D1D1F', fg: '#EDEBE6', muted: '#A6A39D', accent: '#D9CFBA', scheme: 'dark' },
  sweats: { name: 'Grey sweatpants', bg: '#BEC0C3', fg: '#25262A', muted: '#45484D', accent: '#3E4C62', scheme: 'light' },
} as const;

export type GarmentKey = keyof typeof G;
export const GK = Object.keys(G) as GarmentKey[];

const BODY: Record<GarmentKey, string> = {
  denim: '<rect class="gb" x="22" y="27" width="56" height="9" rx="1.5" fill="#4C6B93"/><path class="gb" d="M22 36h56l6 84H59L50 60l-9 60H16z" fill="#4C6B93"/><path class="gd" stroke="#C99A62" stroke-dasharray="2 2" d="M50 36v20M26 38q4 9 12 1M74 38q-4 9-12 1M31 62l-3 55M69 62l3 55"/><circle cx="50" cy="31.5" r="1.8" fill="#C99A62"/>',
  tee: '<path class="gb" d="M34 31l9-3q7 7 14 0l9 3 20 14-8 12-8-6v70H30V51l-8 6-8-12z" fill="#1F1F22"/><path class="gd" stroke="#55555B" d="M43 28q7 9 14 0M30 112h40"/>',
  cardigan: '<path d="M45 27l5 26 5-26z" fill="#ECE8DF"/><path class="gb" d="M36 29l9-2 5 26 5-26 9 2 22 12 6 74-12 2-7-56v62H27V61l-7 56-12-2 6-74z" fill="#6E7B5E"/><path class="gd" stroke="#4E5843" d="M50 53v66M27 113h46M10 109l11 2M79 111l11-2"/><circle cx="50" cy="64" r="2" fill="#2E2F2A"/><circle cx="50" cy="78" r="2" fill="#2E2F2A"/><circle cx="50" cy="92" r="2" fill="#2E2F2A"/><circle cx="50" cy="106" r="2" fill="#2E2F2A"/>',
  sweats: '<rect class="gb" x="24" y="27" width="52" height="10" rx="2" fill="#A9ABAE"/><path class="gb" d="M24 37h52l4 72 2 10H58L50 62l-8 57H18l2-10z" fill="#A9ABAE"/><path class="gd" stroke="#808287" d="M30 29v6M36 29v6M42 29v6M58 29v6M64 29v6M70 29v6M19 109h23M58 109h23M20 113h22M58 113h23"/><path class="gd" stroke="#F4F4F2" stroke-width="1.4" d="M47 37q-1 9-4 15M53 37q1 9 4 15"/>',
};

// Garment on a hanger as inline SVG. Pants get a clip hanger, tops a shoulder hanger.
export function garment(k: GarmentKey): string {
  const hook = '<path class="hg" d="M50 15c0-5 7-5 7-10S50-1 47 3';
  const hanger = k === 'denim' || k === 'sweats'
    ? `${hook}M50 15v8M20 24h60"/><path class="hg" d="M24 24v5M76 24v5"/>`
    : `${hook}M50 15L13 40h74z"/>`;
  return `<svg class="g" viewBox="0 0 100 124" aria-hidden="true">${hanger}${BODY[k]}</svg>`;
}
