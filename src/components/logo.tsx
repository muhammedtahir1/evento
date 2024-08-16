import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <div>
      <Link href={"/"}>
        <Image
          src="https://bytegrad.com/course-assets/react-nextjs/evento.png"
          alt="Evento logo"
          width={52}
          height={12}
        />
      </Link>
    </div>
  );
};

export default Logo;
