<script lang="ts">
import { defineComponent } from "vue";
import { RouterLink } from "vue-router";

export default defineComponent({
	name: "RouterButton",
	props: {
		to: {
			type: String,
			required: true,
		},
		name: {
			type: String,
			required: true,
		},
	},
	emits: ["unshow"],
	methods: {
		unshow() {
			this.$emit("unshow", true);
		},
	},
});
</script>

<template>
    <router-link :to="to" id="link" large :onclick="unshow">
        <span id="name" v-html="name"></span>
    </router-link>
</template>

<style scoped>
    #link[large] {
        font-weight: bold;
        color: var(--link-color-select);
        padding: 10px;
        height: fit-content;
        text-decoration: none;
        border-bottom: 2px solid var(--line);
        margin-bottom: 10px;
        transition: all .2s ease-in-out;

        & span {
            transition: all .2s ease-in-out;
            opacity: 70%;
        }

        &:hover span {
            opacity: 100%;
        }

        &.router-link-exact-active {
            color: var(--link-color);
            border-bottom: 2px solid var(--line-link);

            & span {
                opacity: 100%;
            }
        }
    }
</style>