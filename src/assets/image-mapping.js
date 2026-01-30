
// Base URL for images. Change this to your Cloudinary base URL later.
// Example: const BASE_URL = 'https://res.cloudinary.com/your-cloud-name/image/upload/';
const BASE_URL = '';

const getImageUrl = (path) => {
  if (BASE_URL) {
    return `${BASE_URL}${path}`;
  }
  // For local development with Vite
  return new URL(`./${path}`, import.meta.url).href;
};

export const images = {
  logos: {
    cortex: getImageUrl('cortexlogo.png'),
    sgs: getImageUrl('sgslogopng.png'),
  },
  cards: {
    acrylicCutting: getImageUrl('Cards/Acrylic Cutting.jpg'),
    digitalPrinting: getImageUrl('Cards/DIGITALPRINTING.jpg'),
    fabricBanner: getImageUrl('Cards/FABRIC BANNER.jpg'),
    houseNamePlate: getImageUrl('Cards/HOUSENAMEPLATE.webp'),
    ledSignBoard: getImageUrl('Cards/LEDSIGNBOARDS.jpg'),
    mugPrinting: getImageUrl('Cards/MUGPRINTING.jpg'),
    rubberStamp: getImageUrl('Cards/Rubberstamp.jpg'),
    trophyEngraving: getImageUrl('Cards/Trophy Engraving.jpg'),
    vinylStickers: getImageUrl('Cards/Vinyl Stickers.jpg'),
  },
  machines: {
    co2Laser: getImageUrl('Machine/CO2 Acrylic Laser cutting machine .png'),
    ecoSolvent: getImageUrl('Machine/Eco solvent machine 6ft.png'),
    engravingJpg: getImageUrl('Machine/Engraving machine .jpg'),
    engravingPng: getImageUrl('Machine/Engraving machine .png'),
    mugPrinting: getImageUrl('Machine/mug printing machine .png'),
    plotter: getImageUrl('Machine/plotter machine .png'),
  },
  clients: {
    logo1: getImageUrl('Our Clients/LOGO1.jpg'),
    logo2: getImageUrl('Our Clients/LOGO2.jpg'),
    logo3: getImageUrl('Our Clients/LOGO3.png'),
    logo4: getImageUrl('Our Clients/LOGO4.png'),
    logo5: getImageUrl('Our Clients/LOGO5.png'),
    logo6: getImageUrl('Our Clients/LOGO6.png'),
  },
  works: {
    p1: getImageUrl('Works/p1.jpg'),
    p2: getImageUrl('Works/p2.jpg'),
    p3: getImageUrl('Works/p3.jpg'),
    p4: getImageUrl('Works/p4.jpg'),
    p5: getImageUrl('Works/p5.jpg'),
    p6: getImageUrl('Works/p6.jpg'),
    p7: getImageUrl('Works/p7.jpg'),
    p8: getImageUrl('Works/p8.jpg'),
    p9: getImageUrl('Works/p9.jpg'),
    p10: getImageUrl('Works/p10.jpg'),
    img1: getImageUrl('Works/IMG-20251015-WA0016.jpeg'),
    img2: getImageUrl('Works/IMG-20251021-WA0056.jpg'),
    img3: getImageUrl('Works/IMG-20251021-WA0061.jpg'),
    img4: getImageUrl('Works/IMG-20251022-WA0095.jpg'),
    img5: getImageUrl('Works/IMG-20251026-WA0028.jpg'),
    img6: getImageUrl('Works/IMG-20251026-WA0030.jpg'),
    img7: getImageUrl('Works/IMG-20251103-WA0107.jpg'),
    img8: getImageUrl('Works/IMG-20251121-WA0010.jpg'),
    img9: getImageUrl('Works/IMG-20251121-WA0015.jpg'),
    img10: getImageUrl('Works/IMG20251022213635.jpg'),
    img11: getImageUrl('Works/IMG20251102210039.jpg'),
    img12: getImageUrl('Works/IMG20251110215210.jpg'),
    img13: getImageUrl('Works/IMG20251116200631.jpg'),
    img14: getImageUrl('Works/IMG20251124221008.jpg'),
  }
};

export default images;
