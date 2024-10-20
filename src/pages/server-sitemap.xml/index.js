import { getServerSideSitemap } from 'next-sitemap'
import { projects } from '../projects' // Adjust this import based on where your projects data is stored

export const getServerSideProps = async (ctx) => {
  const fields = projects.map((project) => ({
    loc: `https://example.com/projects/${project.id}`,
    lastmod: new Date().toISOString(),
  }))

  return getServerSideSitemap(ctx, fields)
}

export default function Sitemap() {}
