import VWorkflow from "../components/VWorkflow";
import VSidenav from "./../../node_modules/@bristol-su/portal-ui-kit/src/components/layout/VSidenav";
import VModuleProcess from "../components/VModuleProcess";

export default {
  title: "Layouts/Staff Redesign",
  argTypes: {
    example: {
      description: "The homepage URL of the site",
      control: {
        type: "text",
      },
    },
  },
};

//👇 We create a “template” of how args map to rendering
const Template = (args, { argTypes }) => ({
  components: { VWorkflow },
  props: Object.keys(argTypes),
  // Storybook provides all the args in a $props variable.
  // Each arg is also available as their own name.
  template: `
    <div>
        <v-workflow></v-workflow>
        {{ $props }}
    </div>
    `,
});

const NavigationTemplate = (args, { argTypes }) => ({
  components: { VSidenav },
  props: Object.keys(argTypes),
  template: `
    <div>
        <v-sidenav :navItems=$props.navItems userName="User" ></v-sidenav>
    </div>
    `,
});

export const Navigation = NavigationTemplate.bind({});
Navigation.args = {
  navItems: [
    {title: 'Dashboard', icon: "fas fa-chart-pie", route: '#'},
    {title: 'Manage Activities', icon: "fa fa-tasks", route: 'inactive'},
    {title: 'Manage Workflows', icon: "fa fa-list-ol", route: 'inactive'},
    {title: 'Manage User Groups', icon: "fa fa-users-cog", route: 'inactive'},
    {title: 'Settings', icon: "fa fa-cogs", route: 'inactive'},
    ]
};

export const NewActivity = Template.bind({});
NewActivity.args = {
  message: "A short description about what went wrong",
  code: 500,
  email: "helpdesk@company.com",
  homeUrl: "https://example.com/home",
};

const ModuleTemplate = (args, { argTypes }) => ({
  components: { VModuleProcess },
  props: Object.keys(argTypes),
  template: `
    <div>
        <v-module-process :props=$props ></v-module-process>
    </div>
    `,
});

export const NewModuleExample = ModuleTemplate.bind({});

export const NewModuleDataEntry = Template.bind({});
NewModuleDataEntry.args = {
  message: "A short description about what went wrong",
  code: 500,
  email: "helpdesk@company.com",
  homeUrl: "https://example.com/home",
};

export const CreateLogic = Template.bind({});
CreateLogic.args = {
  message: "A short description about what went wrong",
  code: 500,
  email: "helpdesk@company.com",
  homeUrl: "https://example.com/home",
};

const WorkflowTemplate = (args, { argTypes }) => ({
  components: { VWorkflow },
  props: Object.keys(argTypes),
  // Storybook provides all the args in a $props variable.
  // Each arg is also available as their own name.
  template: `
    <div>
        <v-workflow :props=$props ></v-workflow>
    </div>
    `,
});

export const WorkflowBuilder = WorkflowTemplate.bind({});
WorkflowBuilder.args = {
  message: "A short description about what went wrong",
  code: 500,
  email: "helpdesk@company.com",
  homeUrl: "https://example.com/home",
};

export const ManageUserGroupsPreviousControl = Template.bind({});
CreateLogic.args = {
  message: "A short description about what went wrong",
  code: 500,
  email: "helpdesk@company.com",
  homeUrl: "https://example.com/home",
};
