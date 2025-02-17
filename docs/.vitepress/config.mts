import { defineConfig } from 'vitepress'

function sidebar() {
	return [
		{ text: 'Bin', link: '/bin' },
		{ text: 'Clock', link: '/clock' },
		{ text: 'Collection', link: '/collection' },
		{ text: 'Fetch', link: '/fetch' },
		{ text: 'Future', link: '/future' },
		{ text: 'Guard', link: '/guard' },
		{ text: 'Ratelimit', link: '/ratelimit' },
		{ text: 'Signal', link: '/signal' },
		{ text: 'Spawn', link: '/spawn' },
	]
}

export default defineConfig({
	title: 'Redblox-TS Util',
	description: "A Roblox-TS port of Redblox's open source utility libraries!",
	lang: 'en-US',
	head: [
		//['link', { rel: 'icon', href: '/favicon.png' }],
	],

	themeConfig: {
		//logo: '/logo.png',
		//siteTitle: false,
		outline: 'deep',

		socialLinks: [
			{ icon: 'github', link: 'https://github.com/AcurrzDev/rbxts-redblox-ts' },
			{ icon: 'discord', link: 'https://discord.gg/fZh9qfVbeF' },
		],

		nav: [
			{ text: 'Installing', link: '/installing' },
		],

		sidebar: sidebar(),
	}
})