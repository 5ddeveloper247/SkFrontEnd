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
                  <div class="col-md-2 mx-1 mt-3 ms-5">
                    <button type="button" class="btn main-button ms-md-3 px-md-2 py-0 mb-4 btn-round w-100"
                      @click.prevent="handlePurpose('Sale')">Sale</button>
                  </div>
                  <div class="col-md-2 mx-1 mt-3 ms-5">
                    <button type="button" class="btn main-button-2 px-md-2 py-0 mb-4 btn-round w-100"
                      @click.prevent="handlePurpose('Rent')">Rent</button>
                  </div>
                </div>
                <div class="row justify-content-start my-2">
                  <div class="col-md-10">
                    <h5>Property Type:</h5>
                    <div class="d-flex flex-direction-row align-items-center m-2 mb-4">
                      <form class="d-flex flex-row w-100">
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
          $(this).parent().find('input[type="text"], input[type="number"], input[type="email"], select').each(function () {
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
</style>