import { within, userEvent } from "@storybook/test";
import MyPage from "./Page.vue";

export default {
  title: "Example/Page",
  component: MyPage,
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/7.0/vue/configure/story-layout
    layout: "fullscreen",
  },
};

export const LoggedOut = {};

// More on interaction testing: https://storybook.js.org/docs/7.0/vue/writing-tests/interaction-testing
export const LoggedIn = {
  render: () => ({
    components: {
      MyPage,
    },
    template: "<my-page />",
  }),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const loginButton = await canvas.getByRole("button", {
      name: /Log in/i,
    });
    await userEvent.click(loginButton);
  },
};
