import { FunctionComponent } from 'react';

type RichTextProps = {
	eyebrow: string,
	title: string,
	content: string,
}

const RichText: FunctionComponent<RichTextProps> = ({ eyebrow, title, content }) => {
	return (
		<div className="flex flex-col max-w-prose mx-auto">
			<h1 className="text-indigo-500 font-bold text-sm tracking-wider uppercase">
				{eyebrow}
			</h1>

			<p className="font-brand mt-2 text-gray-900 text-4xl leading-tight md:text-5xl md:leading-tight xl:text-6xl xl:leading-tight">
				{title}
			</p>

			<div
				className="prose mt-8"
				dangerouslySetInnerHTML={{ __html: content }}
			/>
	  	</div>
	)
}

export default RichText;
