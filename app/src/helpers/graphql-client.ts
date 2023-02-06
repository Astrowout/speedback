interface IOptions {
	read: boolean;
}

const request: any = async (query: any, variables: any, options: IOptions = { read: false }) => {
	const url: string = options.read ? process.env.NEXT_PUBLIC_GRAPHCMS_API_READ_ENDPOINT! : process.env.NEXT_PUBLIC_GRAPHCMS_API_ENDPOINT!;
	console.log(process.env.NEXT_PUBLIC_GRAPHCMS_API_TOKEN);

	const fetchOptions: any = {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
			"Authorization": `Bearer ${process.env.NEXT_PUBLIC_GRAPHCMS_API_TOKEN}`,
		},
		body: JSON.stringify({
			query: query.loc.source.body,
			...variables && { variables },
		}),
	};

	const res = await fetch(url, fetchOptions);
	const data = await res.json();

	return data;
};

const client = {
	query: request,
	mutate: request,
};


export default client;
