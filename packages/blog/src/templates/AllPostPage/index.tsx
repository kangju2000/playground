import React from 'react';

import Card from '@/components/Card';
import { AllMdx } from '@/types';

interface AllPostPageProps {
  location: Location;
  pageContext: {
    currentCategory: string;
    categories: string[];
    nodes: AllMdx['nodes'];
  };
}

const AllPostPage: React.FC<AllPostPageProps> = ({ pageContext }) => {
  const { nodes, currentCategory } = pageContext;
  const { categories } = pageContext;

  return (
    <div>
      <h1>Categories</h1>
      <ul>
        {categories.map((category, index) => (
          <li key={category}>
            <a href={`/posts/${index ? category : ''}`}>{category}</a>
          </li>
        ))}
      </ul>
      <h1>{currentCategory}</h1>
      <ul>
        {nodes.map(({ mdxContent }) => (
          <Card
            key={mdxContent.frontmatter.slug}
            slug={mdxContent.frontmatter.slug}
            excerpt={mdxContent.excerpt}
            date={mdxContent.frontmatter.createdAt}
            title={mdxContent.frontmatter.title}
          />
        ))}
      </ul>
    </div>
  );
};

export default AllPostPage;
