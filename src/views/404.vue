<template>
  <div class="not-found">
    <h1>404</h1>
    <p>You are on the mysterious side here, better go back to home.</p>
    <router-link to="/" class="page-view">
      <img :src="assets.Home.white" alt="Descripción de la imagen">
    </router-link>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { assets } from "@/assets";

export default defineComponent({
	name: "404View",
	data() {
		return {
			assets,
		};
	},
});
</script>