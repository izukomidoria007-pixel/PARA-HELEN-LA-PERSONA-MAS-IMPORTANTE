document.addEventListener('DOMContentLoaded', () => {
  const btnEntrar = document.getElementById('btn-entrar');
  const pantallaInicio = document.getElementById('pantalla-inicio');
  const pantallaPrincipal = document.getElementById('pantalla-principal');
  const musica = document.getElementById('musica');
  const cartas = document.querySelectorAll('.carta');

  // Transición de inicio a principal y reproducción de audio
  btnEntrar.addEventListener('click', () => {
    pantallaInicio.classList.remove('activa');
    pantallaPrincipal.classList.add('activa');

    // Reproduce la música de fondo al presionar el botón de inicio
    musica.play().catch(error => {
      console.log('Error al reproducir el audio automáticamente:', error);
    });
  });

  // Giro de cartas al hacer clic
  cartas.forEach(carta => {
    carta.addEventListener('click', () => {
      carta.classList.toggle('volteada');
    });
  });
});
