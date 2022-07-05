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
                this.showText = `<h1>[${randomNumber}] - Learn Vuejs</h1>`
            } else {
                this.showText = `<h3>[${randomNumber}] - Learn PHP</h3>`
            }
        }
    },
})

app.mount('#user-goal')

// render ra HTML tag thi dung <p v-html="showText"></p> => it su dung do co the bi tan cong XSS