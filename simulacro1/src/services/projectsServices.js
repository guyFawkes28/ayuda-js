export async function createProject(project) {
  const response = await fetch("http://localhost:4000/proyectos", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(project),
  });
}
