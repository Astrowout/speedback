<script lang="ts">
	import { commentModeActive } from "../store/ui";

	const toggleCommentMode = (): void => {
		commentModeActive.update((value) => {
			return !value;
		});
	};
</script>

<button
	on:click={toggleCommentMode}
	class="spd-flex spd-items-center spd-fixed spd-bottom-8 spd-left-1/2 spd-rounded-full -spd-translate-x-1/2 spd-px-6 spd-h-11 spd-z-[99999] spd-text-neutral-500 hover:spd-text-neutral-200 spd-bg-black spd-shadow-md hover:spd-shadow-xl spd-border spd-border-neutral-600 spd-font-sans spd-text-base spd-transition-colors"
>
	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="spd-w-5 spd-h-5 spd-mr-2 spd-flex-shrink-0">
		<path fill-rule="evenodd" d="M2 10c0-3.967 3.69-7 8-7 4.31 0 8 3.033 8 7s-3.69 7-8 7a9.165 9.165 0 01-1.504-.123 5.976 5.976 0 01-3.935 1.107.75.75 0 01-.584-1.143 3.478 3.478 0 00.522-1.756C2.979 13.825 2 12.025 2 10z" clip-rule="evenodd" />
	</svg>
  
	<span>
		{#if $commentModeActive}
			Close comments
		{:else}
			Comment
		{/if}
	</span>
</button>
