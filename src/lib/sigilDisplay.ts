/**
 * MVP display-model bridge: maps canonical Sigil JSON (unchanged keys) to a stable
 * presentation shape. Does not affect discoverability — use lib/sigils.ts for that.
 */
import type { Sigil } from '../types/sigil';

/** Sigil row as stored in JSON plus pipeline fields not on core Sigil interface. */
export type SigilRecord = Sigil & {
	status?: string;
	visibility?: string;
};

export interface SigilDisplayItem {
	title: string;
	empyrriaans: string;
	type: string;
	category: string;
	meaning: string;
	description: string;
	layer: string;
	status: string;
	tags: string[];
	image: string;
	version: string;
}

const DISPLAY_VERSION = 'v1';

/** Unique merge of facets then terms (facets first), preserving first-seen order. */
export function mergeTags(facets: string[] | undefined, terms: string[] | undefined): string[] {
	const seen = new Set<string>();
	const out: string[] = [];
	for (const list of [facets ?? [], terms ?? []] as const) {
		for (const raw of list) {
			const s = raw.trim();
			if (!s || seen.has(s)) continue;
			seen.add(s);
			out.push(s);
		}
	}
	return out;
}

/**
 * First term that is not the same as display name (case-insensitive) — Empyrean alternate label.
 */
export function firstAlternateEmpyrriaans(name: string, terms: string[] | undefined): string {
	const n = name.trim().toLowerCase();
	for (const raw of terms ?? []) {
		const t = raw.trim();
		if (t.length > 0 && t.toLowerCase() !== n) return t;
	}
	return '';
}

/**
 * Short meaning line from doctrine: strips leading "Meaning / Function:" if present,
 * then first sentence or first line (bounded length).
 */
export function extractShortMeaningFromDoctrine(doctrine: string): string {
	let t = doctrine.trim();
	const mf = /^meaning\s*\/\s*function\s*:\s*/i;
	if (mf.test(t)) {
		t = t.replace(mf, '').trim();
	}

	const sentenceMatch = /^([\s\S]{1,400}?[.!?])(?:\s|$)/.exec(t);
	if (sentenceMatch) {
		return sentenceMatch[1].trim();
	}

	const firstLine = t.split(/\n/).find((line) => line.trim().length > 0) ?? t;
	const line = firstLine.trim();
	if (line.length <= 320) return line;
	return `${line.slice(0, 317).trimEnd()}…`;
}

/** Human-readable status line for display only — does not drive routing or filters. */
export function formatPublicationDisplayStatus(sigil: SigilRecord): string {
	const st = typeof sigil.status === 'string' ? sigil.status.trim() : '';
	const vis = typeof sigil.visibility === 'string' ? sigil.visibility.trim() : '';
	if (st && vis) return `${st} · ${vis}`;
	if (st) return st;
	if (vis) return vis;
	return '';
}

export function toSigilDisplayItem(sigil: SigilRecord): SigilDisplayItem {
	const name = sigil.name.trim();
	const explicitTitle = typeof sigil.title === 'string' ? sigil.title.trim() : '';
	const title = explicitTitle.length > 0 ? explicitTitle : name;

	const facets = sigil.facets ?? [];
	const categoryRaw = typeof sigil.category === 'string' ? sigil.category.trim() : '';
	const facet0 = facets[0]?.trim() ?? '';
	const type = facet0 || categoryRaw || '';
	const category = categoryRaw || facet0 || '';

	const doctrine = sigil.doctrine;
	const description = doctrine;
	const explicitMeaning = typeof sigil.meaning === 'string' ? sigil.meaning.trim() : '';
	const meaning =
		explicitMeaning.length > 0 ? explicitMeaning : extractShortMeaningFromDoctrine(doctrine);

	const explicitLayer = typeof sigil.layer === 'string' ? sigil.layer.trim() : '';
	const layer = explicitLayer;

	const img = typeof sigil.image === 'string' ? sigil.image.trim() : '';

	return {
		title,
		empyrriaans: firstAlternateEmpyrriaans(name, sigil.terms),
		type,
		category,
		meaning,
		description,
		layer,
		status: formatPublicationDisplayStatus(sigil),
		tags: mergeTags(sigil.facets, sigil.terms),
		image: img,
		version: DISPLAY_VERSION,
	};
}
