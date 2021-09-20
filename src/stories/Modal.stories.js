import VModal from "./../../node_modules/@bristol-su/portal-ui-kit/src/components/atomic/VModal";
import {action} from "@storybook/addon-actions";

export default {
    title: "Components/Modal",
    component: VModal,
    argTypes: {
        id: {
            description: "A unique ID for the modal",
            control: {
                type: "text",
            },
        },
        title: {
            description: "The title of the modal",
            control: {
                type: "text",
            },
        },
        hide: {
            description: "Fired when the modal is hidden",
            control: {
                type: "text",
            },
        },
        show: {
            description: "Fired when the modal is shown",
            control: {
                type: "text",
            },
        },
    },
};

//👇 We create a “template” of how args map to rendering
const BasicTemplate = (args, {argTypes}) => ({
    components: {VModal},
    props: Object.keys(argTypes),
    // Storybook provides all the args in a $props variable.
    // Each arg is also available as their own name.
    template: `
        <div>
        <button @click="showModal">Show Modal</button>
        <v-modal ref="modal" v-bind="$props" @show="onShow" @hide="onHide">
            <button @click="hideModal">Hide Modal</button>
        </v-modal>
        </div>

    `,
    methods: {
        onShow: action("show"),
        onHide: action("hide"),
        showModal() {
            this.$refs.modal.show();
        },
        hideModal() {
            this.$refs.modal.hide();
        }
    },
});

const UiToolTemplate = (args, {argTypes}) => ({
    components: {VModal},
    props: Object.keys(argTypes),
    // Storybook provides all the args in a $props variable.
    // Each arg is also available as their own name.
    template: `
        <div>
        <button @click="$ui.modal.show(id)">Show Modal</button>
        <v-modal ref="modal" v-bind="$props" @show="onShow" @hide="onHide">
            <button @click="$ui.modal.hide(id)">Hide Modal</button>
        </v-modal>
        </div>

    `,
    methods: {
        onShow: action("show"),
        onHide: action("hide")
    },
});


export const Full = BasicTemplate.bind({});
Full.args = {
    id: "modal-id",
    title: "The title of the modal",
};

export const FullUiKit = UiToolTemplate.bind({});
FullUiKit.args = {
    id: "modal-id",
    title: "The title of the modal",
};

