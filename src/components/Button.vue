<script lang="ts">
import { assets } from "@/assets";
import { defineComponent } from "vue";

export default defineComponent({
	name: "Button",
	props: {
		style: {
			type: Number,
			required: true,
		},
		label: {
			type: String,
			required: true,
		},
		emoji: {
			type: String,
			required: false,
		},
		url: {
			type: String,
			required: false,
		},
		disabled: {
			type: Boolean,
			required: false,
		},
		onClick: {
			type: Function,
			required: false,
		},
	},
	data(vm) {
		return {
			active: vm.disabled ? "deny" : "allow",
			assets,
		};
	},
});
</script>

<template>
	<button :bstyle="style" :onclick="onClick" :class="active" v-if="onClick" id="button">
		<img :src="emoji" v-if="emoji" emoji>
		<span v-html="label"></span>
	</button>
	<a :bstyle="style" id="button" :href="url" target="_blank" v-else>
		<img :src="emoji" v-if="emoji" emoji>
		<span v-html="label"></span>
		<img :src="assets.ExternalURL.white" v-if="url" url>
	</a>
</template>

<style lang="css" scoped>
#button {
	padding: 5px 10px 5px 10px;
	font-size: 105%;
	border-radius: 3px;
	border-color: transparent;
	color: #fff;
	font-weight: 500;
	margin: 0 10px 5px 0;
	transition: all .2s ease;
	cursor: pointer;
	width: fit-content;
    display: inline-block;
	text-decoration: none
}

#button span {
	vertical-align: middle
}

#button img {
	height: 15px;
	vertical-align: middle;
	transform: scale(135%)
}

#button img[url] {
	margin-left: 7.5px;
}

#button img[emoji] {
	margin-right: 7.5px
}

#button[bstyle="1"] {
	background-color: #5865f2;
	&:hover {
		background-color: hsl( 235 calc( 1 * 51.4%) 52.4% / 1);
	}

	&.deny {
		background-color: #5865f2;
		opacity: 70%;
		cursor: not-allowed;
	}
}

#button[bstyle="2"] {
	background-color: #248045;
	&:hover {
		background-color: hsl(141 calc( 1 * 58.4%) 24.5% / 1);
	}

	&.deny {
		background-color: #248045;
		opacity: 70%;
		cursor: not-allowed;
	}
}

#button[bstyle="3"] {
	background-color: #4e5058;
	&:hover {
		background-color: hsl(229 calc( 1 * 4.8%) 44.9% / 1);;
	}

	&.deny {
		background-color: #4e5058;
		opacity: 70%;
		cursor: not-allowed;
	}
}

#button[bstyle="4"] {
	background-color: #da373c;
	&:hover {
		background-color: hsl( 360 calc( 1 * 60.2%) 39.4% / 1);
	}

	&.deny {
		background-color: #da373c;
		opacity: 70%;
		cursor: not-allowed;
	}
}

@media (max-width: 600px) {
	#button {
		padding: 5px;
		font-size: 70%;
		border-radius: 4px;
		border-color: transparent;
		color: #fff;
		margin-right: 5px;

		&:hover {
			filter: brightness(.85);
		}
	}

	

	#button img {
		height: 10px;
	}
}
</style>