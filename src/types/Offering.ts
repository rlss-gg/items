import { Item } from "./Item"

export type Offering = {
  name: string
  decalFor?: string
  thumbnail: string
  type: Item.Type
  rarity: Item.Rarity
  paint?: Item.Paint
  price: number
  duration: number
  featured?: boolean
}
