<script lang="ts">
	import { formatRelative } from "date-fns";
	import { computePosition, inline, offset, flip, shift } from "@floating-ui/dom";
	import { clickOutside } from "../helpers/directives";

	let triggerEl;
	let commentEl;
	let commentVisible: boolean = false;
	let metainfoTriggerEl;
	let metainfoEl;
	let metainfoVisible: boolean = false;
	const ANIM_DURATION = 300;

	type Position = {
		x: number;
		y: number;
	};

	type Metadata = {
		userAgent?: string;
		language?: string;
		platform?: string;
		screenWidth?: number;
		screenHeight?: number;
		devicePixelRatio?: number;
	};

	export let resolved: boolean = false;
	export let text: string = "";
	export let pathname: string = "";
	export let position: Position = {
		x: 0,
		y: 0,
	};
	export let metadata: Metadata = {};
	export let createdAt = new Date();
	export let loading: boolean = false;
	export let number: number = 1;

	const updateCommentPosition = async () => {
		const { x, y } = await computePosition(triggerEl, commentEl, {
			placement: "right-start",
			middleware: [
				inline(),
				offset(4),
				flip(),
				shift({ padding: 8 }),
			],
		});
	
		Object.assign(commentEl.style, {
			left: `${x}px`,
			top: `${y}px`,
		});
	};

	const showComment = () => {
		if (!commentVisible) {
			commentEl.style.display = "";
			commentVisible = true;
	
			updateCommentPosition();
		}
	};

	const hideComment = () => {
		if (commentVisible) {
			commentVisible = false;
			metainfoVisible = false;

			setTimeout(() => {
				commentEl.style.display = "none";
				metainfoEl.style.display = "none";
			}, ANIM_DURATION);
		}
	};

	const toggleComment = () => {
		if (commentVisible) {
			hideComment();
		} else {
			showComment();
		}
	};

	const updateMetainfoPosition = async () => {
		if (!metainfoTriggerEl) {
			return;
		}

		const { x, y } = await computePosition(metainfoTriggerEl, metainfoEl, {
			placement: "top",
			middleware: [
				inline(),
				offset(20),
				flip(),
				shift({ padding: 8 }),
			],
		});
	
		Object.assign(metainfoEl.style, {
			left: `${x}px`,
			top: `${y}px`,
		});
	};

	const showMetainfo = () => {
		if (!metainfoVisible) {
			metainfoEl.style.display = "";
			metainfoVisible = true;

			updateMetainfoPosition();
		}
	};

	const hideMetainfo = () => {
		if (metainfoVisible) {
			metainfoVisible = false;

			setTimeout(() => {
				metainfoEl.style.display = "none";
			}, ANIM_DURATION);
		}
	};

	const toggleMetainfo = () => {
		if (metainfoVisible) {
			hideMetainfo();
		} else {
			showMetainfo();
		}
	};
</script>

<button
	class="spd-absolute spd-z-[999999]"
	style:left={`${position.x * 100}%`}
	style:top={`${position.y * 100}%`}
	type="button"
	bind:this={triggerEl}
	on:mouseenter={showComment}
	on:click={toggleComment}
	use:clickOutside={hideComment}
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
		{number}
	</span>
</button>

<div
	class="spd-flex spd-flex-col spd-transition spd-delay-100 spd-duration-300 spd-ease-out spd-absolute spd-top-0 spd-left-0 spd-w-max spd-z-[999999] spd-shadow-lg spd-border spd-border-zinc-600 spd-bg-black spd-px-6 spd-py-3 spd-rounded-md spd-text-white"
	class:spd-opacity-0={!commentVisible}
	class:spd-translate-y-2={!commentVisible}
	class:spd-opacity-100={commentVisible}
	class:spd-translate-y-0={commentVisible}
	bind:this={commentEl}
	on:mouseleave={hideComment}
	data-clickable
>
	<div class="spd-flex spd-flex-col">
		<div class="spd-flex spd-items-center spd-space-x-3 spd-self-end">
			<p class="spd-text-sm spd-text-zinc-500">
				{formatRelative(new Date(createdAt), new Date())}
			</p>

			<button
				type="button"
				class="spd-p-1.5 spd-rounded-md spd-text-zinc-500 hover:spd-bg-zinc-900 spd-text-sm spd-flex spd-items-center spd-self-end"
				bind:this={metainfoTriggerEl}
				on:click={toggleMetainfo}
				on:mouseenter={showMetainfo}
				use:clickOutside={hideMetainfo}
				data-ignore-clickable
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 20 20"
					fill="currentColor"
					class="spd-w-5 spd-h-5"
				>
					<path fill-rule="evenodd" d="M2 4.25A2.25 2.25 0 014.25 2h11.5A2.25 2.25 0 0118 4.25v8.5A2.25 2.25 0 0115.75 15h-3.105a3.501 3.501 0 001.1 1.677A.75.75 0 0113.26 18H6.74a.75.75 0 01-.484-1.323A3.501 3.501 0 007.355 15H4.25A2.25 2.25 0 012 12.75v-8.5zm1.5 0a.75.75 0 01.75-.75h11.5a.75.75 0 01.75.75v7.5a.75.75 0 01-.75.75H4.25a.75.75 0 01-.75-.75v-7.5z" clip-rule="evenodd" />
				</svg>
			</button>

			<button
				type="button"
				class="spd-p-1.5 spd-rounded-md spd-text-zinc-500 hover:spd-bg-zinc-900 spd-text-sm spd-flex spd-items-center spd-self-end"
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 20 20"
					fill="currentColor"
					class="spd-w-5 spd-h-5"
				>
					<path d="M3 10a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM8.5 10a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM15.5 8.5a1.5 1.5 0 100 3 1.5 1.5 0 000-3z" />
				</svg>
			</button>
		</div>

		<div class="spd-pt-2 spd-pb-4 spd-pr-8">
			<p class="spd-text-base {resolved ? 'spd-text-zinc-600 spd-line-through': 'spd-text-zinc-200'}">
				{text}
			</p>
		</div>
	</div>

	{#if loading}
		<svg width="28" class="gthr-tooltip__spinner" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path d="M4.5 12.5C4.5 16.9183 8.08172 20.5 12.5 20.5C16.9183 20.5 20.5 16.9183 20.5 12.5C20.5 8.08172 16.9183 4.5 12.5 4.5" stroke="#9CA3AF" stroke-width="1.2"/>
		</svg>
	{:else}
		<button
			type="button"
			class="spd-px-3 spd-py-2 spd-transition-colors spd-space-x-1.5 spd-border spd-border-zinc-900 spd-text-zinc-500 spd-rounded-md hover:spd-text-white hover:spd-bg-zinc-900 spd-text-sm spd-flex spd-items-center spd-self-end"
		>
			{#if resolved}
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 20 20"
					fill="currentColor"
					class="spd-w-5 spd-h-5 spd-text-green-300"
				>
					<path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
				</svg>
			{:else}
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
					class="spd-w-5 spd-h-5"
				>
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
				</svg>

				<span>
					Resolve
				</span>
			{/if}
		</button>
	{/if}
</div>

<div
	class="spd-flex spd-max-w-sm spd-flex-col spd-transition spd-delay-200 spd-duration-300 spd-ease-out spd-absolute spd-top-0 spd-left-0 spd-w-max spd-z-[999999] spd-shadow-lg spd-border spd-border-zinc-800 spd-bg-black spd-px-6 spd-py-3 spd-rounded-md spd-text-white"
	class:spd-opacity-0={!metainfoVisible}
	class:spd-translate-y-2={!metainfoVisible}
	class:spd-opacity-100={metainfoVisible}
	class:spd-translate-y-0={metainfoVisible}
	bind:this={metainfoEl}
	use:clickOutside={hideMetainfo}
	data-clickable
>
	<dl class="spd-flex spd-flex-col spd-space-y-3 spd-text-sm spd-text-white">
		<div class="spd-flex">
			<dt class="spd-whitespace-nowrap spd-min-w-[120px]">Pathname:</dt>
			{" "}
			<dd class="spd-ml-3 spd-font-bold">
				{ pathname }
			</dd>
		</div>

		<div class="spd-flex">
			<dt class="spd-whitespace-nowrap spd-min-w-[120px]">User Agent:</dt>
			{" "}
			<dd class="spd-ml-3 spd-font-bold">
				{ metadata.userAgent }
			</dd>
		</div>

		<div class="spd-flex">
			<dt class="spd-whitespace-nowrap spd-min-w-[120px]">Platform:</dt>
			{" "}
			<dd class="spd-ml-3 spd-font-bold">
				{ metadata.platform }
			</dd>
		</div>

		<div class="spd-flex">
			<dt class="spd-whitespace-nowrap spd-min-w-[120px]">Window size:</dt>
			{" "}
			<dd class="spd-ml-3 spd-font-bold">
				{metadata.screenWidth} x {metadata.screenHeight}
			</dd>
		</div>

		<div class="spd-flex">
			<dt class="spd-whitespace-nowrap spd-min-w-[120px]">Device pixel ratio:</dt>
			{" "}
			<dd class="spd-ml-3 spd-font-bold">
				{metadata.devicePixelRatio}
			</dd>
		</div>

		<div class="spd-flex">
			<dt class="spd-whitespace-nowrap spd-min-w-[120px]">Language:</dt>
			{" "}
			<dd class="spd-ml-3 spd-font-bold">
				{metadata.language}
			</dd>
		</div>
	</dl>
</div>
