import AssignmentList from "./AssignmentList.js";
import AssignmentCreate from "./AssignmentCreate.js";

export default {
    components: { AssignmentList, AssignmentCreate },

    template: `
        <section class="flex gap-8">
            <assignment-list :assignments="filters.inProgress" title="In Progress">
                 <assignment-create @add="add"></assignment-create> 
            </assignment-list>
            <assignment-list :assignments="filters.completed" title="Completed" can-toggle></assignment-list>
            
            
        </section>
    `,

    data() {
        return {
      assignments: [
        { name: "Task 1", complete: false, id: 1, tag: 'Math' },
        { name: "Task 2", complete: false, id: 2, tag: 'Science' },
        { name: "Task 3", complete: false, id: 3, tag: 'Math' },
      ],
     
    };
  },

    computed: {
        filters() {
            return {
                inProgress: this.assignments.filter(assignment => ! assignment.complete),
                completed: this.assignments.filter(assignment => assignment.complete)
            };
        }
    },

    created() {
        fetch('https://3001-muhaimeen93-vueapp-xt46791uvqq.ws-us67.gitpod.io/assignments')
            .then(response => response.json())
            .then(assignments => {
              this.assignments = assignments;
              console.log(assignments);
            });
    },

    methods: {
        add(name) {
            this.assignments.push({
                name: name,
                completed: false,
                id: this.assignments.length + 1
            });
        }
    }
}
