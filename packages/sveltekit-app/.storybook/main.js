/** @type { import('@storybook/sveltekit').StorybookConfig } */
const config = {
	stories: [
		"../src/**/*.mdx",
		"../src/**/*.stories.@(js|jsx|ts|tsx)",
		"../../vanilla-app/common-stories/**/*.mdx",
		"../../vanilla-app/common-stories/**/*.stories.@(js|jsx|ts|tsx)",
	],
	addons: [
		"@storybook/addon-links",
		"@storybook/addon-essentials",
		"@storybook/addon-interactions",
	],
	framework: {
		name: "@storybook/sveltekit",
		options: {},
	},
	features: {
		storyStoreV7: false,
	},
	docs: {
		autodocs: "tag",
	},
};
export default config;
