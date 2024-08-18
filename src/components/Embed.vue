<script lang="ts">
import { defineComponent } from "vue";
import Codeblock from "@/components/Codeblock.vue";

export default defineComponent({
	name: "Embed",
	props: {
		color: {
			type: String,
			required: true,
		},
		thumbnail: String,
		center: Boolean,
		title: {
			type: String,
			required: false,
		},
		description: {
			type: String,
			required: false,
		},
		image: {
			type: String,
			required: false,
		},
		code: {
			type: String,
			required: false,
		},
	},
	data(vm) {
		return {
			style: `--color: ${vm.color}; ${vm.center ? "margin-left: auto; margin-right: auto;" : ""}`,
		};
	},
	methods: { Codeblock },
});
</script>

<template>
    <div id="embed" :style="style">
        <div class="embed">
            <div class="content-wrapper">
                <div class="text-content">
                    <h2 v-html="title" v-if="title"></h2>
                    <p v-html="description" v-if="description"></p>
                </div>
                <div class="thumbnail-container" v-if="thumbnail">
                    <img :src="thumbnail" class="thumbnail">
                </div>
            </div>
            <img :src="image" class="image" v-if="image">
        </div>
    </div>
</template>

<style scoped>
    #embed {
        display: flex;
        flex-direction: column; 
        border-left: 4px solid var(--color);
        margin-bottom: 5px;
        width: fit-content;
        border-radius: 2px 0 0 2px;
    }

    .embed {
        display: flex;
        flex-direction: column; 
        width: 400px;
        background-color: var(--embed-background);
        border-radius: 0 2px 2px 0;
        padding: 15px;
        transition: all .1s ease-in-out;
    }

    .content-wrapper {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
    }

    .thumbnail-container {
        flex: 0 0 auto;
    }

    .thumbnail {
        width: 100px;
        height: 100px;
        border-radius: 5px;
    }

    .text-content {
        flex: 1 1 auto;
        text-align: left;
        margin-right: 15px;
    }

    .image {
        width: 100%;
        display: block;
        border-radius: 5px;
    }

    .text-content h2, .text-content p {
        margin: 0;
        width: auto;
        word-break: break-all;
    }

    .text-content p {
        margin-bottom: 15px
    }

    @media (max-width: 600px) {
        #embed {
            border-left: 3px solid var(--color)
        }

        .embed {
            padding: 10px;
            width: calc(80vw - 20px);
        }

        .thumbnail {
            width: 60px;
            height: 60px;
        }

        .text-content {
            margin-right: 5px
        }

        .text-content h2 {
            font-size: 85%;
            width: auto;
        }
        
        .text-content p {
            font-size: 75%;
            width: auto;
            margin-bottom: 10px
        }
    }

    @media (max-width: 300px) {
        #embed {
            border-left: 2px solid var(--color)
        }

        .embed {
            padding: 5px;
            width: 200px;
        }

        .thumbnail {
            width: 50px;
            height: 50px;
        }

        .text-content {
            margin-right: 5px
        }

        .text-content h2 {
            font-size: 75%;
            width: 140px;
        }
        
        .text-content p {
            font-size: 65%;
            width: 140px;
            margin-bottom: 5px
        }
    }
</style>
