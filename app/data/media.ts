// Google Drive direct URLs for all media files
// Using lh3.googleusercontent.com for reliable direct image serving

const gdriveImg = (id: string) => `https://lh3.googleusercontent.com/d/${id}=s0`;
const gdriveVideo = (id: string) => `https://drive.google.com/uc?export=download&id=${id}`;

export const media = {
  foto1: gdriveImg("1OAs1AOy2aALCfGN4G-tgNWUui1I5tIB7"), 
  foto2: gdriveImg("1fLEs6ET460vUvKY5MDdQPbdlpD_7D65-"),
  foto3: gdriveImg("1VHBTTfBf1k5ZlrVmQGYOb8ohydypGggS"),
  foto4: gdriveImg("1n2ME3TuwOA8hmA_4bwtrI3pAy0IkcPIj"),
  foto5: gdriveImg("1nN6n5TolrN6O_am1bx7HvWZJR6Nat6u7"),
  foto6: gdriveImg("1ukvL991-XYBYBRY_K9Ere_O_d_Cxrc4R"),
  foto7: gdriveImg("1yr-O2exD7eCl5ddqHExXuKvVfms_wHWd"),
  foto8: gdriveImg("1Sju4D1yyKS_4tvaORfeiBHRnpCrjgDMl"),
  foto9: gdriveImg("1KFFRq_IMr-A3rssLJA2Ztif8eeDhhNg3"),
  foto10: gdriveImg("1LX86UW6iL5G8HU7Vp9-3T8yMw2R9SzaS"),
  foto11: gdriveImg("1Ix16MOqEmmsl7pOg-ZhUgZSXdSOIiwHn"),
  foto12: gdriveImg("1gy8vPq6PV4CkM5qUSE5Kuuz3nG-CMHr_"),
  foto13: gdriveImg("1_FOoBNSwgp8Q3ePgPhezAH4aFH_9wYzg"),
  foto14: gdriveImg("14GX5UonVNS7rFyukkxvRaUg3zEcEojpt"),
  foto15: gdriveImg("1pB4JbxrIzl6d1Hs3MH7C9TVfyg53cNwm"),
  groom: gdriveImg("10fr8X2Ha4MPxGfvgccb3X-hQwo392yyH"),
  bride: gdriveImg("1e-40wFDgGsoZUj8Izp8_exzjYtLPRxPs"),
  videoUs: "/audio/us.MP4",
  musicBeautifulInWhite: "/audio/thousand-years.mp3",
} as const;

export const SLIDESHOW_IMAGES = [
  media.foto2,
  media.foto3,
  media.foto4,
  media.foto5,
  media.foto6,
  media.foto7,
  media.foto8,
  media.foto9,
];

export const GALLERY_IMAGES = [
  media.foto2,
  media.foto3,
  media.foto4,
  media.foto5,
  media.foto6,
  media.foto7,
  media.foto8,
  media.foto9,
  media.foto10,
  media.foto11,
  media.foto12,
  media.foto13,
  media.foto14,
  media.foto15,
];
