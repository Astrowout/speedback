const inputTemplate = `
	<div class="gthr-tooltip">
		<div
			contenteditable
			role="textbox"
			class="gthr-tooltip__input"
			id="gthr-action-input"
		>
			<p class="gthr-tooltip__placeholder">Add a comment</p>
		</div>

		<div class="gthr-tooltip__actions">
			<button type="button" id="gthr-action-cancel" class="gthr-tooltip__action gthr-tooltip__action--secondary">
				Cancel
			</button>

			<button type="button" id="gthr-action-post" class="gthr-tooltip__action gthr-tooltip__action--primary">
				Post
			</button>
		</div>
	</div>
`

export default inputTemplate;
