import { MdxContent } from '../mdx-components'
import { postFilePaths } from '@/utils/mdx-utils'

import type { PropsWithChildren } from 'react'

interface PostPageProps {
  params: {
    slug: string[]
  }
}

export default async function PostPage({ params: { slug } }: PropsWithChildren<PostPageProps>) {
  const paths = postFilePaths.map((path) => path.replace(/\.mdx?$/, ''))
  // .map((slug) => ({ params: { slug } }))

  console.log(paths)

  // const currentPostIndex = paths.findIndex(({ params: { slug: pathSlug } }) => {
  //   return pathSlug.join('/') === slug.join('/')
  // })

  return (
    <div style={{ maxWidth: 600, margin: 'auto' }}>
      {/* <MdxContent source={post.serialized} /> */}
    </div>
  )
}
