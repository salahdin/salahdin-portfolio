<template>
    <div class="section-light contact" id="contact">
        <div>
           <h1 v-show="showSuccess"> email sent</h1>
        </div>

        <div class="container">
          <div
            class="columns is-multiline"
            data-aos="fade-in-up"
            data-aos-easing="linear"
          >
            <div class="column is-12 about-me">
              <h1 class="title has-text-centered section-title">
                Get in touch
              </h1>
            </div>
            <div class="column is-8 is-offset-2">
              <form
                action="https://formspree.io/email@example.com" method="POST" @submit.prevent="sendEmail">
                <div class="field">
                  <label class="label">Name</label>
                  <div class="control has-icons-left">
                    <input
                      class="input"
                      type="text"
                      placeholder="Ex. Salahdin Jemal"
                      name="user_name"
                    />
                    <span class="icon is-small is-left">
                      <i class="fas fa-user"></i>
                    </span>
                  </div>
                </div>
                <div class="field">
                  <label class="label">Email</label>
                  <div class="control has-icons-left">
                    <input
                      class="input"
                      type="email"
                      placeholder="Ex. salahdinjemal@gmail.com"
                      name="user_email"
                    />
                    <span class="icon is-small is-left">
                      <i class="fas fa-envelope"></i>
                    </span>
                  </div>
                </div>
                <div class="field">
                  <label class="label">Message</label>
                  <div class="control">
                    <textarea
                      class="textarea"
                      placeholder="Textarea"
                      name="message"
                    ></textarea>
                  </div>
                </div>
                <div class="field">
                  <div class="control ">
                    <button class="button submit-button">
                      Submit&nbsp;&nbsp;
                      <i class="fas fa-paper-plane"></i>
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
</template>



<script>
import emailjs from 'emailjs-com';

export default {
    data(){
        return {
            showSuccess : null
        }
    },
    created: function(){
        console.log(this.showSuccess);
    },
    methods: {
    sendEmail: (e) => {
      emailjs.sendForm('service_9w10fvk', 'template_j13xfl1', e.target, 'user_rCHDA2GrM98Mn5mqiCkI0')
        .then((result) => {
          console.log('SUCCESS!', result.status, result.text);
        }, (error) => {
            console.log('FAILED...', error);
        });
    }
  }
}

 
</script>