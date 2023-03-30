import type { StorybookConfig } from "@storybook/sveltekit";
const config: StorybookConfig = {
	stories: [
		"../src/**/*.mdx",
		"../src/**/*.stories.@(js|jsx|ts|tsx)",
		"../../vanilla-app/common-stories/**/*.mdx",
		"../../vanilla-app/common-stories/**/*.stories.@(js|jsx|ts|tsx)",
		"../../common/*.mdx"
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
	docs: {
		autodocs: "tag",
	},
};
export default config;
