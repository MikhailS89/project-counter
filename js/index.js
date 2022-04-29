const Note = {
    data() {
        return {
            counter: 0,
        }
    },
    methods: {
        subtractionDeg() {
            return this.counter -= 30
        },
        addationDeg() {
                return this.counter += 30
        },
        resetDeg() {
            return this.counter = 0
        }
    },
}
Vue.createApp(Note).mount('#note')