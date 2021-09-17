import VButton from "@bristol-su/portal-ui-kit/src/components/atomic/VButton";
import {action} from "@storybook/addon-actions";

export default {
    title: "UI Kit/Button",
    component: VButton,
    argTypes: {
        variant: {
            description: "The style of the button",
            table: {
                type: {
                    summary: "Something short",
                    detail: "Something really really long",
                    category: "Style",
                },
            },
            control: {
                type: "select",
            },
            options: [
                "primary",
                "secondary",
                "success",
                "danger",
                "info",
                "white",
                "black",
            ],
        },
        buttonText: {
            description: "The text to show on the button. You may also use the default slot, which will take precedence",
            control: {
                type: "text",
            }
        },
        busyText: {
            description: "The text to show on the button when in a busy state. You may also use the default slot, which will take precedence",
            control: {
                type: "text",
            }
        },
        href: {
            description: "A URL to take the user to when the button is clicked",
            control: {
                type: "text",
            }
        },
        disabled: {
            description: "Is the button in a disabled state?",
            control: {
                type: "boolean",
            }
        },
        type: {
            description: "The type of the button",
            control: {
                type: "select",
            },
            options: ["submit", "button"],
        },
        busy: {
            description: "Put the button into a busy state"
        },
        click: {
            description: "Fired when the button is clicked",
            control: {
                type: 'text'
            }
        },
        default: {
            description: "Set the main button content",
            control: {
                type: 'text'
            }
        },
        busyContent: {
            description: "Set the button content when in a busy state",
            control: {
                type: 'text'
            }
        }
    },
};

//👇 We create a “template” of how args map to rendering
const Template = (args, {argTypes}) => ({
    components: {VButton},
    props: Object.keys(argTypes),
    // Storybook provides all the args in a $props variable.
    // Each arg is also available as their own name.
    template: `
        <v-button v-bind="$props" @click="onClick">
        <template v-if="defaultText" v-slot>{{ defaultText }}</template>
        <template v-if="busyContent" v-slot:busyContent>{{ busyContent }}</template>
        </v-button>
    `,
    methods: {
        onClick: action("click")
    },
    computed: {
        defaultText() {
            return this['default'];
        }
    }
});

export const Primary = Template.bind({});
Primary.args = {
    variant: "primary"
};

export const Secondary = Template.bind({});
Secondary.args = {
    variant: "secondary"
};

export const Loading = Template.bind({});
Loading.args = {
    busy: true
};

export const Link = Template.bind({});
Link.args = {
    variant: 'primary',
    href: "#",
    buttonText: 'Go to link'
};
