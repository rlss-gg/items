import { Game } from "../types/Game"
import { Title } from "./BaseItem"

export const BigBoom = new Title("Big Boom", "Sport")
export const Hero = new Title("Hero", "Sport")
export const PrimeCut = new Title("Prime Cut", "Special")
export const SureStriker = new Title("Sure Striker", "Special")
export const Technician = new Title("Technician", "Special")
export const Sideswiper = new Title("Sideswiper", "Deluxe")
export const ArtfulDodger = new Title("Artful Dodger", "Import")
export const NewBlood = new Title("New Blood", "Import")
export const Showboat = new Title("Showboat", "Import")
export const TwentyXX2rbo2sday = new Title("20XX 2rbo 2sday", "Exotic")
export const ExtraOrdinary = new Title("Extra Ordinary", "Black Market")
export const PocketLeagueMaster = new Title("Pocket League Master", "Black Market")
export const InfiniteRocketeer = new Title("Infinite Rocketeer", "Black Market")
export const PartyOn = new Title("Party On!", "Luxury")
export const Developer = new Title("Developer", "Premium")
export const FirstStreamer = new Title("First Streamer", "Premium")
export const Moderator = new Title("Moderator", "Premium")

// S17
export const LongTimeFan = new Title("Long-Time Fan", "Luxury")

// S18
export const StreetKid = new Title("Street Kid", "Luxury")
export const CityRat = new Title("City Rat", "Luxury")
export const NightOwl = new Title("Night Owl", "Luxury")
export const DarkSider = new Title("Dark Sider", "Luxury")
export const ThirdSwipeversary = new Title("Third Swipeversary", "Exotic")

// S19
export const BigfootWitness = new Title("BIGFOOT WITNESS", "Special")
export const EggnogSpecialist = new Title("EGGNOG SPECIALIST", "Sport")
export const LittleHelper = new Title("LITTLE HELPER", "Luxury")
export const ColdWishes = new Title("COLD WISHES", "Luxury")
export const GlossySnake = new Title("GLOSSY SNAKE", "Luxury")

// Season Rewards
export const Season = (rank: Game.CompetitiveRank, season: Game.Season) => (Number(season) === season ? new Title(`S${season} ${rank}`, "Luxury") : new Title(`${season} ${rank}`, "Special"))
export const SeasonLtm = (rank: Game.CompetitiveRank, season: Game.ReleaseSeason, mode: Game.Mode) => new Title(`S${season} ${mode} ${rank}`, "Luxury")
