<script lang="ts">
import { defineComponent } from "vue";

function pxToNumber(px: string) {
	return Number(px.split("px")[0]);
}

export default defineComponent({
	name: "CircularProfilePhoto",
	props: {
		size: {
			type: String,
			required: true,
		},
		src: {
			type: String,
			required: true,
		},
		radiuscolor: {
			type: String,
			required: true,
		},
		radiusweight: {
			type: String,
			required: true,
		},
		scale: {
			type: Number,
			required: true,
		},
	},
	data() {
		return {
			styles: {
				radius: {
					"min-width": `${pxToNumber(this.size) * (this.scale / 100)}px`,
					"min-height": `${pxToNumber(this.size) * (this.scale / 100)}px`,
					"max-width": `${pxToNumber(this.size) * (this.scale / 100)}px`,
					"max-height": `${pxToNumber(this.size) * (this.scale / 100)}px`,
					border: `${this.radiusweight} solid ${this.radiuscolor}`,
					padding: `${this.radiusweight}`,
				},
				photo: {
					width: `${pxToNumber(this.size) * (this.scale / 100)}px`,
					height: `${pxToNumber(this.size) * (this.scale / 100)}px`,
				},
			},
		};
	},
});
</script>

<template>
    <div id="radius" :style="styles.radius">
        <img :src="src" :style="styles.photo" id="photo"/>
    </div>
</template>

<style scoped>
#radius {
    border-radius: 50%;
    overflow: hidden;
}

img {
    border-radius: 50%;
}
</style>
