export interface Article {
  title: string
  link: string
  source: string
  highlight?: string
  preview?: string
  publicationDate?: string
  publicationLogo?: string|null
  categories: string[]
  videoId?: string
  videoPath?: string
}
