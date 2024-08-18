<script lang="ts">
import { defineComponent } from "vue";
import RadiusProfilePhoto from "./RadiusProfilePhoto.vue";

export default defineComponent({
	name: "Message",
	props: {
		author: String,
		icon: {
			type: String,
			required: true,
		},
	},
	components: { RadiusProfilePhoto },
	data() {
		return {
			scale: 80,
		};
	},
	mounted() {
		this.rescale();
		window.addEventListener("resize", () => {
			this.rescale();
		});
	},
	methods: {
		rescale() {
			if (window.innerWidth <= 470) {
				this.scale = 10;
			}
		},
	},
});
</script>

<template>
    <div class="message">
        <div class="m">
            <RadiusProfilePhoto size="40px" :src="icon" radiuscolor="#43b581" radiusweight="2.75px" :scale="scale"/>
            <div class="content">
                <span v-html="author"></span>
                <p>
                    <slot></slot>
                </p>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .m {
        max-width: 100vw;
        overflow:hidden
    }

    .message {
        --content-width: 1000px;
        text-align: start;
        display: flex;
        padding-bottom: 5px;
        max-width: var(--content-width);
        margin-left: auto;
        margin-right: auto;
    }

    .message:hover {
        background-color: var(--message-hover);
    }

    .content {
        margin-top: 5px;
        font-size: 115%;
        margin-right: 10px
    }

    .message .m {
        display: flex;
    }

    .message .content p {
        white-space: pre-line;
        margin: 0
    }

    .message .content span {
        font-weight: bolder;
        margin-bottom: 5px
    }

    #radius {
        margin-left: 10px;
        margin-right: 10px;
        margin-top: 5px
    }
</style>