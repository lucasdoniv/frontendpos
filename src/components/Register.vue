<template>
  <v-container>
    <v-row>
      <v-col cols="6">
        <v-img src="../assets/car-register.png" class="mt-12"></v-img>
      </v-col>

      <v-col cols="6">
        <h1 style="text-align: center" class="pt-5">Realize seu cadastro</h1>

        <v-form ref="form" v-model="valid" lazy-validation>
          <v-text-field :rules="nameRules" label="Nome" required></v-text-field>

          <v-text-field :rules="emailRules" label="E-mail" required></v-text-field>

          <v-text-field v-model="password" :rules="passwordRules" type='password' label="Senha" required></v-text-field>
          <v-text-field v-model="confirmPassword" :rules="[passwordConfirmationRule]" type='password'
            label="Confirmar senha" required></v-text-field>

          <v-row class="pt-3 pl-3">
            <v-btn :disabled="!valid" color="primary" class="mr-4" @click="validate">
              Cadastrar
            </v-btn>
            <p>Já possui um cadastro? <router-link to="/login"><span class="font-weight-bold">Faça seu login</span>
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
  name: 'Register',
  data: () => ({
    valid: true,
    name: '',
    nameRules: [
      v => !!v || 'Nome é obrigatório'
    ],
    email: '',
    emailRules: [
      v => !!v || 'E-mail é obrigatório',
      v => /.+@.+\..+/.test(v) || 'E-mail deve ser válido',
    ],
    passwordRules: [
      v => !!v || 'Senha é obrigatória'
    ],
    confirmPasswordRules: [
      v => !!v || 'Confirmar senha é obrigatória'
    ],
    confirmPassword: '',
    password: ''
  }),

  methods: {
    validate() {
      if (this.$refs.form.validate()) { 
        this.$router.push('/login')
      }
    },
    reset() {
      this.$refs.form.reset()
    },
    resetValidation() {
      this.$refs.form.resetValidation()
    },
  },

  computed: {
    passwordConfirmationRule() {
      return () => !this.confirmPassword ? 'Confirmar senha é obrigatória' : (this.password === this.confirmPassword) || 'Senhas devem ser iguais'
    }
  }
}
</script>


