export default function Home() {
  return (
    <div className="font-sans max-w-[500px] mx-auto px-[15px] py-16">

      <div className="mb-8">
        <h1 className="text-xl font-light leading-loose mb-2.5">Leonardo Cervantes</h1>
        <p className="text-sm font-light mb-2">
          I currently live in Mexico and im studying at Tecnologico de Monterrey. 
          <br />
          I like building things that solve my problems.
        </p>
        <a href="/LeonardoCervantes_Resume.pdf" className="text-[#007acc] no-underline text-sm font-light ">Download CV</a>
      </div>

      <div className="mb-8">
        <h2 className="text-xl font-light mb-2.5">currently working on</h2>
        <div className="leading-relaxed text-sm font-light flex flex-col gap-2">
          <p className="">
            <span className="font-medium">mxrep internship. </span> 
             where I&apos;m working on Cowtec, a VR game for farm learning.
          </p>
          <p className="">
            <span className="font-medium">ez badges. </span> 
            A tool similar to Shields.io but with more icons and support for custom images.
          </p>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-xl font-light mb-2.5">what I&apos;m interested in</h2>
        <div className="leading-relaxed text-sm font-light flex flex-col gap-2">
          <p className="">
            <span className="font-medium">fintech. </span>
            Exploring how technology reshapes payments, crypto, and financial systems.
          </p>
          <p className="">
            <span className="font-medium">graphic design. </span>
            Digital design and how everything works together.
          </p>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-xl font-light mb-2.5">things I&apos;m proud of</h2>
        <div className="leading-relaxed text-sm font-light flex flex-col gap-2">
          <p className="">
            <span className="font-medium"> hackmit 2025. </span>
            Won 2nd place in a crypto challenge. I was 1 of 5 students from Mexico there, and the only one who came back with a prize.
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