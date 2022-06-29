import Vue from 'vue'
import VueRouter from 'vue-router'
import Inicio from '../views/Inicio.vue'
import Contacto from '../views/Contacto.vue'
import Servicios from '../views/Servicios.vue'
import Blog from '../views/Blog.vue'
import Comentarios from '../views/Comentarios.vue'
import NotFound from '../views/NotFound.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Inicio
  },
  {
    path: '/contacto',
    component: Contacto,
    name: 'contacto' // para ruta NOMBRADA
  },
  {
    path: '/servicios',
    component: Servicios
  },
  {
    path: '/blog/:entrada',
    component: Blog,
    children: [ // para ruta ANIDADA
      {
        path: 'comentarios',
        component: Comentarios,
        name: 'comentarios'
      },
    ]
  },
  {
    path: '*', // para ruta INEXISTENTE o COMODÍN
    component: NotFound
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
