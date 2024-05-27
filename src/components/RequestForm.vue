<script>
export default{
mounted(){
    $(document).ready(function () {

var current_fs, next_fs, previous_fs; //fieldsets
var opacity;
var current = 1;
var steps = $("fieldset").length;

setProgressBar(current);

$(".next").click(function () {

  current_fs = $(this).parent();
  next_fs = $(this).parent().next();

  //Add Class Active
  $("#progressbar li").eq($("fieldset").index(next_fs)).addClass("active");

  //show the next fieldset
  next_fs.show();
  //hide the current fieldset with style
  current_fs.animate({ opacity: 0 }, {
    step: function (now) {
      // for making fielset appear animation
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

  //Remove class active
  $("#progressbar li").eq($("fieldset").index(current_fs)).removeClass("active");

  //show the previous fieldset
  previous_fs.show();

  //hide the current fieldset with style
  current_fs.animate({ opacity: 0 }, {
    step: function (now) {
      // for making fielset appear animation
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
  $(".progress-bar")
    .css("width", percent + "%")
}

$(".submit").click(function () {
  return false;
})

});
}
}
</script>

<template>
   <!-- ======================Multi Step Form================== -->
  <div class="container-fluid call-to-action pt-5">
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
            </div> <br> <!-- fieldsets -->
            <fieldset>
              <div class="form-card">
                <div class="form-floating mb-3">
                  <input type="text" class="form-control" id="floatingInput" placeholder="First Name">
                  <label for="floatingInput">First Name</label>
                </div>
                <div class="form-floating mb-3">
                  <input type="text" class="form-control" id="floatingInput" placeholder="Last Name">
                  <label for="floatingInput">Last Name</label>
                </div>
                <div class="form-floating mb-3">
                  <input type="email" class="form-control" id="floatingInput" placeholder="sk@gmail.com">
                  <label for="floatingInput">Email address</label>
                </div>
                <div class="form-floating mb-3">
                  <input type="number" class="form-control" id="floatingInput" placeholder="Phone">
                  <label for="floatingInput">Phone</label>
                </div>
              </div>
              <input type="button" name="next" class="next action-button" value="Next" />
            </fieldset>
            <fieldset>
              <div class="form-card">
                <div class="d-flex justify-content-start align-items-center">
                  <div class="col-md-2">
                    <h5>Purpose:</h5>
                  </div>
                  <div class="col-md-2 mx-1 mt-3 ms-5">
                    <button type="submit" class="btn main-button ms-md-3 px-md-2 py-0 mb-4 btn-round w-100">Sale</button>
                  </div>
                  <div class="col-md-2 mx-1 mt-3 ms-5">
                    <button type="submit" class="btn main-button-2 px-md-2 py-0 mb-4 btn-round w-100">Rent</button>
                  </div>
                </div>
                <div class="row justify-content-start my-2">
                  <div class="col-md-10">
                    <div class="d-flex flex-wrap justify-content-md-between justify-content-center align-items-center">
                      <h5>Property Type:</h5>
                      <div class="d-flex align-items-center my-2 ms-md-5 ms-3 me-md-0 me-1">
                        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
                        <i class="fa-solid fa-house ps-3 pe-2"></i>
                        <p><small>House</small></p>
                      </div>
                      <div class="d-flex align-items-center my-2 mx-md-0 mx-1">
                        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2">
                        <i class="fa-solid fa-house-laptop ps-3 pe-2"></i>
                        <p><small>Rent</small></p>
                      </div>
                      <div class="d-flex align-items-center my-2 mx-md-0 mx-1">
                        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault3">
                        <i class="fa-solid fa-building ps-3 pe-2"></i>
                        <p><small>Appartment</small></p>
                      </div>
                      <div class="d-flex align-items-center my-2 mx-md-0 mx-1">
                        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault4">
                        <i class="fa-solid fa-shop ps-3 pe-2"></i>
                        <p><small>Shop</small></p>
                      </div>
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
                  <input type="text" class="form-control" id="floatingInput" placeholder="City">
                  <label for="floatingInput">City</label>
                </div>
                <div class="form-floating mb-3">
                  <input type="text" class="form-control" id="floatingInput" placeholder="Location">
                  <label for="floatingInput">Location</label>
                </div>
                <div class="form-floating mb-3">
                  <input type="text" class="form-control" id="floatingInput" placeholder="Address">
                  <label for="floatingInput">Address</label>
                </div>
                <div class="form-floating mb-3">
                  <input type="number" class="form-control" id="floatingInput" placeholder="Size">
                  <label for="floatingInput">Size</label>
                </div>
                <div class="form-floating mb-3">
                  <input type="number" class="form-control" id="floatingInput" placeholder="Total Price">
                  <label for="floatingInput">Total Price</label>
                </div>
              </div>
              <input type="button" name="next" class="next action-button" value="Submit" />
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
                  <div class="col-7 text-center">
                    <h5 class="purple-text text-center">You Have Successfully Signed Up</h5>
                  </div>
                </div>
              </div>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>