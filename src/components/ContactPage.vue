<template>
    <Loader :isLoading="loading" />
    <div class="contact-banner pt-md-5">
        <div class="row justify-content-start pt-md-5">
            <div class="col-md-7 p-5">
                <h1 class="text-white text-start display-5 fw-bold pt-5">
                    Contact <br> Sk Marketing
                </h1>
                <p class="text-white text-start py-5">
                    Get in touch with SK Marketing today for expert guidance and personalized assistance in exploring
                    real estate opportunities in Bahria Town and DHA Islamabad. Our dedicated team is ready to assist
                    you in finding your dream home or investment property. Whether you are looking to buy, sell, or
                    rent, we are here to ensure a smooth and successful real estate experience. Reach out to us via
                    phone, email, or visit our office to start your journey with SK Marketing.
                </p>
            </div>
        </div>
    </div>
    <section class="contact-section">
        <div class="container">
            <div class="contact-section-card px-5 py-4 rounded-4"
                style="transform: translate(0px, 0px); translate: none; rotate: none; scale: none; opacity: 1;">
                <div class="row">
                    <div class="col-12 col-md-6">
                        <label for="name" class="py-3 fw-bold">Full Name *</label>
                        <input type="text" class="form-control py-3 px-4" :class="{ 'border-danger': errors.fullName }"
                            placeholder="John David" aria-label="full name" id="name"
                            v-model="contactFormData.fullName">
                        <div v-if="errors.fullName" class="text-danger">{{ errors.fullName }}</div>
                    </div>
                    <div class="col-12 col-md-6">
                        <label for="email" class="py-3 fw-bold">Your Email *</label>
                        <input type="text" class="form-control py-3 px-4" :class="{ 'border-danger': errors.email }"
                            placeholder="example@yourmail.com" aria-label="Your Email" id="email"
                            v-model="contactFormData.email">
                        <div v-if="errors.email" class="text-danger">{{ errors.email }}</div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-12 col-md-6">
                        <label for="Company-name" class="py-3 fw-bold">Company *</label>
                        <input type="text" class="form-control py-3 px-4"
                            :class="{ 'border-danger': errors.companyName }" placeholder="Your company name here"
                            aria-label="Company" id="Company-name" v-model="contactFormData.companyName">
                        <div v-if="errors.companyName" class="text-danger">{{ errors.companyName }}</div>
                    </div>
                    <div class="col-12 col-md-6">
                        <label for="your-subject" class="py-3 fw-bold">Subject *</label>
                        <input type="text" class="form-control py-3 px-4" :class="{ 'border-danger': errors.subject }"
                            placeholder="How can we Help" aria-label="subject" id="your-subject"
                            v-model="contactFormData.subject">
                        <div v-if="errors.subject" class="text-danger">{{ errors.subject }}</div>
                    </div>
                </div>
                <div class="d-flex flex-column">
                    <label for="message" class="py-3 fw-bold">Message *</label>
                    <textarea class="w-100 p-4 form-control" :class="{ 'border-danger': errors.message }" name="Message"
                        placeholder="Hello there,I would like to talk about how to..." id="message" cols="30" rows="3"
                        v-model="contactFormData.message">
          </textarea>
                    <div v-if="errors.message" class="text-danger">{{ errors.message }}</div>
                </div>
                <button class="mt-4 main-button py-2 px-4 border-0" type="button" @click="submitForm">Send
                    Message</button>
            </div>
        </div>
    </section>
</template>


<script setup>
import { ref,onBeforeMount,onBeforeUnmount} from 'vue';
import { reactive } from 'vue';
import { useToast } from 'vue-toast-notification';
import 'vue-toast-notification/dist/theme-sugar.css';
import Loader from './Loader.vue';
import { useFooterStore } from '../stores/FooterLoadingState';


const footerState = useFooterStore();
const $toast = useToast();
const contactFormData = reactive({
    fullName: '',
    email: '',
    companyName: '',
    subject: '',
    message: ''
});
const errors = ref({
    fullName: '',
    email: '',
    companyName: '',
    subject: '',
    message: ''
});
const loading = ref(false);
const validateForm = () => {
    let isValid = true;

    // Clear previous errors
    Object.keys(errors.value).forEach(key => {
        errors.value[key] = '';
    });

    // Validate fullName
    if (!contactFormData.fullName) {
        errors.value.fullName = 'Full Name is required';
        isValid = false;
    }

    // Validate email
    if (!contactFormData.email) {
        errors.value.email = 'Email is required';
        isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(contactFormData.email)) {
        errors.value.email = 'Email is invalid';
        isValid = false;
    }

    // Validate companyName
    if (!contactFormData.companyName) {
        errors.value.companyName = 'Company Name is required';
        isValid = false;
    }

    // Validate subject
    if (!contactFormData.subject) {
        errors.value.subject = 'Subject is required';
        isValid = false;
    }

    // Validate message
    if (!contactFormData.message) {
        errors.value.message = 'Message is required';
        isValid = false;
    }

    return isValid;
};

const resetForm = () => {
    contactFormData.fullName = '';
    contactFormData.email = '';
    contactFormData.companyName = '';
    contactFormData.subject = '';
    contactFormData.message = '';
    // Optionally clear errors
    Object.keys(errors.value).forEach(key => {
        errors.value[key] = '';
    });
};

const submitForm = async () => {
    if (!validateForm()) {
        return;
    }

    try {
        loading.value = true;
        const base_url = import.meta.env.VITE_BASE_URL;

        const response = await fetch(base_url + '/api/frontend/contact/store', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(contactFormData)
        });

        if (!response.ok) {
            loading.value = false;
            throw new Error('Network response was not ok');
        }

        const data = await response.json();
        console.log('Success:', data);
        loading.value = false;
        $toast.open({
            message: 'Submitted Successfully!',
            type: 'success',
            position: 'top-right'
        });
        // Handle success response
        // Reset the form
        resetForm();
    } catch (error) {
        // console.error('Error:', error);
        loading.value = false;
        $toast.open({
            message: 'Oops Network Error Occured!',
            type: 'error',
            position: 'top-right'
        });
        // Handle error response
    }
}



onBeforeMount(() => {
    footerState.setFooterState(true);
})

onBeforeUnmount(() => {
    footerState.setFooterState(false);
})

</script>


<style scoped>
.border-danger {
    border-color: red !important;
}
</style>