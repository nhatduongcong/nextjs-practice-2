import { ARTICLES_ENDPOINT, BASE_URL } from '@constants/endPoints'
import { PAGE_URL } from '@constants/routes'
import type { TArticles } from '@matched-types/articles'
import { fetcherInstance } from '@services/requests'
import type { Metadata } from 'next'
import dynamic from 'next/dynamic'
import { notFound } from 'next/navigation'

const GalleryPage = dynamic(() => import('./GalleryPage'))

export const metadata: Metadata = {
  title: 'Shop Bag | Gallery',
  description: 'You can find furniture design articles here',
  keywords: ['gallery', 'shop bag', 'nextjs', 'furniture marketplace'],
  viewport: 'width=device-width, initial-scale=1',
  icons: { icon: '/favicon.ico' },
  manifest: '/site.webmanifest',
  openGraph: {
    type: 'website',
    url: `${BASE_URL}${PAGE_URL.GALLERY.URL}`,
    title: 'Shop Bag | Gallery',
    description: 'You can find furniture design articles here',
    siteName: 'Gallery',
  },
  twitter: {
    title: 'Shop Bag | Gallery',
    description: 'You can find furniture design articles here',
    card: 'summary',
  },
}

async function getArticles() {
  const articles: TArticles = await fetcherInstance({
    endpoint: ARTICLES_ENDPOINT,
    fetchingMethod: 'SSR',
  })

  return {
    props: {
      articles,
    },
  }
}

const Gallery = async () => {
  const response = await getArticles()

  const { articles } = response.props

  if (!articles || Object.keys(articles).length === 0) {
    notFound()
  }

  return <GalleryPage articles={articles} />
}

export default Gallery