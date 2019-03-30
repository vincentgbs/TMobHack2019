globalVariable.landingpage = {
        render: function() {
        // $("body").css('background-image', 'url(assets/tmobilecity.jpg)');
        $("#root").html(`
        <style>


        .container {
            max-width: 960px;
          }

          /*
           * Custom translucent site header
           */

          .site-header {
            background-color: rgba(0, 0, 0, .85);
            -webkit-backdrop-filter: saturate(180%) blur(20px);
            backdrop-filter: saturate(180%) blur(20px);
          }
          .site-header a {
            color: #999;
            transition: ease-in-out color .15s;
          }
          .site-header a:hover {
            color: #fff;
            text-decoration: none;
          }

          /*
           * Dummy devices (replace them with your own or something else entirely!)
           */

          .product-device {
            position: absolute;
            right: 10%;
            bottom: -30%;
            width: 300px;
            height: 540px;
            background-color: #333;
            border-radius: 21px;
            -webkit-transform: rotate(30deg);
            transform: rotate(30deg);
          }

          .product-device::before {
            position: absolute;
            top: 10%;
            right: 10px;
            bottom: 10%;
            left: 10px;
            content: "";
            background-color: rgba(255, 255, 255, .1);
            border-radius: 5px;
          }

          .product-device-2 {
            top: -25%;
            right: auto;
            bottom: 0;
            left: 5%;
            background-color: #e5e5e5;
          }


          /*
           * Extra utilities
           */

          .flex-equal > * {
            -ms-flex: 1;
            flex: 1;
          }
          @media (min-width: 768px) {
            .flex-md-equal > * {
              -ms-flex: 1;
              flex: 1;
            }
          }

          .overflow-hidden { overflow: hidden; }


          </style>

          <div class="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-light">
          <div class="col-md-5 p-lg-5 mx-auto my-5">
            <h1 class="display-4 font-weight-normal">Heading to a store?</h1>
            <p class="lead font-weight-normal">Check-in, avoid a line, and get a great deal.</p>
            <a href="appt"><button class="btn btn-outline-secondary">Schedule Appointment</button></a>
            <button class="btn btn-primary" id="locationsButton">Locations</button>

          </div>
          <div class="product-device shadow-sm d-none d-md-block"></div>
          <div class="product-device product-device-2 shadow-sm d-none d-md-block"></div>
        </div>



        <!--Carousel Wrapper-->
<div id="carousel-example-2" class="carousel slide carousel-fade" data-ride="carousel">
  <!--Indicators-->
  <ol class="carousel-indicators">
    <li data-target="#carousel-example-2" data-slide-to="0" class="active"></li>
    <li data-target="#carousel-example-2" data-slide-to="1"></li>
    <li data-target="#carousel-example-2" data-slide-to="2"></li>
  </ol>
  <!--/.Indicators-->
  <!--Slides-->
  <div class="carousel-inner" role="listbox">
    <div class="carousel-item active">
      <div class="view">
        <img class="d-block w-100" src="assets/tmob_store.jpg" alt="First slide">
        <div class="mask rgba-black-strong"></div>
      </div>
      <div class="carousel-caption">
        <h3 class="h3-responsive">Get a New Device</h3>
        <p>Shop Now</p>
      </div>
    </div>
    <div class="carousel-item">
      <!--Mask color-->
      <div class="view">
        <img class="d-block w-100" src="assets/tmob_america.jpg" alt="Second slide">
        <div class="mask rgba-black-strong"></div>
      </div>
      <div class="carousel-caption">
        <h3 class="h3-responsive">T-Mobile has You Covered</h3>
        <p>Nationwide Coverage</p>
      </div>
    </div>
    <div class="carousel-item">
      <!--Mask color-->
      <div class="view">
        <img class="d-block w-100" src="assets/tmob_char.jpg" alt="Third slide">
        <div class="mask rgba-black-strong"></div>
      </div>
      <div class="carousel-caption">
        <h3 class="h3-responsive">Get Awesome Deals</h3>
        <p>Every Tuesday</p>
      </div>
    </div>
  </div>
  <!--/.Slides-->
  <!--Controls-->
  <a class="carousel-control-prev" href="#carousel-example-2" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carousel-example-2" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
  <!--/.Controls-->
</div>
<!--/.Carousel Wrapper-->



<footer class="container py-5">
  <div class="row">
    <div class="col-12 col-md">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="d-block mb-2" role="img" viewBox="0 0 24 24" focusable="false"><title>Product</title><circle cx="12" cy="12" r="10"/><path d="M14.31 8l5.74 9.94M9.69 8h11.48M7.38 12l5.74-9.94M9.69 16L3.95 6.06M14.31 16H2.83m13.79-4l-5.74 9.94"/></svg>
      <small class="d-block mb-3 text-muted">&copy; 2019</small>
    </div>
    <div class="col-6 col-md">
      <h5>Features</h5>
      <ul class="list-unstyled text-small">
        <li><a class="text-muted" href="#">Shop Phones</a></li>
        <li><a class="text-muted" href="#">Shop Tablets and Watches</a></li>
        <li><a class="text-muted" href="#">My T-Mobile</a></li>
      </ul>
    </div>
    <div class="col-6 col-md">
      <h5>Resources</h5>
      <ul class="list-unstyled text-small">
        <li><a class="text-muted" href="#">Investor Relations</a></li>
        <li><a class="text-muted" href="#">Press</a></li>
        <li><a class="text-muted" href="#">Careers</a></li>
      </ul>
    </div>
    <div class="col-6 col-md">
      <h5>About</h5>
      <ul class="list-unstyled text-small">
        <li><a class="text-muted" href="#">Our Team</a></li>
        <li><a class="text-muted" href="#">Locations</a></li>
        <li><a class="text-muted" href="#">Privacy</a></li>
        <li><a class="text-muted" href="#">Terms</a></li>
      </ul>
    </div>
  </div>
</footer>





        `);
    }
}


// <br><br><br><h1 class="white-text">t-mobile</h1><br><br><br>
// <button class="btn btn-primary" id="startButton">Start</button>
// <br><br><br>
// <button class="btn btn-primary" id="locationsButton">Locations</button>
// <br><br><br>
// <button class="btn btn-primary" id="williamsButton">Williams Street</button>
