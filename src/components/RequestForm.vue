<template>
  <!-- ======================Multi Step Form================== -->
  <Loader :isLoading="loading" />
  <div class="container-fluid call-to-action pt-5" v-if="!loading">
    <div class="row justify-content-center pt-md-5 pt-3">
      <div class="col-md-8 col-12 text-center p-0">
        <div class="card px-md-0 px-2 pt-4 pb-0 mt-3 mb-3">
          <h2 id="heading">Request Form</h2>
          <form id="msform">
            <!-- progressbar -->
            <ul id="progressbar" class="p-0">
              <li class="active" id="account"><strong>Personal Information</strong></li>
              <li id="personal"><strong>Property Type</strong></li>
              <li id="payment"><strong>Address</strong></li>
              <li id="confirm"><strong>Finish</strong></li>
            </ul>
            <div class="progress">
              <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuemin="0"
                aria-valuemax="100"></div>
            </div> <br>
            <!-- fieldsets -->
            <fieldset>
              <div class="form-card">
                <div class="form-floating mb-3">
                  <input type="text" class="form-control" id="floatingFirstName" v-model="propertyRequestform.firstName"
                    placeholder="First Name" />
                  <label for="floatingFirstName">First Name</label>
                </div>
                <div class="form-floating mb-3">
                  <input type="text" class="form-control" id="floatingLastName" v-model="propertyRequestform.lastName"
                    placeholder="Last Name" />
                  <label for="floatingLastName">Last Name</label>
                </div>
                <div class="form-floating mb-3">
                  <input type="email" class="form-control" id="floatingEmail" v-model="propertyRequestform.email"
                    placeholder="sk@gmail.com" />
                  <label for="floatingEmail">Email address</label>
                </div>
                <div class="form-floating mb-3">
                  <input type="number" class="form-control" id="floatingPhone" v-model="propertyRequestform.phone"
                    placeholder="Phone" />
                  <label for="floatingPhone">Phone</label>
                </div>
                <div v-if="errorMessage" class="error-message">{{ errorMessage }}</div>
              </div>
              <input type="button" name="next" class="next action-button" value="Next" @click="validateAndProceed" />
            </fieldset>

            <!-- Second Step Fieldset -->
            <fieldset>
              <div class="form-card">
                <div class="d-flex justify-content-start align-items-center">
                  <div class="col-md-2">
                    <h5>Purpose:</h5>
                  </div>
                  <div>

                    <label class="label--radio-1 d-flex align-items-center px-4 rounded-5">
                      <input type="radio" class="radio-sale" name="city">
                        Sale
                      <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 100 100">
                        <path fill="#000" d="m44.105 55.641l3.598-2.079l-4.666-3.925z" />
                        <path fill="#000"
                          d="M88.558 49.96c0-.885-.435-1.663-1.097-2.151l.014-.024l-9.324-5.383l5.367-9.296l-.018-.011a2.666 2.666 0 0 0-.127-2.408a2.667 2.667 0 0 0-2.025-1.314v-.026H70.58V18.61h-.022a2.667 2.667 0 0 0-1.314-2.022a2.662 2.662 0 0 0-2.412-.125l-.013-.023l-9.481 5.474l-5.25-9.094l-.019.011a2.668 2.668 0 0 0-2.149-1.094c-.885 0-1.664.435-2.151 1.097l-.024-.014l-5.337 9.244l-9.19-5.306l-.011.019a2.666 2.666 0 0 0-2.408.127a2.666 2.666 0 0 0-1.315 2.025h-.027v10.674H18.845v.021a2.667 2.667 0 0 0-2.022 1.314a2.667 2.667 0 0 0-.126 2.41l-.023.014l5.246 9.087l-9.394 5.424l.011.019a2.668 2.668 0 0 0-1.094 2.149c0 .885.435 1.664 1.097 2.151l-.014.024l9.324 5.383l-5.367 9.296l.018.01a2.666 2.666 0 0 0 .127 2.408a2.667 2.667 0 0 0 2.025 1.314v.027H29.42V81.39h.022c.092.816.549 1.58 1.314 2.022a2.665 2.665 0 0 0 2.412.125l.013.023l9.481-5.474l5.25 9.094l.019-.011a2.668 2.668 0 0 0 2.149 1.094c.885 0 1.664-.435 2.151-1.096l.023.013l5.337-9.244l9.191 5.306l.011-.019a2.666 2.666 0 0 0 2.408-.127a2.664 2.664 0 0 0 1.315-2.025h.027V70.398h10.613v-.021a2.667 2.667 0 0 0 2.022-1.314a2.667 2.667 0 0 0 .126-2.41l.023-.013l-5.246-9.087l9.394-5.424l-.011-.019a2.67 2.67 0 0 0 1.094-2.15M37.537 65.197c-2.23 1.288-4.252 1.464-5.971 1.002l.241-2.697c1.302.377 2.985.375 4.575-.544c1.367-.789 1.658-1.765 1.269-2.438c-1.159-2.006-6.992 3.23-9.499-1.111c-1.108-1.92-.367-4.471 2.35-6.039c1.833-1.059 3.675-1.383 5.426-.988l-.309 2.623c-1.433-.324-2.908-.004-4.084.674c-1.038.6-1.367 1.389-.967 2.082c1.049 1.816 6.965-3.236 9.451 1.069c1.219 2.109.616 4.58-2.482 6.367m13.943-8.326l-1.854-1.535l-4.947 2.856l.401 2.374l-2.785 1.607L40.08 48.07l3.079-1.777l11.106 8.971zm3.753-2.166l-6.661-11.538l2.474-1.429l5.413 9.375l4.878-2.816l1.249 2.163zm9.012-5.203l-6.661-11.537l8.164-4.715l1.248 2.162l-5.707 3.296l1.398 2.422l5.586-3.226l1.248 2.162l-5.586 3.225l1.518 2.63l5.708-3.296l1.249 2.162z" />
                      </svg>
                    </label>
                    <!-- <button type="button" class="btn btn-round"
                      @click.prevent="handlePurpose('Sale')">
                      <svg xmlns="http://www.w3.org/2000/svg" width="3em" height="3em" viewBox="0 0 100 100"><path fill="#F45D08" d="m44.105 55.641l3.598-2.079l-4.666-3.925z"/><path fill="#F45D08" d="M88.558 49.96c0-.885-.435-1.663-1.097-2.151l.014-.024l-9.324-5.383l5.367-9.296l-.018-.011a2.666 2.666 0 0 0-.127-2.408a2.667 2.667 0 0 0-2.025-1.314v-.026H70.58V18.61h-.022a2.667 2.667 0 0 0-1.314-2.022a2.662 2.662 0 0 0-2.412-.125l-.013-.023l-9.481 5.474l-5.25-9.094l-.019.011a2.668 2.668 0 0 0-2.149-1.094c-.885 0-1.664.435-2.151 1.097l-.024-.014l-5.337 9.244l-9.19-5.306l-.011.019a2.666 2.666 0 0 0-2.408.127a2.666 2.666 0 0 0-1.315 2.025h-.027v10.674H18.845v.021a2.667 2.667 0 0 0-2.022 1.314a2.667 2.667 0 0 0-.126 2.41l-.023.014l5.246 9.087l-9.394 5.424l.011.019a2.668 2.668 0 0 0-1.094 2.149c0 .885.435 1.664 1.097 2.151l-.014.024l9.324 5.383l-5.367 9.296l.018.01a2.666 2.666 0 0 0 .127 2.408a2.667 2.667 0 0 0 2.025 1.314v.027H29.42V81.39h.022c.092.816.549 1.58 1.314 2.022a2.665 2.665 0 0 0 2.412.125l.013.023l9.481-5.474l5.25 9.094l.019-.011a2.668 2.668 0 0 0 2.149 1.094c.885 0 1.664-.435 2.151-1.096l.023.013l5.337-9.244l9.191 5.306l.011-.019a2.666 2.666 0 0 0 2.408-.127a2.664 2.664 0 0 0 1.315-2.025h.027V70.398h10.613v-.021a2.667 2.667 0 0 0 2.022-1.314a2.667 2.667 0 0 0 .126-2.41l.023-.013l-5.246-9.087l9.394-5.424l-.011-.019a2.67 2.67 0 0 0 1.094-2.15M37.537 65.197c-2.23 1.288-4.252 1.464-5.971 1.002l.241-2.697c1.302.377 2.985.375 4.575-.544c1.367-.789 1.658-1.765 1.269-2.438c-1.159-2.006-6.992 3.23-9.499-1.111c-1.108-1.92-.367-4.471 2.35-6.039c1.833-1.059 3.675-1.383 5.426-.988l-.309 2.623c-1.433-.324-2.908-.004-4.084.674c-1.038.6-1.367 1.389-.967 2.082c1.049 1.816 6.965-3.236 9.451 1.069c1.219 2.109.616 4.58-2.482 6.367m13.943-8.326l-1.854-1.535l-4.947 2.856l.401 2.374l-2.785 1.607L40.08 48.07l3.079-1.777l11.106 8.971zm3.753-2.166l-6.661-11.538l2.474-1.429l5.413 9.375l4.878-2.816l1.249 2.163zm9.012-5.203l-6.661-11.537l8.164-4.715l1.248 2.162l-5.707 3.296l1.398 2.422l5.586-3.226l1.248 2.162l-5.586 3.225l1.518 2.63l5.708-3.296l1.249 2.162z"/></svg>
                    </button> -->
                  </div>
                  <div>
                    <!-- <button type="button" class="btn btn-round" @click.prevent="handlePurpose('Rent')">
                      <svg xmlns="http://www.w3.org/2000/svg" width="3em" height="3em" viewBox="0 0 24 24">
                        <path fill="#F45D08"
                          d="M5.616 16.462H6.5v-1.577h11v1.577h.885v-3.427q0-.39-.2-.815t-.55-.678V9.846q0-.69-.463-1.153t-1.153-.462h-2.903q-.391 0-.67.142q-.279.143-.446.389q-.167-.246-.446-.389q-.279-.142-.67-.142H7.982q-.69 0-1.153.462t-.462 1.153v1.696q-.35.254-.55.678t-.2.815zM6.5 14v-1q0-.425.288-.712T7.5 12h9q.425 0 .713.288T17.5 13v1zm.75-2.884V9.73q0-.27.173-.442q.173-.173.443-.173h3.076q.27 0 .442.173q.174.173.174.442v1.385zm5.192 0V9.73q0-.27.174-.442q.173-.173.442-.173h3.077q.269 0 .442.173t.173.442v1.385zM4.616 21q-.691 0-1.153-.462T3 19.385V4.615q0-.69.463-1.152T4.615 3h14.77q.69 0 1.152.463T21 4.616v14.769q0 .69-.463 1.153T19.385 21zm0-1h14.769q.23 0 .423-.192t.192-.424V4.616q0-.231-.192-.424T19.385 4H4.615q-.23 0-.423.192T4 4.615v14.77q0 .23.192.423t.423.192M4 20V4z" />
                      </svg>
                    </button> -->
                    <label class="label--radio-1 d-flex align-items-center px-4 ms-2 rounded-5">
                      <input type="radio" class="radio-sale" name="city">
                      Rent
                      <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24">
                        <path fill="black"
                          d="M5.616 16.462H6.5v-1.577h11v1.577h.885v-3.427q0-.39-.2-.815t-.55-.678V9.846q0-.69-.463-1.153t-1.153-.462h-2.903q-.391 0-.67.142q-.279.143-.446.389q-.167-.246-.446-.389q-.279-.142-.67-.142H7.982q-.69 0-1.153.462t-.462 1.153v1.696q-.35.254-.55.678t-.2.815zM6.5 14v-1q0-.425.288-.712T7.5 12h9q.425 0 .713.288T17.5 13v1zm.75-2.884V9.73q0-.27.173-.442q.173-.173.443-.173h3.076q.27 0 .442.173q.174.173.174.442v1.385zm5.192 0V9.73q0-.27.174-.442q.173-.173.442-.173h3.077q.269 0 .442.173t.173.442v1.385zM4.616 21q-.691 0-1.153-.462T3 19.385V4.615q0-.69.463-1.152T4.615 3h14.77q.69 0 1.152.463T21 4.616v14.769q0 .69-.463 1.153T19.385 21zm0-1h14.769q.23 0 .423-.192t.192-.424V4.616q0-.231-.192-.424T19.385 4H4.615q-.23 0-.423.192T4 4.615v14.77q0 .23.192.423t.423.192M4 20V4z" />
                      </svg>
                    </label>
                  </div>
                </div>
                <div class="row justify-content-start my-2">
                  <div class="col-md-12">
                    <!-- <h4>Property Type:</h4> -->
                    <div class="d-flex flex-direction-row align-items-center m-2 mb-4">


                      <!-- <form class="d-flex flex-row w-100">
                        <div class="m-2 mb-4 w-100">
                          <select v-model="propertyRequestform.city" name="city" class="form-select"
                            aria-label="Default select example">
                            <option value="" selected disabled>Select City</option>
                            <option value="Islamabad">Islamabad</option>
                            <option value="Lahore">Lahore</option>
                            <option value="Karachi">Karachi</option>
                          </select>
                        </div>
                        <div class="m-2 mb-4 w-100">
                          <select v-model="propertyRequestform.homeType" name="homeType" class="form-select"
                            aria-label="Default select example">
                            <option value="" selected disabled>Select Home type</option>
                            <option value="House">House</option>
                            <option value="Flat">Flat</option>
                          </select>
                        </div>
                        <div class="m-2 mb-4 w-100">
                          <select v-model="propertyRequestform.plot" name="plot" class="form-select"
                            aria-label="Default select example">
                            <option value="" selected disabled>Select Plot Type</option>
                            <option value="Residential Plot">Residential Plot</option>
                            <option value="Commercial Plot">Commercial Plot</option>
                          </select>
                        </div>
                        <div class="m-2 mb-4 w-100">
                          <select v-model="propertyRequestform.commercial" class="form-select"
                            aria-label="Default select example">
                            <option value="" selected disabled>Select Commercial</option>
                            <option value="Office">Office</option>
                            <option value="Shop">Shop</option>
                            <option value="Building">Building</option>
                          </select>
                        </div>
                      </form> -->



                      <form class="w-100">
                        <div class="row">

                          <div class="col-6 col-lg">
                            <h6 class="heading mt-4 text-uppercase">
                              Select city
                            </h6>
                            <ul class="list">
                              <li class="list__item">
                                <label class="label--radio">
                                  <input type="radio" class="radio" checked name="city">
                                  Islamabad
                                </label>
                              </li>
                              <li class="list__item">
                                <label class="label--radio">
                                  <input type="radio" class="radio" name="city">
                                  Lahore
                                </label>
                              </li>
                              <li class="list__item">
                                <label class="label--radio">
                                  <input type="radio" class="radio" name="city">
                                  Karachi
                                </label>
                              </li>
                            </ul>
                          </div>

                          <div class="col-6 col-lg">
                            <h6 class="heading mt-4 text-uppercase">
                              home type
                            </h6>
                            <ul class="list">
                              <li class="list__item">
                                <label class="label--radio">
                                  <input type="radio" class="radio" checked name="home-type">
                                  Flat
                                </label>
                              </li>
                              <li class="list__item">
                                <label class="label--radio">
                                  <input type="radio" class="radio" name="home-type">
                                  House
                                </label>
                              </li>
                            </ul>
                          </div>

                          <div class="col-6 col-lg">
                            <h6 class="heading mt-4 text-uppercase">
                              Plot Type
                            </h6>
                            <ul class="list">
                              <li class="list__item">
                                <label class="label--radio">
                                  <input type="radio" class="radio" checked name="plot-type">
                                  Residencial
                                </label>
                              </li>
                              <li class="list__item">
                                <label class="label--radio">
                                  <input type="radio" class="radio" name="plot-type">
                                  Commercial
                                </label>
                              </li>
                            </ul>
                          </div>

                          <div class="col-6 col-lg">
                            <h6 class="heading mt-4 text-uppercase">
                              commercial type
                            </h6>
                            <ul class="list">
                              <li class="list__item">
                                <label class="label--radio">
                                  <input type="radio" class="radio" checked name="commercial-type">
                                  Office
                                </label>
                              </li>
                              <li class="list__item">
                                <label class="label--radio">
                                  <input type="radio" class="radio" name="commercial-type">
                                  Shop
                                </label>
                              </li>
                              <li class="list__item">
                                <label class="label--radio">
                                  <input type="radio" class="radio" name="commercial-type">
                                  Building
                                </label>
                              </li>
                            </ul>
                          </div>

                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
              <input type="button" name="next" class="next action-button" value="Next" />
              <input type="button" name="previous" class="previous action-button-previous" value="Previous" />
            </fieldset>


            <fieldset>
              <div class="form-card">
                <div class="row">
                  <div class="col-7">
                    <h2 class="fs-title">Address:</h2>
                  </div>
                  <div class="col-5">
                    <h2 class="steps">Step 3 - 4</h2>
                  </div>
                </div>
                <div class="form-floating mb-3">
                  <input type="text" class="form-control" id="floatingInput" v-model="propertyRequestform.city"
                    placeholder="City">
                  <label for="floatingInput">City</label>
                </div>
                <div class="form-floating mb-3">
                  <input type="text" class="form-control" id="floatingInput" v-model="propertyRequestform.location"
                    placeholder="Location">
                  <label for="floatingInput">Location</label>
                </div>
                <div class="form-floating mb-3">
                  <input type="text" class="form-control" id="floatingInput" v-model="propertyRequestform.address"
                    placeholder="Address">
                  <label for="floatingInput">Address</label>
                </div>
                <div class="form-floating mb-3">
                  <input type="number" class="form-control" id="floatingInput" v-model="propertyRequestform.size"
                    placeholder="Size">
                  <label for="floatingInput">Size</label>
                </div>
                <div class="form-floating mb-3">
                  <input type="number" class="form-control" id="floatingInput" v-model="propertyRequestform.totalPrice"
                    placeholder="Total Price">
                  <label for="floatingInput">Total Price</label>
                </div>
              </div>
              <input type="button" name="next" class="next action-button" @click="handleSubmission" value="Submit" />
              <input type="button" name="previous" class="previous action-button-previous" value="Previous" />
            </fieldset>

            <fieldset>
              <div class="form-card">
                <div class="row">
                  <div class="col-7">
                    <h2 class="fs-title">Finish:</h2>
                  </div>
                  <div class="col-5">
                    <h2 class="steps">Step 4 - 4</h2>
                  </div>
                </div> <br>
                <h2 class="purple-text text-center"><strong>SUCCESS !</strong></h2> <br>
                <div class="row justify-content-center">

                </div>
              </div>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>






<script>
import { ref, onMounted } from 'vue';
import { useToast } from 'vue-toast-notification';
import 'vue-toast-notification/dist/theme-sugar.css';
import Loader from './Loader.vue';

// Create the toast instance
const $toast = useToast();

export default {
  components: {
    Loader
  },
  setup() {
    const propertyRequestform = ref({
      firstName: '',
      lastName: '',
      phone: '',
      email: '',
      city: '',
      homeType: '',
      commercial: '',
      plot: '',
      location: '',
      address: '',
      size: '',
      totalPrice: '',
      purpose: '',
      propertyType: ''
    });

    const loading = ref(false);

    const validateForm = () => {
      const requiredFields = [
        'firstName', 'lastName', 'phone', 'email',
        'city', 'location', 'address', 'size',
        'totalPrice', 'purpose'
      ];
      for (const field of requiredFields) {
        if (!propertyRequestform.value[field]) {
          return false;
        }
      }
      return true;
    };

    const handleSubmission = () => {
      console.log('Form data:', propertyRequestform.value);
      const base_url = import.meta.env.VITE_BASE_URL;
      loading.value = true;
      fetch(base_url + '/api/frontend/home/register/property', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(propertyRequestform.value)
      })
        .then(response => response.json())
        .then(data => {
          loading.value = false;
          if (data.success) {
            console.log('Success:', data);
            loading.value=false;
            $toast.open({
              message: 'Submitted Successfully',
              type: 'success',
              position: 'top-right'
            });
          } else {
            loading.value=false;
            $toast.open({
              message: 'An error occurred!',
              type: 'error',
              position: 'top-right'
            });
            console.error('Error:', data);

            if (data.errors) {
              loading.value=false;
              Object.keys(data.errors).forEach(field => {
                data.errors[field].forEach(errorMessage => {
                  $toast.open({
                    message: `${field}: ${errorMessage}`,
                    type: 'error',
                    position: 'top-right'
                  });
                });
              });
            }
          }
        })
        .catch(error => {
          loading.value = false;
          $toast.open({
            message: 'An unexpected error occurred.',
            type: 'error',
            position: 'top-right'
          });
          console.error('Error:', error);
        });
    };

    const handlePurpose = (purpose) => {
      propertyRequestform.value.purpose = purpose;
    };

    onMounted(() => {
      $(document).ready(function () {
        var current_fs, next_fs, previous_fs; // fieldsets
        var opacity;
        var current = 1;
        var steps = $("fieldset").length;

        setProgressBar(current);

        $(".next").click(function () {
          // Validation check for input fields
          var isValid = true;
          $(this).parent().find('input[type="text"], input[type="number"], input[type="email"], input[type="radio"]').each(function () {
            if ($.trim($(this).val()) == '') {
              isValid = false;
              $(this).addClass('input-error'); // Add class to highlight empty fields
            } else {
              $(this).removeClass('input-error'); // Remove class if field is filled
            }
          });

          if (!isValid) {
            // If any input field is empty, do not proceed
            return;
          }

          // If all input fields are filled, proceed to the next fieldset
          current_fs = $(this).parent();
          next_fs = $(this).parent().next();

          // Add Class Active
          $("#progressbar li").eq($("fieldset").index(next_fs)).addClass("active");

          // Show the next fieldset
          next_fs.show();
          // Hide the current fieldset with style
          current_fs.animate({ opacity: 0 }, {
            step: function (now) {
              // for making fieldset appear animation
              opacity = 1 - now;

              current_fs.css({
                'display': 'none',
                'position': 'relative'
              });
              next_fs.css({ 'opacity': opacity });
            },
            duration: 500
          });
          setProgressBar(++current);
        });

        $(".previous").click(function () {
          current_fs = $(this).parent();
          previous_fs = $(this).parent().prev();

          // Remove class active
          $("#progressbar li").eq($("fieldset").index(current_fs)).removeClass("active");

          // Show the previous fieldset
          previous_fs.show();

          // Hide the current fieldset with style
          current_fs.animate({ opacity: 0 }, {
            step: function (now) {
              // for making fieldset appear animation
              opacity = 1 - now;

              current_fs.css({
                'display': 'none',
                'position': 'relative'
              });
              previous_fs.css({ 'opacity': opacity });
            },
            duration: 500
          });
          setProgressBar(--current);
        });

        function setProgressBar(curStep) {
          var percent = parseFloat(100 / steps) * curStep;
          percent = percent.toFixed();
          $(".progress-bar").css("width", percent + "%");
        }

        $(".submit").click(function () {
          return false;
        });
      });
    });

    return {
      propertyRequestform,
      handleSubmission,
      handlePurpose,
      loading
    };
  }
};
</script>



<style scoped>
.input-error {
  border: 1px solid red !important;
}

.label--radio-1 input[type="radio"] {
  display: none;
}

.label--radio-1 {
  border: 1px solid var(--second--main-color);
  font-weight: 600;
  font-size: 16px;
  cursor: pointer
}

/* .label--radio-1 svg {
  position: absolute;
  z-index: -1;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  opacity: .8
} */

.label--radio-1 svg {
  cursor: pointer;
  scale: .7;
}

.label--radio-1 input[type="radio"]:checked+svg path {
  fill: var(--second--main-color);
  transition: all ease .5s;
  scale: 1.15;
}

.heading {
  color: var(--second--main-color);
  border-left: 0.1875rem solid var(--second--main-color);
  padding: 0.5rem 1rem;
  margin: 0.5rem 0.5rem 1rem 0.5rem;
  font-weight: 700;
  font-size: 14px;
}

li {
  list-style: none;
}

.list {
  padding: 0.5rem 1rem;
  margin: 0.5rem 0.5rem 2rem 0.5rem;
  border-left: 0.1875rem solid var(--second--main-color)
}

.list__item {
  margin: 0 0 0.5rem 0;
  padding: 0;
}

.label--radio {
  position: relative;
  margin: 0.5rem;
  font-family: Arial, sans-serif;
  line-height: 135%;
  cursor: pointer;
  display: flex;
  align-items: center;
  font-size: 14px;
}

.radio {
  position: relative;
  margin: 0 1rem 0 0;
  cursor: pointer;
}

.radio:before {
  -webkit-transition: -webkit-transform 0.4s cubic-bezier(0.45, 1.8, 0.5, 0.75);
  -moz-transition: -moz-transform 0.4s cubic-bezier(0.45, 1.8, 0.5, 0.75);
  transition: transform 0.4s cubic-bezier(0.45, 1.8, 0.5, 0.75);
  -webkit-transform: scale(0, 0);
  -moz-transform: scale(0, 0);
  -ms-transform: scale(0, 0);
  -o-transform: scale(0, 0);
  transform: scale(0, 0);
  content: "";
  position: absolute;
  top: 0px;
  left: 0;
  z-index: 1;
  width: 0.75rem;
  height: 0.75rem;
  background: var(--second--main-color);
  border-radius: 50%;
}

.radio:checked:before {
  -webkit-transform: scale(1, 1);
  -moz-transform: scale(1, 1);
  -ms-transform: scale(1, 1);
  -o-transform: scale(1, 1);
  transform: scale(.8, .8);
}

.radio:after {
  content: "";
  position: absolute;
  top: -2px;
  left: -0.125rem;
  width: 1rem;
  height: 1rem;
  background: #fff;
  border: 2px solid #f2f2f2;
  border-radius: 50%;
}
</style>