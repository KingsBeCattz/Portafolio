<template>
  <h1>
    Nice to meet you!
  <span style="font-size: 15px; display: block; text-decoration: underline;">
    The site is built, but there is still no good content to display besides the "Packages" page.
  </span>
  </h1>
  <div class="Messages">
    <Message author="KingBeCats" :icon="assets.KingBeCats">
      <span style="font-size: 135%; font-weight: bold;">
        What did I do?
      </span>
      <tr />
      At the top you have a github logo, which takes you to my github profile, or there are also buttons at the top where each one indicates projects and packages made and chosen by me.
    </Message>
    <Message author="KingBeCats" :icon="assets.KingBeCats">
      <span style="font-size: 135%; font-weight: bold;">
        What can I use?
      </span>
      <tr />
      I am used to make bots of any style, if the bot needs things that I don't know, I would venture to learn what is necessary for the development.<tr />
      I can use JavaScript/TypeScript, Vue 3 and Angular 18, and Discord.JS; I can also make APIS using Express, or HTTPS more native to Node.<tr />
      In Angular I don't have much experience but I know the basics, however in Vue I have more experience, since this site is built with Vue 3.
    </Message>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Message from "@/components/Message.vue";
import RadiusProfilePhoto from "@/components/RadiusProfilePhoto.vue";
import { assets } from "@/assets";

export default defineComponent({
	name: "HomeView",
	components: {
		Message,
		RadiusProfilePhoto,
	},
	data() {
		return {
			assets,
		};
	},
});
</script>