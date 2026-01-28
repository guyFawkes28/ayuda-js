import { createProject } from "../services/projectsServices.js";

export function CreateProject(){
    return `
    <main class="container">
    <section class="create-project-container">

      <header class="create-header">
        <h2>Crear nuevo proyecto</h2>
        <p>Registra un proyecto urbano para monitoreo climático</p>
      </header>

      <form class="create-form" id="createProjectForm">

        <div class="form-group">
          <label for="name">Nombre del proyecto</label>
          <input type="text" id="name" placeholder="Monitoreo Ciudad de Bogotá" required />
        </div>

        <div class="form-group">
          <label for="city">Ciudad</label>
          <input type="text" id="city" placeholder="Bogotá" required />
        </div>

        <div class="form-row">
          <div class="form-group">
            <label for="lat">Latitud</label>
            <input type="number" id="lat" step="any" placeholder="4.7110" required />
          </div>

          <div class="form-group">
            <label for="lon">Longitud</label>
            <input type="number" id="long" step="any" placeholder="-74.0721" required />
          </div>
        </div>

        <div class="form-group">
          <label for="status">Estado del proyecto</label>
          <select id="status" required>
            <option value="">Selecciona un estado</option>
            <option value="activo">Activo</option>
            <option value="pendiente">Pendiente</option>
            <option value="finalizado">Finalizado</option>
          </select>
        </div>

        <div class="form-actions">
          <button type="submit" id="btn-create-project" class="btn btn-primary">
            Guardar proyecto
          </button>
          <a href="index.html" class="btn btn-outline">
            Cancelar
          </a>
        </div>

        <p class="form-message success hidden">
          ✅ Proyecto creado exitosamente
        </p>

        <p class="form-message error hidden">
          ❌ Error al crear el proyecto
        </p>

      </form>

    </section>
  </main>
    `
}




document.addEventListener('submit', async (e)=>{
    e.preventDefault()
    console.log(e.target);
    const form = e.target
    const city = form.querySelector('#city')
    const name = form.querySelector('#name')
    const lat = form.querySelector('#lat')
    const long = form.querySelector('#long')
    const status = form.querySelector('#status')
    const projecto = 
    {
        nombre: name.value,
      city: city.value,
      lat: lat.value,
      long: long.value,
      status: status.value
    }

  await createProject(projecto)
  location.hash = '#/dashboard'
    
})


