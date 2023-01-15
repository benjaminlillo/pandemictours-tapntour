<template :key="isActive">
    <li>
      <button
        :class="['block px-3 py-2 rounded-md', isActive ? 'bg-sky-500 text-white' : 'bg-slate-100  text-slate-400']"
        :disabled="isDisabled"
        >
        <slot></slot>
    </button>
    </li>
  </template>
  
  <script>
    export default {
      props: {
        href: {
          type: String,
          required: true,
        },
        isActive: Boolean,
        isDisabled: Boolean,
      },
    }
  </script>
  