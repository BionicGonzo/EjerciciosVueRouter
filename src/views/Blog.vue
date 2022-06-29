<template>
    <div>
        <h1>{{tituloEntrada}}</h1>
        <div class="falsetrue">
            <router-link :to="paginar(false)">Anterior</router-link> <span>• </span>
            <router-link :to="paginar(true)">Siguiente</router-link>
            <br><br>
            <!-- Ruta ANIDADA -->
            <router-link :to="{name: 'comentarios'}"> Ver comentarios</router-link>
            <hr>
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
    export default {
        methods: {
            paginar(siguiente) {
                let entrada = parseInt(this.$route.params.entrada) // captura el valor de entrada
                if (siguiente)
                    return entrada < 10 ? `/blog/${entrada + 1}` : `/blog/${entrada}` // si es menor a 10, link "Siguiente" incrementa en 1, HASTA 10
                else
                    return entrada > 1 ? `/blog/${entrada - 1}` : `/blog/${entrada}` // si es mayor a 1, link "Anterior" disminuye en 1, HASTA 1
            }
        },
        computed: {
            tituloEntrada() {
                return `Entrada ${this.$route.params.entrada} del Blog`
            }
        },
    }
</script>
<style scoped>
.falsetrue a {
    font-weight: bold;
    color: #2c3e50;
    text-decoration: none;
}

.falsetrue a:hover {
    font-weight: bold;
    color: #42b983;
    text-decoration: none;
}

hr {
    width: 50%
}
</style>