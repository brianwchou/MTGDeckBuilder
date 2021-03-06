import { CardInfo, CardCount } from "./types";

export const dummyCardStart: CardInfo = { 
  artist: "",
  cmc: 2,
  color_identity: ["B"],
  colors: ["B"],
  image_uris: {
    small: "",
    normal: "",
    large: "",
    png: "",
    art_crop: "",
    border_crop: ""
  },
  mana_cost: "{1}{B}",
  name: "Cover of Darkness",
  oracle_text: "",
  power: undefined,
  rarity: "rare",
  reserved: false,
  setName: undefined,
  toughness: undefined,
  typeLine: "Enchantment"
};

export const dummyCardUnchanged: CardInfo = { 
  artist: "",
  cmc: 2,
  color_identity: ["B"],
  colors: ["B"],
  image_uris: {
    small: "",
    normal: "",
    large: "",
    png: "",
    art_crop: "",
    border_crop: ""
  },
  mana_cost: "{1}{B}",
  name: "Cover of Darkness",
  oracle_text: "",
  power: undefined,
  rarity: "rare",
  reserved: false,
  setName: undefined,
  toughness: undefined,
  typeLine: "Enchantment"
};

export const cardInfo: CardInfo = {
  artist: "Carl Critchlow",
  cmc: 11,
  color_identity: Array(0),
  colors: Array(0),
  image_uris: {
      art_crop: "https://img.scryfall.com/cards/art_crop/en/m10/208.jpg?1517813031",
      border_crop: "https://img.scryfall.com/cards/border_crop/en/m10/208.jpg?1517813031",
      large: "https://img.scryfall.com/cards/large/en/m10/208.jpg?1517813031",
      normal: "https://img.scryfall.com/cards/normal/en/m10/208.jpg?1517813031",
      png: "https://img.scryfall.com/cards/png/en/m10/208.png?1517813031",
      small: "https://img.scryfall.com/cards/small/en/m10/208.jpg?1517813031",
  },
  mana_cost: "{11}",
  name: "Darksteel Colossus",
  oracle_text: "Trample, indestructible↵If Darksteel Colossus would be put into a graveyard from anywhere, reveal Darksteel Colossus and shuffle it into its owner's library instead.",
  power: "11",
  rarity: "mythic",
  reserved: false,
  setName: undefined,
  toughness: "11",
  typeLine: "Artifact Creature — Golem",
}

export const dummyCardCount: CardCount = {
  'Cover of Darkness': 1
}