// https://nuxt.com/docs/api/configuration/nuxt-config


export default defineNuxtConfig( {
	modules: [ '@vee-validate/nuxt', '@vite-pwa/nuxt', 'nuxt-svgo'],
	app: {
		head: {
			charset: 'utf-8',
			viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
			link: [
				{ rel: 'icon', sizes: '32x32', href: '/favicon-32x32.png' },
				{ rel: 'icon', sizes: '96x96', href: '/favicon-194x194.png' },
				{ rel: 'icon', sizes: '16x16', href: '/favicon-16x16.png' },
				{ rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
				{ rel: 'icon', type: 'image/png', sizes: '192x192', href: '/android-chrome-192x192.png' },
				{ rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
				{ rel: 'mask-icon', href: '/safari-pinned-tab.svg', color: '#6429a3' },
				{ rel: 'manifest', href: '/site.webmanifest' },
				{ rel: 'manifest', href: 'browserconfig' }
			],
			meta: [
				{ name: 'msapplication-TileColor', content: '#6429a3' },
				{ name: 'theme-color', content: '#6429a3' }
			]
		}
	},
	css: [
		'~/assets/css/fonts.css',
		'~/assets/scss/theme/theme.scss',
		'~/assets/scss/main.scss',
	],
	devtools: { enabled: false, type: 'module' },
} );


//'~/assets/scss/theme/dark.scss'
//'~/assets/scss/theme/light.scss'