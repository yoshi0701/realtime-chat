<template>
  <div>
    <div class="jumbotron bg-primary text-white text-center">
      <h2 class="lead display-3">#SLACK#</h2>
      <p>Realtime communication at it's beast</p>
    </div>

<!--    loading status-->
    <div class="alert alert-info" v-if="loading">Processing...</div>

<!--    show errors -->
    <div class="alert alert-danger" v-if="hasErrors">
      <div v-for="error in errors">{{ error }}</div>
    </div>


    <div class="container-fluid">
      <div class="row mt-5">
        <div class="col text-center">
          <button @click="loginWithGoogle" class="btn btn-outline-danger btn-lg">Login with Google</button>
        </div>
      </div>

      <div class="row mt-5">
        <div class="col text-center">
          <button class="btn btn-outline-info btn-lg">Login with Twitter</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import auth from 'firebase/auth'
  export default {
    name: 'login',
    data() {
      return {
        errors: [],
        loading: false
      }
    },

    computed: {
      hasErrors() {
        return this.errors.length > 0
      }
    },
    methods: {


      loginWithGoogle() {
        //loading set to true
        this.loading = true
        //cleear old error
        this.errors = []

        firebase.auth().signInWithPopup(new firebase.auth.GoogleAuthProvider())
          .then((response) => {
            // console.log(response.user)

            //dispatch seetUser
            this.$store.dispatch('setUser', response.user)
            //redirect to home page
            this.$router.push('/')
          })
          .catch(error => {
            this.errors.push(error.message)
            //set loaging to false
            this.loading = false
          })
      }
    }
  }
</script>

<style scoped>
  .btn, .jumbotron {
    border-radius: 0px;
  }
</style>
