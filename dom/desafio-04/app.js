new Vue({
	el: '#desafio',
	data: {
		classeAlternada: 'destaque',
		classeInformada: ''
	},
	watch: {
		classeAlternada() {
			setTimeout( () => {
				this.classeAlternada = (this.classeAlternada == 'destaque' ? 'encolher' : 'destaque')
			}, 2000)
		}
	},
	methods: {
		iniciarEfeito() {
			this.classeAlternada = 'encolher'
		},
		iniciarProgresso() {

		}
	}
})
