import Head from 'next/head'

interface IProps { 
    title?: string
}

export default function ReusableHead({ title = "Authentication" }: IProps) {
    return (
        <Head>
            <title>{title}</title>
            <meta name="description" content="User Authentication System using Next.js" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
    )
}