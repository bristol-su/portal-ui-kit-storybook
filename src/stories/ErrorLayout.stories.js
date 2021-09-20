import VErrorPage from "./../../node_modules/@bristol-su/portal-ui-kit/src/components/layout/VErrorPage";

export default {
  title: "Layouts/Error",
  component: VErrorPage,
  argTypes: {
    message: {
      description: "The error message to show",
      control: {
        type: "text",
      },
    },
    code: {
      description: "The error code to show",
      control: {
        type: "number",
      },
    },
    email: {
      description: "An email address that can be used for support",
      control: {
        type: "text",
      },
    },
    homeUrl: {
      description: "The homepage URL of the site",
      control: {
        type: "text",
      },
    },
  },
};

//👇 We create a “template” of how args map to rendering
const Template = (args, { argTypes }) => ({
  components: { VErrorPage },
  props: Object.keys(argTypes),
  // Storybook provides all the args in a $props variable.
  // Each arg is also available as their own name.
  template: `
        <v-error-page v-bind="$props">
        </v-error-page>
    `,
});

export const Full = Template.bind({});
Full.args = {
  message: "A short description about what went wrong",
  code: 500,
  email: "helpdesk@company.com",
  homeUrl: "https://example.com/home",
};
