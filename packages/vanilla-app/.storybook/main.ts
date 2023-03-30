import type { StorybookConfig } from "@storybook/html-vite";
const config: StorybookConfig = {
	stories: [
		"../src/stories/**/*.mdx",
		"../src/stories/**/*.stories.@(js|jsx|ts|tsx)",
		"../common-stories/**/*.mdx",
		"../common-stories/**/*.stories.@(js|jsx|ts|tsx)",
		"../../common/*.mdx"
	],
	addons: [
		"@storybook/addon-links",
		"@storybook/addon-essentials",
		"@storybook/addon-interactions",
	],
	framework: {
		name: "@storybook/html-vite",
		options: {},
	},
	docs: {
		autodocs: "tag",
	},
};
export default config;
