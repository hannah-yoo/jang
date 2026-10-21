import Link from 'next/link'
import {client} from '@/sanity/client'
import {POSTS_QUERY} from '@/sanity/queries'

export default async function Home() {
  const posts = await client.fetch(POSTS_QUERY, {}, {next: {revalidate: 30}})

  return (
    <main className="mx-auto w-full max-w-5xl px-6 py-16 sm:px-10">
      <header className="border-b border-stone-300 pb-8">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-stone-500">
          Jang · Web Magazine
        </p>
        <h1 className="mt-5 text-5xl font-semibold tracking-tight sm:text-7xl">장, 장, 장</h1>
        <p className="mt-4 max-w-xl text-lg leading-8 text-stone-600">
          금기시된 취미와 주변의 이야기를 기록합니다.
        </p>
      </header>

      <section className="py-12" aria-labelledby="latest-heading">
        <h2 id="latest-heading" className="text-sm font-semibold uppercase tracking-[0.2em]">
          최신 글
        </h2>
        {posts.length === 0 ? (
          <p className="mt-8 border-t border-stone-300 py-8 text-stone-600">
            아직 공개된 글이 없습니다. Sanity Studio에서 첫 글을 작성해 주세요.
          </p>
        ) : (
          <ul className="mt-4 divide-y divide-stone-300 border-y border-stone-300">
            {posts.map((post) => (
              <li key={post._id} className="py-7">
                <Link
                  className="group block focus-visible:outline-2 focus-visible:outline-offset-4"
                  href={`/posts/${post.slug}`}
                >
                  <p className="text-sm text-stone-500">
                    {post.publishedAt
                      ? new Intl.DateTimeFormat('ko-KR', {dateStyle: 'long'}).format(
                          new Date(post.publishedAt),
                        )
                      : '날짜 미정'}
                  </p>
                  <h3 className="mt-2 text-2xl font-medium group-hover:underline sm:text-3xl">
                    {post.title}
                  </h3>
                  {post.excerpt && (
                    <p className="mt-2 max-w-2xl leading-7 text-stone-600">{post.excerpt}</p>
                  )}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </section>
      <footer className="border-t border-stone-300 py-6 text-sm text-stone-500">
        Jang — 이야기를 기록하는 웹매거진
      </footer>
    </main>
  )
}
