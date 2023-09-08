import { promises as fs } from 'fs'

import { serializeMDX } from './serializeMDX'
import type { Frontmatter, Post } from '@/types'

export async function getPost(filepath: string): Promise<Post<Frontmatter>> {
  const raw = await fs.readFile(filepath, 'utf-8')

  const serialized = await serializeMDX<Frontmatter>(raw)

  return {
    serialized,
    frontmatter: serialized.frontmatter,
  }
}
