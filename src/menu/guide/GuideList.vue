<template>
  <div class="divide-y divide-slate-100 pt-5 cursor-pointer">
    <NavView>
      <NavItem v-on:click=sortByRelease() :isActive="releaseOrder" :isDisabled="releaseOrder">New Guide</NavItem>
      <NavItem v-on:click=sortByRating() :isActive="!releaseOrder" :isDisabled="!releaseOrder">Top Guide</NavItem>
    </NavView>
    <ListView>
      <p v-if="loading" >Loading tours...</p>
      <p v-if="error">{{ error.message }}</p>
      <GuideItem  v-if="guides" v-for="(item, index) in guides" :key="index" :item="item" />
    </ListView>
    <br>
    <br>
  </div>
</template>

<script> 
  import { defineComponent, computed, ref } from "vue"
  import { storeToRefs } from 'pinia'
  import { useGuideStore } from '@/stores/guide'
  
  import NavView       from '@/components/NavView.vue'
  import NavItem       from '@/components/NavItem.vue'
  import ListView      from '@/components/ListView.vue'
  import GuideItem     from '@/menu/guide/GuideItem.vue'

  export default defineComponent({
    components: {
      NavView,
      NavItem,
      ListView,
      GuideItem
  },
  setup() {
      const { guides, loading, error }  = storeToRefs(useGuideStore())
      const { fetchGuides }             = useGuideStore()
      const releaseOrder = ref(1)
      fetchGuides()
      return { guides , loading , error, releaseOrder }
    },
  methods: {
    sortByRelease() {
      this.releaseOrder += 1
      this.guides = this.guides.sort((a, b) => a.id - b.id)
      return this.guides
    },
    sortByRating() {
      this.releaseOrder -= 1
      this.guides = this.guides.sort((a, b) => b.rating - a.rating)
      return this.guides
    }
  }
})
</script>
