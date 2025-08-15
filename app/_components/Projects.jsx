export function Projects() {
  return (
    <div
      id="projects"
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <h1>Projects</h1>
      <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'space-between' }}>
        <p>Project 1</p>
        <p>Project 2</p>
        <p>Project 3</p>
      </div>
    </div>
  );
}
