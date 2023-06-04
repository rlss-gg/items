export namespace Item {
  export type Rarity =
    | "Default"
    | "Currency"
    | "Common"
    | "Uncommon"
    | "Rare"
    | "Very Rare"
    | "Import"
    | "Exotic"
    | "Black Market"
    | "Limited"
    | "Premium"

  export type Paint =
    | "Black"
    | "Burnt Sienna"
    | "Cobalt"
    | "Crimson"
    | "Forest Green"
    | "Grey"
    | "Lime"
    | "Orange"
    | "Pink"
    | "Purple"
    | "Saffron"
    | "Sky Blue"
    | "Titanium White"

  export type Type =
    | "Body"
    | "Decal"
    | "Wheels"
    | "Topper"
    | "Rocket Boost"
    | "Goal Explosion"
    | "Avatar"
    | "Banner"
    | "Title"
    | "Sticker"

  export type Price = {
    unpainted: number
    painted: number
  }
}
