<template>
  <div>
    <user-card greeting-text="Hello" />

    <ul>
      <li v-for="item in items">
        {{ item.name }}
      </li>
    </ul>

    <ul>
      <li v-for="user in users" v-if="user.isActive">
        {{ user.name }}
      </li>
    </ul>
  </div>
</template>

<script setup>
const props = defineProps(['greeting-text']);

const items = [
  { id: 1, name: 'Item A' },
  { id: 2, name: 'Item B' },
];

const users = [
  { id: 1, name: 'Alice', isActive: true },
  { id: 2, name: 'Bob', isActive: false },
];
</script>
