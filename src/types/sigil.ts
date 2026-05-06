/**
 * Empyrria Sigil Codex — content shape for static JSON.
 * Doctrine and underlay map to UI: gold (doctrine), cyan (underlay).
 */
export interface Sigil {
	/** URL-safe unique key (used in routes and filenames). */
	slug: string;
	/** Display name */
	name: string;
	/** Doctrine — canonical teaching */
	doctrine: string;
	/** Underlay — structural / cipher layer; omit if not applicable */
	underlay?: string;
	/** Public URL path to SVG under `public/media/sigils/`, e.g. `/media/sigils/slug.svg` */
	image?: string;
	/** Optional grouping for filters; values must come from Zierota’s system only */
	facets?: string[];
}

export interface SigilCodexData {
	version: string;
	sigils: Sigil[];
}
