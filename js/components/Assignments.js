import AssignmentList from "./AssignmentList.js";
import AssignmentCreate from "./AssignmentCreate.js";

export default {
  components: { AssignmentList, AssignmentCreate },

  template: `
        <section class="space-y-6">
            <assignment-list :assignments="filters.inProgress" title="In Progress"></assignment-list>
            <assignment-list :assignments="filters.completed" title="Completed"></assignment-list>
            <assignment-create @add="add"></assignment-create>
            
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
        inProgress: this.assignments.filter((assignment) => !assignment.complete),
        completed: this.assignments.filter((assignment) => assignment.complete),
      };
    }
  },

  methods: {
    add(name) {
      if (name.trim() != '') {
        this.assignments.push({
          name: name,
          complete: false,
          id: this.assignments.length + 1
        });
      }
    }
  }

};
