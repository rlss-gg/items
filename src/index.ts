import * as Avatars from "./items/Avatar"
import * as Banners from "./items/Banner"
import * as Bodys from "./items/Body"
import * as Decals from "./items/Decal"
import * as GoalExplosions from "./items/GoalExplosion"
import * as RocketBoosts from "./items/RocketBoost"
import * as Stickers from "./items/Sticker"
import * as Titles from "./items/Title"
import * as Toppers from "./items/Topper"
import * as Wheels from "./items/Wheel"
import * as Constructors from "./items/BaseItem"

// Items
export const avatars = Avatars
export const banners = Banners
export const bodies = Bodys
export const decals = Decals
export const goalExplosions = GoalExplosions
export const rocketBoosts = RocketBoosts
export const stickers = Stickers
export const titles = Titles
export const toppers = Toppers
export const wheels = Wheels

// Constructors
export const constructors = Constructors

// Endpoints
export const endpoint = "https://cdn.rlss.gg/assets/items"

// Types
export * from "./types/Game"
export * from "./types/Item"

export type Avatar = Constructors.Avatar
export type Banner = Constructors.Banner
export type Body = Constructors.Body
export type Decal = Constructors.Decal
export type GoalExplosion = Constructors.GoalExplosion
export type RocketBoost = Constructors.RocketBoost
export type Sticker = Constructors.Sticker
export type Title = Constructors.Title
export type Topper = Constructors.Topper
export type Wheel = Constructors.Wheel
export type ItemType =
  | Avatar
  | Banner
  | Body
  | Decal
  | GoalExplosion
  | RocketBoost
  | Sticker
  | Title
  | Topper
  | Wheel
