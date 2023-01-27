<script lang="ts">
	import { computePosition, inline, flip, shift, offset } from "@floating-ui/dom";

	import { commentCount } from "../store/comments";
	import { commentModeActive } from "../store/ui";
	
	let text = "";
	let inputEl;
	let pinEl;
	let inputVisible: boolean = false;
	const ANIM_DURATION = 300;

	export let loading: boolean = false;

	const updateFloatingPosition = async ({ clientX, clientY }) => {
		const virtualEl = {
			getBoundingClientRect() {
				return {
					width: 0,
					height: 0,
					x: clientX,
					y: clientY,
					top: clientY,
					left: clientX,
					right: clientX,
					bottom: clientY,
				};
			},
			getClientRects() {
				return [];
			}
		};

		const { x: pinX, y: pinY } = await computePosition(virtualEl, pinEl, {
			placement: "right-start",
			middleware: [
				inline(),
			],
		});
		Object.assign(pinEl.style, {
			left: `${pinX}px`,
			top: `${pinY}px`,
		});
		
		const { x: inputX, y: inputY } = await computePosition(pinEl, inputEl, {
			placement: "right-start",
			middleware: [
				inline(),
				offset(8),
				flip(),
				shift({ padding: 8 }),
			],
		});
		Object.assign(inputEl.style, {
			left: `${inputX}px`,
			top: `${inputY}px`,
		});
	};

	const showInput = (e) => {
		const ignoreClick = inputEl && inputEl.contains(e.target as HTMLElement);
		if (!$commentModeActive || ignoreClick) {
			return;
		}
	
		updateFloatingPosition(e);

		if (!inputVisible) {
			inputEl.style.display = "";
			inputVisible = true;
		}

		if (e.target.closest("a, button, [role='button']")) {
			e.preventDefault();
		}
	};

	const hideInput = () => {
		if (inputVisible) {
			inputVisible = false;

			setTimeout(() => {
				inputEl.style.display = "none";
			}, ANIM_DURATION);
		}
	};
</script>

<svelte:window on:click|capture={showInput} />

{#if $commentModeActive}
<div
	class="spd-absolute spd-top-0 spd-left-0 spd-transition !spd-cursor-auto !spd-z-[999999]"
	bind:this={pinEl}
	class:spd-opacity-0={!inputVisible}
	class:spd-scale-150={!inputVisible}
	class:spd-opacity-100={inputVisible}
	class:spd-scale-100={inputVisible}
	data-ignore-cursor
>
	<svg
		class="spd-w-8 spd-h-8"
		viewBox="0 0 44 44"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		<path d="M22 44C34.1503 44 44 34.1503 44 22C44 9.84974 34.1503 0 22 0H0V22C0 34.1503 9.84974 44 22 44Z" fill="black"/>
		<path fill-rule="evenodd" clip-rule="evenodd" d="M22 41.25C32.6315 41.25 41.25 32.6315 41.25 22C41.25 11.3685 32.6315 2.75 22 2.75H2.75V22C2.75 32.6315 11.3685 41.25 22 41.25ZM44 22C44 34.1503 34.1503 44 22 44C9.84974 44 0 34.1503 0 22V0H22C34.1503 0 44 9.84974 44 22Z" fill="white"/>
	</svg>

	<span class="spd-absolute spd-left-1/2 spd-top-1/2 -spd-translate-x-1/2 -spd-translate-y-1/2 spd-text-xs spd-text-white">
		{ $commentCount + 1 }
	</span>
</div>

<form
	class="spd-flex spd-flex-col spd-w-full spd-max-w-xs spd-shadow-lg spd-border spd-border-zinc-600 spd-bg-black spd-rounded-md spd-text-white spd-absolute spd-transition !spd-cursor-auto spd-top-0 spd-left-0 spd-delay-100 spd-duration-300 spd-ease-out !spd-z-[999999]"
	bind:this={inputEl}
	class:spd-opacity-0={!inputVisible}
	class:spd-translate-y-2={!inputVisible}
	class:spd-opacity-100={inputVisible}
	class:spd-translate-y-0={inputVisible}
	data-ignore-cursor
	on:submit|preventDefault
>
	<textarea
		bind:value={text}
		class="spd-px-5 spd-pt-4 spd-pb-3 spd-rounded-md spd-transition-colors spd-bg-black spd-resize-none spd-appearance-none placeholder:spd-text-zinc-500 focus:spd-outline-none focus:placeholder:spd-text-zinc-700 spd-text-base"
		placeholder="Add a comment..."
		rows="3"
	></textarea>

	<div class="spd-flex spd-items-center spd-px-5 spd-py-3 spd-space-x-3 spd-self-end">
		<button
			type="button"
			on:click={hideInput}
			class="spd-px-3 spd-py-2 spd-transition-colors spd-space-x-1.5 spd-border spd-border-zinc-900 spd-text-zinc-500 spd-rounded-md hover:spd-text-white hover:spd-bg-zinc-900 spd-text-sm spd-flex spd-items-center"
		>
			Cancel
		</button>

		<button
			type="submit"
			disabled={loading}
			class="spd-px-3 spd-py-2 spd-transition-colors spd-space-x-1.5 spd-border spd-border-zinc-700 spd-text-white spd-rounded-md hover:spd-bg-zinc-900 spd-text-sm spd-flex spd-items-center"
		>
			<span>
				Post
			</span>

			{#if loading}
				<svg class="spd-animate-spin spd-w-5 spd-h-5" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M4.5 12.5C4.5 16.9183 8.08172 20.5 12.5 20.5C16.9183 20.5 20.5 16.9183 20.5 12.5C20.5 8.08172 16.9183 4.5 12.5 4.5" stroke="#9CA3AF" stroke-width="1.2"/>
				</svg>
			{:else}
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 20 20"
					fill="currentColor"
					class="spd-w-4 spd-h-4"
				>
					<path d="M3.105 2.289a.75.75 0 00-.826.95l1.414 4.925A1.5 1.5 0 005.135 9.25h6.115a.75.75 0 010 1.5H5.135a1.5 1.5 0 00-1.442 1.086l-1.414 4.926a.75.75 0 00.826.95 28.896 28.896 0 0015.293-7.154.75.75 0 000-1.115A28.897 28.897 0 003.105 2.289z" />
				</svg>
			{/if}
		</button>
	</div>
</form>
{/if}
