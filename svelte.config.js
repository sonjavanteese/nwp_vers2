// import adapter from '@sveltejs/adapter-static';
import vercel from '@sveltejs/adapter-vercel';
import { windi } from "svelte-windicss-preprocess";
/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: [
		windi({})
	],
	kit: {
		// adapter: adapter({
		// 	// default options are shown
		// 	pages: 'build',
		// 	assets: 'build',
		// 	fallback: null
		// }),
		adapter: vercel(),
		target: '#svelte'
	}
};

export default config;