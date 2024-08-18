<script lang="ts">
import NavBar from "./components/NavBar.vue";
import { defineComponent } from "vue";

export default defineComponent({
	name: "App",
	methods: {
		setDarkMode() {
			document.styleSheets[0].deleteRule(0);
			document.styleSheets[0].insertRule(`
      :root {
        --background-color: #232323;
        background-color: var(--background-color);
        --link-color: #42abb9;
        --link-color-default: #d6d6d6;
        --link-color-select: #fff;
        --background: #1b1b1b;
        --image-size: 50px;
        --embed-background: #1e1e1e;
        --message-hover: #1f1f1f;
        --line: rgba(84, 84, 84, .48);
        --line-link: rgba(66, 171, 185, .48);
        color: #f8f8f8;
        transition: all .1s ease-in-out;
        --theme: dark;
        --color: #fff
      }
      `);
		},
		setLightMode() {
			document.styleSheets[0].deleteRule(0);
			document.styleSheets[0].insertRule(`
      :root {
        --background-color: #f7f7f7;
        background-color: var(--background-color);
        --link-color: #006699;
        --link-color-default: #333333;
        --link-color-select: #000000;
        --background: #ffffff;
        --image-size: 50px;
        --embed-background: #ebeced;
        --message-hover: #e5e5e5;
        --line: rgba(60, 60, 60, .12);
        --line-link: rgba(0, 102, 153, .12);
        color: #080808;
        transition: all .1s ease-in-out;
        --theme: light;
        --color: #000
      }
      `);
		},
		changeTheme(data: { dark: boolean }) {
			data.dark ? this.setDarkMode() : this.setLightMode();
		},
		data() {
			return {
				dark: true,
			};
		},
	},
	mounted() {
		window.matchMedia("(prefers-color-scheme: dark)").matches ? this.setDarkMode() : this.setLightMode();

		const menu_small = document.getElementById("theme-menu-small");
		const menu_large = document.getElementById("theme-menu-large");

		document.addEventListener("click", () => {
			menu_small?.classList.add("hide");
			menu_large?.classList.add("hide");
		});
	},
	components: { NavBar },
});
</script>

<template>
  <NavBar @theme="changeTheme" />
  <Transition name="fade" mode="out-in">
    <div class="view"><router-view /></div>
  </Transition>
</template>

<style>
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.5s ease-in-out;
  }
  .fade-enter,
  .fade-leave-to {
    opacity: 0;
  }
</style>