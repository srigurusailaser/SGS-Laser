import mongoose from 'mongoose';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import Service from '../models/Service.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config({ path: path.join(__dirname, '../.env') });

const images = {
  cards: {
    acrylicCutting: "https://res.cloudinary.com/djdfmvg6b/image/upload/v1769870788/Acrylic_Cutting_lfyujw.avif",
    digitalPrinting: "https://res.cloudinary.com/djdfmvg6b/image/upload/v1769870787/DIGITALPRINTING_f4wnt4.webp",
    fabricBanner: "https://res.cloudinary.com/djdfmvg6b/image/upload/v1769870788/FABRIC_BANNER_ghlnxu.avif",
    houseNamePlate: "https://res.cloudinary.com/djdfmvg6b/image/upload/v1769870789/HOUSENAMEPLATE_od5yzp.webp",
    ledSignBoard: "https://res.cloudinary.com/djdfmvg6b/image/upload/v1769870787/LEDSIGNBOARDS_dmqhpp.avif",
    mugPrinting: "https://res.cloudinary.com/djdfmvg6b/image/upload/v1769870788/MUGPRINTING_gcucje.avif",
    rubberStamp: "https://res.cloudinary.com/djdfmvg6b/image/upload/v1769870788/Rubberstamp_lrp3rr.webp",
    trophyEngraving: "https://res.cloudinary.com/djdfmvg6b/image/upload/v1769870788/Trophy_Engraving_b0ajod.avif",
    vinylStickers: "https://res.cloudinary.com/djdfmvg6b/image/upload/v1769870789/Vinyl_Stickers_t017fc.avif",
  }
};

const services = [
  {
    title: "Laser Cut House Name Plates",
    description: "Custom name plates made from high-quality acrylic, titanium, or stainless steel for Bengaluru homes and offices.",
    image: images.cards.houseNamePlate,
    category: "Laser",
    public_id: "HOUSENAMEPLATE_od5yzp"
  },
  {
    title: "Industrial Rubber Stamps",
    description: "Personalized rubber stamps designed for clear, long-lasting impressions, perfect for corporate branding.",
    image: images.cards.rubberStamp,
    category: "Branding",
    public_id: "Rubberstamp_lrp3rr"
  },
  {
    title: "Custom Fabric Banners",
    description: "High-quality fabric banners and signage laser cutting that are durable and ideal for promotions in Bengaluru.",
    image: images.cards.fabricBanner,
    category: "Printing",
    public_id: "FABRIC_BANNER_ghlnxu"
  },
  {
    title: "LED Acrylic Sign Boards",
    description: "Bright and durable LED sign boards using precision acrylic laser cutting to showcase your brand effectively.",
    image: images.cards.ledSignBoard,
    category: "Signage",
    public_id: "LEDSIGNBOARDS_dmqhpp"
  },
  {
    title: "High-Res Digital Prints",
    description: "Sharp, vibrant digital prints suited for posters, flyers, and premium industrial printing needs.",
    image: images.cards.digitalPrinting,
    category: "Printing",
    public_id: "DIGITALPRINTING_f4wnt4"
  },
  {
    title: "Custom Mug Printing",
    description: "Precision-printed mugs with your custom laser-inspired design or logo, perfect for corporate gifts.",
    image: images.cards.mugPrinting,
    category: "Gifts",
    public_id: "MUGPRINTING_gcucje"
  },
  {
    title: "Precision Acrylic Cutting",
    description: "Expert acrylic laser cutting Bengaluru for custom shapes, industrial components, and creative designs.",
    image: images.cards.acrylicCutting,
    category: "Industrial",
    public_id: "Acrylic_Cutting_lfyujw"
  },
  {
    title: "Premium Vinyl Stickers",
    description: "High-quality vinyl stickers for industrial branding, vehicle graphics, and Bengaluru-wide promotions.",
    image: images.cards.vinylStickers,
    category: "Branding",
    public_id: "Vinyl_Stickers_t017fc"
  },
  {
    title: "Corporate Trophy Engraving",
    description: "Professional laser engraving Bengaluru for trophies, awards, and personalized corporate recognition.",
    image: images.cards.trophyEngraving,
    category: "Laser",
    public_id: "Trophy_Engraving_b0ajod"
  }
];

const seedDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('MongoDB connected for seeding...');

    // Clear existing services to avoid duplicates
    await Service.deleteMany();
    console.log('Existing services deleted.');

    // Insert new services
    await Service.insertMany(services);
    console.log('9 Services seeded successfully!');

    process.exit(0);
  } catch (err) {
    console.error('Error seeding data:', err);
    process.exit(1);
  }
};

seedDB();
