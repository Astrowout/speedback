import DefaultTags from '../../DefaultTags';

export default function Head() {
	return (
		<>
			<DefaultTags />
			<title>{{ data.eyebrow }} | speedback</title>
			<meta name="description" content="Bugbash your digital products at hyperspeed with speedback." />
		</>
	)
}
