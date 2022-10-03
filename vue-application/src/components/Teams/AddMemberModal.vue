<script setup>
import Modal from "@/components/Modal.vue"
import { ref } from "vue"
import {useTeamStore} from "@/stores/TeamStore.js"

let showModal=ref(false);
let team=useTeamStore();
</script>

<template>
    <button
          class="bg-green-500 hover:bg-green-600 text-white px-4 py-2 roudned disabled:bg-gray-400"
          :disabled="!team.spotsRemaining"
          @click="showModal=true"
        >
          Add Member({{ team.spotsRemaining }} spots Left)
        </button>

<Teleport to="body">
    <Modal :show="showModal" @close="showModal=false">
      <template #default>
        <p>Need to add a new member to your team?</p>
        <form class="mt-6">
          <div class="flex gap-2">
          <input type="email" placeholder="Email Address...">
          <button>Add</button>
          </div>
        </form>
        </template>
    </Modal>
    </Teleport>
</template>