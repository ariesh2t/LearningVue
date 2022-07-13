function getRandomValue(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

const app = Vue.createApp({
    data() {
        return {
            playerHealth: 100,
            monsterHealth: 100,
        }
    },
    methods: {
        attackMonster() {
            const attackValue = getRandomValue(5, 12)
            this.monsterHealth -= attackValue;
            this.monsterHealth = this.monsterHealth < 0 ? 0 : this.monsterHealth;
            this.attackPlayer()
        },
        attackPlayer() {
            const attackValue = getRandomValue(8, 15)
            this.playerHealth -= attackValue;
            this.playerHealth = this.playerHealth < 0 ? 0 : this.playerHealth;
        }
    },
})

app.mount('#game')