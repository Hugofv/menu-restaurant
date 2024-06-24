export interface Section {
  id: number
  name: string
  description?: string | null
  position: number
  visible?: number
  images: Image[]
  items: Product[]
}

export interface Product {
  id: number
  name: string
  description?: string
  alcoholic: number
  price: number
  position: number
  visible?: number
  availabilityType: string
  sku?: string
  images?: Image[]
  available: boolean
  modifiers?: Modifier[]
}

export interface Modifier {
  id: number
  name: string
  minChoices: number
  maxChoices: number
  items: ModifierOption[]
}

interface ModifierOption {
  id: number
  name: string
  price: number
  maxChoices: number
  position: number
  visible: number
  availabilityType: string
  available: boolean
  qty?: number
}

interface Image {
  id: number
  image: string
}

export interface MenuModel {
  id: number
  name: string
  type: string
  collapse: number
  sections: Section[]
}
