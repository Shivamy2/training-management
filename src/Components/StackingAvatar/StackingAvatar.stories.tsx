import StackingAvatar from "./StackingAvatar";
import DisplayImage from "../../Images/displayImage.jpeg";
import CandaFlag from "../../Images/canada.png";
import AuthHeroImage from "../../Images/AuthHero.webp";

const images = {
  "four items": [DisplayImage, CandaFlag, AuthHeroImage, DisplayImage],
  "six items": [
    DisplayImage,
    CandaFlag,
    AuthHeroImage,
    DisplayImage,
    DisplayImage,
    DisplayImage,
  ],
  "ten items": [
    DisplayImage,
    CandaFlag,
    AuthHeroImage,
    DisplayImage,
    DisplayImage,
    DisplayImage,
    DisplayImage,
    DisplayImage,
    DisplayImage,
    DisplayImage,
  ],
  "two items": [DisplayImage, CandaFlag],
};

export default {
  title: "Stacking Avatar",
  component: StackingAvatar,
  argTypes: {
    avatars: {
      options: Object.keys(images),
      mapping: images,
      control: {
        type: "select",
      },
    },
  },
};

export const Main = (args: any) => <StackingAvatar {...args}></StackingAvatar>;
Main.args = {
  className: "",
  avatars: images["six items"],
};
