const app = Vue.createApp({
    data() {
      return {
        lastName: '',
        name: '',
        yourName: '',
      };
    },
    watch: {
        name(value) {
            if (value === '') {
                this.yourName = ''
            }

            this.yourName = value + ' ' + this.lastName
        },
        lastName(value) {
            if (value === '') {
                this.yourName = ''
            }

            this.yourName = this.name + ' ' + value 
        }
    },
    computed: {
    //     yourName() {
    //     if (this.lastName === '' || this.name === '') {
    //       return ''
    //     }

    //     return this.name + ' ' + this.lastName
    //   }
    }
  });
  
  app.mount('#events');