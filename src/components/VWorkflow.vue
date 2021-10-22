<template>
  <div>
    <h1>Workflow:</h1>

    <section class="text-gray-600 body-font overflow-hidden">
      <div class="container px-5 py-24 mx-auto">
        <div
          class="-my-8 divide-y-2 divide-gray-100"
          v-for="step in workflow"
          v-bind:key="step.id"
        >
          <div class="py-8 flex flex-wrap md:flex-nowrap">
            <div class="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
              <span class="font-semibold title-font text-gray-700">{{
                step.type
              }}</span>
            </div>
            <div class="md:flex-grow">
              <h2 class="text-2xl font-medium text-gray-900 title-font mb-2">
                Form Title
              </h2>
              <div v-if="step.type === 'Event'">
                <v-select
                  id="eventOptionsSelect"
                  label="Select an Event to trigger an Action"
                  :selectOptions="eventOptions"
                  v-on:input="updateStepOptions"
                >
                </v-select>
                <v-select
                    id="eventSubOptionsSelect"
                    label="Select any Suboptions"
                    :selectOptions="eventOptions"
                >
                </v-select>
              </div>
              <a class="text-red-500 inline-flex items-center mt-4" v-if="step.id" v-on:click="removeFromWorkflow(step.id)">
                Remove
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <hr />
    <v-select
      id="workflowOptionsSelect"
      label="Select an Option to add to the workflow"
      :selectOptions="workflowOptions"
      v-on:input="processAppend"
    >
    </v-select>
  </div>
</template>

<script>
import VSelect from "./../../node_modules/@bristol-su/portal-ui-kit/src/components/atomic/dynamic-form/VSelect";

export default {
  name: "VWorkflow",
  components: { VSelect },
  props: {},
  data() {
    return {
      workflow: [{ type: "Start" }],
      workflowOptions: [
        { id: 1, value: "Action" },
        { id: 2, value: "Event" },
      ],
      eventOptions: [
        { id: 1, value: "Specific Module Instance 1 Complete" },
        { id: 2, value: "Specific Module Instance Started" },
        {
          id: 3,
          value: "Any Module Instance not-started",
          options: [
            { id: 1, value: "1 Hour before" },
            { id: 2, value: "1 Week before" },
          ],
        },
      ],
    };
  },
  methods: {
    addToWorkflow(step) {
      this.workflow.push(step);
    },
    removeFromWorkflow(step) {
      this.workflow.splice(
        this.workflow.findIndex((option) => option.id === step),
        1
      );
    },
    updateStepOptions() {

    },
    addActionToWorkflow() {
      this.addToWorkflow({
        id: this.generateId(),
        type: "Action",
      });
    },
    addEventToWorkflow() {
      this.addToWorkflow({
        id: this.generateId(),
        type: "Event",
      });
    },
    findOption(id) {
      return this.workflowOptions.find((option) => option.id === id).value;
    },
    processAppend(type) {
      switch (this.findOption(type)) {
        case "Action":
          this.addActionToWorkflow();
          break;
        case "Event":
          this.addEventToWorkflow();
          break;
      }
    },
    generateId() {
      return Math.random().toString(36).substring(5);
    },
  },
};
</script>
