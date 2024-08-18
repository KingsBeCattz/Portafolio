<script lang="ts">
import { defineComponent } from "vue";
import Menu from "./Menu.vue";
import LinkIcon from "./LinkIcon.vue";
import ToggleTheme from "@/components/ToggleTheme.vue";
import RouterButton from "./RouterButtons/Small.vue";
import RadiusProfilePhoto from "./RadiusProfilePhoto.vue";
import ThemeButton from "./Theme/";
import { assets } from "@/assets";

export default defineComponent({
	name: "NavBar",
	components: { Menu, LinkIcon, ToggleTheme, RouterButton, RadiusProfilePhoto, ThemeButtonShort: ThemeButton.Small },
	mounted() {
		this.check();
		window.addEventListener("resize", () => {
			this.check();
		});

		this.checkTheme(window.matchMedia("(prefers-color-scheme: dark)").matches ? "white" : "black");

		setInterval(() => this.checkTheme(!this.isDark() ? "black" : "white"), 100);
	},
	methods: {
		check() {
			const element = document.getElementById("ts");
			if (!element) return;
			element.textContent = window.innerWidth >= 600 ? "TypeScript Developer" : window.innerWidth <= 470 ? "TS" : "TypeScript";
			this.mobile = window.innerWidth <= 850;
			this.show = this.mobile ? "hide" : "";
			this.dontshow = this.mobile ? "" : "hide";
		},
		checkTheme(color: "black" | "white") {
			this.github = assets.Github[color];
			this.developer = assets.Developer[color];
		},
		isDark() {
			return getComputedStyle(document.documentElement).getPropertyValue("--theme").trim() === "dark";
		},
	},
	data() {
		return {
			scale: 70,
			theme: {
				dark: true,
				text: "default",
			},
			assets,
			github: assets.Github.white,
			developer: assets.Developer.white,
			mobile: false,
			show: this.mobile ? "hide" : "",
			dontshow: this.mobile ? "" : "hide",
		};
	},
	emits: ["theme"],
});
</script>

<template>
    <div class="navbar">
        <RadiusProfilePhoto size="50px" src="/img/KingBeCats.0d554d48.png" radiuscolor="#43b581" radiusweight="2.75px" :scale="scale"/>
      <span class="text">
        KingBeCats <a href="https://www.typescriptlang.org/" target="_blank" id="ts"></a>
      </span>
      <RouterButton v-if="!mobile" to="/" name="Home" />
      <RouterButton v-if="!mobile" to="/projects" name="Projects" />
      <RouterButton v-if="!mobile" to="/packages" name="Packages" />
      <ThemeButtonShort @theme="checkTheme" :class="`${mobile ? 'hide' : ''}`"/>
      <div large v-if="!mobile" >
        <LinkIcon url="https://github.com/KingsBeCattz" :src="github"/>
        <LinkIcon url="https://github.com/KingsBeCattz/Portafolio" :src="developer" :scale="70"/>
      </div>
      <Menu :class="`${!mobile ? 'hide' : ''}`" :mobile="mobile" @theme="checkTheme"/>
    </div>
</template>

<style scoped>
  nav {
    width: fit-content;
    display: flex;
  }

  .navbar {
        text-align: center;
        width: 80vw;
        padding: 2px 10vw 2px 10vw;
        align-items: center;
        display: flex;
        background-color: var(--background);
        margin: 0px;
        position: fixed;
        flex-wrap: wrap;
        height: 55px;
        transition: all .1s ease-in-out;
        z-index: 3;
        border-bottom: 2px solid var(--line)
    }

  .radius {
    display: inline-block;
    border-radius: 50%;
    border: 2px solid #43b581;
    padding: 2px;
  }

  .text {
    margin: 7.5px;
    font-weight: 750;
    font-size: 110%
  }

  .text a {
    background-color: #2f74c0;
    padding: 5px;
    border-radius: 5px;
    text-decoration: underline;
    color: #fff;
  }

  #short {
    display: none
  }

  div[large] {
    padding: 0 2.5px 0 2.5px;
    margin: 0 5px 0 5px;
  }

  #theme-small, .m {
    margin-left: auto
  }

  @media (max-width: 500px){
    .navbar {
        width: 90vw;
        padding: 5px 5vw 5px 5vw;
    }
  }

  @media (max-width: 350px){
    .navbar {
        width: 96vw;
        padding: 5px 2vw 5px 2vw;
    }
  }
</style>