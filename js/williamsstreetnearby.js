globalVariable.williams = {
    render: function() {
        $("body").css('background-image', '');
        $("#root").html(
            `<br><br><br>
        <div class="container">
  <h2>What's Nearby</h2>
  <p>Get deals at local spots</p>            
  <table class="table table-striped">
    <thead>
      <tr>
        <th>Name</th>
        <th>Address</th>
        <th>Distance</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Moe's Southwest Grill</td>
        <td>85 5th St NW, Atlanta, GA, 30308</td>
        <td>0.00 miles</td>
        <td>
          <button class="btn btn-danger" id="moesButton">$2 Off</button>
        </td>
      </tr>
      <tr>
        <td>Waffle House</td>
        <td>66 5th St NW, Atlanta, GA 30308</td>
        <td>0.01 miles</td>
        <td>
        </td>
      </tr>
      <tr>
        <td>Starbucks</td>
        <td>48 5th St NW, Atlanta, GA 30308</td>
        <td>0.04 miles</td>
        <td>
        </td>
      </tr>
      <tr>
        <td>Ray's New York Pizza</td>
        <td>26 5th St NW, Atlanta, GA 30308</td>
        <td>0.05 miles</td>
        <td>
          <button class="btn btn-danger" id="williamsButton">Free slice with $20 purchase</button>
        </td>
      </tr>
      <tr>
        <td>Insomnia Cookies</td>
        <td>930 Spring St NW Ste 2, Atlanta, GA 30309</td>
        <td>0.11 miles</td>
        <td>
          <button class="btn btn-danger" id="williamsButton">10% Off</button>
        </td>
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