export function Loading() {
    const mensajes = [
        "Conectando con la API Open-Meteo...",
        "Calculando coordenadas locales...",
        "Obteniendo humedad y viento...",
        "Casi listo..."
    ];

    setTimeout(() => {
        const subtitle = document.querySelector('.loading-subtitle');
        let i = 0;
        if (subtitle) {
            const intervalo = setInterval(() => {
                i++;
                if (i < mensajes.length) {
                    subtitle.textContent = mensajes[i];
                } else {
                    clearInterval(intervalo);
                }
            }, 2000); // Cambia cada 2 segundos
        }
    }, 0);

    return `
    <main>
        <div class="container">
            <div class="loading-container">
                <div class="loading-spinner"></div>
                <p class="loading-title">Cargando datos climáticos...</p>
                <p class="loading-subtitle">${mensajes[0]}</p>
            </div>
        </div>
    </main>`;
}