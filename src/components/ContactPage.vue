<script setup>
</script>

<template>
    <div class="contact-banner pt-md-5">
    <div class="row justify-content-start pt-md-5">
        <div class="col-md-7 p-5">
            <h1 class="text-white text-start display-5 fw-bold pt-5">
                Contact <br> Sk Marketing
            </h1>
            <p class="text-white text-start py-5">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui commodi molestias odit perferendis dignissimos
                modi sapiente dolorum incidunt, vitae eos voluptatibus aliquam, maiores est animi doloremque. Modi
                asperiores ad eveniet.
            </p>
        </div>
    </div>
 </div>
 <section class="contact-section">
    <div class="container">
        <div class="contact-section-card px-5 py-4 rounded-4" style="transform: translate(0px, 0px); translate: none; rotate: none; scale: none; opacity: 1;">
            <div class="row">
                <div class="col-12 col-md-6">
                    <label for="name" class="py-3 fw-bold">Full Name *</label>
                    <input type="text" class="form-control py-3 px-4" placeholder="John David" aria-label="full name" id="name">
                </div>
                <div class="col-12 col-md-6">
                    <label for="email" class="py-3 fw-bold">Your Email *</label>
                    <input type="text" class="form-control py-3 px-4" placeholder="example@yourmail.com" aria-label="Your Email" id="email">
                </div>
            </div>
            <div class="row">
                <div class="col-12 col-md-6">
                    <label for="Company-name" class="py-3 fw-bold">Company *</label>
                    <input type="text" class="form-control py-3 px-4" placeholder="Your company name here" aria-label="Company" id="Company-name">
                </div>
                <div class="col-12 col-md-6">
                    <label for="your-subject" class="py-3 fw-bold">Subject *</label>
                    <input type="text" class="form-control py-3 px-4" placeholder="How can we Help" aria-label="subject" id="your-subject">
                </div>
            </div>
            <div class="d-flex flex-column">
                <label for="message" class="py-3 fw-bold">Message *</label>
                <textarea class="w-100 p-4" name="Message" placeholder="Hello there,I would like to talk about how to..." id="message" cols="30" rows="3"></textarea>
            </div>
            <button class="mt-4 main-button py-2 px-4 border-0" type="button">Send Message</button>
        </div>
    </div>
</section>
</template>