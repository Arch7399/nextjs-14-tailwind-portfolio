import Head from "next/head";

interface PagesMetaHeadProps {
    title?: string | "Next.js & TailwindCSS Portfolio Project",
    keywords?: string | "next.js14, tailwindcss, shadcn-ui",
    description?: string | "Simple and multi-page next.js and react application",
}

const PagesMetaHead = ({title, keywords, description}:PagesMetaHeadProps) => {
    return (
        <Head>
            <meta
				name="viewport"
				content="width=device-width, initial-scale=1"
			/>
			<meta name="keywords" content={keywords} />
			<meta name="description" content={description} />
			<meta charSet="utf-8" />
			<link rel="icon" href="/favicon.ico" />
			<title>{title}</title>
        </Head>
    )
}

export default PagesMetaHead;