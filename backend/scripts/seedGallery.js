import mongoose from 'mongoose';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import GalleryImage from '../models/GalleryImage.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config({ path: path.join(__dirname, '../.env') });

const images = {
  machines: {
    co2Laser: "https://res.cloudinary.com/djdfmvg6b/image/upload/v1769870803/CO2_Acrylic_Laser_cutting_machine_xzslfn.png",
    ecoSolvent: "https://res.cloudinary.com/djdfmvg6b/image/upload/v1769870800/Eco_solvent_machine_6ft_oy10dr.png",
    engravingJpg: "https://res.cloudinary.com/djdfmvg6b/image/upload/v1769870794/Engraving_machine_pyb4jn.jpg",
    engravingPng: "https://res.cloudinary.com/djdfmvg6b/image/upload/v1769870798/Engraving_machine_ivl8ys.png",
    mugPrinting: "https://res.cloudinary.com/djdfmvg6b/image/upload/v1769870800/mug_printing_machine_eo6989.png",
    plotter: "https://res.cloudinary.com/djdfmvg6b/image/upload/v1769870801/plotter_machine_wcyecc.png",
  },
  works: {
    p1: "https://res.cloudinary.com/djdfmvg6b/image/upload/v1769871656/IMG20251124221008_mkal2m.jpg",
    p2: "https://res.cloudinary.com/djdfmvg6b/image/upload/v1769871651/IMG20251102210039_lppsj5.jpg",
    p3: "https://res.cloudinary.com/djdfmvg6b/image/upload/v1769871646/IMG20251110215210_aa149b.jpg",
    p4: "https://res.cloudinary.com/djdfmvg6b/image/upload/v1769871645/p9_h7ggbz.jpg",
    p5: "https://res.cloudinary.com/djdfmvg6b/image/upload/v1769871645/p8_cosnbu.jpg",
    p6: "https://res.cloudinary.com/djdfmvg6b/image/upload/v1769871644/p5_huod3z.jpg",
    p7: "https://res.cloudinary.com/djdfmvg6b/image/upload/v1769871644/p7_ospuvi.jpg",
    p8: "https://res.cloudinary.com/djdfmvg6b/image/upload/v1769871644/p6_wvdt6l.jpg",
    p9: "https://res.cloudinary.com/djdfmvg6b/image/upload/v1769871643/p4_mpclnk.jpg",
    p10: "https://res.cloudinary.com/djdfmvg6b/image/upload/v1769871643/p3_ttrxu1.jpg",
    img1: "https://res.cloudinary.com/djdfmvg6b/image/upload/v1769871642/IMG20251116200631_icc3kr.jpg",
    img2: "https://res.cloudinary.com/djdfmvg6b/image/upload/v1769871642/p2_yr0sdt.jpg",
    img3: "https://res.cloudinary.com/djdfmvg6b/image/upload/v1769871641/p10_sxj0sk.jpg",
    img4: "https://res.cloudinary.com/djdfmvg6b/image/upload/v1769871639/p1_v8vyv2.jpg",
    img5: "https://res.cloudinary.com/djdfmvg6b/image/upload/v1769871639/IMG20251022213635_dv81ft.jpg",
    img6: "https://res.cloudinary.com/djdfmvg6b/image/upload/v1769871632/IMG-20251026-WA0028_hxqvfb.jpg",
    img7: "https://res.cloudinary.com/djdfmvg6b/image/upload/v1769871632/IMG-20251103-WA0107_y1bv3n.jpg",
    img8: "https://res.cloudinary.com/djdfmvg6b/image/upload/v1769871632/IMG-20251121-WA0015_uyi6kx.jpg",
    img9: "https://res.cloudinary.com/djdfmvg6b/image/upload/v1769871631/IMG-20251121-WA0010_wjv3gm.jpg",
    img10: "https://res.cloudinary.com/djdfmvg6b/image/upload/v1769871631/IMG-20251026-WA0030_dye5id.jpg",
    img11: "https://res.cloudinary.com/djdfmvg6b/image/upload/v1769871631/IMG-20251015-WA0016_rvmxhr.jpg",
    img12: "https://res.cloudinary.com/djdfmvg6b/image/upload/v1769871630/IMG-20251021-WA0056_fgvb6c.jpg",
    img13: "https://res.cloudinary.com/djdfmvg6b/image/upload/v1769871630/IMG-20251021-WA0061_mcipj6.jpg",
    img14: "https://res.cloudinary.com/djdfmvg6b/image/upload/v1769871630/IMG-20251022-WA0095_ply6tt.jpg",
  },
};

// Helper to extract public ID from cloudinary URL
// Example: https://res.cloudinary.com/djdfmvg6b/image/upload/v1769871644/p7_ospuvi.jpg
// We want: p7_ospuvi
const getPublicId = (url) => {
  const parts = url.split('/');
  const fileWithExtension = parts[parts.length - 1];
  return fileWithExtension.split('.')[0];
};

const seedDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('MongoDB connected for Gallery seeding...');

    // Clear existing gallery to avoid duplicates
    await GalleryImage.deleteMany();
    console.log('Existing gallery images deleted.');

    const seedData = [];

    // Add Machinery
    Object.values(images.machines).forEach((url) => {
      seedData.push({
        url,
        public_id: getPublicId(url),
        category: 'machinery'
      });
    });

    // Add Works / Products
    Object.values(images.works).forEach((url) => {
      seedData.push({
        url,
        public_id: getPublicId(url),
        category: 'products'
      });
    });

    // Insert new images
    await GalleryImage.insertMany(seedData);
    console.log(`${seedData.length} Gallery Images seeded successfully!`);

    process.exit(0);
  } catch (err) {
    console.error('Error seeding gallery data:', err);
    process.exit(1);
  }
};

seedDB();
