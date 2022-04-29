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
    // computed: {
    //     subtractionDeg() {
    //         console.log('subtractionDeg', this.counter - 30)
    //         return this.counter - 30
    //     },
    //     addationDeg() {
    //         console.log('addationDeg', this.counter + 30)
    //         return this.counter + 30
    //     },
    //     resetDeg() {
    //         console.log('resetDeg', this.counter = 0)
    //         return this.counter = 0
    //     }
    // }
}
Vue.createApp(Note).mount('#note')