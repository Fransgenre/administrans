<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { inject, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()

const plausible = inject('plausible')

watch(
  () => route.path,
  (v) => {
    // for backward compat/redirecting old links like /#cec to /cec
    if (v === '/' && window.location.hash) {
      let match = router.resolve(window.location.hash.slice(1))
      if (match.matched.length > 0) {
        router.replace(match.fullPath)
      }
    }
    const config = ({
      url: v,
      domain: window.location.hostname,
      referrer: document.referrer || null,
      deviceWidth: window.innerWidth,
    });
    plausible.trackEvent('pageview', {}, config)
  },
  {immediate: true},
)
</script>

<template>
  <header>
    <nav>
      <RouterLink to="/">Administrans</RouterLink>
      <RouterLink to="/a-propos">A propos</RouterLink>
    </nav>
  </header>
  <main>
    <RouterView />
  </main>
  <footer>
    <div class="grid--row">
      <div class="grid--column text--small text--italic two-third">
        <p>Peaufiné avec amour grâce au travail de nombreuses personnes au fil des ans.</p>
        <p>
          Bien que nous fassions de notre mieux, il est possible que des les informations proposées
          soient incomplètes, inexactes ou obsolètes. N'hésitez pas à nous le signaler.
        </p>
      </div>
      <div class="grid--column one-third">
        <p><strong>Liens utiles</strong></p>
        <RouterLink to="/a-propos#contact"> Nous écrire </RouterLink><br />
        <a href="https://github.com/agateblue/administrans"> Page GitHub du projet </a><br />
      </div>
    </div>
    <p></p>
  </footer>
</template>
