import { Game } from "../types/Game"
import { Title } from "./BaseItem"

export const BigBoom = new Title("Big Boom", "Uncommon")
export const Hero = new Title("Hero", "Uncommon")
export const PrimeCut = new Title("Prime Cut", "Rare")
export const SureStriker = new Title("Sure Striker", "Rare")
export const Technician = new Title("Technician", "Rare")
export const Sideswiper = new Title("Sideswiper", "Very Rare")
export const ArtfulDodger = new Title("Artful Dodger", "Import")
export const NewBlood = new Title("New Blood", "Import")
export const Showboat = new Title("Showboat", "Import")
export const TwentyXX2rbo2sday = new Title("20XX 2rbo 2sday", "Exotic")
export const ExtraOrdinary = new Title("Extra Ordinary", "Black Market")
export const PocketLeagueMaster = new Title("Pocket League Master", "Black Market")
export const PartyOn = new Title("Party On!", "Limited")
export const Developer = new Title("Developer", "Premium")
export const FirstStreamer = new Title("First Streamer", "Premium")
export const Moderator = new Title("Moderator", "Premium")
export const Season = (rank: Omit<Game.Rank, "Unranked">, season: Game.Season) => (Number(season) === season ? new Title(`S${season} ${rank}`, "Limited") : new Title(`${season} ${rank}`, "Rare"))

/**
 * Seasons were done this way in order to create all season titles from now
 * onwards without needing to add new identical titles each season.
 */
