import { Game } from "../types/Game"
import { Title } from "./BaseItem"

export const BigBoom = new Title("BIG BOOM", "Sport")
export const Hero = new Title("HERO", "Sport")
export const PrimeCut = new Title("PRIME CUT", "Special")
export const SureStriker = new Title("SURE STRIKER", "Special")
export const Technician = new Title("TECHNICIAN", "Special")
export const Sideswiper = new Title("SIDESWIPER", "Deluxe")
export const ArtfulDodger = new Title("ARTFUL DODGER", "Import")
export const NewBlood = new Title("NEW BLOOD", "Import")
export const Showboat = new Title("SHOWBOAT", "Import")
export const TwentyXX2rbo2sday = new Title("20XX 2URBO 2SDAY", "Exotic")
export const ExtraOrdinary = new Title("EXTRA ORDINARY", "Black Market")
export const PocketLeagueMaster = new Title("POCKET LEAGUE MASTER", "Black Market")
export const InfiniteRocketeer = new Title("INFINITE ROCKETEER", "Black Market")
export const PartyOn = new Title("PARTY ON!", "Luxury")
export const Developer = new Title("DEVELOPER", "Developer")
export const FirstStreamer = new Title("FIRST STREAMER", "Premium")
export const Moderator = new Title("MODERATOR", "Premium")

// S17
export const LongTimeFan = new Title("LONG-TIME FAN", "Luxury")

// S18
export const StreetKid = new Title("STREET KID", "Luxury")
export const CityRat = new Title("CITY RAT", "Luxury")
export const NightOwl = new Title("NIGHT OWL", "Luxury")
export const DarkSider = new Title("DARK SIDER", "Luxury")
export const ThirdSwipeversary = new Title("THIRD SWIPEVERSARY", "Exotic")

// S19
export const BigfootWitness = new Title("BIGFOOT WITNESS", "Special")
export const EggnogSpecialist = new Title("EGGNOG SPECIALIST", "Sport")
export const LittleHelper = new Title("LITTLE HELPER", "Luxury")
export const ColdWishes = new Title("COLD WISHES", "Luxury")
export const GlossySnake = new Title("GLOSSY SNAKE", "Luxury")
export const WinterHazard = new Title("WINTER HAZARD", "Special")

// S20
export const MilkyWayfarer = new Title("MILKY WAYFARER", "Special")
export const ZeroGravity = new Title("ZERO GRAVITY", "Special")
export const LightyearsAhead = new Title("LIGHTYEARS AHEAD", "Deluxe")
export const CarMeMaybe = new Title("CAR ME MAYBE", "Luxury")
export const RightOnTime = new Title("RIGHT ON TIME", "Luxury")
export const ThisIsNotATitle = new Title("THIS IS NOT A TITLE", "Luxury")

// S21
export const EggHunter = new Title("EGG HUNTER", "Luxury")
export const ElMariachi = new Title("EL MARIACHI", "Luxury")
export const MamasPride = new Title("MAMA'S PRIDE", "Luxury")
export const Sorry = new Title("SORRY", "Luxury")

// Season Rewards
export const Season = (rank: Game.CompetitiveRank, season: Game.Season) => (Number(season) === season ? new Title(`S${season} ${rank.toUpperCase()}`, "Luxury") : new Title(`${season} ${rank.toUpperCase()}`, "Special"))
export const SeasonLtm = (rank: Game.CompetitiveRank, season: Game.ReleaseSeason, mode: Game.LtmMode) => new Title(`S${season} ${mode.toUpperCase()} ${rank.toUpperCase()}`, "Luxury")
