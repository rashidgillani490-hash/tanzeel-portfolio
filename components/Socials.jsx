import Link from "next/link";
import {
  RiGithubLine,
  RiInstagramLine,
  RiWhatsappLine,
  RiMailLine,
} from "react-icons/ri";

export const socialData = [
  {
    name: "WhatsApp",
    link: "https://wa.me/923257109880",
    Icon: RiWhatsappLine,
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/nexcore.i?igsi=MWE1ejQ5ODM2NzU0Mg==",
    Icon: RiInstagramLine,
  },
  {
    name: "GitHub",
    link: "https://github.com/rashidgillani490-hash",
    Icon: RiGithubLine,
  },
  {
    name: "Email",
    link: "mailto:rashidgillani490@gmail.com",
    Icon: RiMailLine,
  },
];

const Socials = () => {
  return (
    <div className="flex items-center gap-x-5 text-lg">
      {socialData.map((social, i) => (
        <Link
          key={i}
          title={social.name}
          href={social.link}
          target="_blank"
          rel="noreferrer noopener"
          className="hover:text-accent transition-all duration-300"
        >
          <social.Icon aria-hidden />
          <span className="sr-only">{social.name}</span>
        </Link>
      ))}
    </div>
  );
};

export default Socials;
