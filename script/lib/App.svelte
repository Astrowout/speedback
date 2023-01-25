<script lang="ts">
	import { onMount } from "svelte";

	import config from "./config";

	import Comment from "./components/Comment.svelte";
	import Toggle from "./components/Toggle.svelte";
	import Input from "./components/Input.svelte";

	import { comments } from "./store/comments";
	import { commentModeActive } from "./store/ui";

	import "./assets/cursor.png";

	const getComments = async () => {
		const script = document.currentScript;
		const id = script.getAttribute("src").split("?id=")[1];
		
		try {
			const res = await fetch(`${config.BASE_URL}/api/comments?projectId=${id}&pathname=${window.location.pathname}`);
			const data = await res.json();
			console.log(data);
			
			if (res.ok && data) {
				comments.set(data);

				return data;
			}
		} catch (error) {
			console.log(error);
			
			throw new Error("Oops, couldn't fetch comments from database.");
		}
	};

	const onKeyDown = (e) => {
		// Enable comment mode if "c" key is pressed
		if (e.keyCode === 67 && !$commentModeActive) {
			commentModeActive.set(true);
		}

		// Disable comment mode if "esc" key is pressed
		if (e.keyCode === 27 && $commentModeActive) {
			commentModeActive.set(false);
		}
	};

	commentModeActive.subscribe(value => {
		if (value) {
			document.body.classList.add("spd-cursor");
		} else {
			document.body.classList.remove("spd-cursor");
		}
	});

	onMount(() => {
		document.body.style.position = "relative";
	});
</script>

<svelte:window on:keydown|preventDefault={onKeyDown} />

{#await getComments() then comments}
	{#each comments as comment}
		<Comment
			resolved={comment.resolved}
			text={comment.text}
			metadata={comment.metadata}
			position={comment.position}
			pathname={comment.pathname}
			createdAt={comment.createdAt}
		/>
	{/each}
{/await}

{#key $commentModeActive}
	<Input />
{/key}

<Toggle />
