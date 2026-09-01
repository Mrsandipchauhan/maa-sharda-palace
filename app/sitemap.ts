import { MetadataRoute } from 'next'
import { HOTEL_DATA, ROOMS_DATA } from '@/lib/data'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = HOTEL_DATA.websiteUrl

  const routes = [
    '',
    '/rooms',
    '/banquet-halls',
    '/amenities',
    '/gallery',
    '/about',
    '/contact',
    '/faq',
    '/blog',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }))

  const roomRoutes = ROOMS_DATA.map((room) => ({
    url: `${baseUrl}/rooms/${room.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  }))

  return [...routes, ...roomRoutes]
}
