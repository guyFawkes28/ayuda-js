export const formularioHTML = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Formulario</title>
  <link rel="stylesheet" href="../assets/boostrap/bootstrap.min.css">

   <style>
        body {
            display: flex;
            flex-direction: column;
            min-height: 100vh;
            background-color: #f8fafc;
            margin: 0;
            font-family: system-ui, -apple-system, sans-serif;
        }

        /* --- HEADER --- */
        .header-custom {
            background: linear-gradient(to right, #2563eb, #14b8a6) !important;
            padding: 1.25rem 0;
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
        }

        .header-icon {
            width: 32px;
            height: 32px;
            color: white;
        }

        .header-title {
            font-size: 1.5rem;
            font-weight: 700;
            color: white;
            letter-spacing: -0.025em;
        }

        .header-subtitle {
            font-size: 0.875rem;
            color: rgba(255, 255, 255, 0.8);
        }

        .custom-nav-link {
            color: white !important;
            font-weight: 500;
            margin-left: 1.5rem;
            transition: opacity 0.2s;
        }

        .custom-nav-link:hover {
            opacity: 0.8;
        }

        /* --- TARJETA DE ERROR (CENTRAL) --- */
        .error-card {
            max-width: 800px;
            border: 1px solid #fee2e2;
            background-color: white;
            border-radius: 0.75rem;
            padding: 3rem 2rem;
            box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
        }

        .error-icon {
            color: #ef4444;
            width: 48px;
            height: 48px;
            margin-bottom: 1.5rem;
        }

        .btn-retry {
            background-color: #ef4444;
            color: white;
            border: none;
            padding: 0.625rem 1.5rem;
            border-radius: 0.5rem;
            font-weight: 500;
            display: inline-flex;
            align-items: center;
            gap: 0.5rem;
            transition: background-color 0.2s;
        }

        .btn-retry:hover {
            background-color: #dc2626;
            color: white;
        }

        /* --- FOOTER --- */
        .footer-custom {
            background-color: #1f2937;
            color: #9ca3af;
            padding: 4rem 0 2rem 0;
            margin-top: auto;
        }

        .footer-section-title {
            color: white;
            font-size: 1.125rem;
            font-weight: 600;
            margin-bottom: 1.25rem;
        }

        .footer-text {
            font-size: 0.875rem;
            line-height: 1.6;
        }

        .footer-link-item {
            color: #9ca3af;
            text-decoration: none;
            font-size: 0.875rem;
            display: block;
            margin-bottom: 0.75rem;
            transition: color 0.2s;
        }

        .footer-link-item:hover {
            color: white;
        }

        .footer-link-external {
            color: #60a5fa;
            text-decoration: none;
            font-size: 0.875rem;
        }

        .footer-link-external:hover {
            text-decoration: underline;
        }

        .footer-bottom {
            border-top: 1px solid #374151;
            margin-top: 3rem;
            padding-top: 2rem;
            text-align: center;
            font-size: 0.875rem;
        }

        /* Ajuste icono hamburguesa móvil */
        .navbar-toggler-icon {
            filter: invert(1);
        }
    </style>
</head>
<body class="bg-light">

   <nav class="navbar navbar-expand-lg header-custom">
        <div class="container">
            <div class="d-flex align-items-center gap-3">
                <div>
                    <div class="header-title">Observatorio Urbano y Ambiental</div>
                    <div class="header-subtitle">Gestión de proyectos climáticos</div>
                </div>
            </div>

            <button class="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
                <ul class="navbar-nav mt-3 mt-lg-0">
                    <li><a class="nav-link custom-nav-link" href="#">Dashboard</a></li>
                    <li><a class="nav-link custom-nav-link" href="#">Nuevo proyecto</a></li>
                    <li><a class="nav-link custom-nav-link" href="#">Salir</a></li>
                </ul>
            </div>
        </div>
    </nav>

<div class="container py-5">
  <div class="row justify-content-center">
    <div class="col-md-9 col-lg-8">

      <div class="card shadow-sm">
        <div class="card-body p-4">


          <form class="row g-3">
            <h1>Crear nuevo proyecto</h1>
            <p>Registra un proyecto urbano para monitoreo climático</p>

            <div class="col-12">
              <label for="inputCity" class="form-label">Nombre del proyecto</label>
              <input type="text" class="form-control" id="inputCity" placeholder="Monitoreo Ciudad de Bogotá">
            </div>

            <div class="col-12">
              <label for="inputZip" class="form-label">Ciudad</label>
              <input type="text" class="form-control" id="inputZip" placeholder="Bogotá">
            </div>

            <div class="col-md-6">
              <label for="inputLat" class="form-label">Latitud</label>
              <input type="number" step="any" class="form-control" id="inputLat" placeholder="4.7110">
            </div>

            <div class="col-md-6">
              <label for="inputLng" class="form-label">Longitud</label>
              <input type="number" step="any" class="form-control" id="inputLng" placeholder="-74.0721">
            </div>

            <div class="col-12">
              <label for="inputState" class="form-label">Estado de proyecto</label>
              <select id="inputState" class="form-select">
                <option selected>Activo</option>
                <option>Pendiente</option>
                <option>Option</option>
              </select>
            </div>

            <div class="col-12">
              <button type="submit" class="btn btn-primary">Guardar proyecto</button>
              <button type="button" class="btn btn-outline-secondary">Cancelar</button>
            </div>
          </form>
          
        </div>
      </div>
    </div>
  </div>
</div>

</body>
</html>

`;
