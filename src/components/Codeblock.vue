<script lang="ts">
import { defineComponent, ref } from "vue";
import hljs from "highlight.js";
import "highlight.js/styles/a11y-dark.css";

export default defineComponent({
	name: "CodeBlock",
	props: {
		language: {
			type: String,
			required: true,
		},
		code: {
			type: String,
			required: true,
		},
	},
	setup() {
		const codeBlock = ref(null);

		return { codeBlock };
	},
	mounted() {
		this.highlightCode();
	},
	methods: {
		prepareCode(code: string) {
			const lines = code.split("\\n").map((line) => line.replace(/</g, "&lt;").replace(/>/g, "&gt;"));
			return lines.join("\n");
		},
		highlightCode() {
			this.$nextTick(() => {
				const codeBlock = this.$refs.codeBlock as HTMLElement;
				if (codeBlock) {
					codeBlock.innerHTML = this.prepareCode(this.code);
					hljs.highlightBlock(codeBlock);
				}
			});
		},
	},
});
</script>

<template>
  <pre><code :class="language" ref="codeBlock" v-html="code"></code></pre>
</template>

<style scoped>
pre {
    width: auto;
    overflow-x: auto;
	display: block;
}

pre code {
    text-align: left;
    white-space: pre-wrap;
    word-wrap: break-word;
}
</style>