<template>
  <main>
    <header class="page-heading">
      <div class="wrapper">
        <h1 class="text-5xl font-extrabold">Contacto</h1>
        <p class="font-medium text-lg">
          Utiliza el formulario para enviarme un mensaje o puedes usar alguna de
          mis redes sociales.
        </p>
      </div>
    </header>
    <section class="page-section">
      <div class="contact-container">
        <form class="form" @submit.prevent="submitContactForm">
          <div class="form-group">
            <label for="firstName">{{ nameLabel }}:</label>
            <input
              type="text"
              name="firstName"
              id="firstName"
              class="focus:ring-2 focus:outline-none appearance-none w-full text-sm leading-6 text-slate-900 placeholder-slate-400 rounded-md py-2 pl-2 ring-1 ring-slate-200 shadow-sm"
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
              class="focus:ring-2 focus:outline-none appearance-none w-full text-sm leading-6 text-slate-900 placeholder-slate-400 rounded-md py-2 pl-2 ring-1 ring-slate-200 shadow-sm"
              autocomplete="off"
              v-model="email"
            />
          </div>
          <div class="form-group">
            <label for="message">{{ messageLabel }}:</label>
            <textarea
              name="message"
              id="message"
              class="focus:ring-2 focus:outline-none appearance-none w-full text-sm leading-6 text-slate-900 placeholder-slate-400 rounded-md py-2 pl-2 ring-1 ring-slate-200 shadow-sm"
              minlength="20"
              autocomplete="off"
              v-model="message"
            />
          </div>
          <div class="form-group">
            <input
              type="submit"
              class="h-10 px-6 font-semibold rounded-md bg-black text-white"
              :value="submitLabel"
            />
          </div>
        </form>
        <div class="contact-info">
          <div>
            <h2>{{ socialLabel }}</h2>
            <div class="place">
              <p><i class="fa fa-map-marker"></i> Cochabamba, Bolivia</p>
              <div class="social-networks">
                <a href="https://twitter.com/ctola91" class="twitter">
                  <font-awesome-icon icon="fa-brands fa-twitter" size="2x" />
                </a>
                <a href="https://github.com/ctola91" class="github">
                  <font-awesome-icon icon="fa-brands fa-github" size="2x" />
                </a>
                <a
                  href="https://www.linkedin.com/in/christian-marcelo-tola-pacheco-436171113/"
                  class="linkedin"
                >
                  <font-awesome-icon icon="fa-brands fa-linkedin" size="2x" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>
<script setup>
const {
  public: { siteKey },
} = useRuntimeConfig();
const SITE_KEY = ref(siteKey);
useHead({
  script: [
    {
      src: `https://www.google.com/recaptcha/api.js?render=${SITE_KEY.value}`,
      body: true,
    },
  ],
});
const nameLabel = ref("Su Nombre");
const name = ref("");
const emailLabel = ref("Email");
const email = ref("");
const messageLabel = ref("Mensaje");
const message = ref("");
const socialLabel = ref("Sigueme en mis redes sociales");
const submitLabel = ref("Enviar");
const errors = ref("");

const cleanForm = () => {
  name.value = "";
  message.value = "";
  email.value = "";
};

const submitContactForm = () => {
  if (
    name.value.length > 0 &&
    email.value.length > 0 &&
    message.value.length > 0
  ) {
    let bodyForm = {
      name: name.value,
      email: email.value,
      message: message.value,
      token: null,
      action: "contactform",
    };
    try {
      grecaptcha.ready(async function () {
        const token = await grecaptcha.execute(`${SITE_KEY.value}`, {
          action: "contactform",
        });
        bodyForm.token = token;
        const { data: success } = await useFetch(
          "https://us-central1-my-blog-adc4a.cloudfunctions.net/app/api/contacts",
          {
            method: "POST",
            body: bodyForm,
          }
        );
        if (success) {
          cleanForm();
        } else {
          console.log("Error");
        }
        // grecaptcha
        //   .execute("6LdBWDIaAAAAAM3Johh01Gxws7ue03ZCngjSeg0Z", {
        //     action: "contactform",
        //   })
        //   .then(async function (token) {
        //     bodyForm.token = token;
        //     const { data: success } = await useFetch(
        //       "https://us-central1-my-blog-adc4a.cloudfunctions.net/app/api/contacts",
        //       {
        //         method: "POST",
        //         body: bodyForm,
        //       }
        //     );
        //     if (success) {
        //       cleanForm();
        //     } else {
        //       console.log("Error");
        //     }
        //   })
        //   .catch((e) => {
        //     console.log(e);
        //     errorMessage = e;
        //   });
      });
    } catch (e) {
      console.log(e);
    }
  }
};

// import axios from "axios";

// export default {
//   data() {
//     return {
//       name: null,
//       email: null,
//       message: null,
//       errors: [],
//     };
//   },
//   props: ["language"],
//   mounted() {},
//   computed: {
//     emailLabel() {
//       return this.language === "en" ? "Your Email" : "Email";
//     },
//     nameLabel() {
//       return this.language === "en" ? "Your Name" : "Su Nombre";
//     },
//     messageLabel() {
//       return this.language === "en" ? "Your Message" : "Mensaje";
//     },
//     submitLabel() {
//       return this.language === "en" ? "Send" : "Enviar";
//     },
//     socialLabel() {
//       return this.language === "en"
//         ? "Follow my Social Networks"
//         : "Sigueme en mis redes Sociales";
//     },
//   },
//   methods: {
//     cleanForm() {
//       this.name = "";
//       this.email = "";
//       this.message = "";
//     },
//     submitContactForm(e) {
//       e.preventDefault();
//       let cleanFormEvent = this.cleanForm;
//       let toastr = this.$toastr;
//       let name = this.name;
//       let email = this.email;
//       let message = this.message;
//       if (name && email && message) {
//         let bodyForm = {
//           name: name,
//           email: email,
//           message: message,
//           token: null,
//           action: "contactform",
//         };
//         grecaptcha.ready(function () {
//           grecaptcha
//             .execute("6LdBWDIaAAAAAM3Johh01Gxws7ue03ZCngjSeg0Z", {
//               action: "contactform",
//             })
//             .then(function (token) {
//               bodyForm.token = token;
//               axios
//                 .post(
//                   "https://us-central1-my-blog-adc4a.cloudfunctions.net/app/api/contacts",
//                   bodyForm
//                 )
//                 .then(function (res) {
//                   if (res.data.success) {
//                     toastr.Add({
//                       msg: "Su solicitud de contacto se ha enviado, gracias por contactarse.",
//                       title: "Formulario de Contact",
//                       name: "successContactForm",
//                       type: "success",
//                       position: "toast-bottom-full-width",
//                     });
//                     cleanFormEvent();
//                   }
//                 })
//                 .catch(function (err) {
//                   toastr.Add({
//                     msg: "El formulario en este momento no se encuentra disponible, intente de nuevo o contactame por mis redes sociales",
//                     title: "Formulario de Contact",
//                     name: "errorContactForm",
//                     type: "warning",
//                     position: "toast-bottom-full-width",
//                   });
//                   console.log(err);
//                 });
//             });
//         });
//       }
//     },
//   },
// };
</script>

<style scoped>
.social-networks {
  width: 100%;
  margin: 20px auto 0;
  display: flex;
  justify-content: space-between;
}
.social-networks .fa-brand {
  width: 50px;
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
