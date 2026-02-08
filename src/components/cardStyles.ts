// Reusable Tailwind class strings for card components
// Use small helper c(...) to keep long class lists readable across multiple lines.
function c(...parts: string[]) {
	return parts.join(' ').trim();
}

/**
 * CARD_CLASSES
 * General card wrapper used in Hero and other grid layouts.
 */
export const CARD_CLASSES = {
		className: c(
			'group relative p-9 rounded-3xl border border-red-800/30',
			'hover:border-red-600/50 transition-all duration-300 hover:scale-105',
			'anim-item overflow-hidden md:col-span-4'
		),
	description: 'General card wrapper used in Hero and other grid layouts',
} as const;
export type CardClasses = typeof CARD_CLASSES['className'];

/**
 * OVERLAY_CLASSES
 * Sliding overlay used to create the from-bottom mask on card hover.
 */
export const OVERLAY_CLASSES = {
	className: c(
		'absolute inset-0 transform translate-y-full group-hover:translate-y-0',
		'transition-transform duration-500 ease-out',
		'bg-gradient-to-t from-red-900/60 to-black/60 pointer-events-none'
	),
	description: 'Sliding overlay used to create the from-bottom mask on card hover',
} as const;
export type OverlayClasses = typeof OVERLAY_CLASSES['className'];

/**
 * BASE_OVERLAY
 * Simple translucent layer to dim background images.
 */
export const BASE_OVERLAY = {
	className: c('absolute inset-0 bg-black/10'),
	description: 'Simple translucent layer to dim background images',
} as const;
export type BaseOverlay = typeof BASE_OVERLAY['className'];

/** TXT_CONTAINER
 * Container for text block inside cards (keeps z-index and spacing)
 */
export const TXT_CONTAINER = {
	// align horizontally with absolute icon at left-6 inside the card (p-9 padding vs icon left-6)
	// add -ml-3 (0.75rem) to shift the text left so it lines up with the icon
	className: c('txt relative z-10 flex flex-col items-start text-left mt-6 -ml-3'),
	description: 'Text container inside cards (z-index & spacing)',
} as const;
export type TxtContainer = typeof TXT_CONTAINER['className'];

/** TITLE_CLASSES
 * Main title inside card; animates upwards on group hover
 */
export const TITLE_CLASSES = {
		className: c(
			'text-4xl text-gray-200 font-semibold mb-3',
			'transition-transform duration-300'
		),
	description: 'Title inside card; animates on hover',
} as const;
export type TitleClasses = typeof TITLE_CLASSES['className'];

/** DESC_CLASSES
 * Description paragraph inside card; fades and moves into place on hover
 */
export const DESC_CLASSES = {
	className: c(
		'desc text-gray-200 text-base opacity-0 translate-y-4',
		'group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300'
	),
	description: 'Description text; fades and slides on hover',
} as const;
export type DescClasses = typeof DESC_CLASSES['className'];

/** MORE_CONTAINER
 * Container for the "more" link inside cards
 */
export const MORE_CONTAINER = {
	className: c('b_a mt-4 opacity-0 group-hover:opacity-100 transition-all duration-300'),
	description: 'Container for the "more" link inside cards',
} as const;
export type MoreContainer = typeof MORE_CONTAINER['className'];

/** ICON_ABSOLUTE
 * absolute positioned icon in the top-left of cards
 */
export const ICON_ABSOLUTE = {
	className: c('absolute top-6 left-6 z-20 pointer-events-none'),
	description: 'Absolute-positioned top-left icon in cards',
} as const;
export type IconAbsolute = typeof ICON_ABSOLUTE['className'];

// Union type of all exported style string literal types
export type CardStyleStrings =
	| CardClasses
	| OverlayClasses
	| BaseOverlay
	| TxtContainer
	| TitleClasses
	| DescClasses
	| MoreContainer
	| IconAbsolute;

// ----- Additional shared class constants used across other components -----
/**
 * LAYOUT_CARD
 * About.tsx & Contact.tsx: large info card container
 */
export const LAYOUT_CARD = {
	className: c(
		'bg-white',
		'p-8 rounded-2xl border'
	),
	description: 'Large info card container (About / Contact)',
} as const;
export type LayoutCard = typeof LAYOUT_CARD['className'];

/** ABOUT_VALUE_CARD
 * About.tsx: value item card used in 核心价值观 列表
 */
export const ABOUT_VALUE_CARD = {
	className: c(
		'group bg-white',
		'p-6 rounded-xl transition-all duration-200 anim-item',
	),
	description: 'Value list item (About core values) with hover interaction',
} as const;
export type AboutValueCard = typeof ABOUT_VALUE_CARD['className'];

/** G_SVG_SMALL
 * About.tsx: small svg wrapper style inside value card
 */
export const G_SVG_SMALL = {
	className: c('g_svg p-3 rounded-lg transition-colors'),
	description: 'Small SVG wrapper inside value cards',
} as const;
export type GSvgSmall = typeof G_SVG_SMALL['className'];

/** CASE_WRAPPER
 * Cases.tsx: wrapper for each industry case block
 */
export const CASE_WRAPPER = {
	className: c(
		'bg-gradient-to-br from-red-900/30 to-black/30',
		'backdrop-blur-sm rounded-2xl border border-red-800/30 overflow-hidden',
		'hover:border-red-600/50 transition-all duration-300 anim-item'
	),
	description: 'Wrapper for each industry case block',
} as const;
export type CaseWrapper = typeof CASE_WRAPPER['className'];

/** CASE_BUTTON
 * Cases.tsx: header button for a case item
 */
export const CASE_BUTTON = {
	className: c('w-full p-6 flex items-center justify-between hover:bg-red-900/10 transition-colors'),
	description: 'Header button for a case item',
} as const;
export type CaseButton = typeof CASE_BUTTON['className'];

/** CASE_ICON_BASE
 * Cases.tsx: base for industry icon background (color is dynamic)
 */
export const CASE_ICON_BASE = {
	className: c('p-4 rounded-xl'),
	description: 'Base style for case icons',
} as const;
export type CaseIconBase = typeof CASE_ICON_BASE['className'];

/** PROJECT_CARD
 * Cases.tsx: project entry card inside expanded case
 */
export const PROJECT_CARD = {
	className: c('bg-black/40 p-6 rounded-xl border border-red-900/20 anim-item'),
	description: 'Project entry card inside expanded case',
} as const;
export type ProjectCard = typeof PROJECT_CARD['className'];

/** INPUT_BASE
 * Contact.tsx: shared input/textarea base classes
 */
export const INPUT_BASE = {
	className: c(
		'w-full px-4 py-3 bg-white border border-gray-200 rounded-lg',
		'focus:outline-none focus:border-red-600 transition-colors text-black'
	),
	description: 'Shared input / textarea base classes',
} as const;
export type InputBase = typeof INPUT_BASE['className'];

/** FORM_TYPE_BUTTON_BASE
 * Contact.tsx: form type button base
 */
export const FORM_TYPE_BUTTON_BASE = {
	className: c('flex-1 flex items-center justify-center space-x-2 px-4 py-3 rounded-lg transition-all duration-300'),
	description: 'Base for form type selection buttons',
} as const;
export type FormTypeButtonBase = typeof FORM_TYPE_BUTTON_BASE['className'];

/** FOOTER_BASE
 * Footer.tsx: footer root container
 */
export const FOOTER_BASE = {
	className: c('bg-black border-t border-red-900/30 py-12 px-4'),
	description: 'Footer root container',
} as const;
export type FooterBase = typeof FOOTER_BASE['className'];

/** MAX_CONTAINER
 * shared: container max width center
 */
export const MAX_CONTAINER = {
	className: c('max-w-7xl mx-auto'),
	description: 'Centered max-width container',
} as const;
export type MaxContainer = typeof MAX_CONTAINER['className'];

// Belongs to: Talent.tsx & Services.tsx
export const GRADIENT_LG_40 = {
	className: c(
		'bg-gradient-to-br from-red-900/40 to-black/40',
		'backdrop-blur-sm p-8 rounded-2xl border border-red-800/30'
	),
	description: 'Large gradient container used in Talent & Services',
} as const;
export type GradientLg40 = typeof GRADIENT_LG_40['className'];

// Belongs to: Talent.tsx
export const TALENT_SUBCARD = {
	className: c('text-center p-6 bg-black/40 rounded-xl border border-red-900/20'),
	description: 'Small centered subcard used in Talent section',
} as const;
export type TalentSubcard = typeof TALENT_SUBCARD['className'];

// Belongs to: Services.tsx
export const SERVICES_WRAPPER = {
	className: c(
		'bg-gradient-to-br from-red-900/30 to-black/30',
		'backdrop-blur-sm p-6 rounded-2xl border border-red-800/30',
		'hover:border-red-600/50 transition-all duration-300 anim-item'
	),
	description: 'Wrapper for each service block',
} as const;
export type ServicesWrapper = typeof SERVICES_WRAPPER['className'];

// Belongs to: Services.tsx
export const SERVICE_FEATURE_CARD = {
	className: c(
		'bg-black/40 p-5 rounded-lg border border-red-900/20',
		'hover:border-red-700/40 transition-all duration-300 anim-item'
	),
	description: 'Feature card inside a service block',
} as const;
export type ServiceFeatureCard = typeof SERVICE_FEATURE_CARD['className'];
// Build a runtime description map from the exported objects
export const STYLE_DESCRIPTIONS = {
	CARD_CLASSES: CARD_CLASSES.description,
	OVERLAY_CLASSES: OVERLAY_CLASSES.description,
	BASE_OVERLAY: BASE_OVERLAY.description,
	TXT_CONTAINER: TXT_CONTAINER.description,
	TITLE_CLASSES: TITLE_CLASSES.description,
	DESC_CLASSES: DESC_CLASSES.description,
	MORE_CONTAINER: MORE_CONTAINER.description,
	ICON_ABSOLUTE: ICON_ABSOLUTE.description,
	LAYOUT_CARD: LAYOUT_CARD.description,
	ABOUT_VALUE_CARD: ABOUT_VALUE_CARD.description,
	G_SVG_SMALL: G_SVG_SMALL.description,
	CASE_WRAPPER: CASE_WRAPPER.description,
	CASE_BUTTON: CASE_BUTTON.description,
	CASE_ICON_BASE: CASE_ICON_BASE.description,
	PROJECT_CARD: PROJECT_CARD.description,
	INPUT_BASE: INPUT_BASE.description,
	FORM_TYPE_BUTTON_BASE: FORM_TYPE_BUTTON_BASE.description,
	FOOTER_BASE: FOOTER_BASE.description,
	MAX_CONTAINER: MAX_CONTAINER.description,
	GRADIENT_LG_40: GRADIENT_LG_40.description,
	TALENT_SUBCARD: TALENT_SUBCARD.description,
	SERVICES_WRAPPER: SERVICES_WRAPPER.description,
	SERVICE_FEATURE_CARD: SERVICE_FEATURE_CARD.description,
} as const;

export type StyleDescriptionKeys = keyof typeof STYLE_DESCRIPTIONS;

// Shared inline style object used by Hero/Services sections to keep background and font settings consistent
export const THEME_SECTION_STYLE = {
	WebkitTextSizeAdjust: '100%',
	WebkitFontSmoothing: 'antialiased',
	['--color']: '#005CE6',
	['--vh']: '881px',
	fontFamily: "'PingFang SC', 'Microsoft YaHei', 'Microsoft YaHei UI', 'SimSun', 'SimHei', 'Arial'",
	lineHeight: 1.5,
	fontSize: '14px',
	visibility: 'visible',
	color: '#333',
	backgroundColor: '#131114'
} as const;

// THEME2: About 区块专用的背景与字体颜色（浅背景 + 深色文字）
export const THEME2 = {
	backgroundColor: '#E3EBFF',
	color: '#333333',
} as const;

// Reusable gradient border style: bottom is #1F1D1E, top fades to #FFFFFF
export const GRADIENT_BORDER_STYLE = {
	backgroundColor: '#1F1D1E',
	border: '1px solid transparent',
	backgroundImage: 'linear-gradient(#1F1D1E,#1F1D1E), linear-gradient(to top, #1F1D1E, #FFFFFF)',
	backgroundOrigin: 'border-box',
	backgroundClip: 'padding-box, border-box',
} as const;
