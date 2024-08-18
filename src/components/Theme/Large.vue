<script lang="ts">
import { defineComponent } from "vue";
import { assets } from "@/assets";

export default defineComponent({
	name: "Theme",
	data() {
		return {
			icon: {
				default: assets.Default.white,
				dark: assets.Moon.white,
				light: assets.Sun.white,
				thumbnail: this.systemThemeisDark() ? assets.Default.white : assets.Default.black,
			},
			currentTheme: "default",
		};
	},
	methods: {
		isDark() {
			return getComputedStyle(document.documentElement).getPropertyValue("--theme").trim() === "dark";
		},
		systemThemeisDark() {
			return window.matchMedia("(prefers-color-scheme: dark)").matches;
		},
		isDefault() {
			return this.systemThemeisDark() === this.isDark();
		},
		async setTheme(theme: "dark" | "light" | "default") {
			switch (theme.toLowerCase()) {
				case "dark":
					{
						this.icon = {
							default: assets.Default.white,
							dark: assets.Moon.white,
							light: assets.Sun.white,
							thumbnail: assets.Moon.white,
						};
						this.setDarkMode();
					}
					break;
				case "light":
					{
						this.icon = {
							default: assets.Default.black,
							dark: assets.Moon.black,
							light: assets.Sun.black,
							thumbnail: assets.Sun.black,
						};
						this.setLightMode();
					}
					break;
				default: {
					window.matchMedia("(prefers-color-scheme: dark)").matches ? this.setTheme("dark") : this.setTheme("light");
					this.icon.thumbnail = this.icon.default;
				}
			}

			this.currentTheme = theme;
		},
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
	},
	mounted() {
		this.setTheme("default");

		const menu = document.getElementById("theme-menu-large");

		document.getElementById("theme-button-large")?.addEventListener("click", (event) => {
			menu?.classList.toggle("hide");
			event.stopPropagation();
		});

		for (const button of document.getElementsByClassName("theme-option-large")) {
			button.addEventListener("click", async (event) => {
				await this.setTheme(button.classList[1] as "dark" | "light" | "default");
				this.$emit("theme", this.isDark() ? "white" : "black");
				menu?.classList.add("hide");
				event.stopPropagation();
			});
		}

		setInterval(() => this.setTheme(this.isDark() ? "dark" : "light"), 100);
	},
	emits: ["theme"],
});
</script>

<template>
    <KeepAlive>
        <div id="theme-large">
            <button id="theme-button-large">
                <img :src="icon.default" id="icon"><span id="text">Theme</span>
            </button>
            <div id="theme-menu-large" class="hide">
                <button class="theme-option-large default" :disabled=isDefault()>
                    <img :src="icon.default" id="icon"><span id="text">OS Theme</span>
                </button>
                <button class="theme-option-large dark" :disabled=isDark()>
                    <img :src="icon.dark" id="icon"><span id="text">Dark Theme</span>
                </button>
                <button class="theme-option-large light" :disabled=!isDark()>
                    <img :src="icon.light" id="icon"><span id="text">Light Theme</span>
                </button>
            </div>
        </div>
    </KeepAlive>
</template>

<style scoped>
    #theme-button-large {
        height: auto;
        padding: 5px;
        display: block;
        height: 30px;
        border-radius: 5px;
        border: 1px solid var(--line);
        width: fit-content;
        background-color: var(--background);
        color: var(--color);
        transition: all .1s ease-in-out;
        cursor: pointer;

        &:hover {
            background-color: var(--background-color);
        }
    }

    #theme-menu-large {
        background-color: var(--background);
        color: var(--color);
        border: 1px solid var(--line);
        padding: 5px;
        text-align: start;
        border-radius: 5px;
        top: 44px;
        transition: all .1s ease-in-out;
    }

    .theme-option-large {
        display: block;
        border-radius: 5px;
        background-color: var(--background);
        color: var(--color);
        border: 0px solid transparent;
        padding: 5px;
        transition: all .1s ease-in-out;
        cursor: pointer;
        width: 100%;
        text-align: left;

        &:hover {
            background-color: var(--background-color);
        }
    }

    #text {
        margin-left: 5px;
        vertical-align: middle;
        font-size: 120%;
        transition: all .1s ease-in-out;
    }

    #icon {
        width: 15px;
        height: 15px;
        vertical-align: middle;
        transition: all .1s ease-in-out;
    }

    .theme-option-large[disabled] {
        cursor: not-allowed;
        opacity: 70%;

        &:hover {
            background-color: var(--background);
        }
    }
</style>