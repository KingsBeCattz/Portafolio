<script lang="ts">
import { defineComponent } from "vue";
import LinkIcon from "./LinkIcon.vue";
import RouterButton from "./RouterButtons/Large.vue";
import ThemeButton from "./Theme/";
import { assets } from "@/assets";

export default defineComponent({
	name: "Menu",
	data() {
		return {
			show: false,
			github: assets.Github.white,
			developer: assets.Developer.white,
		};
	},
	methods: {
		update() {
			this.show = !this.show;
			const dropdown = (document.getElementById("dropdown") as HTMLElement).classList;

			if (!dropdown.length) {
				dropdown.add("menu-local-show");
			} else {
				dropdown.toggle("menu-local-show");
				dropdown.toggle("menu-local-hide");
			}

			this.check();
		},
		check() {
			const e = document.getElementsByClassName("menu-icon").item(0) as Element;

			e.classList[this.show ? "add" : "remove"]("on");
			e.classList[this.show ? "remove" : "add"]("off");
		},
		checkTheme(color: "black" | "white") {
			this.github = assets.Github[color];
			this.developer = assets.Developer[color];
			this.$emit("theme", this.isDark() ? "white" : "black");
		},
		isDark() {
			return getComputedStyle(document.documentElement).getPropertyValue("--theme").trim() === "dark";
		},
	},
	mounted() {
		this.check();
		this.checkTheme(window.matchMedia("(prefers-color-scheme: dark)").matches ? "white" : "black");

		setInterval(() => this.checkTheme(!this.isDark() ? "black" : "white"), 100);
	},
	components: { LinkIcon, RouterButton, ThemeButtonLarge: ThemeButton.Large },
	props: {
		mobile: {
			type: Boolean,
			required: true,
		},
	},
	emits: ["theme"],
});
</script>

<template>
  <div class="m">
    <div class="menu" @click="update()">
      <div class="menu-icon">
        <div class="icon" />
      </div>
    </div>
    <Teleport to="#app">
      <nav id="dropdown" :class="`${!mobile ? 'hide' : ''}`">
        <div id="theme">
          <ThemeButtonLarge @theme="checkTheme"/>
        </div>
        <div id="pages">
          <RouterButton to="/" name="Home" @unshow="update"/>
          <RouterButton to="/projects" name="Projects" @unshow="update"/>
          <RouterButton to="/packages" name="Packages" @unshow="update"/>
        </div>
        <div id="links">
          <LinkIcon url="https://github.com/KingsBeCattz" :src="github"/>
          <LinkIcon url="https://github.com/KingsBeCattz/Portafolio-Vue" :src="developer"/>
        </div>
      </nav>
    </Teleport>
  </div>
</template>

<style scoped>
  .m {
    margin-left: 5px;
    transition: all .1s ease-in-out
  }

  .menu {
    border-radius: 10px;
    padding: 5px;
    background-color: var(--background);
    cursor: pointer;
    width: 20px;
    height: 20px;
    border: 1px solid var(--line);
    transform: scale(75%);
    transition: all .1s ease-in-out;

    &:hover {
      background-color: var(--background-color);
    }
  }

  .menu-icon {
    cursor: pointer;
    width: 20px;
    height: 20px;

    &.on {
      animation: rotate-in .2s ease-in-out forwards
    }

    &.off {
      animation: rotate-out .2s ease-in-out forwards
    }
  }

  @keyframes rotate-in {
    from {
      rotate: 0deg;
    }

    to {
      rotate: 180deg;
    }
  }

  @keyframes rotate-out {
    from {
      rotate: 180deg;
    }

    to {
      rotate: 360deg;
    }
  }

  @keyframes hide {
    from {
      transform: translateY(0)
    }
    to {
      transform: translateY(-200dvw)
    }
  }

  @keyframes show {
    from {
      transform: translateY(-200dvw)
    }
    to {
      transform: translateY(0)
    }
  }

  .icon {
    width: 10px;
    height: 10px;
    border-right: 2px solid var(--link-color-default);
    border-bottom: 2px solid var(--link-color-default);
    rotate: 45deg;
    margin-left: auto;
    margin-right: auto;
  }

  #dropdown {
    position: fixed;
    width: 100dvw;
    height: calc(100dvh - 30px - 59px);
    background-color: var(--background);
    z-index: 1;
    padding: 20px 0 10px 0;
    grid-template-rows: max-content max-content auto;
    top: 59px;
    transform: translateY(-200dvh)
  }

  #dropdown #pages {
    display: grid;
    grid-template-rows: max-content;
    padding: 0 20vw 0 20vw;
  }

  #dropdown #links {
    padding-top: 10px;
    border-top: 2px solid var(--line);
    bottom: 10px;
    position: inherit;
    top: auto;
    width: 100vw;
  }

  #theme {
    padding: 0 20vw 10px 20vw;
    z-index: 2;
  }

  .menu-local-hide {
    animation: hide .25s ease-in-out forwards
  }

  .menu-local-show {
    animation: show .25s ease-in-out forwards
  }
</style>
