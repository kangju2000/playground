import { getAllPosts } from '@/utils/mdx-utils'

export default async function Home() {
  const posts = await getAllPosts()

  return (
    <>
      <h1>프론트엔드 개발자 강주혁입니다.</h1>
    </>
  )
}
