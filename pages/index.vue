<template>
  <main>
    <section class="hero-section">
      <header class="flex flex-col items-center">
        <NuxtLink to="/" class="no-underline w-1/3 mb-2">
          <img src="/assets/img/logoFull.svg" alt="christiantola.me" />
        </NuxtLink>
        <h1 class="font-black text-8xl">Hola, soy Christian!</h1>
        <p class="text-xl p-3">
          Desarrollador de Software, Entusiasta de la tecnologia
          
        </p>
        <div class="flex justify-around w-2/3 p-3">
          <NuxtLink to="/blog">Mi Blog</NuxtLink>
          <NuxtLink to="/contacto">Contacto</NuxtLink>
          <NuxtLink to="/about">Sobre mi</NuxtLink>
        </div>
      </header>
    </section>
  </main>
</template>

<style scoped>
.hero-section {
  @apply flex items-center justify-center text-center w-full h-screen bg-slate-50 text-slate-700;
}
</style>
