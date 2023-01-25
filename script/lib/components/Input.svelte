<script lang="ts">
	import { computePosition, inline, offset, flip, shift } from "@floating-ui/dom";

	import { commentModeActive } from "../store/ui";
	
	let text = "";
	let inputEl;
	let inputVisible: boolean = false;
	const ANIM_DURATION = 300;

	export let loading: boolean = false;

	const updateInputPosition = async ({ clientX, clientY }) => {
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
		
		const { x, y } = await computePosition(virtualEl, inputEl, {
			placement: "right-start",
			middleware: [
				inline(),
				offset(28),
				flip(),
				shift({ padding: 8 }),
			],
		});
	
		Object.assign(inputEl.style, {
			left: `${x}px`,
			top: `${y}px`,
		});
	};

	const showInput = (e) => {
		const ignoreClick = inputEl && inputEl.contains(e.target as HTMLElement);
		if (!$commentModeActive || ignoreClick) {
			return;
		}
	
		updateInputPosition(e);

		if (!inputVisible) {
			inputEl.style.display = "";
			inputVisible = true;
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
	<form
		class="spd-flex spd-flex-col spd-transition !spd-cursor-auto spd-delay-100 spd-duration-300 spd-ease-out spd-absolute spd-top-0 spd-left-0 spd-w-full spd-max-w-xs spd-z-[999999] spd-shadow-lg spd-border spd-border-zinc-600 spd-bg-black spd-rounded-md spd-text-white"
		class:spd-opacity-0={!inputVisible}
		class:spd-translate-y-2={!inputVisible}
		class:spd-opacity-100={inputVisible}
		class:spd-translate-y-0={inputVisible}
		bind:this={inputEl}
		on:submit|preventDefault
		data-ignore-cursor
	>
		<textarea
			bind:value={text}
			class="spd-px-5 spd-pt-4 spd-pb-3 spd-rounded-md spd-transition-colors spd-bg-black spd-resize-none spd-appearance-none placeholder:spd-text-zinc-500 focus:spd-outline-none focus:placeholder:spd-text-zinc-700 hover:spd-text-zinc-200 spd-text-base"
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
