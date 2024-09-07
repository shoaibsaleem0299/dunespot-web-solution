import Image from "next/image";

export default function Home() {
  return (
    <div className="h-screen home">
      <Image 
      src="/images/home-bg.jpg"
      layout="fill"
      objectFit="cover"
      alt='home hero background' 
      />
    </div>
  );
}
