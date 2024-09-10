import Image from "next/image";
import AboutSection from "./components/aboutus";

export default function Home() {
  return (
    <>    <div className="h-screen home">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="w-full h-full object-cover opacity-90"
      >
        <source src="/videos/video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <Image 
      src="/images/hero-text.png"
      width={700}
      height={700}
      alt='home hero background'
      className="absolute top-[15%]" 
      />
    </div>
    <AboutSection />
    <h1>lehoo</h1>
    </>

  );
}
