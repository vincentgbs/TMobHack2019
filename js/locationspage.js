globalVariable.locationspage = {
    render: function() {
        $("body").css('background-image', '');
        $("#root").html(
            `<h1>Locations</h1>
        <input type="text" id="locationsInput">
        <hr>
        </div>
        <div class="container">
  <h2>Locations</h2>
  <p>Find a T-Mobile store near you</p>            
  <table class="table table-striped">
    <thead>
      <tr>
        <th>Store Name</th>
        <th>Address</th>
        <th>Distance</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Fifth & Williams</td>
        <td>85 5th St NW Ste A, Atlanta, GA, 30308</td>
        <td>0.38 miles</td>
        <td><button class="btn btn-primary" id="williamsButton">Check-in</button></td>
      </tr>
      <tr>
        <td>Peachtree & 8th</td>
        <td>903 Peachtree St Ste 500, Atlanta, GA, 30309</td>
        <td>0.62 miles</td>
        <td><button class="btn btn-primary" id="williamsButton">Check-in</button></td>
      </tr>
      <tr>
        <td>Monroe Dr NE & Piedmont Ave NE</td>
        <td>1579 Monroe Dr NE Ste G, Atlanta, GA, 30324</td>
        <td>1.82 miles</td>
        <td><button class="btn btn-primary" id="williamsButton">Check-in</button></td>
      </tr>
    </tbody>
  </table>
</div>
        `
        );
    },
    // getInput: function() {
    //     $("#displayOptions").text($("#questionInput").val());
    // }
}