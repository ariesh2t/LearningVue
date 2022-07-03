const app = Vue.createApp({
    data() {
        return {
            learnVue: 'Learn Vue',
            vueLink: 'https://vuejs.org/',
            showText: 'Nothing'
        }
    },
    methods: {
        random() {
            let randomNumber = Math.floor((Math.random() * 10) + 1)/10;
            if (randomNumber < 0.5) {
                this.showText = `[${randomNumber}] - Learn Vuejs`
            } else {
                this.showText = `[${randomNumber}] - Learn PHP`
            }
        }
    },
})

app.mount('#user-goal')