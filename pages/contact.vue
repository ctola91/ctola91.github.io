<template>
  <div class="contact-container">
    <form class="form" @submit="submitContactForm">
      <div class="form-group">
        <label for="firstName">{{ nameLabel }}:</label>
        <input
          type="text"
          name="firstName"
          id="firstName"
          class="input-form"
          autocomplete="off"
          v-model="name"
        />
      </div>
      <div class="form-group">
        <label for="email">{{ emailLabel }}:</label>
        <input
          type="email"
          name="email"
          id="email"
          class="input-form"
          autocomplete="off"
          v-model="email"
        />
      </div>
      <div class="form-group">
        <label for="message">{{ messageLabel }}:</label>
        <textarea
          name="message"
          id="message"
          class="input-form"
          minlength="20"
          autocomplete="off"
          v-model="message"
        />
      </div>
      <div class="form-group">
        <input type="submit" class="btn" :value="submitLabel" />
      </div>
    </form>
    <div class="contact-info">
      <div>
        <h2>{{ socialLabel }}</h2>
        <div class="place">
          <p><i class="fa fa-map-marker"></i> Cochabamba, Bolivia</p>
          <div class="social-networks">
            <a href="https://twitter.com/ctola91" class="twitter">
              <i class="fa fa-2x fa-twitter"></i>
            </a>
            <a href="https://github.com/ctola91" class="github">
              <i class="fa fa-2x fa-github"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/christian-marcelo-tola-pacheco-436171113/"
              class="linkedin"
            >
              <i class="fa fa-2x fa-linkedin-square"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      name: null,
      email: null,
      message: null,
      errors: [],
    };
  },
  props: ["language"],
  mounted() {},
  computed: {
    emailLabel() {
      return this.language === "en" ? "Your Email" : "Email";
    },
    nameLabel() {
      return this.language === "en" ? "Your Name" : "Su Nombre";
    },
    messageLabel() {
      return this.language === "en" ? "Your Message" : "Mensaje";
    },
    submitLabel() {
      return this.language === "en" ? "Send" : "Enviar";
    },
    socialLabel() {
      return this.language === "en"
        ? "Follow my Social Networks"
        : "Sigueme en mis redes Sociales";
    },
  },
  methods: {
    cleanForm() {
      this.name = "";
      this.email = "";
      this.message = "";
    },
    submitContactForm(e) {
      e.preventDefault();
      let cleanFormEvent = this.cleanForm;
      let toastr = this.$toastr;
      let name = this.name;
      let email = this.email;
      let message = this.message;
      if (name && email && message) {
        let bodyForm = {
          name: name,
          email: email,
          message: message,
          token: null,
          action: "contactform",
        };
        grecaptcha.ready(function () {
          grecaptcha
            .execute("6LdBWDIaAAAAAM3Johh01Gxws7ue03ZCngjSeg0Z", {
              action: "contactform",
            })
            .then(function (token) {
              bodyForm.token = token;
              axios
                .post(
                  "https://us-central1-my-blog-adc4a.cloudfunctions.net/app/api/contacts",
                  bodyForm
                )
                .then(function (res) {
                  if (res.data.success) {
                    toastr.Add({
                      msg: "Su solicitud de contacto se ha enviado, gracias por contactarse.",
                      title: "Formulario de Contact",
                      name: "successContactForm",
                      type: "success",
                      position: "toast-bottom-full-width",
                    });
                    cleanFormEvent();
                  }
                })
                .catch(function (err) {
                  toastr.Add({
                    msg: "El formulario en este momento no se encuentra disponible, intente de nuevo o contactame por mis redes sociales",
                    title: "Formulario de Contact",
                    name: "errorContactForm",
                    type: "warning",
                    position: "toast-bottom-full-width",
                  });
                  console.log(err);
                });
            });
        });
      }
    },
  },
};
</script>

<style scoped>
.social-networks {
  width: 80%;
  margin: auto;
  display: flex;
  justify-content: space-between;
}
.social-networks a.twitter {
  color: #55acee;
}
.social-networks a.linkedin {
  color: #4875b4;
}
.social-networks a.github {
  color: #000000;
}
.contact-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.contact-info,
.form {
  width: 45%;
}
.form {
  display: flex;
  flex-wrap: wrap;
}
.form .form-group {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 10px;
}
.form .form-group label {
  font-weight: bold;
}
.form .form-group .input-form {
  width: 100%;
  padding: 0.5rem;
  border: solid 1px #cacaca;
  -webkit-box-shadow: inset 0 1px 2px rgba(10, 10, 10, 0.1);
  box-shadow: inset 0 1px 2px rgba(10, 10, 10, 0.1);
}
textarea#message {
  height: 70px;
}
.form .form-group .input-form:focus {
  outline: none;
  border: 1px solid #8a8a8a;
  background-color: #fefefe;
  -webkit-box-shadow: 0 0 5px #cacaca;
  box-shadow: 0 0 5px #cacaca;
  -webkit-transition: border-color 0.25s ease-in-out, -webkit-box-shadow 0.5s;
  transition: border-color 0.25s ease-in-out, -webkit-box-shadow 0.5s;
  transition: box-shadow 0.5s, border-color 0.25s ease-in-out,
    -webkit-box-shadow 0.5s;
}
.btn {
  background-color: #1779ba;
  color: #fefefe;
  vertical-align: middle;
  margin: 0 0 1rem 0;
  padding: 0.85em 1em;
  border: 1px solid transparent;
}
.btn:hover {
  background-color: #14507a;
  color: #fefefe;
  text-decoration: none;
}

@media screen and (max-width: 520px) {
  .contact-info,
  .form {
    width: 100%;
  }
}
</style>
