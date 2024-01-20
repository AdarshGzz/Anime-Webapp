import Image from "next/image";
import { Github, Instagram, Linkedin } from 'lucide-react';
import Link from "next/link";

function Footer() {

  const date = new Date();
  const year = date.getFullYear();

  return (
    <footer className="sm:px-16 py-4 px-8 flex justify-between items-center gap-2 flex-wrap bg-[#161921]">
      <p className="text-base font-bold text-white">@{year} All rights reserved</p>
      <Image
        src="./logo.svg"
        alt="logo"
        width={47}
        height={44}
        className="object-contain"
      />
      <div className="flex items-center gap-6">
        <Link href={'https://github.com/AdarshGzz'} className="object-contain">
          <Github
            width={19}
            height={19}
          />
        </Link>
        <Link href={'https://www.instagram.com/adarshgzz/'} className="object-contain">
          <Instagram
            width={19}
            height={19}
          />
        </Link>
        <Link href={'https://www.linkedin.com/in/adarsh-kumar-gupta-a96b54228/'} className="object-contain">
          <Linkedin
            width={19}
            height={19}
          />
        </Link>
      </div>
    </footer>
  );
}

export default Footer;
