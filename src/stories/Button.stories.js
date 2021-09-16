import VButton from "@bristol-su/portal-ui-kit/src/components/atomic/VButton";

export default {
  title: "UI Kit/Button",
  component: VButton,
};

//👇 We create a “template” of how args map to rendering
const Template = (args, { argTypes }) => ({
  components: { VButton },
  props: Object.keys(argTypes),
  // Storybook provides all the args in a $props variable.
  // Each arg is also available as their own name.
  template: `
        <v-button v-bind="$props" v-on="$props">
        <template v-if="${"slotdefault" in args}" v-slot>${
    args.slotdefault
  }</template>
        </v-button>
    `,
  argTypes: {
    variant: {
      options: [
        "primary",
        "secondary",
        "success",
        "danger",
        "info",
        "white",
        "black",
      ],
      control: { type: "select" },
    },
    // busy: {
    //     control: {type: 'bool'}
    // }
  },
});

export const Primary = Template.bind({});
Primary.args = {
  variant: "primary",
  slotdefault: "Hello World",
};
