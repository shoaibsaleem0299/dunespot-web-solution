import Image from "next/image";

export default function Home() {
  return (
    <div className="h-screen home">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src="/videos/video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      {/* <Image 
      src="/images/home-bg.jpg"
      layout="fill"
      objectFit="cover"
      alt='home hero background' 
      /> */}
    </div>
  );
}
