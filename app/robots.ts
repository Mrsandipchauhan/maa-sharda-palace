import { MetadataRoute } from 'next'
import { HOTEL_DATA } from '@/lib/data'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: `${HOTEL_DATA.websiteUrl}/sitemap.xml`,
  }
}
