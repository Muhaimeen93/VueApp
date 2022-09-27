import Assignments from "./Assignments.js";
import Panel from "./Panel.js";

export default {
  components: { Assignments, Panel },

  template: `
    <div class="grid gap-6">
        <assignments></assignments>   
        
        <panel>
           Default Panel
        
        </panel>
        
        <panel>
           <template v-slot:heading>
            This is the header
          </template>

            Hello Again Default
        
        </panel>

        <panel>
           <template v-slot:heading>
            This is the header
          </template>

            Hello this is the body

          <template v-slot:footer>
            This is the footer
          </template>
        
        </panel>

        <panel theme ='light'>
           <template v-slot:heading>
            This is the header
          </template>

            Hello this is the body

          <template v-slot:footer>
            This is the footer
          </template>
        
        </panel>
        
    </div>
    `,
};
