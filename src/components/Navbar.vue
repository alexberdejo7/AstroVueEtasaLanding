<script>
import '@fortawesome/fontawesome-free/css/all.css';
</script>


<template>
  <header class="bg-white rounded-sm py-1 mx-auto px-10 md:flex md:items-center md:justify-between sticky top-0 w-full z-50">
    
    <!-- Logo -->
    <div class="md:w-1/3 xs:w-1/4 md:sticky md:top-0 flex items-center justify-start md:justify-between left-0 right-0">
      <img class="ml-3 w-14 animate-rotate-y animate-once" src="../../ImagenesEtasa/Logo-Etasa-1.png" alt="Etasa Logo" />
      <!-- Botón para dispositivos móviles -->
      <div class=" md:hidden cursor-pointer flex items-center justify-end w-full">
        <button class="text-gray-900 cursor-pointer hover:text-amber-600" @click="toggleMobileMenu">
          <i class="animate-bounce fas fa-bars"></i> <!-- Icono del menú -->
        </button>
      </div>
    </div>

    <!-- Navegación -->
    <nav class="mr-5 hidden md:flex md:w-2/3 md:justify-end">
  <ul class="md:flex md:space-x-9 xl:mr-7">
    <li>
      <a href="/" class="text-gray-900 font-black text-md hover:text-amber-600">Inicio</a>
    </li>
    <li>
      <a href="/#Nuestros-Trabajos" class="text-gray-900 font-black text-md hover:text-amber-600 ">Servicios</a>
    </li>
    <li>
      <a href="/#Proyectos" class="block text-gray-900 font-black text-md hover:text-amber-600">Proyectos</a>
    </li>
    <li>
      <a href="/#Footer" class="block text-gray-900 font-black text-md hover:text-amber-600">Contacto</a>
    </li>
  </ul>
</nav>

    <!-- Menú desplegable para dispositivos móviles -->
    <div
      class="md:hidden fixed top-0 left-0 w-full h-full bg-gray-950 bg-opacity-75"
      :class="{ 'hidden': !showMobileMenu }"
      ref="mobileMenu"
    >
      <ul class="h-full bg-gray-950 gap-3 font-bold opacity-70 flex flex-col justify-center items-center">
        <li>
          <a href="#" class="block text-white hover:text-amber-500" @click.stop="toggleMobileMenu">Inicio</a>
        </li>
        <li>
          <a href="#Servicios" class="text-white hover:text-amber-500" @click.stop="toggleMobileMenu">Servicios</a>
        </li>
        <li>
          <a href="#Swiper" class="block text-white hover:text-amber-500" @click.stop="toggleMobileMenu">Proyectos</a>
        </li>
        <li>
          <a href="#footer" class="block text-white hover:text-amber-500" @click.stop="toggleMobileMenu">Contacto</a>
        </li>
        <!-- Botón para cerrar el menú desplegable -->
        <li class="mt-4">
          <button class="text-white text-3xl hover:text-red-500" @click="toggleMobileMenu">
            <i class="fas fa-times"></i> <!-- Icono de cerrar -->
          </button>
        </li>
      </ul>
    </div>
  </header>
</template>


<script setup>


import { ref, onBeforeUnmount } from 'vue';

// Utilizamos 'let' en lugar de 'const' para permitir reasignación de la referencia en la función toggleMobileMenu
let showMobileMenu = ref(false);
const mobileMenuRef = ref(null);
const menuToggleButtonRef = ref(null);

// Función para alternar la visibilidad del menú desplegable
const toggleMobileMenu = () => {
  // Cambiamos el valor de 'showMobileMenu' al valor opuesto cada vez que se llama la función
  showMobileMenu.value = !showMobileMenu.value;
  // Llamamos a las funciones 'disableScroll' y 'enableScroll' según corresponda
  if (showMobileMenu.value) {
    disableScroll();
    // Agregamos el evento click al objeto document para cerrar el menú al hacer clic en cualquier parte de la pantalla
    document.addEventListener('click', handleOutsideClick);
  } else {
    enableScroll();
    // Removemos el evento click del objeto document cuando el menú ya no está visible
    document.removeEventListener('click', handleOutsideClick);
  }
};

// Función para manejar el clic fuera del menú desplegable
const handleOutsideClick = (event) => {
  // Obtenemos el elemento del menú desplegable
  const mobileMenuContainer = mobileMenuRef.value;
  // Obtenemos el botón del menú
  const menuToggleButton = menuToggleButtonRef.value;
  // Comprobamos si el clic ocurrió dentro o fuera del menú desplegable o del botón del menú
  if (
    mobileMenuContainer &&
    !mobileMenuContainer.contains(event.target) &&
    menuToggleButton &&
    !menuToggleButton.contains(event.target)
  ) {
    // Cerramos el menú si el clic fue fuera del contenedor del menú desplegable y del botón del menú
    showMobileMenu.value = false;
    enableScroll();
    // Removemos el evento click del objeto document una vez que se cierra el menú
    document.removeEventListener('click', handleOutsideClick);
  }
};

// Función para bloquear el scroll del cuerpo
const disableScroll = () => {
  document.body.style.overflow = 'hidden';
};

// Función para habilitar el scroll del cuerpo
const enableScroll = () => {
  document.body.style.overflow = '';
};

// Desbloquear el scroll cuando se destruye el componente
onBeforeUnmount(() => {
  enableScroll();
  // Removemos el evento click del objeto document al destruir el componente
  document.removeEventListener('click', handleOutsideClick);
});
</script>



<style>


nav ul li a {
  position: relative;
  color: white; /* Color del texto sin hover */
  transition: color 0.3s ease-in-out;
}

nav ul li a::before {
  content: '';
  position: absolute;
  width: 0; /* Ancho inicial de la línea */
  height: 2px; /* Grosor de la línea */
  bottom: 0;
  left: 0;
  background-color: #FFC200; /* Color de la línea */
  transform-origin: left; /* El origen de la transformación es la izquierda */
  transition: width 0.4s ease-in-out;
}

nav ul li a:hover {
  color: #FFC200; /* Cambia el color al hacer hover */
}

nav ul li a:hover::before {
  width: 100%; /* Al hacer hover, la línea se expandirá de izquierda a derecha */
}
</style>