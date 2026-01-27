export function Error(){
    return `
    <!-- Main Content -->
    <main>
        <div class="container">
            <div class="error-container">
                <div class="error-card">
                    <svg class="error-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path>
                    </svg>
                    <h2 class="error-title">Error al cargar los datos</h2>
                    <p class="error-message">No se pudo conectar con la API de Open-Meteo. Por favor, verifica tu conexión a internet e intenta nuevamente.</p>
                    <button class="btn-error" onclick="location.reload()">
                        <svg class="retry-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path>
                        </svg>
                        Reintentar
                    </button>
                </div>
            </div>
        </div>
    </main>
    `

}