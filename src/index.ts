import * as Avatar from "./items/Avatar"
import * as Banner from "./items/Banner"
import * as Body from "./items/Body"
import * as Decal from "./items/Decal"
import * as GoalExplosion from "./items/GoalExplosion"
import * as RocketBoost from "./items/RocketBoost"
import * as Sticker from "./items/Sticker"
import * as Topper from "./items/Topper"
import * as Wheel from "./items/Wheel"
import * as Constructor from "./items/BaseItem"

// Items
export const avatars = Avatar
export const banners = Banner
export const bodies = Body
export const decals = Decal
export const goalExplosions = GoalExplosion
export const rocketBoosts = RocketBoost
export const stickers = Sticker
export const toppers = Topper
export const wheels = Wheel

// Constructors
export const constructors = Constructor

// Endpoints
export const endpoint = "https://cdn.rlss.gg/assets/items"

// Types
export * from "./types/Item"
export * from "./types/Offering"
