<template>
  <div>
    <v-card-group>
      <div class="grid grid-cols-3 gap-4 w-3/4 m-auto mt-5">
        <div class="border-t-4 pt-4" :class="[section.complete || tabSection === section.step ? 'border-primary' : 'border-gray-400']" v-for="(section) in sections" v-bind:key="section.title" @click="changeStep(section.step)">
          <p class="uppercase text-primary font-bold">{{ section.step }}</p>
          <p class="font-semibold">{{ section.title }}</p>
        </div>
      </div>

      <div class="container m-10" v-if="tabSection === 'Step 1'">
        <div>
          <v-select
              id="ModuleTypeSelect"
              label="Select the Module Type"
              :selectOptions="moduleTypeOptions"
              v-on:input="setup.module.type = moduleTypeOptions[$event - 1]"
          ></v-select>

          <div v-if="!!setup.module.type">
            <h3 class="mb-6 text-2xl font-semibold tracking-normal text-black pt-3">Module Setup</h3>
            <p>Below to be replaced by a VURL input!</p>
            <v-text-input
                id="moduleName"
                label="Module Name"
                :required=true
            ></v-text-input>

            <v-text-input
                id="moduleDescription"
                label="Module Description"
                :required=true
            ></v-text-input>

            <hr>

            <h3 class="mb-6 text-2xl font-semibold tracking-normal text-black pt-3">Module Behaviour</h3>
            <v-text-input
                id="moduleBehaviour"
                label="Who can Complete the Module?"
                :required=true
            ></v-text-input>

            <v-text-input
                id="moduleName"
                label="Can additional users see but Not complete the Module?"
                :required=false
            ></v-text-input>

            <v-text-input
                id="moduleName"
                label="Is the Module mandatory for any users?"
                :required=true
            ></v-text-input>

            <v-text-input
                id="moduleName"
                label="When is the module deemed complete?"
                :required=true
            ></v-text-input>

            <v-button
              buttonText="Next"
              v-on:click="proceedToNextStep('Step 2', 'Step 1')"
            ></v-button>
          </div>
          </div>
      </div>

      <div class="container m-10" v-if="tabSection === 'Step 2'">
        <v-text-input
            id="staticPageTitle"
            label="What is the Title of your Static Page?"
            :required=true
        ></v-text-input>

        <v-button
            buttonText="Next"
            v-on:click="proceedToNextStep('Step 3', 'Step 2')"
        ></v-button>
      </div>

      <div class="container m-10" v-if="tabSection === 'Step 3'">
        <h3 class="mb-6 text-2xl font-semibold tracking-normal text-black pt-3">Module Permissions</h3>
          <v-select
              id="participantPermissions"
              label="Select which user group to give Participant Permissions to"
              :selectOptions="userGroupOptions"
          ></v-select>

        <v-select
            id="participantPermissions"
            label="Select which user group to give Admin Permissions to"
            :selectOptions="userGroupOptions"
        ></v-select>

        <v-button
            buttonText="Submit"
            v-on:click="submitForm"
        ></v-button>
      </div>


    </v-card-group>




  </div>
</template>

<script>
import VCardGroup from "./../../node_modules/@bristol-su/portal-ui-kit/src/components/atomic/VCardGroup";
import VSelect from "./../../node_modules/@bristol-su/portal-ui-kit/src/components/atomic/dynamic-form/VSelect";
import VTextInput from "./../../node_modules/@bristol-su/portal-ui-kit/src/components/atomic/dynamic-form/VTextInput";
import VButton from "./../../node_modules/@bristol-su/portal-ui-kit/src/components/atomic/VButton";

export default {
  name: "VModuleProcess",
  components: { VCardGroup, VSelect, VTextInput, VButton },
  props: {},
  data () {
    return {
      linear: true,
      sections: [
        {step: "Step 1", title: "Setup", complete: false},
        {step: "Step 2", title: 'Settings', complete: false},
        {step: "Step 3", title: "Permissions", complete: false},
      ],
      tabSection: 'Step 1',
      moduleTypeOptions: [
        { id: 1, value: "Assign Roles (Group Activity Type Only)" },
        { id: 2, value: "Data Entry" },
        { id: 3, value: "Static Page" },
        { id: 4, value: "Typeform" },
        { id: 5, value: "File Upload" },
      ],
      userGroupOptions: [
        { id: 1, value: "Group 1" },
        { id: 2, value: "Group 2" },
        { id: 3, value: "Group 3" },
      ],
      setup: {
        module: {
            type: null
        }
      }
    };
  },
  created() {
    this.tabSection = this.sections[0].step;

    this.generateIdForSections();
  },
  methods: {
    generateIdForSections() {
      this.sections.map((value, index) => { return this.sections[index]['position'] = index;});
    },
    proceedToNextStep(next, current = null)
    {
        if(current) {
          this.sections.find((section) => section.step === current).complete = true;
        }

        this.tabSection = next;
    },
    nextPage() {

    },
    changeStep(step) {
      // Ignore if on the same step:
      if(this.tabSection === step) { return; }

      // If none linear then allow to transition:
      if(!this.linear) {
        this.tabSection = step
      }

      let newSection = this.sections.find((section) => section.step === step);
      let currentSection = this.sections.find((section) => section.step === this.tabSection);

      // If linear check that they're trying to go backwards:
      if(newSection.position < currentSection.position || newSection.complete){
          this.tabSection = step
      }
    },
    submitForm() {
      alert('Submit Form');
    }
  }
}
</script>
