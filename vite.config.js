import { sveltekit } from '@sveltejs/kit/vite';
import WindiCSS from 'vite-plugin-windicss'
import { windi } from 'svelte-windicss-preprocess'

/** @type {import('vite').UserConfig} */
const config = {
	plugins: [
		sveltekit({
			preprocess: [
				windi({}),
		  	],
		}),
		WindiCSS({
			root: __dirname,
			scan: {
			  fileExtensions: ['html', 'vue', 'js', 'ts', 'jsx', 'tsx', 'svelte'],
			  dirs: ['src'],
			},
		  }),
	]
};

export default config;
