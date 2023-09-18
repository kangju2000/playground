import { type PageProps, graphql } from 'gatsby'

import Card from '@/components/Card'
import Layout from '@/components/Layout'
import type { AllMdx, SiteMetadata } from '@/types'

interface IndexProps {
  site: {
    siteMetadata: SiteMetadata
  }
  allMdx: AllMdx
}

const Index = ({ data, location }: PageProps<IndexProps>) => {
  console.log(data)
  const posts = data.allMdx.nodes

  return (
    <Layout location={location}>
      {posts.map((node) => {
        const title = node.frontmatter.title || node.frontmatter.slug
        return (
          <Card
            key={node.id}
            title={title}
            date={node.frontmatter.createdAt}
            excerpt={node.excerpt}
            slug={'/posts/' + node.frontmatter.slug}
          />
        )
      })}
    </Layout>
  )
}

export default Index

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMdx {
      nodes {
        id
        excerpt(pruneLength: 160)
        frontmatter {
          slug
          title
          createdAt
          categories
        }
      }
    }
  }
`
