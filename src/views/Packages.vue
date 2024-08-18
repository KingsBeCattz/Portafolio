<script lang="ts">
import Embed from "@/components/Embed.vue";
import { defineComponent } from "vue";
import { assets } from "@/assets";
import Message from "@/components/Message.vue";
import Button from "@/components/Button.vue";
import CodeBlock from "@/components/Codeblock.vue";

export default defineComponent({
	name: "Projects",
	components: { Embed, Message, Button, CodeBlock },
	data() {
		return {
			assets,
		};
	},
});
</script>

<template>
    <Transition name="title">
        <h1>Here are some packages maded for me</h1>
    </Transition>
    <Message :icon="assets.KingBeCats" author="KingBeCats">
        <Embed
            color="#8a1d1d"
            title="HybridCommands"
            description="This is a package oriented to facilitate the use and creation of discord slash commands."
        />
        <Button label="NPM" :style="3" url="https://www.npmjs.com/package/hybridcommands" :emoji="assets.NPM"/>
        <Button label="GitHub" :style="3" url="https://github.com/KingsBeCattz/HybridCommands" :emoji="assets.Github.white"/>
    </Message>
    <Message :icon="assets.KingBeCats" author="KingBeCats">
        <Embed
            color="#397cc7"
            title="KatDB"
            description="Easy to use database using JSON files, it has backup systems."
        />
        <Button label="NPM" :style="3" url="https://www.npmjs.com/package/katdb" :emoji="assets.NPM"/>
        <Button label="GitHub" :style="3" url="https://github.com/KingsBeCattz/katdb" :emoji="assets.Github.white"/>
    </Message>
    <Message :icon="assets.KingBeCats" author="KingBeCats">
        <Embed
            color="#fff"
            title="EveDB"
            description="Database that uses JSON, HTTP server and Fecth() to store and manage data from one point to another, i.e. an online database (includes both server and client sides)

WARNING: This package is so to speak, &quotbroken&quot, because if you are on local it works, if used as intended it does not, so I do not recommend its use until further notice."
        />
        <Button label="NPM" :style="3" url="https://www.npmjs.com/package/@kingbecats/evedb" :emoji="assets.NPM"/>
        <Button label="GitHub" :style="3" url="https://github.com/KingsBeCattz/EveDB" :emoji="assets.Github.white"/>
    </Message>
</template>

<style scoped>
  .title-enter-active,
  .title-leave-active {
    transition: opacity 4s ease
  }

  .title-enter-from,
  .title-leave-to {
    opacity: -100%
  }
</style>