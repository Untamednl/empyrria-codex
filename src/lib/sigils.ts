import type { Sigil, SigilCodexData } from '../types/sigil';
import raw from '../data/sigils.json';

const codex = raw as SigilCodexData;

export function getCodex(): SigilCodexData {
	return codex;
}

export function getAllSigils(): Sigil[] {
	return codex.sigils;
}

export function isPubliclyDiscoverableSigil(sigil: Sigil): boolean {
	const canonMeta = sigil as Sigil & { status?: string; visibility?: string };
	return canonMeta.status === 'provisional' && canonMeta.visibility === 'marked_public';
}

export function getPubliclyDiscoverableSigils(): Sigil[] {
	return getAllSigils().filter(isPubliclyDiscoverableSigil);
}

export function getSigilBySlug(slug: string): Sigil | undefined {
	return codex.sigils.find((s) => s.slug === slug);
}
