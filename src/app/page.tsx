export default function Home() {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', maxWidth: '500px', margin: '0 auto', padding: '15px' }}>
      <div style={{ textAlign: 'center', marginBottom: '20px' }}>
        <h1 style={{ fontSize: '1.5em', marginBottom: '3px' }}>Leonardo Cervantes</h1>
        <p style={{ color: '#666', marginBottom: '10px', fontSize: '0.9em' }}>CS Student @ Tec de Monterrey</p>
        <p style={{ lineHeight: '1.4', marginBottom: '10px', fontSize: '0.9em' }}>
          i build to solve my problems.
        </p>
        <a href="/LeonardoCervantes_Resume.pdf" style={{ color: '#007acc', textDecoration: 'none', fontSize: '0.9em' }}>download cv</a>
      </div>

      <div style={{ marginBottom: '20px' }}>
        <a href="https://github.com/leonardocerv" style={{ margin: '0 8px', color: '#007acc', textDecoration: 'none', fontSize: '0.9em' }}>GitHub</a>
        <a href="https://linkedin.com/in/leonardocerv" style={{ margin: '0 8px', color: '#007acc', textDecoration: 'none', fontSize: '0.9em' }}>LinkedIn</a>
        <a href="mailto:leocerva29@gmail.com" style={{ margin: '0 8px', color: '#007acc', textDecoration: 'none', fontSize: '0.9em' }}>Email</a>
      </div>

      <div style={{ marginBottom: '30px' }}>
        <h2 style={{ fontSize: '1.2em', marginBottom: '10px' }}>Things I&apos;m working on</h2>
        <div style={{ lineHeight: '1.4', fontSize: '0.9em' }}>
          <p style={{ marginBottom: '8px' }}>
            MXREP. Internship where I&apos;m working on Cowtec, a VR game for farm learning.
          </p>
          <p>
            EZ Badges. A tool similar to Shields.io but with more icons and support for custom images.
          </p>
        </div>
      </div>

      <div>
        <h2 style={{ fontSize: '1.2em', marginBottom: '10px' }}>Things I&apos;m proud of</h2>
        <div style={{ lineHeight: '1.4', fontSize: '0.9em' }}>
          <p style={{ marginBottom: '8px' }}>
            HackMIT 2025. Won 2nd place in a crypto challenge. I was one of only five students from Mexico there, and the only one who came back with a prize.
          </p>
          <p>
            Being 18 and already in my second year of university.
          </p>
        </div>
      </div>

      <div style={{ marginTop: '30px' }}>
        <h2 style={{ fontSize: '1.2em', marginBottom: '10px' }}>Things I&apos;m interested in</h2>
        <div style={{ lineHeight: '1.4', fontSize: '0.9em' }}>
          <p style={{ marginBottom: '8px' }}>
            Fintech. Exploring how technology reshapes payments, crypto, and financial systems.
          </p>
          <p>
            Graphic design. Digital design and how everything works together.
          </p>
        </div>
      </div>
    </div>
  )
}
