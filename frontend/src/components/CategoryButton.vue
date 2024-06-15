<template>
    <button @click="handleClick">{{ category }}</button>
</template>
  
  <script lang="ts">
  import { defineComponent, PropType } from 'vue';
  
  export default defineComponent({
    props: {
      category: {
        type: String as PropType<string>,
        required: true
      }
    },
    emits: ['onClick'],
    setup(props, { emit }) {
      const handleClick = () => {
        emit('onClick', props.category);
      };
      return { handleClick };
    },
  });
  </script>
  