export const loadingHtml = `

<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Observatorio Urbano y Ambiental</title>
    
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
    
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
<body>

    <nav class="navbar navbar-expand-lg header-custom">
        <div class="container">
            <div class="d-flex align-items-center gap-3">
                <svg class="header-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"></path>
                </svg>
                <div>
                    <div class="header-title">Observatorio Urbano y Ambiental</div>
                    <div class="header-subtitle">Información climática en tiempo real</div>
                </div>
            </div>

        <button class="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-label="Abrir menú de navegación">                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
                <ul class="navbar-nav mt-3 mt-lg-0">
                    <li><a class="nav-link custom-nav-link" href="#">Inicio</a></li>
                    <li><a class="nav-link custom-nav-link" href="#">Proyectos</a></li>
                    <li><a class="nav-link custom-nav-link" href="#">Acerca de</a></li>
                </ul>
            </div>
        </div>
    </nav>

    <main class="container d-flex flex-grow-1 align-items-center justify-content-center py-5">
      
        

        <div class="py-5 text-center">
        <div class="spinner-border text-primary mb-3 custom-spinner" role="status">
            <span class="visually-hidden">Cargando...</span>
        </div>

        <h4 class="text-secondary fw-normal mb-1 loading-title">
            Cargando datos climáticos...
        </h4>

        <p class="text-muted mb-0 loading-subtitle">
            Conectando con la API Open-Meteo
        </p>
        </div>
    </main>

    <footer class="footer-custom">
        <div class="container">
            <div class="row gy-5">
                <div class="col-12 col-md-5">
                    <h3 class="footer-section-title">Observatorio Urbano y Ambiental</h3>
                    <p class="footer-text pe-md-5">
                        Plataforma interactiva para consultar información climática y ambiental en tiempo real. 
                        Apoyando la planeación urbana y la prevención de riesgos.
                    </p>
                </div>
                <div class="col-12 col-md-3">
                    <h3 class="footer-section-title">Enlaces Útiles</h3>
                    <a href="#" class="footer-link-item">Acerca del proyecto</a>
                    <a href="#" class="footer-link-item">Metodología</a>
                    <a href="#" class="footer-link-item">Fuentes de datos</a>
                    <a href="#" class="footer-link-item">Contacto</a>
                </div>
                <div class="col-12 col-md-4">
                    <h3 class="footer-section-title">Fuente de Datos</h3>
                    <p class="footer-text mb-2">Datos proporcionados por Open-Meteo API</p>
                    <a href="https://open-meteo.com/" target="_blank" rel="noopener noreferrer" class="footer-link-external">
                        open-meteo.com →
                    </a>
                </div>
            </div>
            <div class="footer-bottom">
                <p class="mb-0">© 2026 Observatorio Urbano y Ambiental. Proyecto educativo para GovTech.</p>
            </div>
        </div>
    </footer>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>
`;
