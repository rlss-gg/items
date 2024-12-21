export namespace Game {
  export type NonCompetitiveRank = "Unranked"
  export type CompetitiveRank = "Bronze" | "Silver" | "Gold" | "Diamond" | "Champion" | "Grand Champion"
  export type Rank = NonCompetitiveRank | CompetitiveRank

  export type EarlySeason = "Alpha" | "Pre-Season"
  export type ReleaseSeason = number
  export type Season = EarlySeason | ReleaseSeason

  export type RegularMode = "Duel" | "Doubles" | "Mutator Madness"
  export type LtmMode = "Hoops" | "Volleyball" | "Threes" | "Heatseeker" | "Squash"
  export type Mode = RegularMode | LtmMode
}
