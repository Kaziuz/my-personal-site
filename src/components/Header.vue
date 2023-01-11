<template>
  <div>
    <!-- Header desktop -->
    <nav class="relative px-4 py-2 flex justify-between items-center border-b border-black">
      <a
        class="flex"
        href="#"
      >
        <div class="logo" />
        <div class="font-nunito ml-2">
          <p class="text-xl font-bold leading-none">Johnny Sepúlveda</p>
          <p class="">Desarrollo web</p>
        </div>
      </a>
      <div class="lg:hidden">
        <button class="navbar-burger flex items-center text-red-600 p-3">
          <svg class="block h-4 w-4 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <title>Mobile menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
          </svg>
        </button>
		  </div>
      <ul class="font-nunito hidden lg:flex items-center lg:w-auto lg:space-x-6">
        <!-- <li class="bg-black">
          <a class="text-sm text-white hover:text-gray-500 p-2" href="#">
            Cacharreo oe
          </a>
        </li> -->
        <li class="bg-black">
          <router-link
            class="text-sm text-white hover:text-gray-500 p-2"
            to="/portfolio"
          >
            Portafolio
          </router-link>
        </li>
      </ul>
    </nav>
    <!-- Header mobile -->
    <div class="navbar-menu relative z-50 hidden">
      <div class="navbar-backdrop fixed inset-0 bg-gray-800 opacity-25"></div>
      <nav class="fixed top-0 left-0 bottom-0 flex flex-col w-5/6 max-w-sm py-6 px-6 bg-white border-r overflow-y-auto bg-blue-400 ">
        <div class="flex items-center mb-8">
          <a
            class="flex mr-auto"
            href="#"
          >
            <div class="logo" />
            <div class="ml-2">
              <p class="text-xl font-bold leading-none">Johnny sepúlveda</p>
              <p class="">Desarrollo web</p>
            </div>
          </a>
          <button class="navbar-close">
            <svg class="h-6 w-6 text-gray-400 cursor-pointer hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>
        <div>
          <ul>
            <li class="mb-1">
              <a class="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded" href="#">
                Cacherreo
              </a>
            </li>
            <li class="mb-1">
              <a class="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded" href="#">
                Portfolio
              </a>
            </li>
          </ul>
        </div>
        <div class="mt-auto">
          <p class="my-4 text-xs text-center text-gray-400">
            <span>Copyright © 2021</span>
          </p>
        </div>
      </nav>
	  </div>
  </div>
</template>

<script setup>
// burguer menu
document.addEventListener('DOMContentLoaded', () => {
  // open
  const burger = document.querySelectorAll('.navbar-burger')
  const menu = document.querySelectorAll('.navbar-menu')
  if (burger.length && menu.length) {
    for (let i=0; i < burger.length; i++) {
      burger[i].addEventListener('click', () => {
        for (let j=0; j < menu.length; j++) {
          menu[j].classList.toggle('hidden')
        }
      })
    }
  }
  // close
  const close = document.querySelectorAll('.navbar-close')
  const backdrop = document.querySelectorAll('navbar-backdrop')

  if (close.length) {
    for (let i=0; i < close.length; i++) {
      close[i].addEventListener('click', () => {
        for (var j=0; j < menu.length; j++) {
          menu[j].classList.toggle('hidden')
        }
      })
    }
  }

  if (backdrop.length) {
    for (var i = 0; i < backdrop.length; i++) {
      backdrop[i].addEventListener('click', function() {
        for (var j = 0; j < menu.length; j++) {
          menu[j].classList.toggle('hidden')
        }
      })
    }
  }

})
</script>