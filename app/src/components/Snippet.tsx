"use client";

import { FunctionComponent, useEffect } from 'react';
import cn from "classnames";
import ClipboardJS from "clipboard";
import { ClipboardCopyIcon } from '@heroicons/react/outline';

type SnippetProps = {
	id: string,
	className?: string,
}

const Snippet: FunctionComponent<SnippetProps> = ({ children, className, id }) => {

	useEffect(() => {
		const clipboard = new ClipboardJS("#copyScriptTrigger");

		return () => {
			clipboard.destroy();
		}
	}, []);

	return typeof window !== "undefined" ? (
		<div className={cn(className, "border-t py-8")}>
			<p className="font-bold">
				Add this script right before the closing <code className="bg-indigo-100 rounded px-1 py-0.5 text-indigo-600">&lt;/body&gt;</code> tag in your website.
			</p>

			<div className="relative mt-4 max-w-full">
				<pre className="p-6 pr-32 overflow-auto max-w-full bg-gray-900 rounded text-gray-100">
					<code id="copyScript" className="text-sm">
						{`<script src="${window.location.origin}/script/index.js?id=${id}" crossorigin charset="utf-8"></script>`}
					</code>
				</pre>

				<button data-clipboard-target="#copyScript" id="copyScriptTrigger" className="flex bg-white text-gray-600 items-center absolute right-3 top-3 rounded px-3 py-2">
					<ClipboardCopyIcon className="mr-1.5 h-5 w-5" aria-hidden="true" />
					Copy
				</button>
			</div>

			{children}
		</div>
	) : null
}

export default Snippet;
