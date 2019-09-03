new Vue({
    el: '#desafio',
    data: {
        valor: ''
    },
    methods: {
        alerta() {
            alert("Esse eh um alerta!")
        },
        salvaValor() {
            console.log(event.target.value)
            this.valor = event.target.value
        }
    }
})