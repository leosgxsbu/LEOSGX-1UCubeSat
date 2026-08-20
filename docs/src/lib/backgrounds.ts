const BASE = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export const SPACE_BACKGROUNDS = [
  `${BASE}/backgrounds/stars.png`,
  `${BASE}/backgrounds/solar-wind.png`,
  `${BASE}/backgrounds/earth-horizon.png`,
] as const;

/** Stable pick from the 3 backgrounds based on a page key (path). */
export function backgroundForPath(pathname: string): string {
  // Strip basePath if present so hashing stays stable
  const stripped = pathname.replace(/^\/LEOSGX-1UCubeSat/, "") || "/";
  const key = stripped.replace(/\/+$/, "") || "/";
  let hash = 0;
  for (let i = 0; i < key.length; i++) {
    hash = (hash * 31 + key.charCodeAt(i)) >>> 0;
  }
  return SPACE_BACKGROUNDS[hash % SPACE_BACKGROUNDS.length];
}
