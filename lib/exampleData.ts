import { ButtonProps } from "./types";

  // Tooltip Step content map
  export const tooltipContents = [
    {
      title: "Welcome to the Homepage",
      description:
        "This is where you can see brief information about the environment around you.",
      buttonText: "Next",
    },
    {
      title: "Location Map",
      description:
        "Here you can see your current location. This will help when creating a report.",
      buttonText: "Next",
    },
    {
      title: "Report Cards",
      description:
        "These cards provide you with quick access to the most important information about your environment.",
      buttonText: "Next",
    },
    {
      title: "Report an Issue",
      description:
        "Click the button below to open the camera and take a picture of a problem you see in your environment.",
      buttonText: "Got it",
    },
  ];

  export const faqs = [
  { question: 'How do I check my transaction history?', answer: "You can check your transaction history by navigating to the 'Statistic' tab from the main menu." },
  { question: 'How to update my profile?', answer: "Go to the 'Profile' tab, then tap on 'Settings', and choose 'Edit Profile' to update your information." },
  { question: 'Is my wallet secure?', answer: 'Yes, we use industry-standard encryption to protect your wallet. However, always be careful not to share your private keys.' }
];
export const rewards = [
  {
    id: 1,
    name: 'Crypto Points',
    image: require('@/assets/images/reward/CryptoPoints.png'), // ganti path sesuai file kamu
    cost: 50,
  },
  {
    id: 2,
    name: 'GreenSpace T-Shirt',
    image: require('@/assets/images/reward/Tshirt.png'), // ganti path sesuai file kamu
    cost: 30,
  },
  {
    id: 3,
    name: 'GreenSpace WaterProof Jacket',
    image: require('@/assets/images/reward/WaterProofJacket.png'), // ganti path sesuai file kamu
    cost: 200,
  },
  {
    id: 4,
    name: 'GreenSpace Smart Watch',
    image: require('@/assets/images/reward/SmartWatch.png'), // ganti path sesuai file kamu
    cost: 500,
  },
  {
    id: 5,
    name: 'GreenSpace Polo Shirt',
    image: require('@/assets/images/reward/PoloShirt.png'), // ganti path sesuai file kamu
    cost: 150,
  },
];
