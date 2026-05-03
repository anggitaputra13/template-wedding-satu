import { WeddingContent } from "../types";
import { media } from "./media";

export const weddingContent: WeddingContent = {
  groom: {
    name: "Satria",
    fullName: "Ketut Satria Putra",
    photo: media.groom,
    role: "PUTRA KEEMPAT",
    parentLabel: "PUTRA KEEMPAT DARI PASANGAN",
    parents: "Putu Satria Putra dan Nyoman Satria Putri",
    address: "Br. Kangin, Desa Padangsambian, Denpasar Barat, Denpasar",
    instagram: "heppasatria",
  },
  bride: {
    name: "Heppa",
    fullName: "Kadek Dwi Heppayani",
    photo: media.bride,
    role: "PUTRI KEDUA",
    parentLabel: "PUTRI KEDUA DARI PASANGAN",
    parents: "I Nyoman Tastra dan Ni Ketut Tastra",
    address: "Br. Kangin, Desa Padangsambian, Denpasar Barat, Denpasa",
    instagram: "heppasatria",
  },
  event: {
    type: "Resepsi Pernikahan",
    date: "Minggu, 17 Agustus 2026",
    time: "13.00 WITA - Selesai",
    location: "BR. KANGIN, DESA KALIANGET, SERIRIT, BULELENG",
    mapsUrl: "https://maps.app.goo.gl/c7APYJv4iSimrcWw9",
  },
  targetDate: "2026-08-17T13:00:00+08:00",
  quote: {
    sanskrit:
      "Ihaiva stam mā vi yaustam,\nVisvām āyur vyasnutam.\nKrindantau putrair naptrbhih,\nModamānau sve grhe.",
    translation:
      "Kugenggam tanganmu untuk kebahagiaan kita, agar engkau mencapai usia tua bersamaku sebagai suamimu. Para dewa — Bhaga, Aryaman, Savitar, dan Purandhi — memberikanmu kepadaku untuk menjadi ibu rumah tangga.",
    source: "Rgveda : X.85.42",
  },
  gallery: {
    images: [
      "/images/gallery-1.svg",
      "/images/gallery-2.svg",
      "/images/gallery-3.svg",
      "/images/gallery-4.svg",
      "/images/gallery-5.svg",
      "/images/gallery-6.svg",
    ],
    credit: "@satyaphotographybali",
    creditUrl: "https://www.instagram.com/satyaphotographybali/",
  },
  footer: {
    branding: "lihatundanganku.com",
    whatsappUrl: "https://wa.me/message/XNCDQ3MHW6QKA1",
  },
};
