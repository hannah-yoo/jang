import type {Metadata} from 'next'
import Link from 'next/link'
import {notFound} from 'next/navigation'
import {PortableText} from 'next-sanity'
import {client} from '@/sanity/client'
import {POST_QUERY, POST_SLUGS_QUERY} from '@/sanity/queries'

type PostPageProps = {
  params: Promise<{slug: string}>
}

const placeholderSlug = 'to-be-indicated'

export const dynamicParams = false

export async function generateStaticParams() {
  const posts = await client.fetch(POST_SLUGS_QUERY)
  return posts.length > 0 ? posts.map(({slug}) => ({slug})) : [{slug: placeholderSlug}]
}

export async function generateMetadata({params}: PostPageProps): Promise<Metadata> {
  const {slug} = await params
  const post = await client.fetch(POST_QUERY, {slug}, {next: {revalidate: 30}})

  if (!post && slug === placeholderSlug) {
    return {title: 'TO BE INDICATED | JANG', description: 'TO BE INDICATED'}
  }

  return {
    title: post ? `${post.title} | 장, 장, 장` : '글을 찾을 수 없습니다 | 장, 장, 장',
    description: post?.excerpt,
  }
}

export default async function PostPage({params}: PostPageProps) {
  const {slug} = await params
  const post = await client.fetch(POST_QUERY, {slug}, {next: {revalidate: 30}})

  if (!post && slug === placeholderSlug) {
    return (
      <main className="mx-auto w-full max-w-3xl px-6 py-12 sm:px-10 sm:py-20">
        <Link className="text-sm underline underline-offset-4" href="/">
          ← JANG
        </Link>
        <h1 className="mt-12 text-5xl font-bold">TO BE INDICATED</h1>
      </main>
    )
  }

  if (!post) notFound()

  return (
    <main className="mx-auto w-full max-w-3xl px-6 py-12 sm:px-10 sm:py-20">
      <Link className="text-sm text-stone-600 underline underline-offset-4" href="/">
        ← 전체 글
      </Link>
      <article className="mt-12">
        <header className="border-b border-stone-300 pb-8">
          {post.publishedAt && (
            <p className="text-sm text-stone-500">
              {new Intl.DateTimeFormat('ko-KR', {dateStyle: 'long'}).format(
                new Date(post.publishedAt),
              )}
            </p>
          )}
          <h1 className="mt-4 text-4xl font-semibold leading-tight tracking-tight sm:text-6xl">
            {post.title}
          </h1>
          {post.excerpt && (
            <p className="mt-5 text-lg leading-8 text-stone-600">{post.excerpt}</p>
          )}
        </header>
        {post.body && (
          <div className="prose-editorial mt-10">
            <PortableText value={post.body} />
          </div>
        )}
      </article>
    </main>
  )
}
