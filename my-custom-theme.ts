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
		'--theme-rounded-container': '9999px',
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

		// tertiary | #b2a1e3
		'--color-tertiary-50': '243 241 252', // #f3f1fc
		'--color-tertiary-100': '237 234 250', // #edeafa
		'--color-tertiary-200': '230 227 248', // #e6e3f8
		'--color-tertiary-300': '211 206 243', // #d3cef3
		'--color-tertiary-400': '172 164 233', // #aca4e9
		'--color-tertiary-500': '178 161 227', // #b2a1e3
		'--color-tertiary-600': '148 134 192', // #9486c0
		'--color-tertiary-700': '124 112 160', // #7c70a0
		'--color-tertiary-800': '99 89 128', // #635980
		'--color-tertiary-900': '81 72 103', // #514867

		// success |  #3a9d7a
		'--color-success-50': '222 241 236', // #def1ec
		'--color-success-100': '207 234 226', // #cfeae2
		'--color-success-200': '179 221 208', // #b3ddd0
		'--color-success-300': '137 198 179', // #89c6b3
		'--color-success-400': '95 175 150', // #5faf96
		'--color-success-500': '58 157 122', // #3a9d7a
		'--color-success-600': '52 141 110', // #348d6e
		'--color-success-700': '44 117 91', // #2c755b
		'--color-success-800': '35 94 73', // #235e49
		'--color-success-900': '29 77 60', // #1d4d3c

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

		// error | #c44b4b
		'--color-error-50': '250 228 228', // #fae4e4
		'--color-error-100': '247 213 213', // #f7d5d5
		'--color-error-200': '241 181 181', // #f1b5b5
		'--color-error-300': '229 138 138', // #e58a8a
		'--color-error-400': '209 92 92', // #d15c5c
		'--color-error-500': '196 75 75', // #c44b4b
		'--color-error-600': '176 67 67', // #b04343
		'--color-error-700': '147 56 56', // #933838
		'--color-error-800': '118 45 45', // #762d2d
		'--color-error-900': '96 37 37', // #602525

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
