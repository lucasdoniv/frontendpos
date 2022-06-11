<template>
  <v-container>
    <v-row>
      <v-col cols="6">
        <v-img src="../assets/car-login.png" class="mt-12"></v-img>
      </v-col>

      <v-col cols="6">
        <h1 style="text-align: center" class="pt-5">Acesse sua conta</h1>

        <v-form ref="form" v-model="valid" lazy-validation>

          <v-text-field v-model="email" :rules="emailRules" label="E-mail" required></v-text-field>

          <v-text-field :rules="passwordRules" type='password' label="Senha" required></v-text-field>

          <v-row class="pt-3 pl-3">
            <v-btn :disabled="!valid" color="primary" class="mr-4" @click="validate">
              Entrar
            </v-btn>
            <p>Não tem uma conta? <router-link to="/register"><span class="font-weight-bold">Crie a sua</span>
              </router-link>
            </p>
          </v-row>


        </v-form>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'Login',
  data: () => ({
    valid: true,
    name: '',
    email: '',
    emailRules: [
      v => !!v || 'E-mail é obrigatório',
      v => /.+@.+\..+/.test(v) || 'E-mail deve ser válido',
    ],
    passwordRules: [
      v => !!v || 'Senha é obrigatória'
    ],
    select: null
  }),

  methods: {
    validate() {
      if (this.$refs.form.validate()) {
        this.$router.push('/admin')
      }
    },
    reset() {
      this.$refs.form.reset()
    },
    resetValidation() {
      this.$refs.form.resetValidation()
    },
  },
}
</script>
