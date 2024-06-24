import Image from "next/image";

interface HomeCardProps {
  img: string;
  title: string;
  description: string;
  color: string;
  handleClick: () => void;
}

const HomeCard: React.FC<HomeCardProps> = ({
  img,
  title,
  description,
  color,
  handleClick,
}) => {
  const boxStyle =
    "rounded-[14px] px-4 py-6 flex flex-col justify-between w-full xl:max-w[270px] min-h-[260px] cursor-pointer";

  return (
    <div className={`${color} ${boxStyle}`} onClick={handleClick}>
      <div className="flex-center glassmorphism size-12 rounded-[10px] ">
        <Image src={img} alt="meeting" width={27} height={27} />
      </div>
      <div className="flex flex-col gap-2">
        <h1 className="text-2xl font-bold">{title}</h1>
        <p className="text-lg font-normal">{description}</p>
      </div>
    </div>
  );
};

export default HomeCard;
