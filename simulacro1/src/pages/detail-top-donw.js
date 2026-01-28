export function detail(){
return`

<body>
    <!-- Detail top -->
    <main>
        <div class="d-flex justify-content-center align-items-center row w-100" style="min-height: 100vh;">
            <div class="col-md-10 ">
                <button type="button" class="btn btn-secondary btn-sm py-2 pe-3 fs-5 text-black bg-white border-dark-subtle rounded">
                    <svg class="back-icon " fill="none" stroke="currentColor" width="30" height="30">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
                    </svg>
                     volver al listado
                    </button>
                <div class="detail-header shadow-sm p-3 mb-5 bg-white rounded mt-3">
                    <div class="d-flex gap-5 pt-5 px-5 align-items-start justify-content-between">
                        <div>
                            <h1 class="fw-bold">
                                Ciudad de México
                            </h1>
                            <p>
                                <small class="text-white">Lat: 19.4326 / Lon: -99.1332</small>
                            </p>
                        </div>
                        <div class="d-flex justify-content-end">
                            <button class="btn btn-primary btn-sm rounded-pill py-2 px-3 fs-5" type="button">Activo</button>
                        </div>
                    </div>
                    <div class="card-body">
                        <figure>
                        <blockquote class="blockquote">
                            <p class="text-white">Monitoreo climático y ambiental en la zona metropolitana para prevención de contingencias ambientales y apoyo en la toma de decisiones para planeación urbana.</p>
                        </blockquote>
                        </figure>
                    </div>
                </div>
                <!-- Contenedor condiciones actuales -->
                <div class="d-flex gap-4 mt-4">
                    <div class="shadow-sm p-3 mb-5 bg-white rounded p-5">
                        <div class="row gap-5">
                                <div class="d-flex flex-column gap-4">
                                    <h4>Condiciones Actuales</h4>
                                    <div class="d-flex align-items-center">
                                        <div>
                                            <h1 style="font-size: 60px;" class="fw-bold">22 °</h1>
                                            <small class="text-body-secondary fs-6">Sensación térmica: 20°C</small>                                            
                                        </div>
                                        <svg class="temp-icon ms-auto" fill="none" stroke="currentColor" viewBox="0 0 25 25" width="100"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path></svg>
                                    </div>
                                </div>
                                <!-- cards metrics -->
                                <div class="container">
                                    <div class="row row-cols-4">
                                        <div class="col">
                                            <div class="metric-blue shadow-sm p-3 mb-5 rounded" style="background-color:  #EFF6FF;">
                                                <div class="card-body row gap-2">
                                                    <svg class="metric-icon blue" style="color: #2563eb;" fill="none" stroke="currentColor" viewBox="" width="25" height="30"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>                                                
                                                    <small class="text-body-secondary">Viento</small>                                            
                                                    <p class="card-text fw-bold fs-6">15 km/h</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col">
                                            <div class=" metric-sky shadow-sm p-3 mb-5 rounded" style="background-color: #F0F9FF;">
                                            <div class="card-body row gap-2">
                                                <svg class="metric-icon sky" style="color: #0ea5e9;" fill="none" stroke="currentColor" viewBox="" width="2" height="30"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"></path></svg>
                                                <small class="text-body-secondary">Precipitación</small>                                            
                                                <p class="card-text fw-bold fs-6">0 mm</p>
                                            </div>
                                            </div>
                                        </div>
                                        <div class="col">
                                            <div class=" metric-teal shadow-sm p-3 mb-5 rounded" style="background-color: #F0FDFA;">
                                            <div class="card-body row gap-2">
                                                <svg class="metric-icon teal" style="color: #14b8a6;" fill="none" stroke="currentColor" viewBox="" width="2" height="30"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>
                                                <small class="text-body-secondary">Humedad</small>                                            
                                                <p class="card-text fw-bold fs-6">0 mm</p>
                                            </div>
                                            </div>
                                        </div>
                                        <div class="col">
                                            <div class=" metric-purple shadow-sm p-3 mb-5 rounded" style="background-color: #FAF5FF;">
                                            <div class="card-body row gap-2">
                                                <svg class="metric-icon purple" style="color: #9333ea;" fill="none" stroke="currentColor" viewBox="" width="2" height="30"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path></svg>
                                                <small class="text-body-secondary">Visibilidad</small>                                            
                                                <p class="card-text fw-bold fs-6">10 km</p>
                                            </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                        </div>
                    </div>
                    <div>
                        <div class="shadow-sm p-4 mb-5 bg-white rounded">
                            <h5 class="fw-bold">Sol</h5>
                            <div class="row row-cols-4 pt-3">
                                <div class="col-1">
                                    <svg class="sun-icon sunrise" style="color: #f97316;" fill="none" stroke="currentColor" height="30"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10"></path></svg>
                                </div>
                                <p class="col-8 fs-6">Amanecer</p>
                                <p class="col fs-6">06:45</p>
                            </div>
                            <div class="row row-cols-4">
                                <div class="col-1">
                                    <svg class="sun-icon sunset" style="color: #fb923c;" fill="none" stroke="currentColor" height="30"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>
                                </div>
                                <p class="col-8 fs-6">Atardecer</p>
                                <p class="col fs-6">19:30</p>
                            </div>
                        </div>
                        <div class="card-actualizar mt-4 shadow-sm p-4 mb-5 rounded" style="background-color: #EFF6FF;">
                            <div class="row">
                                <div class="d-flex align-items-start gap-2">
                                    <svg class="update-icon col-1" style="color: #2563eb;" fill="none" stroke="currentColor" width="50" height="50"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                                    <div class="row gap-2">
                                        <small class="text-body-secondary fs-6">Última actualización</small>
                                        <h6>21 de enero, 2026 - 13:45</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </main>
</body>
<div class="container py-5">
    
    <h2 class="fw-bold mb-4 text-dark">Pronostico por Hora</h2>

    <div class="card card-main shadow-sm p-4 mb-4">
        <h5 class="fw-bold mb-4 text-secondary">Pronóstico por Hora</h5>
        
        <div class="row row-cols-2 row-cols-md-3 row-cols-lg-6 g-3 text-center">
            
            <div class="col">
                <div class="forecast-card p-3 rounded-3 h-100">
                    <p class="fw-bold mb-3 small">14:00</p>
                    <div class="text-orange mb-3">
                        <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
                            <rect x="4" y="14" width="3" height="6" rx="1"/><rect x="10" y="9" width="3" height="11" rx="1"/><rect x="16" y="4" width="3" height="16" rx="1"/>
                        </svg>
                    </div>
                    <h5 class="fw-bold mb-1">23°</h5>
                    <p class="text-muted text-small mb-0">Soleado</p>
                </div>
            </div>

            <div class="col">
                <div class="forecast-card p-3 rounded-3 h-100">
                    <p class="fw-bold mb-3 small">15:00</p>
                    <div class="text-orange mb-3">
                        <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
                            <rect x="4" y="14" width="3" height="6" rx="1"/><rect x="10" y="9" width="3" height="11" rx="1"/><rect x="16" y="4" width="3" height="16" rx="1"/>
                        </svg>
                    </div>
                    <h5 class="fw-bold mb-1">24°</h5>
                    <p class="text-muted text-small mb-0">Soleado</p>
                </div>
            </div>

            <div class="col">
                <div class="forecast-card p-3 rounded-3 h-100">
                    <p class="fw-bold mb-3 small">16:00</p>
                    <div class="text-orange mb-3">
                        <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
                            <rect x="4" y="14" width="3" height="6" rx="1"/><rect x="10" y="9" width="3" height="11" rx="1"/><rect x="16" y="4" width="3" height="16" rx="1"/>
                        </svg>
                    </div>
                    <h5 class="fw-bold mb-1">23°</h5>
                    <p class="text-muted text-small mb-0">Parcialmente nublado</p>
                </div>
            </div>

            <div class="col">
                <div class="forecast-card p-3 rounded-3 h-100">
                    <p class="fw-bold mb-3 small">17:00</p>
                    <div class="text-orange mb-3">
                        <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
                            <rect x="4" y="14" width="3" height="6" rx="1"/><rect x="10" y="9" width="3" height="11" rx="1"/><rect x="16" y="4" width="3" height="16" rx="1"/>
                        </svg>
                    </div>
                    <h5 class="fw-bold mb-1">22°</h5>
                    <p class="text-muted text-small mb-0">Nublado</p>
                </div>
            </div>

            <div class="col">
                <div class="forecast-card p-3 rounded-3 h-100">
                    <p class="fw-bold mb-3 small">18:00</p>
                    <div class="text-orange mb-3">
                        <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
                            <rect x="4" y="14" width="3" height="6" rx="1"/><rect x="10" y="9" width="3" height="11" rx="1"/><rect x="16" y="4" width="3" height="16" rx="1"/>
                        </svg>
                    </div>
                    <h5 class="fw-bold mb-1">20°</h5>
                    <p class="text-muted text-small mb-0">Nublado</p>
                </div>
            </div>

            <div class="col">
                <div class="forecast-card p-3 rounded-3 h-100">
                    <p class="fw-bold mb-3 small">19:00</p>
                    <div class="text-orange mb-3">
                        <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
                            <rect x="4" y="14" width="3" height="6" rx="1"/><rect x="10" y="9" width="3" height="11" rx="1"/><rect x="16" y="4" width="3" height="16" rx="1"/>
                        </svg>
                    </div>
                    <h5 class="fw-bold mb-1">19°</h5>
                    <p class="text-muted text-small mb-0">Parcialmente nublado</p>
                </div>
            </div>

        </div>
    </div>

    <div class="card card-main shadow-sm p-4">
        <h5 class="fw-bold mb-3 text-secondary">Acerca del Proyecto</h5>
        <h6 class="fw-bold mb-4 text-secondary"> este proyecto forma parte de la red nacional de observatorios urbanos y tiene como objetivo principal proporcionar informacion climatica y ambiental en tiemporeal a los ciudadano,tomadores de decisiones y medios de comunicacion </h6>
    </div>

</div>

<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html> 

`}

