import { Item } from "../types/Item"
import BaseItem from "./BaseItem"

export default class Title extends BaseItem {
  public constructor(name: string, rarity: Item.Rarity) {
    super("Title", name, rarity, "t_ui_TitleTagIcon.png")
  }
}
