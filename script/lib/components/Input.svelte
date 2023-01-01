<script lang="ts">
	let text = "";
</script>

<div class="spd-flex">
	<textarea
		bind:value={text}
		class="spd-rounded-md spd-px-6 spd-py-6 spd-z-[99999] spd-text-neutral-500 hover:spd-text-neutral-200 spd-bg-black spd-shadow-md spd-border spd-border-neutral-600 spd-font-sans spd-text-base"
		placeholder="Add a comment"
	></textarea>

	<div class="spd-flex spd-items-center -spd-m-1">
		<button
			type="button"
			class="spd-m-1 spd-rounded spd-bg-neutral-200 spd-border spd-border-neutral-500 spd-px-4 spd-py-2"
		>
			Cancel
		</button>

		<button
			type="button"
			class="spd-m-1 spd-rounded spd-bg-neutral-200 spd-border spd-border-neutral-500 spd-px-4 spd-py-2"
		>
			Post
		</button>
	</div>
</div>
