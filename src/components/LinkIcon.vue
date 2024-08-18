<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
	name: "LinkIcon",
	props: {
		url: { type: String, required: true },
		src: { type: String, required: true },
		scale: Number,
	},
	data() {
		return {
			style: `transform: scale(${this.scale || 100}%)`,
		};
	},
});
</script>

<template>
    <a :href="url" class="url" target="_blank" :style="style">
        <img :src="src">
    </a>
</template>

<style scoped>
    .url {
        vertical-align: middle;
        width: 35px;
        height: 35px;
        margin: auto 2.5px auto 2.5px;
        border-radius: 50%;
        transition: all .2s ease-in-out;
        opacity: 70%;
        overflow: hidden;
    }

    .url img {
        border-radius: 50%;
    }

    .url:hover {
        opacity: 100%
    }
</style>