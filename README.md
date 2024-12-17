# RL Sideswipe Items Database

Rocket League Sideswipe has a lot of items available to players. We wanted to make the process of creating fan-made systems easier by providing access to an entire database of items through this NPM package. This list has 100% parity with the obtainable items in the game.

Whether it's a Sideswipe economy Discord bot or something completely different, you can use this package for free! If your usage involves high bandwidth usage of our CDN, we do ask that you self-host the assets instead in order to keep our hosting expenses low, but most projects we welcome with no questions asked!

Need to ask a question or get in contact with RLSS.GG? The best way to contact us is by creating a ticket [in our Discord server](https://rlss.gg/discord).

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

const breakout = Items.bodies.Breakout

console.log(breakout)
//  {
//    type: "Body",
//    name: "Breakout",
//    rarity: "Exotic",
//    salvage: {
//      unpainted: 720,
//      painted: 864
//    },
//    thumbnail: "/bodies/Breakout_body_icon.png"
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

| Type           | Path                                 |
| -------------- | ------------------------------------ |
| Avatar         | `/avatars/{thumbnail(.png)}`         |
| Banner         | `/banners/{thumbnail(.png)}`         |
| Body           | `/bodies/{thumbnail(.png)}`          |
| Rocket Boost   | `/boosters/{thumbnail(.png)}`        |
| Decal          | `/decals/{thumbnail(.png)}`          |
| Goal Explosion | `/goal explosions/{thumbnail(.png)}` |
| Sticker        | `/stickers/{thumbnail(.png)}`        |
| Title          | `/titles/{thumbnail(.png)}`          |
| Topper         | `/toppers/{thumbnail(.png)}`         |
| Wheel          | `/wheels/{thumbnail(.png)}`          |

To use our copies of the item thumbnails hosted on a global CDN, append our endpoint to the thumbnail:

```
https://cdn.rlss.gg/assets/items
```

The endpoint is exported by the package. As an example, this is how you get the Breakout thumbnail:

```ts
import * as Items from "@rlss-gg/items"

const thumbnail = Items.endpoint + Item.bodies.Breakout.thumbnail

console.log(thumbnail) // https://cdn.rlss.gg/assets/items/bodies/Breakout_body_icon.png
```

### Creating New Items

With the way the thumbnails are setup, you can use the exported constructors to create your own items with their thumbnails hosted separately. This can be used to create custom items for your creation that you still want to be rooted in the Sideswipe universe.

```ts
import * as Items from "@rlss-gg/items"

const MyCar = new Items.constructors.Body("MyCar", "Black Market", "mycar_thumbnail.png")

// Accessing thumbnail hosted at "https://my.domain.com/items/bodies/mycar_thumbnail.png"
const thumbnail = "https://my.domain.com/items" + MyCar.thumbnail
```

This works in the exact same way the existing items are created, meaning there would be no difference between an existing canon item and your own custom item (aside from the endpoint used for the thumbnail).

## Missing Items

Some items are not currently listed in this package.

### Obscure Items

- Unique Developer Titles e.g. Scamp

### Thumbnails Required

- Birthday Candle (Topper)
- Dev Hat (Topper)
- Diestro Gold (Body)
- Octane Gold (Body)
- Diestro Neon (Body)

### Unreleased

- Beach Party (Goal Explosion)
- Bi Egg (Sticker)
- Cactus Guy (Avatar)
- Cereal (Avatar)
- Deadlicious (Avatar)
- Default Blue (Banner)
- Default Orange (Banner)
- Fierce (Sticker)
- Giggles Egg (Sticker)
- Let's Go Egg (Sticker)
- Mrs Avocado (Topper)
- Rainbow Egg (Sticker)
- Salad (Banner)
- Savage (Sticker)
- Techy (Goal Explosion)
- Trans Egg (Sticker)
- Trans Pride (Rocket Boost)
- Trash (Sticker)
- Blowing Fan (Banner)

## Important Details

- Octane has a `Base` and an `Exotic` version. This package has both with its key determining which is which.
- Centio V17: Mint has a `Base` and a `Special` version. This package has both with its key determining which is which.
- Some items are currently using the incorrect thumbnails in-game, and this has been replicated here. The thumbnails will be replaced with their correct ones when the game itself updates to make these fixes.
- The title `TECHNICIAN` and `SHOWBOAT` were only available during the alpha version of the game and have since not been obtainable. Accounts reset going into pre-season, so nobody currently has these titles.

## Versioning

The versioning of this package is centred around the competitive season the database is up-to-date with. Previously, it followed the app version, but has been changed to account for package bug fixes. In the version number `x.y.z`:

- `x`: Major package changes (should rarely occur)
- `y`: In-game competitive season
- `z`: Patch version as mini-updates or package bug fixes occur

As an example, version `1.18.0` is in the first major package version, competitive season 18, and has had 0 previous patches to increment off.

## Contributing

Found a mistake in the package? Please either create an issue to describe it to us or make a pull request with the fix. The data used by this package was pulled from the game by hand, so it is prone to typos.
