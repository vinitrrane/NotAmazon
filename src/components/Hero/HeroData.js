import MenClothingVid from '../../assets/videos/Hero/MenClothing.mp4';
import WomenClothingVid from '../../assets/videos/Hero/WomenClothing.mp4';
import JewellerySaleVid from '../../assets/videos/Hero/JewellerySale.mp4';
import ElectronicsVid from '../../assets/videos/Hero/ElectronicSale.mp4';

export const HeroData = [
  {
    id: 1,
    title: 'Sale Upto 50% Off',
    subtitle: "on Men's Clothing",
    video: MenClothingVid,
    backgroundColor: 'rgb(149, 56, 255)',
  },
  {
    id: 2,
    title: ' New Arrivals!',
    subtitle: "in Women's Clothing",
    video: WomenClothingVid,
    backgroundColor: 'rgb(255, 0, 106)',
  },
  {
    id: 3,
    title: 'New Designs!',
    subtitle: 'in Jewellery',
    video: JewellerySaleVid,
    backgroundColor: 'rgb(255, 191, 0)',
  },
  {
    id: 4,
    title: 'New Devices!',
    subtitle: 'in Electronics',
    video: ElectronicsVid,
    backgroundColor: 'rgb(0, 255, 166)',
  },
];
