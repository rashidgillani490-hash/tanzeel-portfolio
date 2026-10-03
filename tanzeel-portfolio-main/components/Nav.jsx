import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  HiHome,
  HiUser,
  HiViewColumns,
  HiRectangleGroup,
  HiEnvelope,
} from "react-icons/hi2";

export const navData = [
  { name: "home", path: "/", Icon: HiHome },
  { name: "about", path: "/about", Icon: HiUser },
  { name: "services", path: "/services", Icon: HiRectangleGroup },
  { name: "work", path: "/work", Icon: HiViewColumns },
  { name: "contact", path: "/contact", Icon: HiEnvelope },
];

const Nav = () => {
  const pathname = usePathname();

  return (
    <nav className="flex flex-col items-center xl:justify-center gap-y-4 fixed h-max bottom-0 mt-auto xl:right-[2%] z-50 top-0 w-full xl:w-16 xl:max-w-md xl:h-screen">
      {/* ✅ Glassy Navigation Container */}
      <div className="flex w-full xl:flex-col items-center justify-between xl:justify-center gap-y-10 px-4 md:px-40 xl:px-0 h-[80px] xl:h-max py-8 glass-card rounded-full xl:rounded-2xl backdrop-blur-xl border border-white/10">
        {navData.map((link, i) => (
          <Link
            className={`${
              link.path === pathname && "text-accent"
            } relative flex items-center group hover:text-accent transition-all duration-300`}
            href={link.path}
            key={i}
          >
            {/* tooltip */}
            <div
              role="tooltip"
              className="absolute pr-14 right-0 hidden xl:group-hover:flex"
            >
              <div className="glass-card rounded-[3px] text-white px-3 py-1.5 text-[12px] font-medium capitalize">
                {link.name}
              </div>
            </div>

            {/* icon */}
            <div className="p-2 rounded-xl hover:bg-accent/10 transition-all duration-300 group-hover:scale-110">
              <link.Icon aria-hidden className="text-xl xl:text-2xl" />
            </div>
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Nav;