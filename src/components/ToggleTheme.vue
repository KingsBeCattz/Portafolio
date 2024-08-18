<script lang="ts">
import { defineComponent } from "vue";
import { assets } from "@/assets";

export default defineComponent({
	name: "ToggleTheme",
	data() {
		const T = getComputedStyle(document.documentElement).getPropertyValue("--theme").trim() || window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
		return {
			dark: T !== "dark",
			theme: T,
			assets,
		};
	},
	mounted() {
		const checkbox = document.getElementById("checkbox");
		const T = getComputedStyle(document.documentElement).getPropertyValue("--theme").trim();

		checkbox?.addEventListener("click", () => {
			this.checkTheme();

			this.$emit("changeTheme", {
				dark: this.dark,
			});
		});

		this.checkTheme();
	},
	emits: ["changeTheme"],
	methods: {
		checkTheme() {
			const icon = document.getElementById(this.theme) as HTMLImageElement;
			if (this.dark) {
				this.theme = "dark";
				this.dark = true;
				icon.src = assets.Moon.black;
			} else {
				this.theme = "light";
				this.dark = false;
				icon.src = assets.Sun.white;
			}
		},
	},
});
</script>

<template>
  <img :src="assets.Moon.black" style="display: none">
  <img :src="assets.Sun.white" style="display: none">
  <KeepAlive>
    <div class="toggle">
      <div id="toggle" :class="theme">
        <div id="theme" :class="theme">
          <img :id="theme" />
        </div>
      </div>
      <input type="checkbox" id="checkbox" @click="dark = !dark" />
    </div>
  </KeepAlive>
</template>

<style scoped>
.toggle {
  width: fit-content;
  height: 34px;
  margin-left: auto;
  transform: scale(70%);
  transform-origin: center right;
}

input[type="checkbox" i] {
  margin: 0;
  padding: 0;
  appearance: none;
}

#toggle {
  width: 60px;
  height: 30px;
  border: 2px solid #fff;
  background-color: transparent;
  border-radius: 30px;
  cursor: pointer;
  transition: border 0.1s ease-in-out;
  opacity: 70%;
  transition: all 0.2s ease-in-out;
  position: relative;
  z-index: 2;
}

.toggle:hover #toggle {
  opacity: 100%;
}

#toggle.light {
  border: 2px solid #000;
}

#checkbox {
  width: 65px;
  height: 35px;
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0;
  cursor: pointer;
  z-index: 3;
  transform: scale(110%)
}

#logo {
  width: 25px;
  position: relative;
  cursor: pointer;
  z-index: 2;
  border-radius: 50%;
}

#theme {
  padding: 2px
}

img#dark, img#light {
  position: relative;
  cursor: pointer;
  z-index: 2;
  border-radius: 50%;
}

img#light {
  background-color: #000;
  animation: move-right 0.1s ease-in-out forwards;
  width: 25px;
}

img#dark {
  background-color: #fff;
  animation: move-left 0.1s ease-in-out forwards;
  width: 22px;
  padding: 2px
}

@keyframes move-right {
  from {
    transform: translateX(-60%)
  }
  to {
    transform: translateX(60%)
  }
}

@keyframes move-left {
  from {
    transform: translateX(60%)
  }
  to {
    transform: translateX(-60%)
  }
}
</style>
