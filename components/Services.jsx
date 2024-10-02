import TextScramble from "../components/TextScramble";

export default function Services() {
  return (
    <div style={{ marginTop: "200px" }}>
     
      <div className="flex bg-black text-white flex-col h-screen justify-center items-center" >
      <h1 className="text-3xl font-[helvetica] font-bold opacity-60 pb-8">Expertise</h1>
      
      <TextScramble >
      3D Web Development

      </TextScramble>
      <TextScramble >
      Animations
      </TextScramble>

      <TextScramble >
      SEO
      </TextScramble>
      <TextScramble >
      
      Web Design
      </TextScramble>
     
      <TextScramble >
      Interactive Experiences
      </TextScramble>
      </div>
    </div>
  );
}