// Google Drive direct URLs for all media files
// Using lh3.googleusercontent.com for reliable direct image serving

const gdriveImg = (id: string) => `https://lh3.googleusercontent.com/d/${id}=s0`;
const gdriveVideo = (id: string) => `https://drive.google.com/uc?export=download&id=${id}`;

export const media = {
  foto1: gdriveImg("1OAs1AOy2aALCfGN4G-tgNWUui1I5tIB7"), 
  foto2: gdriveImg("1fLEs6ET460vUvKY5MDdQPbdlpD_7D65-"),
  foto3: gdriveImg("1VHBTTfBf1k5ZlrVmQGYOb8ohydypGggS"),
  foto4: gdriveImg("1MrVOGP8IKFWE1AJcgDYuYv3paZom5e6c"),
  foto5: gdriveImg("1lDS_-p6ISXMdFUXetB_ZtiBinyanINA4"),
  foto6: gdriveImg("1ukvL991-XYBYBRY_K9Ere_O_d_Cxrc4R"),
  foto7: gdriveImg("1yr-O2exD7eCl5ddqHExXuKvVfms_wHWd"),
  foto8: gdriveImg("1Sju4D1yyKS_4tvaORfeiBHRnpCrjgDMl"),
  foto9: gdriveImg("1KFFRq_IMr-A3rssLJA2Ztif8eeDhhNg3"),
  foto10: gdriveImg("1LX86UW6iL5G8HU7Vp9-3T8yMw2R9SzaS"),
  groom: "/images/groom.jpeg",
  bride: "/images/bridge.jpeg",
  videoUs: "/audio/us.MP4",
  musicBeautifulInWhite: "/audio/beautiful-in-white.mp3",
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
  media.foto1,
  media.foto2,
  media.foto3,
  media.foto4,
  media.foto5,
  media.foto6,
  media.foto7,
  media.foto8,
  media.foto9,
  media.foto10,
];
