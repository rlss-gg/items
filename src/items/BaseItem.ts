import { Item } from "../types/Item"

export default abstract class BaseItem {
  public readonly thumbnail: string

  public constructor(public readonly type: Item.Type, public readonly name: string, public readonly rarity: Item.Rarity, thumbnail: string) {
    this.thumbnail = BaseItem.getIconPath(type) + thumbnail
  }

  public get salvage(): Item.Price | null {
    const price = (unpainted: number, painted: number): Item.Price => ({
      unpainted,
      painted
    })

    switch (this.rarity) {
      case "Base":
        return price(60, 72)
      case "Sport":
        return price(120, 144)
      case "Special":
        return price(240, 288)
      case "Deluxe":
        return price(360, 432)
      case "Import":
        return price(540, 648)
      case "Exotic":
        return price(720, 864)
      case "Black Market":
        return price(960, 1152)
      default:
        return null
    }
  }

  public static getIconPath(type: Item.Type): string {
    switch (type) {
      case "Avatar":
        return "/avatars/"
      case "Banner":
        return "/banners/"
      case "Body":
        return "/bodies/"
      case "Rocket Boost":
        return "/boosters/"
      case "Decal":
        return "/decals/"
      case "Goal Explosion":
        return "/goal explosions/"
      case "Sticker":
        return "/stickers/"
      case "Title":
        return "/titles/"
      case "Topper":
        return "/toppers/"
      case "Wheels":
        return "/wheels/"
      default:
        return "/"
    }
  }
}

export class Avatar extends BaseItem {
  public constructor(name: string, rarity: Item.Rarity, thumbnail: string) {
    super("Avatar", name, rarity, thumbnail)
  }
}

export class Banner extends BaseItem {
  public readonly full: string

  public constructor(name: string, rarity: Item.Rarity, thumbnail: string, full: string) {
    super("Banner", name, rarity, thumbnail)

    this.full = BaseItem.getIconPath("Banner") + full
  }
}

export class Body extends BaseItem {
  public constructor(name: string, rarity: Item.Rarity, thumbnail: string) {
    super("Body", name, rarity, thumbnail)
  }
}

export class Decal extends BaseItem {
  public constructor(name: string, public readonly body: string, rarity: Item.Rarity, thumbnail: string) {
    super("Decal", name, rarity, thumbnail)
  }
}

export class GoalExplosion extends BaseItem {
  public constructor(name: string, rarity: Item.Rarity, thumbnail: string) {
    super("Goal Explosion", name, rarity, thumbnail)
  }
}

export class RocketBoost extends BaseItem {
  public constructor(name: string, rarity: Item.Rarity, thumbnail: string) {
    super("Rocket Boost", name, rarity, thumbnail)
  }
}

export class Sticker extends BaseItem {
  public constructor(name: string, rarity: Item.Rarity, thumbnail: string) {
    super("Sticker", name, rarity, thumbnail)
  }
}

export class Title extends BaseItem {
  public constructor(name: string, rarity: Item.Rarity) {
    super("Title", name, rarity, "t_ui_TitleTagIcon.png")
  }
}

export class Topper extends BaseItem {
  public constructor(name: string, rarity: Item.Rarity, thumbnail: string) {
    super("Topper", name, rarity, thumbnail)
  }
}

export class Wheel extends BaseItem {
  public constructor(name: string, rarity: Item.Rarity, thumbnail: string) {
    super("Wheels", name, rarity, thumbnail)
  }
}
