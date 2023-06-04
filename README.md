# RL Sideswipe Items Database

Rocket League Sideswipe has a lot of items available to players. We wanted to make the process of creating fan-made systems easier by providing access to an entire database of items through this NPM package. This list has 100% parity with the obtainable items in the game.

Whether it's a Sideswipe economy Discord bot or something completely different, you can use this package for free! If your usage involves high bandwidth usage of our CDN, we do ask that you self-host the assets instead in order to keep our hosting expenses low, but most projects we welcome with no questions asked!

Need to ask a question or get in contact with RLSS.GG? The best way to contact us is by creating a ticket [in our Discord server](https://rlss.gg/discord).

The version of this package correlates to the `major.minor` client version of the game, with the `patch` being used to fix problems with the package.

## Usage

If you haven't already, login to NPM using your Github account. This requires [generating a personal access token](https://docs.github.com/en/enterprise-cloud@latest/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens) with the `Read Packages` scope enabled. This is necessary because the package is hosted using the Github Packages Repository (GPR) instead of just on NPM. If you are trying to install the package in a Github Actions pipeline, it can also be done by setting the `NODE_AUTH_TOKEN` to the `GITHUB_TOKEN` secret exposed in Actions.

```
npm login --scope=@rlss-gg --auth-type=legacy --registry=https://npm.pkg.github.com
> Username: ENTER YOUR GITHUB USERNAME
> Password: PASTE YOUR PERSONAL ACCESS TOKEN
```

Install the package:

```
npm i @rlss-gg/items
```

Import the package to access contents:

```ts
import * as Items from "@rlss-gg/items"

const octane = Items.bodies.Octane

console.log(octane)
//  {
//    type: "Body",
//    name: "Octane",
//    rarity: "Exotic",
//    salvage: {
//      unpainted: 720,
//      painted: 864
//    },
//    thumbnail: "/bodies/Octane_body_icon.png"
//  }
```

### Decals

While most items are stored in the same way as the bodies are (demonstrated above), decals are nested by their body. Because of this, they have an additional layer. If the decal is available to all items, it is under the `Universal` category. Some decals like `Stripes` have their own variations on a number of vehicles, but aren't on every single one, so these are essentially duplicated between bodies.

```ts
import * as Items from "@rlss-gg/items"

const sereneSakura = Items.decals.Octane.SereneSakura
const Streakwave = Items.decals.Universal.Streakwave
```

### Using Thumbnails

Item thumbnails are stored as a relative path on the item itself.

| Type           | Path                               |
| -------------- | ---------------------------------- |
| Avatar         | `/avatars/{thumbnail}.png`         |
| Banner         | `/banners/{thumbnail}.png`         |
| Body           | `/bodies/{thumbnail}.png`          |
| Rocket Boost   | `/boosters/{thumbnail}.png`        |
| Decal          | `/decals/{thumbnail}.png`          |
| Goal Explosion | `/goal explosions/{thumbnail}.png` |
| Sticker        | `/stickers/{thumbnail}.png`        |
| Title          | `/titles/{thumbnail}.png`          |
| Topper         | `/toppers/{thumbnail}.png`         |
| Wheel          | `/wheels/{thumbnail}.png`          |

To use our copies of the item thumbnails hosted on a global CDN, append our endpoint to the thumbnail:

```
https://cdn.rlss.gg/assets/items
```

The endpoint is exported by the package. As an example, this is how you get the Octane thumbnail:

```ts
import * as Items from "@rlss-gg/items"

const thumbnail = Items.endpoint + Item.bodies.Octane.thumbnail

console.log(thumbnail) // https://cdn.rlss.gg/assets/items/bodies/Octane_body_icon.png
```

### Creating New Items

With the way the thumbnails are setup, you can use the exported constructors to create your own items with their thumbnails hosted separately. This can be used to create custom items for your creation that you still want to be rooted in the Sideswipe universe.

```ts
import * as Items from "@rlss-gg/items"

const MyCar = new Items.constructors.Body(
  "MyCar",
  "Black Market",
  "mycar_thumbnail.png"
)

// Accessing thumbnail hosted at "https://my.domain.com/items/bodies/mycar_thumbnail.png"
const thumbnail = "https://my.domain.com/items" + MyCar.thumbnail
```

This works in the exact same way the existing items are created, meaning there would be no difference between an existing canon item and your own custom item (aside from the endpoint used for the thumbnail).

## Missing Items

Some items are not currently listed in this package.

### Thumbnails Required

- Octane Gold (Body)
- Birthday Candle (Topper)
- Dev Hat (Topper)

### Unreleased

- Cereal (Avatar)
- Salad (Banner)
- Default Blue (Banner)
- Default Orange (Banner)
- Beach Party (Goal Explosion)
- Techy (Goal Explosion)
- Trans Pride (Rocket Boost)
- Bi Egg (Sticker)
- Rainbow Egg (Sticker)
- Trans Egg (Sticker)
- Savage (Sticker)
- Trash (Sticker)
- Giggles Egg (Sticker)
- Let's Go Egg (Sticker)

### Important Details

- While Octane is included in the dataset, it is listed as an `Exotic` when the default Octane all players start the game with is `Common`.
- Some items are currently using the incorrect thumbnails in-game, and this has been replicated here. The thumbnails will be replaced with their correct ones when the game itself updates to make these fixes.

## Contributing

Found a mistake in the package? Please either create an issue to describe it to us or make a pull request with the fix. The data used by this package was pulled from the game by hand, so it is prone to typos.
