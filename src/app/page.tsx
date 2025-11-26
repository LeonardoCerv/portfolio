export default function Home() {
  return (
    <div className="font-sans max-w-lg mx-auto py-16 px-4">

      <div className="mb-8">
        <h1 className="text-xl font-light leading-loose mb-2.5">Leonardo Cervantes</h1>
        <p className="text-sm font-light mb-2">
          Computer Science @ <span className="font-medium">Tec de Monterrey</span>
          <br />
          Research Engineer @ <span className="font-medium">Neural Harvest</span>
          <br />
          I love shipping projects, specially when I can&apos;t find what I need.
        </p>
        <a href="/LeonardoCervantes_Resume.pdf" className="text-[#007acc] no-underline text-sm font-light ">Download CV</a>
      </div>      

      <div className="mb-8">
        <h2 className="text-xl font-light mb-2.5">what I&apos;m working on</h2>
        <div className="leading-relaxed text-sm font-light flex flex-col gap-2">
          <p className="">
            <span className="font-medium">novus. </span>
            Contributing and presenting academic papers. Developing gamified experiences to improve learning.
          </p>
          <p>
            <span className="font-medium">ceams. </span> 
            Running a web design agency. Working on a few client projects, crafting sites that look right and work better.
          </p>
          <p>
            <span className="font-medium">cs student board. </span>
            Planning events, coordinating logistics, making it easier for students to connect with opportunities.
          </p>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-xl font-light mb-2.5">currently interested in</h2>
        <div className="leading-relaxed text-sm font-light flex flex-col gap-2">
          <p className="">
            <span className="font-medium">graphic design. </span>
            The systems behind why some interfaces feel right and others don&apos;t.
          </p>
          <p className="">
            <span className="font-medium">growing. </span>
            Trying to post consistently on linkedin, shipping fast but with quality, sharing my projects in communities, etc.
          </p>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-xl font-light mb-2.5">things I&apos;m proud of</h2>
        <div className="leading-relaxed text-sm font-light flex flex-col gap-2">
          <p className="">
            <span className="font-medium"> hackmit 2025. </span>
            Won a crypto challenge. 1 of 5 Mexican students there, and the only one who came back with a prize.
          </p>
          <p className="">
            <span className="font-medium">content growth. </span>
            Recently hit 10k impressions on a single post, looking for that 20k next.
          </p>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-xl font-light mb-2.5">Contact</h2>
        <ul className="list-none flex gap-4">
          <li><a href="https://github.com/leonardocerv" className="text-[#007acc] no-underline text-sm font-light">GitHub</a></li>
          <li><a href="https://linkedin.com/in/leonardocerv" className="text-[#007acc] no-underline text-sm font-light">LinkedIn</a></li>
          <li><a href="mailto:leocerva29@gmail.com" className="text-[#007acc] no-underline text-sm font-light">Email</a></li>
        </ul>
      </div>
    </div>
  )
}