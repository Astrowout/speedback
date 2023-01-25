<script lang="ts">
	import { commentModeActive } from "../store/ui";

	const toggleCommentMode = (): void => {
		commentModeActive.update((value) => {
			return !value;
		});
	};

	const keyClass = "spd-text-xs spd-ml-3 spd-text-zinc-500 spd-rounded spd-p-1 spd-leading-none spd-shadow-sm spd-bg-zinc-900 spd-border spd-border-zinc-700";
</script>

<button
	on:click={toggleCommentMode}
	class="spd-flex spd-items-center spd-fixed spd-bottom-8 spd-left-1/2 spd-bg-black spd-rounded-full -spd-translate-x-1/2 spd-pl-5 spd-pr-6 spd-h-11 !spd-z-[99999] spd-shadow-md spd-border spd-border-zinc-600 spd-font-sans spd-text-base spd-transition-colors focus:spd-ring-2 focus:spd-ring-zinc-900/60 hover:spd-text-white {$commentModeActive ? 'spd-text-white' : 'spd-text-zinc-500'}"
	data-ignore-cursor
>
	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="spd-w-5 spd-h-5 spd-mr-2 spd-flex-shrink-0">
		{#if $commentModeActive}
			<path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
		{:else}
			<path fill-rule="evenodd" d="M2 10c0-3.967 3.69-7 8-7 4.31 0 8 3.033 8 7s-3.69 7-8 7a9.165 9.165 0 01-1.504-.123 5.976 5.976 0 01-3.935 1.107.75.75 0 01-.584-1.143 3.478 3.478 0 00.522-1.756C2.979 13.825 2 12.025 2 10z" clip-rule="evenodd" />
		{/if}
	</svg>

	<span class="spd-flex spd-items-center">
		{#if $commentModeActive}
			<span>Close comments</span> <code class={keyClass}>esc</code>
		{:else}
			<span>Comment</span> <code class={keyClass}>c</code>
		{/if}
	</span>
</button>
