<script lang="ts">
import Embed from "@/components/Embed.vue";
import { defineComponent } from "vue";
import { assets } from "@/assets";
import Message from "@/components/Message.vue";
import Button from "@/components/Button.vue";

export default defineComponent({
	name: "Projects",
	components: { Embed, Message, Button },
	data() {
		return {
			assets,
		};
	},
});
</script>

<template>
    <h1>I don't have any interesting project :(</h1>
    
</template>