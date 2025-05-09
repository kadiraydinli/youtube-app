import { ReactElement } from "react";
import icons from "../icons";

type DataSideType = {
  icon: ReactElement;
  name: string;
};

const dataSide: DataSideType[] = [
  {
    icon: <icons.home className="icon-style" />,
    name: "Ana Sayfa",
  },
  {
    icon: <icons.compass className="icon-style" />,
    name: "Keşfet",
  },
  {
    icon: <icons.compass className="icon-style" />,
    name: "Shorts",
  },
  {
    icon: <icons.subscription className="icon-style" />,
    name: "Abonelikler",
  },
  {
    icon: <icons.play className="icon-style" />,
    name: "Kitaplık",
  },
  {
    icon: <icons.clock className="icon-style" />,
    name: "Geçmiş",
  },
  {
    icon: <icons.play className="icon-style" />,
    name: "Videolarınız",
  },
  {
    icon: <icons.like className="icon-style" />,
    name: "Beğendiğim Videolar",
  },
  {
    icon: <icons.down className="icon-style" />,
    name: "Daha Fazla Göster",
  },
  {
    icon: <icons.game className="icon-style" />,
    name: "Oyun",
  },
];

export default dataSide;
