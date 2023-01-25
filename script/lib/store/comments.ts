import { derived, writable } from "svelte/store";

export const comments = writable([]);

export const commentCount = derived(comments, $comments => $comments.length);
