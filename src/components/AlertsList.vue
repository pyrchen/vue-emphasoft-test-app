<script setup lang="ts">
import { computed } from 'vue';
import { useAppStore } from '@/store/appStore';

const alertStore = useAppStore().alertsModule;
const alerts = computed(() => alertStore.alerts);
</script>

<template>
  <div class="alerts" :style="{ zIndex: alerts.length ? 1 : -1 }">
    <div
      v-for="alert in alerts"
      :key="alert.id"
      class="alert"
    >
      <v-alert
        :type="alert.status"
        :text="alert.title"
      />
    </div>
  </div>
</template>

<style scoped lang="scss">
  .alerts {
    display: grid;
    gap: 10px;
    position: fixed;
    right: 0;
    bottom: 0;
    padding: 20px;
    width: 75%;
    z-index: -1;

    .alert {
      width: 100%;
      margin-left: auto;
    }

    .alert-hover {
      color: red;
    }
  }

  @media (min-width: 980px) {
    .alerts {
      width: 40%;
    }
  }

  @media (min-width: 1200px) {
    .alerts {
      width: 30%;
    }
  }
</style>
