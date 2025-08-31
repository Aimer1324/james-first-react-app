export function Projects() {
  return (
    <div
      id="projects"
      style={{
        border: 'solid black 5px',
        padding: '3rem 0rem',
        margin: '5rem 0rem',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <h2>Projects</h2>
      <div style={{ display: 'flex', flexDirection: 'row', alignContent: 'space-between' }}>
        <p>Project 1</p>
        <p>Project 2</p>
        <p>Project 3</p>
      </div>
    </div>
  );
}
