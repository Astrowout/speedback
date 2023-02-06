import { Queries } from '../../../helpers';
import client from '../../../helpers/graphql-client';
import DefaultTags from '../../DefaultTags';

export default async function Head() {
	const { data } = await client.query(Queries.getContentPage, {
		id: "ckuef3btsevdf0b07qannyrzw",
	});

	return (
		<>
			<DefaultTags />
			<title>{ data.eyebrow } | speedback</title>
			<meta name="description" content="Bugbash your digital products at hyperspeed with speedback." />
		</>
	)
}
