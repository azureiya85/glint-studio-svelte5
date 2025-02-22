import type { CustomThemeConfig } from '@skeletonlabs/tw-plugin';

export const myCustomTheme: CustomThemeConfig = {
	name: 'my-custom-theme',
	properties: {
		// =~= Theme Properties =~=
		'--theme-font-family-base': `Clash Grotesk, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'`,
		'--theme-font-family-heading': `Clash Display, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'`,
		'--theme-font-color-base': '0 0 0',
		'--theme-font-color-dark': '255 255 255',
		'--theme-rounded-base': '9999px',
		'--theme-rounded-container': '8px',
		'--theme-border-base': '1px',
		// =~= Theme On-X Colors =~=
		'--on-primary': '255 255 255',
		'--on-secondary': '0 0 0',
		'--on-tertiary': '0 0 0',
		'--on-success': '0 0 0',
		'--on-warning': '0 0 0',
		'--on-error': '0 0 0',
		'--on-surface': '255 255 255',
		// =~= Theme Colors  =~=
		// primary | #45496a
		'--color-primary-50': '227 228 233', // #e3e4e9
		'--color-primary-100': '218 219 225', // #dadbe1
		'--color-primary-200': '209 210 218', // #d1d2da
		'--color-primary-300': '181 182 195', // #b5b6c3
		'--color-primary-400': '125 128 151', // #7d8097
		'--color-primary-500': '69 73 106', // #45496a
		'--color-primary-600': '62 66 95', // #3e425f
		'--color-primary-700': '52 55 80', // #343750
		'--color-primary-800': '41 44 64', // #292c40
		'--color-primary-900': '34 36 52', // #222434
		// secondary | #e5857b
		'--color-secondary-50': '251 237 235', // #fbedeb
		'--color-secondary-100': '250 231 229', // #fae7e5
		'--color-secondary-200': '249 225 222', // #f9e1de
		'--color-secondary-300': '245 206 202', // #f5ceca
		'--color-secondary-400': '237 170 163', // #edaaa3
		'--color-secondary-500': '229 133 123', // #e5857b
		'--color-secondary-600': '206 120 111', // #ce786f
		'--color-secondary-700': '172 100 92', // #ac645c
		'--color-secondary-800': '137 80 74', // #89504a
		'--color-secondary-900': '112 65 60', // #70413c
		// tertiary | #f1b2b2
		'--color-tertiary-50': '253 243 243', // #fdf3f3
		'--color-tertiary-100': '252 240 240', // #fcf0f0
		'--color-tertiary-200': '252 236 236', // #fcecec
		'--color-tertiary-300': '249 224 224', // #f9e0e0
		'--color-tertiary-400': '245 201 201', // #f5c9c9
		'--color-tertiary-500': '241 178 178', // #f1b2b2
		'--color-tertiary-600': '217 160 160', // #d9a0a0
		'--color-tertiary-700': '181 134 134', // #b58686
		'--color-tertiary-800': '145 107 107', // #916b6b
		'--color-tertiary-900': '118 87 87', // #765757
		// success | #37ee1d
		'--color-success-50': '225 252 221', // #e1fcdd
		'--color-success-100': '215 252 210', // #d7fcd2
		'--color-success-200': '205 251 199', // #cdfbc7
		'--color-success-300': '175 248 165', // #aff8a5
		'--color-success-400': '115 243 97', // #73f361
		'--color-success-500': '55 238 29', // #37ee1d
		'--color-success-600': '50 214 26', // #32d61a
		'--color-success-700': '41 179 22', // #29b316
		'--color-success-800': '33 143 17', // #218f11
		'--color-success-900': '27 117 14', // #1b750e
		// warning | #e4874c
		'--color-warning-50': '251 237 228', // #fbede4
		'--color-warning-100': '250 231 219', // #fae7db
		'--color-warning-200': '248 225 210', // #f8e1d2
		'--color-warning-300': '244 207 183', // #f4cfb7
		'--color-warning-400': '236 171 130', // #ecab82
		'--color-warning-500': '228 135 76', // #e4874c
		'--color-warning-600': '205 122 68', // #cd7a44
		'--color-warning-700': '171 101 57', // #ab6539
		'--color-warning-800': '137 81 46', // #89512e
		'--color-warning-900': '112 66 37', // #704225
		// error | #e8ccc7
		'--color-error-50': '252 247 247', // #fcf7f7
		'--color-error-100': '250 245 244', // #faf5f4
		'--color-error-200': '249 242 241', // #f9f2f1
		'--color-error-300': '246 235 233', // #f6ebe9
		'--color-error-400': '239 219 216', // #efdbd8
		'--color-error-500': '232 204 199', // #e8ccc7
		'--color-error-600': '209 184 179', // #d1b8b3
		'--color-error-700': '174 153 149', // #ae9995
		'--color-error-800': '139 122 119', // #8b7a77
		'--color-error-900': '114 100 98', // #726462
		// surface | #7d8bae
		'--color-surface-50': '236 238 243', // #eceef3
		'--color-surface-100': '229 232 239', // #e5e8ef
		'--color-surface-200': '223 226 235', // #dfe2eb
		'--color-surface-300': '203 209 223', // #cbd1df
		'--color-surface-400': '164 174 198', // #a4aec6
		'--color-surface-500': '125 139 174', // #7d8bae
		'--color-surface-600': '113 125 157', // #717d9d
		'--color-surface-700': '94 104 131', // #5e6883
		'--color-surface-800': '75 83 104', // #4b5368
		'--color-surface-900': '61 68 85' // #3d4455
	}
};
