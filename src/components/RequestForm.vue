<template>
  <!-- ======================Multi Step Form================== -->
  <Loader :isLoading="loading" />
  <div class="container-fluid call-to-action">

    <div class="row justify-content-center pt-3">
      <div class="col-md-8 col-12 text-center p-0">
        <div class="card px-md-0 px-2 pt-4 pb-0 mt-3 mb-3">
          <h2 id="heading">Request Form</h2>
          <form id="msform">
            <!-- progressbar -->
            <ul id="progressbar" class="p-0">
              <li :class="{ active: curStep >= 1 }" id="account"><strong>Personal Information</strong></li>
              <li :class="{ active: curStep >= 2 }" id="personal"><strong>Property Type</strong></li>
              <li :class="{ active: curStep >= 3 }" id="payment"><strong>Address</strong></li>
              <li :class="{ active: curStep >= 4 }" id="confirm"><strong>Finish</strong></li>
            </ul>
            <div class="progress">
              <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuemin="0"
                aria-valuemax="100"></div>
            </div> <br>
            <!-- fieldsets -->
            <fieldset :class="{ 'd_block': fs_step1, 'fs_step_show': fs_step_show }" id="stp1">
              <div class="form-card">
                <div class="form-floating mb-3">
                  <input @input="validateFirstName($event)" type="text"
                    :class="{ 'form-control': true, 'input-error': errors.firstName }" id="floatingFirstName"
                    v-model="propertyRequestform.firstName" placeholder="First Name" />
                  <div v-if="errors.firstName" class="text-danger">{{ errors.firstName }}</div>
                  <label for="floatingFirstName">First Name*</label>
                </div>
                <div class="form-floating mb-3">
                  <input @input="validateLastName($event)" type="text"
                    :class="{ 'form-control': true, 'input-error': errors.lastName }" id="floatingLastName"
                    v-model="propertyRequestform.lastName" placeholder="Last Name" />
                  <div v-if="errors.lastName" class="text-danger">{{ errors.lastName }}</div>
                  <label for="floatingLastName">Last Name*</label>
                </div>
                <div class="form-floating mb-3">
                  <input @input="validateEmail($event)" type="email"
                    :class="{ 'form-control': true, 'input-error': errors.email }" id="floatingEmail"
                    v-model="propertyRequestform.email" placeholder="Email" />
                  <div v-if="errors.email" class="text-danger">{{ errors.email }}</div>
                  <label for="floatingEmail">Email address*</label>
                </div>
                <div class="form-floating mb-3">
                  <input @input="validatePhone($event)" type="text"
                    :class="{ 'form-control': true, 'input-error': errors.phone }" id="floatingPhone"
                    v-model="propertyRequestform.phone" placeholder="Phone" />
                  <div v-if="errors.phone" class="text-danger">{{ errors.phone }}</div>
                  <label for="floatingPhone">Phone*</label>
                </div>
                <div v-if="errorMessage" class="error-message">{{ errorMessage }}</div>
              </div>
              <input type="button" name="next" class="action-button" value="Next" @click="handleStepFirst" />
            </fieldset>


            <!-- Second Step Fieldset -->
            <fieldset :class="{ 'd-block': fs_step2 }">
              <div class="form-card">
                <div class="d-flex justify-content-start align-items-center">
                  <div class="col-md-2">
                    <h5>Purpose:</h5>
                  </div>
                  <div>
                    <label
                      :class="{ 'label--radio-1': true, 'd-flex': true, 'align-items-center': true, 'px-4': true, 'rounded-5': true, 'active_purpose': handle_purpose_active_sale }">
                      <input type="radio"
                        :class="{ 'radio-sale': true, 'form-control': true, 'input-error': errors.purpose }"
                        name="purpose" @click.prevent="handlePurpose('Sale')">
                      Sale
                      <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 100 100">
                        <path fill="#000" d="m44.105 55.641l3.598-2.079l-4.666-3.925z" />
                        <path fill="#000"
                          d="M88.558 49.96c0-.885-.435-1.663-1.097-2.151l.014-.024l-9.324-5.383l5.367-9.296l-.018-.011a2.666 2.666 0 0 0-.127-2.408a2.667 2.667 0 0 0-2.025-1.314v-.026H70.58V18.61h-.022a2.667 2.667 0 0 0-1.314-2.022a2.662 2.662 0 0 0-2.412-.125l-.013-.023l-9.481 5.474l-5.25-9.094l-.019.011a2.668 2.668 0 0 0-2.149-1.094c-.885 0-1.664.435-2.151 1.097l-.024-.014l-5.337 9.244l-9.19-5.306l-.011.019a2.666 2.666 0 0 0-2.408.127a2.666 2.666 0 0 0-1.315 2.025h-.027v10.674H18.845v.021a2.667 2.667 0 0 0-2.022 1.314a2.667 2.667 0 0 0-.126 2.41l-.023.014l5.246 9.087l-9.394 5.424l.011.019a2.668 2.668 0 0 0-1.094 2.149c0 .885.435 1.664 1.097 2.151l-.014.024l9.324 5.383l-5.367 9.296l.018.01a2.666 2.666 0 0 0 .127 2.408a2.667 2.667 0 0 0 2.025 1.314v.027H29.42V81.39h.022c.092.816.549 1.58 1.314 2.022a2.665 2.665 0 0 0 2.412.125l.013.023l9.481-5.474l5.25 9.094l.019-.011a2.668 2.668 0 0 0 2.149 1.094c.885 0 1.664-.435 2.151-1.096l.023.013l5.337-9.244l9.191 5.306l.011-.019a2.666 2.666 0 0 0 2.408-.127a2.664 2.664 0 0 0 1.315-2.025h.027V70.398h10.613v-.021a2.667 2.667 0 0 0 2.022-1.314a2.667 2.667 0 0 0 .126-2.41l.023-.013l-5.246-9.087l9.394-5.424l-.011-.019a2.67 2.67 0 0 0 1.094-2.15M37.537 65.197c-2.23 1.288-4.252 1.464-5.971 1.002l.241-2.697c1.302.377 2.985.375 4.575-.544c1.367-.789 1.658-1.765 1.269-2.438c-1.159-2.006-6.992 3.23-9.499-1.111c-1.108-1.92-.367-4.471 2.35-6.039c1.833-1.059 3.675-1.383 5.426-.988l-.309 2.623c-1.433-.324-2.908-.004-4.084.674c-1.038.6-1.367 1.389-.967 2.082c1.049 1.816 6.965-3.236 9.451 1.069c1.219 2.109.616 4.58-2.482 6.367m13.943-8.326l-1.854-1.535l-4.947 2.856l.401 2.374l-2.785 1.607L40.08 48.07l3.079-1.777l11.106 8.971zm3.753-2.166l-6.661-11.538l2.474-1.429l5.413 9.375l4.878-2.816l1.249 2.163zm9.012-5.203l-6.661-11.537l8.164-4.715l1.248 2.162l-5.707 3.296l1.398 2.422l5.586-3.226l1.248 2.162l-5.586 3.225l1.518 2.63l5.708-3.296l1.249 2.162z" />
                      </svg>
                    </label>

                  </div>
                  <div>

                    <label
                      :class="{ 'label--radio-1': true, 'd-flex': true, 'align-items-center': true, 'px-4': true, 'rounded-5': true, 'active_purpose': handle_purpose_active_rent }">
                      <input type="radio"
                        :class="{ 'radio-sale': true, 'form-control': true, 'input-error': errors.purpose }"
                        name="purpose" @click.prevent="handlePurpose('Rent')">
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
                      <form class="w-100">
                        <div class="row">
                          <div class="col-6 col-lg">
                            <h6 class="heading mt-4 text-uppercase">Select city*</h6>
                            <ul class="list">
                              <li class="list__item" v-for="(city, index) in cityList" :key="index">
                                <label class="label--radio">
                                  <input type="radio" @change="validateCity($event)"
                                    :class="{ 'radio': true, 'form-control': true, 'input-error': errors.city }"
                                    v-model="propertyRequestform.city" :value="city" name="city">
                                  {{ city }}
                                </label>
                              </li>


                            </ul>
                          </div>

                          <div class="col-6 col-lg">
                            <h6 class="heading mt-4 text-uppercase">Home type**</h6>
                            <ul class="list">
                              <li class="list__item">
                                <label class="label--radio">
                                  <input type="radio" @click="handleClick('homeType')"
                                    :class="{ 'radio': true, 'form-control': true, 'input-error': errors.homeType }"
                                    v-model="propertyRequestform.homeType" value="Flat" name="homeType">
                                  Flat
                                </label>
                              </li>
                              <li class="list__item">
                                <label class="label--radio">
                                  <input type="radio" @click="handleClick('homeType')"
                                    :class="{ 'radio': true, 'form-control': true, 'input-error': errors.homeType }"
                                    v-model="propertyRequestform.homeType" value="House" name="homeType">
                                  House
                                </label>
                              </li>
                            </ul>
                          </div>

                          <div class="col-6 col-lg">
                            <h6 class="heading mt-4 text-uppercase">Plot type**</h6>
                            <ul class="list">
                              <li class="list__item">
                                <label class="label--radio">
                                  <input type="radio" @click="handleClick('plot')"
                                    :class="{ 'radio': true, 'form-control': true, 'input-error': errors.plot }"
                                    v-model="propertyRequestform.plot" value="Residencial" name="plot">
                                  Residencial
                                </label>
                              </li>
                              <li class="list__item">
                                <label class="label--radio">
                                  <input type="radio" @click="handleClick('plot')"
                                    :class="{ 'radio': true, 'form-control': true, 'input-error': errors.plot }"
                                    v-model="propertyRequestform.plot" value="Commercial" name="plot">
                                  Commercial
                                </label>
                              </li>
                            </ul>
                          </div>

                          <div class="col-6 col-lg pe-0 ">
                            <h6 class="heading pe-0 mt-4 text-uppercase">Commercial type**</h6>
                            <ul class="list">
                              <li class="list__item">
                                <label class="label--radio">
                                  <input type="radio" @click="handleClick('commercial')"
                                    :class="{ 'radio': true, 'form-control': true, 'input-error': errors.commercial }"
                                    v-model="propertyRequestform.commercial" value="Office" name="commercial">
                                  Office
                                </label>
                              </li>
                              <li class="list__item">
                                <label class="label--radio">
                                  <input type="radio" @click="handleClick('commercial')"
                                    :class="{ 'radio': true, 'form-control': true, 'input-error': errors.commercial }"
                                    v-model="propertyRequestform.commercial" value="Shop" name="commercial">
                                  Shop
                                </label>
                              </li>
                              <li class="list__item">
                                <label class="label--radio">
                                  <input type="radio" @click="handleClick('commercial')"
                                    :class="{ 'radio': true, 'form-control': true, 'input-error': errors.commercial }"
                                    v-model="propertyRequestform.commercial" value="Building" name="commercial">
                                  Building
                                </label>
                              </li>
                            </ul>
                          </div>
                          <div v-if="errors.city" class="text-danger">{{ errors.city }}</div>
                          <div v-if="errors.plot" class="text-danger">{{ errors.plot }}</div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
              <input type="button" name="next" class="action-button" value="Next" @click="handleStepSecond" />
              <input type="button" name="previous" class="action-button-previous" @click="handlePrevious"
                value="Previous" />
            </fieldset>


            <fieldset :class="{ 'd-block': fs_step3 }">
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
                  <input @input="validateCity2($event)" type="text"
                    :class="{ 'form-control': true, 'input-error': errors.city }" id="floatingInput"
                    v-model="propertyRequestform.city" placeholder="City" readonly>

                  <label for="floatingInput">City*</label>
                  <div v-if="errors.city" class="text-danger">{{ errors.city }}</div>
                </div>
                <div class="form-floating mb-3">
                  <input  @input="validateLocation($event)" type="text"
                    :class="{ 'form-control': true, 'input-error': errors.location }" id="floatingInput"
                    v-model="propertyRequestform.location" placeholder="Location">
                  <label for="floatingInput">Location*</label>
                  <div v-if="errors.location" class="text-danger">{{ errors.location }}</div>
                </div>
                <div class="form-floating mb-3">
                  <input @input="validateAddress($event)" type="text"
                    :class="{ 'form-control': true, 'input-error': errors.address }"
                    v-model="propertyRequestform.address" placeholder="Address">
                  <label for="floatingInput">Address*</label>
                  <div v-if="errors.address" class="text-danger">{{ errors.address }}</div>
                </div>
                <div class="form-floating mb-3">
                  <select @change="validateAreaUnit($event)"
                    :class="{ 'form-control': true, 'input-error': errors.areaUnit }"
                    v-model="propertyRequestform.areaUnit">
                    <option class="selectUnit" value="" disabled>Select a unit</option>
                    <option value="Marla">Marla</option>
                    <option value="Sq.Ft">Sq.Ft</option>
                    <option value="Sq.M">Sq.M</option>
                    <option value="Sq.Yd">Sq.Yd</option>
                    <option value="Kanal">Kanal</option>
                  </select>
                  <label for="floatingInput">Area*</label>
                  <div v-if="errors.areaUnit" class="text-danger">{{ errors.areaUnit }}</div>
                </div>


                <div class="form-floating mb-3">
                  <input @input="validateSize($event)" type="text"
                    :class="{ 'form-control': true, 'input-error': errors.size }" v-model="propertyRequestform.size"
                    placeholder="e.g 10">
                  <label for="floatingInput">Area unit*</label>
                  <div v-if="errors.size" class="text-danger">{{ errors.size }}</div>


                </div>
                <div class="form-floating mb-3">
                  <input @input="validateTotalPrice($event)" type="text"
                    :class="{ 'form-control': true, 'input-error': errors.totalPrice }"
                    v-model="propertyRequestform.totalPrice" placeholder="Total Price in PKR">
                  <label for="floatingInput">Total Price*</label>
                  <div v-if="errors.totalPrice" class="text-danger">{{ errors.totalPrice }}</div>


                </div>
              </div>
              <input type="button" name="next" class="action-button" @click="handleStepThird" value="Submit" />
              <input type="button" name="previous" class="previous action-button-previous" @click="handlePrevious"
                value="Previous" />
            </fieldset>

            <fieldset :class="{ 'd-block': fs_step4 }">
              <div class="form-card">
                <div class="row">
                  <div class="col-7">
                    <h2 class="fs-title">Finish:</h2>
                  </div>
                  <div class="col-5">
                    <h2 class="steps">Step 4 - 4</h2>
                  </div>
                </div> <br>
                <h2 class="purple-text text-center"><strong>Submitting....</strong></h2> <br>
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
import { ref, onMounted, onBeforeMount, onUnmounted, onBeforeUnmount, watch } from 'vue';
import { useRoute, onBeforeRouteLeave, useRouter } from 'vue-router';
import { useToast } from 'vue-toast-notification';
import 'vue-toast-notification/dist/theme-sugar.css';
import Loader from './Loader.vue';
import { useCityData } from '@/composables/useCityData';
import { useFooterStore } from '../stores/FooterLoadingState';

export default {
  components: {
    Loader
  },
  setup() {
    var $toast = useToast();
    var router = useRouter();
    const footerState = useFooterStore();
    const { cityData, error, cityList, fetchCityData } = useCityData();
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
      areaUnit: '',
      size: '',
      totalPrice: '',
      purpose: 'Sale',
      propertyType: ''
    });

    const isValid = ref(true);
    const loading = ref(false);
    const curStep = ref(1);
    const steps = ref(4);
    const handle_purpose_active_sale = ref(true)
    const handle_purpose_active_rent = ref(false)

    const fs_step1 = ref(true);
    const fs_step2 = ref(false);
    const fs_step3 = ref(false);
    const fs_step4 = ref(false);
    const fs_step_show = ref(false);

    const errors = ref({
      firstName: false,
      lastName: false,
      phone: false,
      email: false,
      city: false,
      purpose: false,
      homeType: false,
      commercial: false,
      plot: false,
      location: false,
      address: false,
      size: false,
      totalPrice: false
    });

    const handleClick = (e) => {
      if (e == 'homeType') {
        // alert(propertyRequestform.value.homeType)
        propertyRequestform.value.commercial = " "
        propertyRequestform.value.plot = " "
        errors.value.plot = false
        errors.value.homeType = false
        errors.value.commercial = false
      }

      if (e == 'plot') {
        // alert(propertyRequestform.value.homeType)
        propertyRequestform.value.homeType = " "
        propertyRequestform.value.commercial = " "
        errors.value.plot = false
        errors.value.homeType = false
        errors.value.commercial = false
      }

      if (e == 'commercial') {
        // alert(propertyRequestform.value.homeType)
        propertyRequestform.value.homeType = " "
        propertyRequestform.value.plot = " "
        errors.value.plot = false
        errors.value.homeType = false
        errors.value.commercial = false
      }
    }
    const validateForm = () => {
      const requiredFields = [
        'firstName', 'lastName', 'phone', 'email',
        'city', 'location', 'address', 'size',
        'totalPrice', 'purpose'
      ];
      for (const field of requiredFields) {
        if (!propertyRequestform.value[field]) {
          errors.value[field] = true;
          return false;
        }
        errors.value[field] = false;
      }
      return true;
    };

    const handleSubmission = () => {
      isValid.value = validateForm();
      if (!isValid.value) {
        return; // If validation fails, do not proceed with submission
      }

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
          $toast.open({
            message: 'Request has submitted successfully',
            type: 'success',
            position: 'top-right'
          });
          if (data.success) {
            $toast.open({
              message: 'Request has submitted successfully',
              type: 'success',
              position: 'top-right'
            });
            resetForm();
            router.push('/');
          }
          else {
            handleErrors(data);
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

    const handleErrors = (data) => {
      if (data.errors) {
        Object.keys(data.errors).forEach(field => {
          data.errors[field].forEach(errorMessage => {
            $toast.open({
              message: `${field}: ${errorMessage}`,
              type: 'error',
              position: 'top-right'
            });
          });
        });
      } else {
        $toast.open({
          message: 'An error occurred!',
          type: 'error',
          position: 'top-right'
        });
        console.error('Error:', data);
      }
    };

    const resetForm = () => {
      propertyRequestform.value = {
        firstName: '',
        lastName: '',
        phone: '',
        email: "",
        city: '',
        homeType: '',
        commercial: '',
        plot: '',
        location: '',
        address: '',
        size: '',
        totalPrice: '',
        purpose: 'Rent',
        propertyType: ''
      };
      curStep.value = 1;
      fs_step1.value = true;
      fs_step2.value = false;
      fs_step3.value = false;
      fs_step4.value = false;
      fs_step_show.value = false;
      setProgressBar();
    };

    const handlePurpose = (purpose) => {
      propertyRequestform.value.purpose = purpose;
      if (purpose == "Sale") {
        handle_purpose_active_sale.value = true;
        handle_purpose_active_rent.value = false;
      }
      else {
        handle_purpose_active_rent.value = true;
        handle_purpose_active_sale.value = false;
      }

    };

    onMounted(() => {
      setProgressBar();

    });

    const setProgressBar = () => {
      var percent = parseFloat(100 / steps.value) * curStep.value;
      percent = percent.toFixed();
      document.querySelector(".progress-bar").style.width = percent + "%";
    };



    const enforceMaxLength = (event, maxLength, fieldName) => {
      if (event.target.value.length > maxLength) {
        event.target.value = event.target.value.slice(0, maxLength);
        propertyRequestform.value[fieldName] = event.target.value;
      }
    };


    const validateEmailx = (email) => {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      return emailRegex.test(email);
    };


    const handleStepFirst = () => {
      const { firstName, lastName, phone, email } = propertyRequestform.value;
      let valid = true;

      // Reset all error states initially
      errors.value = {
        firstName: false,
        lastName: false,
        email: false,
        phone: false,
      };

      // Validate First Name
      if (!firstName) {
        errors.value.firstName = "First name is required";
        valid = false;
      } else if (!/^[A-Za-z]+$/.test(firstName)) {
        errors.value.firstName = "First name should only contain alphabets";
        valid = false;
      } else if (firstName.length > 15) {
        errors.value.firstName = "First name should not exceed 15 characters.";
        valid = false;
      }

      // Validate Last Name
      if (!lastName) {
        errors.value.lastName = "Last name is required";
        valid = false;
      } else if (!/^[A-Za-z]+$/.test(lastName)) {
        errors.value.lastName = "Last name should only contain alphabets";
        valid = false;
      } else if (lastName.length > 15) {
        errors.value.lastName = "Last name should not exceed 15 characters";
        valid = false;
      }

      // Validate Phone Number 
      if (!phone) {
        errors.value.phone = "Phone number is required";
        valid = false;
      } else if (!/^\d+$/.test(phone)) {
        errors.value.phone = "Phone number should only contain numeric digits";
        valid = false;
      } else if (phone.length < 11 || phone.length > 15) {
        errors.value.phone = "Phone number should be between 11 and 15 digits";
        valid = false;
      }

      // Validate Email
      if (!email) {
        errors.value.email = "Email is required";
        valid = false;
      }
      else if (email.length > 50) {
        errors.value.email = "Email should not exceed 50 characters";
        valid = false;
      }
      else if (!/\S+@\S+\.\S+/.test(email)) {
        errors.value.email = "Please enter a valid email address";
        valid = false;
      }
      // Proceed to the next step if all fields are valid
      if (valid) {
        handleNext();
      }
    };



    const handleStepSecond = () => {
      const { homeType, plot, commercial, purpose, city } = propertyRequestform.value;
      let valid = true;

      // Reset all error states initially
      errors.value = {
        city: false,
        purpose: false,
        plot: false,
        commercial: false,
        homeType: false,
      };

      // Check each field and set errors if necessary
      if (!city) {
        errors.value.city = "City is required";
        valid = false;
      }
      if (!purpose) {
        errors.value.purpose = true;
        valid = false;
        $toast.open({
          message: 'Purpose is required.',
          type: 'error',
          position: 'top-right'
        });
      }
      if (!plot && !commercial && !homeType) {
        errors.value.plot = "Choose at least one type.";
        errors.value.commercial = "Choose at least one type.";
        errors.value.homeType = "Choose at least one type.";
        valid = false;

      }

      // Proceed to the next step if all fields are valid
      if (valid) {
        handleNext();
      }
    };


    const handleStepThird = () => {
      const { location, address, areaUnit, size, totalPrice, city } = propertyRequestform.value;
      let valid = true;

      // Reset all error states initially
      errors.value = {
        city: false,
        location: false,
        address: false,
        areaUnit: false,
        size: false,
        totalPrice: false,
      };

      // Validate Location
      if (!city) {
        errors.value.city = "City is required";
        valid = false;
      }
      if (!location) {
        errors.value.location = "Location is required";
        valid = false;
      }

      // Validate Address
      if (!address) {
        errors.value.address = "Address is required";
        valid = false;
      }

      // Validate Area Unit
      if (!areaUnit) {
        errors.value.areaUnit = "Area Unit is required";
        valid = false;

      }

      // Validate Size
      if (!size) {
        errors.value.size = "Size is required";
        valid = false;
      } else if (size <= 0) {
        errors.value.size = "Size must be greater than 0";
        valid = false;
      }

      // Validate Total Price
      if (!totalPrice) {
        errors.value.totalPrice = "Total price is required";
        valid = false;

      } else if (totalPrice <= 0) {
        errors.value.totalPrice = "Total price must be greater than 0";
        valid = false;
      }

      // Proceed to the next step if all fields are valid
      if (valid) {
        handleSubmission();
        handleStepFourth();
      }
    };



    const handleStepFourth = () => {
      fs_step3.value = false;
      fs_step4.value = true;
      curStep.value = 4;
      setProgressBar();

    };
    const handleNext = () => {
      if (curStep.value < steps.value) {
        curStep.value++;
        setProgressBar();
      }
      fs_step1.value = curStep.value === 1;
      fs_step2.value = curStep.value === 2;
      fs_step3.value = curStep.value === 3;
      fs_step4.value = curStep.value === 4;
      fs_step_show.value = curStep.value !== 1;
    };

    const handlePrevious = () => {
      if (curStep.value > 1) {
        curStep.value--;
        setProgressBar();
      }
      fs_step1.value = curStep.value === 1;
      fs_step2.value = curStep.value === 2;
      fs_step3.value = curStep.value === 3;
      fs_step4.value = curStep.value === 4;
      fs_step_show.value = curStep.value !== 1;
    };


    onMounted(() => {
      footerState.setFooterState(true);
    })

    onUnmounted(() => {
      footerState.setFooterState(false);
    })

    onBeforeRouteLeave((to, from, next) => {
      footerState.setFooterState(false);
      next();
    })

    const validateFirstName = (event) => {
      let value = event.target.value;
      const nameRegex = /^[A-Za-z\s]*$/;

      if (!nameRegex.test(value)) {

        value = value.replace(/[^A-Za-z\s]/g, ''); // Remove non-alphabetic characters
      } else {
        errors.value.firstName = false;
      }

      if (value.length > 15) {
        value = value.slice(0, 15); // Limit to 15 characters
      }

      propertyRequestform.value.firstName = value;
    };

    const validateLastName = (event) => {
      let value = event.target.value;
      const nameRegex = /^[A-Za-z\s]*$/;

      if (!nameRegex.test(value)) {
        errors.value.lastName = "Last name should only contain alphabets and spaces";
        value = value.replace(/[^A-Za-z\s]/g, ''); // Remove non-alphabetic characters
      } else {
        errors.value.lastName = '';
      }

      if (value.length > 15) {
        errors.value.lastName = "Last name should not exceed 15 characters";
        value = value.slice(0, 15); // Limit to 15 characters
      }

      propertyRequestform.value.lastName = value;
    };

    const validateEmail = (event) => {
      let value = event.target.value;

      // Filter out any special characters except for . and @
      value = value.replace(/[^a-zA-Z0-9.@]/g, '');

      // Limit the email length to 20 characters
      if (value.length > 50) {
        value = value.slice(0, 50);
      }

      // Regular expression to validate the email format
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      // Validate the email format
      if (!emailRegex.test(value)) {
        errors.value.email = "Email should be a valid email address";
      } else {
        errors.value.email = false;
      }

      // Update the form value and the input field
      propertyRequestform.value.email = value;
      event.target.value = value;
    };


    const validatePhone = (event) => {
      let value = event.target.value;
      const phoneRegex = /^\d+$/;

      // Remove non-numeric characters and prevent negative value
      value = value.replace(/[^0-9]/g, '');
      if (parseInt(value) < 0) {
        value = '';
      }

      // Stop at 15 digits
      if (value.length > 15) {
        value = value.slice(0, 15);
      }

      // Set error if the value does not match the criteria
      if (!phoneRegex.test(value) || value.length < 11 || value.length > 15) {
        errors.value.phone = "Phone number must be between 11 to 15 digits";
      } else {
        errors.value.phone = false;
      }

      event.target.value = value;
      propertyRequestform.value.phone = value;
    };


    const validateTotalPrice = (event) => {
      let value = event.target.value;
      const priceRegex = /^\d+(\.\d{1,2})?$/;

      // Remove non-numeric and non-decimal characters
      value = value.replace(/[^0-9.]/g, '');

      // Limit to 15 characters
      if (value.length > 15) {
        value = value.slice(0, 15);
      }

      // Check if the value matches the price format
      if (!priceRegex.test(value)) {
        errors.value.totalPrice = "Price must be a valid number with up to 2 decimal places";
      } else {
        errors.value.totalPrice = false;
      }

      // Prevent negative value
      if (parseFloat(value) < 0) {
        errors.value.totalPrice = "Value must be a positive number";
        value = '';
      }

      // Update the value in the input field
      event.target.value = value;

      // Update the value in the form object
      propertyRequestform.value.totalPrice = value;

      // Optionally, return the sanitized value if needed
      return value;
    };


    const validateSize = (event) => {
      let value = event.target.value;
      const sizeRegex = /^\d+$/;

      // Check if the value is a number
      if (!sizeRegex.test(value)) {
        errors.value.size = "Size must be a numeric value";
        value = value.replace(/[^0-9]/g, ''); // Remove non-numeric characters
      } else {
        errors.value.size = false;
      }

      // Prevent negative value
      if (parseInt(value) < 0) {
        errors.value.size = "Value must be a positive numer";
        value = '';
      }

      // Limit to 15 characters
      if (value.length > 15) {
        errors.value.size = "Size must not exceed 15 digits";
        value = value.slice(0, 15); // Limit to 15 characters
      }

      // Update the value in the input field
      event.target.value = value;

      // Update the value in the form object
      propertyRequestform.value.size = value;

      // Optionally, you can return the sanitized value if needed
      return value;
    };



    const validateCity = (event) => {
      let value = event.target.value;
      const cityRegex = /^[A-Za-z\s]*$/;

      if (!cityRegex.test(value)) {
        errors.value.city = "City must include alphabets";
        value = value.replace(/[^A-Za-z\s]/g, ''); // Remove non-alphabetic characters
      } else {
        errors.value.city = false;
      }

      if (value.length > 15) {
        value = value.slice(0, 15); // Limit to 15 characters
      }

      propertyRequestform.value.city = value;
    };


    const validateCity2 = (event) => {
      let value = event.target.value;
      const cityRegex = /^[A-Za-z\s]*$/;

      if (!cityRegex.test(value)) {
        errors.value.value = "City must include alphabets";
        value = value.replace(/[^A-Za-z\s]/g, ''); // Remove non-alphabetic characters
      } else {
        errors.value.city = false;
      }

      if (value.length > 15) {
        value = value.slice(0, 15); // Limit to 15 characters
      }

      propertyRequestform.value.city = value;
    };

    const validateArea = (event) => {
      let value = event.target.value;

      // Check if the value is an integer
      if (!Number.isInteger(Number(value))) {
        errors.value.size = "Unit must be an integer";
      } else if (Number(value) > 15) {
        // If the value is greater than 15, truncate it to 15 characters
        errors.value.size = "Unit must not be greater than 15";
        value = value.slice(0, 15);
      } else {
        errors.value.size = false;
      }

      // Update the value in the input field
      event.target.value = value;

      // Update the value in the form object
      propertyRequestform.value.areaUnit = value;

      // Optionally, you can return the sanitized value if needed
      return value;
    };



    const validateAreaUnit = (event) => {
      let value = event.target.value;
      const nameRegex = /^[A-Za-z\s,.]*$/; // Allow alphabets, spaces, commas, and periods

      if (!nameRegex.test(value)) {
        errors.value.areaUnit = "Area unit should only contain alphabets, spaces, commas, and periods";
        value = value.replace(/[^A-Za-z\s,.]/g, ''); // Remove non-alphabetic characters except commas and periods
      } else {
        errors.value.areaUnit = '';
      }

      if (value.length > 15) {
        errors.value.areaUnit = "Area unit should not exceed 15 characters";
        value = value.slice(0, 15); // Limit to 15 characters
      }

      event.target.value = value; // Update input field with sanitized value
      propertyRequestform.value.areaUnit = value; // Update form state

      return value; // Optionally, you can return the sanitized value if needed
    };





    const validateLocation = (event) => {
      let value = event.target.value;

      if (!value) {
        errors.value.location = 'Location is required';
      } else {
        errors.value.location = false;
      }

      propertyRequestform.value.location = value;
    };

    const validateAddress = (event) => {
      let value = event.target.value;

      if (!value) {
        errors.value.address = 'Address is required';
      } else {
        errors.value.address = false;
      }

      propertyRequestform.value.address = value;
    };
    return {
      propertyRequestform,
      handleSubmission,
      handlePurpose,
      handleStepFirst,
      handleStepSecond,
      handleStepThird,
      handleNext,
      handlePrevious,
      handleClick,
      loading,
      errors,
      // composable
      cityData,
      error,
      fetchCityData,
      cityList,
      curStep,
      fs_step1,
      fs_step2,
      fs_step3,
      fs_step4,
      fs_step_show,
      handle_purpose_active_rent,
      handle_purpose_active_sale,
      enforceMaxLength,
      validateFirstName,
      validateLastName,
      validateEmail,
      validatePhone,
      validateTotalPrice,
      validateSize,
      validateCity,
      validateCity2,
      validateAreaUnit,
      validateArea,
      validateLocation,
      validateAddress,
    };
  }
};



</script>





<style scoped>
.active_purpose {

  background-color: rgb(244, 93, 8) !important;

}

.text-danger {
  font-size: 12px;
  font-style: italic;
}

.fs_step {
  display: block;
  opacity: 1;
  position: relative;
}

.fs_step_show {
  display: none;
  opacity: 0;
  position: relative;
}

.input-error {
  border: 1px solid red !important;
}

.label--radio-1 input[type="radio"] {
  display: none;
}

.selectUnit {
  font-size: 12px !important;
}

.label--radio-1 {
  border: 1px solid black;
  font-weight: 600;
  font-size: 16px;
  cursor: pointer;
  margin: 0.5em;
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