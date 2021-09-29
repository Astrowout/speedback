const commentTemplate = ({ text, email, resolved }) => `
	<div class="gthr-tooltip">
		<div class="gthr-tooltip__content">
			<p
				class="gthr-tooltip__input ${resolved && 'gthr-tooltip__comment--resolved'}"
			>
				${text}
			</p>

			<button type="button" id="gthr-action-resolve">
				${resolved ? `
					<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" viewBox="0 0 20 20" fill="#10B981">
						<path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
					</svg>
				` : `
					<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="#9CA3AF">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
					</svg>
				`}
			</button>
		</div>

		<div class="gthr-tooltip__actions">
			<button type="button" class="gthr-tooltip__user">
				<svg xmlns="http://www.w3.org/2000/svg" class="gthr-tooltip__avatar" viewBox="0 0 20 20" fill="currentColor">
					<path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clip-rule="evenodd" />
				</svg>

				<span>${email}</span>
			</button>
		</div>
	</div>
`

export default commentTemplate;
