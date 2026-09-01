import Image from "next/image";

const Avatar = () => {
  return (
    <div className="hidden xl:flex xl:max-w-none pointer-events-none select-none">
      <div className="relative w-[737px] h-[678px]">
        <Image
          src="/avatar.jpg"
          alt="Portrait of Tanzeel ur Rehman, Co-founder of NexCore"
          fill
          sizes="737px"
          className="object-contain mix-blend-lighten opacity-90"
          priority
        />
      </div>
    </div>
  );
};

export default Avatar;