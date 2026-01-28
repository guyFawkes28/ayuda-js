export async function createProject(project) {
  const response = await fetch("http://localhost:4000/proyectos", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(project),
  });
}


/**
 * // services/projectsServices.js

const API_URL = 'http://localhost:4000/proyectos' // ⬅️ Cambiar puerto y nombre

export async function createProject(project) {
    const response = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(project)
    })
    return await response.json()
}

export async function getProjects() {
    const response = await fetch(API_URL)
    return await response.json()
}
 */