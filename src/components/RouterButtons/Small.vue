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
});
</script>

<template>
    <router-link :to="to" id="link" small>
        <span v-html="name"></span>
        <div id="line" />
    </router-link>
</template>

<style scoped>
    #link[small] {
        font-weight: bold;
        color: var(--link-color-select);
        text-decoration: none;
        opacity: 100%;
        transition: all .1s ease-in-out;
        width: 60px;
        height: 20px;

        margin: 5px;

        & span {
            font-family: Nunito;
        }

        &:hover span {
            opacity: 70%;
            transition: all .1s ease-in-out;
        }

        &:hover #line {
            width: 85%;
        }

        &.router-link-exact-active span {
            color: var(--link-color);
            opacity: 100%;
        }

        &.router-link-exact-active #line {
            opacity: 100;
            background-color: var(--line-link);
            width: 100%;
        }
    }

    #link[small] #line {
        width: 80%;
        height: 2px;
        background-color: var(--line);
        margin-top: auto;
        border-radius: 1px;
        opacity: 70%;
        transition: all .1s ease-in-out;
        display: -webkit-inline-box;
    }
</style>