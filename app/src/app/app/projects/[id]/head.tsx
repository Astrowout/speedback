import DefaultTags from '../../../DefaultTags';

export default function Head() {
	return (
		<>
			<DefaultTags />
			<title>{data?.project?.name || "Unknown project"} - speedback</title>
			<meta name="robots" content="noindex, nofollow" />
		</>
	)
}
