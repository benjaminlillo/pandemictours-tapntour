<template>
  <article class="flex items-start space-x-6 p-6">
    <div class="min-w-0 relative flex-auto">
      <h2 class="font-semibold text-slate-900 truncate pr-20">Stop {{ item.id }}</h2>
      <!-- Time -->
      <div class="w-full">
        <div class="flex items-top justify-between text-slate-500 text-sm" >
          <div class="flex-1 inline-flex items-center" >                 
            <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 mx-1" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            {{ item.duration }} min
          </div>
        </div>
      </div>
      <!-- Location -->
      <div class="w-full">
        <div class="flex items-top justify-between text-slate-500 text-sm" >
          <div class="flex-1 inline-flex items-center" >                 
            <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 mx-1" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
            <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
            </svg>
            ({{ item.lat }}, {{ item.log }})
          </div>
        </div>
      </div>
    </div>
  </article>  
</template>
<script> 
import DescriptionItem from '@/components/DescriptionItem.vue'

export default {
  components: {
  DescriptionItem
  },
  props : ['item'],
  methods: {
}
}   
</script>     