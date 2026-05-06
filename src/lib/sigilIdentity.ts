/**
 * Display-only title tint per canon slug (meaning-aligned, subtle on dark bg).
 */
export function sigilTitleColorClass(slug: string): string {
	switch (slug) {
		case 'soulflame-sigil':
			return 'text-amber-100/95';
		case 'top-clear-mind':
			return 'text-sky-200/88';
		case 'top-solid-anchor-sha-karys':
			return 'text-stone-400/95';
		case 'zenga-zellia':
			return 'text-fuchsia-200/82';
		default:
			return 'text-amber-50/90';
	}
}
