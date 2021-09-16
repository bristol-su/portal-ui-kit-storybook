import {action} from "@storybook/addon-actions";
// import { linkTo } from "@storybook/addon-links";
import VButton from '@bristol-su/portal-ui-kit/src/components/atomic/VButton';

export default {
    title: "UI Kit/Button",
    components: VButton
};

export const withText = () => ({
    components: {VButton},
    template: '<v-button @click="action">Hello Button</v-button>',
    methods: {action: action("clicked")},
});

// export const withJSX = () => ({
//   render() {
//     return (
//       <p-button onClick={linkTo("Button", "With Some Emoji")}>
//         With JSX
//       </p-button>
//     );
//   },
// });
//
// export const withSomeEmoji = () => ({
//   template: "<my-button>😀 😎 👍 💯</my-button>",
// });
