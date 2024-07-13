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
                        <input @input="validateFullName($event)" type="text" placeholder="example name"
                            class="form-control py-3 px-4" :class="{ 'border-danger': errors.fullName }"
                            aria-label="full name" id="name" v-model="contactFormData.fullName">
                        <div v-if="errors.fullName" class="text-danger">{{ errors.fullName }}</div>
                    </div>
                    <div class="col-12 col-md-6">
                        <label for="email" class="py-3 fw-bold">Your Email *</label>
                        <input @input="validateEmail($event)" type="email" class="form-control py-3 px-4"
                            :class="{ 'border-danger': errors.email }" placeholder="example@yourmail.com"
                            aria-label="Your Email" id="email" v-model="contactFormData.email">
                        <div v-if="errors.email" class="text-danger">{{ errors.email }}</div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-12 col-md-6">
                        <label for="Company-name" class="py-3 fw-bold">Company *</label>
                        <input @input="validateCompanyName($event)" type="text" class="form-control py-3 px-4"
                            :class="{ 'border-danger': errors.companyName }" placeholder="Your company name here"
                            aria-label="Company" id="Company-name" v-model="contactFormData.companyName">
                        <div v-if="errors.companyName" class="text-danger">{{ errors.companyName }}</div>
                    </div>
                    <div class="col-12 col-md-6">
                        <label for="your-subject" class="py-3 fw-bold">Subject *</label>
                        <input @input="validateSubject($event)" type="text" class="form-control py-3 px-4"
                            :class="{ 'border-danger': errors.subject }" placeholder="How can we Help"
                            aria-label="subject" id="your-subject" v-model="contactFormData.subject">
                        <div v-if="errors.subject" class="text-danger">{{ errors.subject }}</div>
                    </div>
                </div>
                <div class="d-flex flex-column">
                    <label for="message" class="py-3 fw-bold">Message *</label>
                    <textarea @input="validateMessage($event)" class="w-100 p-4 form-control"
                        :class="{ 'border-danger': errors.message }" name="Message"
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
import { ref, reactive, onMounted, onBeforeUnmount } from 'vue';
import { onBeforeRouteLeave } from 'vue-router';
import { useToast } from 'vue-toast-notification';
import 'vue-toast-notification/dist/theme-sugar.css';
import { useFooterStore } from '../stores/FooterLoadingState';
import Loader from './Loader.vue';

const footerState = useFooterStore();
var $toast = useToast();

const contactFormData = reactive({
    fullName: '',
    email: '',
    companyName: '',
    subject: '',
    message: ''
});

const errors = reactive({
    fullName: '',
    email: '',
    companyName: '',
    subject: '',
    message: ''
});

const loading = ref(false);

const validateFullName = (event) => {
    let value = event.target.value;

    // Remove non-alphabetic characters and limit the length to 15
    value = value.replace(/[^A-Za-z\s]/g, '').slice(0, 15);

    // Update the input value to reflect the changes
    event.target.value = value;
    contactFormData.fullName = value;

    // Validate and set error messages
    if (!value) {
        errors.fullName = 'Full Name is required';
    } else if (!/^[A-Za-z\s]+$/.test(value)) {
        errors.fullName = 'Full Name should only contain alphabets and spaces';
    } else if (value.length > 15) {
        errors.fullName = 'Full Name should not exceed 15 characters';
    } else {
        errors.fullName = '';
    }
};


const validateEmail = (event) => {
    const value = event.target.value;
    if (!value) {
        errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(value)) {
        errors.email = 'Email is invalid';
    } else {
        errors.email = '';
    }
};

const validateCompanyName = (event) => {
    const value = event.target.value;
    if (!value) {
        errors.companyName = 'Company Name is required';
    } else {
        errors.companyName = '';
    }
};

const validateSubject = (event) => {
    const value = event.target.value;
    if (!value) {
        errors.subject = 'Subject is required';
    } else {
        errors.subject = '';
    }
};

const validateMessage = (event) => {
    const value = event.target.value;
    if (!value) {
        errors.message = 'Message is required';
    } else if (value.length > 300) {
        errors.message = 'Message should not exceed 300 characters';
    } else {
        errors.message = '';
    }
};

const validateForm = () => {
    validateFullName({ target: { value: contactFormData.fullName } });
    validateEmail({ target: { value: contactFormData.email } });
    validateCompanyName({ target: { value: contactFormData.companyName } });
    validateSubject({ target: { value: contactFormData.subject } });
    validateMessage({ target: { value: contactFormData.message } });

    return !Object.values(errors).some(error => error);
};

const resetForm = () => {
    contactFormData.fullName = '';
    contactFormData.email = '';
    contactFormData.companyName = '';
    contactFormData.subject = '';
    contactFormData.message = '';

    Object.keys(errors).forEach(key => {
        errors[key] = '';
    });
};

const submitForm = async () => {
    if (!validateForm()) {
        return;
    }

    try {
        loading.value = true;
        const base_url = import.meta.env.VITE_BASE_URL;

        const response = await fetch(`${base_url}/api/frontend/contact/store`, {
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
        loading.value = false;
        $toast.open({
            message: 'Submitted Successfully!',
            type: 'success',
            position: 'top-right'
        });
        resetForm();
        $toast.open({
            message: 'Request has submitted successfully',
            type: 'success',
            position: 'top-right'
        });
    } catch (error) {
        loading.value = false;
        $toast.open({
            message: 'Oops Network Error Occured!',
            type: 'error',
            position: 'top-right'
        });
    }
};

onBeforeRouteLeave((to, from, next) => {
    footerState.setFooterState(false);
    next();
});

onMounted(() => {
    footerState.setFooterState(false);
    footerState.setFooterState(true);
});

onBeforeUnmount(() => {
    footerState.setFooterState(false);
});
</script>



<style scoped>
.border-danger {
    border-color: red !important;
}
</style>