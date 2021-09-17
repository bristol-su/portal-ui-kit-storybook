import VTable from "@bristol-su/portal-ui-kit/src/components/VTable";
import {action} from "@storybook/addon-actions";

export default {
    title: "UI Kit/Table",
    component: VTable,
    argTypes: {
        items: {
            description: "The items to show in the table",
            control: {
                type: "array",
            }
        },
        columns: {
            description: "The columns to show on the table",
            control: {
                type: "array",
            }
        },
        editable: {
            description: "Whether the rows can be edited",
            control: {
                type: "boolean",
            }
        },
        deletable: {
            description: "Whether the rows can be deleted",
            control: {
                type: "boolean",
            }
        },
        viewable: {
            description: "Whether the rows can be viewed",
            control: {
                type: "boolean",
            }
        },
        totalCount: {
            description: "The total number of items. If given, pagination will not be handled natively",
            control: {
                type: "number",
            }
        },
        busy: {
            description: "Put the table into a busy state",
            control: {
                type: "boolean"
            }
        }
    },
};

//👇 We create a “template” of how args map to rendering
const Template = (args, {argTypes}) => ({
    components: {VTable},
    props: Object.keys(argTypes),
    // Storybook provides all the args in a $props variable.
    // Each arg is also available as their own name.
    template: `
        <v-table v-bind="$props" @view="onView" @edit="onEdit" @delete="onDelete">
        </v-table>
    `,
    methods: {
        onView: action("view"),
        onEdit: action("edit"),
        onDelete: action("delete"),
    },
    computed: {
        defaultText() {
            return this['default'];
        }
    }
});

export const Basic = Template.bind({});
Basic.args = {
    columns: [
        {key: 'id', label: 'Row ID'},
        {key: 'name', label: 'Name'},
        {key: 'age', label: 'Age'},
        {key: 'colour', label: 'Favorite Colour'}
    ],
    items: [
        {id: 2, name: 'Toby T', age: 24, colour: 'Orange'},
        {id: 10, name: 'Ralph', age: 5, colour: 'Red'},
        {id: 20, name: 'Quillo', age: 1, colour: 'Yellow'},
        {id: 21, name: 'Rocket', age: 1, colour: 'Green'},
    ]
};

export const Busy = Template.bind({});
Busy.args = {
    busy: true,
    columns: [
        {key: 'id', label: 'Row ID'},
        {key: 'name', label: 'Name'},
        {key: 'age', label: 'Age'},
        {key: 'colour', label: 'Favorite Colour'}
    ],
    items: [
        {id: 2, name: 'Toby T', age: 24, colour: 'Orange'},
        {id: 10, name: 'Ralph', age: 5, colour: 'Red'},
        {id: 20, name: 'Quillo', age: 1, colour: 'Yellow'},
        {id: 21, name: 'Rocket', age: 1, colour: 'Green'},
    ]
};

export const Empty = Template.bind({});
Empty.args = {
    columns: [
        {key: 'id', label: 'Row ID'},
        {key: 'name', label: 'Name'},
        {key: 'age', label: 'Age'},
        {key: 'colour', label: 'Favorite Colour'}
    ],
    items: []
};
