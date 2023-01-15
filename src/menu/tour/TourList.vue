<template>
  <div class="divide-y divide-slate-100 pt-5 cursor-pointer">
    <NavView>
      <NavItem v-on:click=sortByRelease() :isActive="releaseOrder" :isDisabled="releaseOrder">New Release</NavItem>
      <NavItem v-on:click=sortByRating() :isActive="!releaseOrder" :isDisabled=!releaseOrder>Top Rated</NavItem>
      <NavItem v-on:click=filterEngland() :isActive=showEnglandOnly>England</NavItem>
    </NavView>
    <ListView>
      <p v-if="loading" >Loading tours...</p>
      <p v-if="error">{{ error.message }}</p>
      <template v-for="(item, index) in tours" :key="listKey">
        <TourItem v-if="(showEnglandOnly && item.country == 'England') || !showEnglandOnly"
        :key="index" :item="item" />
      </template>
    </ListView>
    <br>
    <br>
  </div>
</template>

<script> 
  import { defineComponent, computed, ref } from "vue";
  import { storeToRefs } from 'pinia'
  import { useTourStore } from '@/stores/tour'

  import TourItem from '@/menu/tour/TourItem.vue'
  import ListView from '@/components/ListView.vue'
  import NavView from '@/components/NavView.vue'
  import NavItem from '@/components/NavItem.vue'

  export default defineComponent({
    components: {
      NavView,
      NavItem,
      TourItem,
      ListView
    },
    setup() {
      const { tours, loading, error }  = storeToRefs(useTourStore())
      const { fetchTours }             = useTourStore()
      const showEnglandOnly = ref(0)
      const releaseOrder = ref(1)
      const listKey = ref(0)
      fetchTours()
      return { tours , loading , error, showEnglandOnly, releaseOrder, listKey }
    },
  methods: {
    sortByRating() {
      this.releaseOrder -= 1
      this.tours = this.tours.sort((a, b) => b.rating - a.rating)
      return this.tours
    },
    sortByRelease() {
      this.releaseOrder += 1
      this.tours = this.tours.sort((a, b) => a.id - b.id)
      return this.tours
    },
    filterEngland() {
      if (this.showEnglandOnly) {
        this.showEnglandOnly -= 1
      } else {
        this.showEnglandOnly += 1
      }
      this.listKey+=1
      return this.tours
    }
  }
});

</script>
