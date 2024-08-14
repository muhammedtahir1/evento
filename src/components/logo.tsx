import Image from "next/image";

const Logo = () => {
  return (
    <div>
      <Image
        src="https://bytegrad.com/course-assets/react-nextjs/evento.png"
        alt="Evento logo"
        width={52}
        height={12}
      />
    </div>
  );
};

export default Logo;
