/** @type { import('@storybook/html-vite').StorybookConfig } */
const config = {
	stories: [
		"../stories/**/*.mdx",
		"../stories/**/*.stories.@(js|jsx|ts|tsx)",
		"../common-stories/**/*.mdx",
		"../common-stories/**/*.stories.@(js|jsx|ts|tsx)",
	],
	addons: [
		"@storybook/addon-links",
		"@storybook/addon-essentials",
		"@storybook/addon-interactions",
	],
	framework: {
		name: "@storybook/html-webpack5",
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
