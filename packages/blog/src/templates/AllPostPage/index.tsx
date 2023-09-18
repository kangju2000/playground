import React from 'react'

import Card from '@/components/Card'
import { AllMdx } from '@/types'

interface AllPostPageProps {
  location: Location
  pageContext: {
    currentCategory: string
    categories: string[]
    nodes: AllMdx['nodes']
  }
}

const AllPostPage: React.FC<AllPostPageProps> = ({ pageContext }) => {
  const { nodes, currentCategory } = pageContext
  const { categories } = pageContext
  console.log(pageContext)

  return (
    <div>
      <h1>Categories</h1>
      <ul>
        {categories.map((category, index) => (
          <li key={category}>
            <a href={`/categories/${index ? category : ''}`}>{category}</a>
          </li>
        ))}
      </ul>
      <h1>{currentCategory}</h1>
      <ul>
        {nodes.map((node) => (
          <Card
            key={node.frontmatter.slug}
            slug={node.frontmatter.slug}
            excerpt={node.excerpt}
            date={node.frontmatter.createdAt}
            title={node.frontmatter.title}
          />
        ))}
      </ul>
    </div>
  )
}

export default AllPostPage
