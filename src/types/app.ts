import {Article} from './article';

export interface AppContextType {
  selectedCategory: string
  setSelectedCategory: (user: string) => void
  filteredContent: Article[]
}
