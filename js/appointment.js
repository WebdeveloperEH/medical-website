/*-----------------------------------------------------------------------------------*/
/* 		Appointment Form
/*-----------------------------------------------------------------------------------*/
$(function () {
  if ($("#appointment").length) {
    $("#appointment .form-control")
      .tooltip({ placement: "top", trigger: "manual" })
      .tooltip("hide");
    $("#appointment .form-control").blur(function () {
      $(this).tooltip({ placement: "top", trigger: "manual" }).tooltip("hide");
    });
    $("#appointment #btn_submit").click(function () {
      // validate and process form
      // first hide any error messages
      //$('#appointment .error').hide();
      // name field
      var name = $("#appointment input#name").val();
      if (name == "" || name == "Name") {
        $("#appointment input#name")
          .tooltip({ placement: "bottom", trigger: "manual" })
          .tooltip("show");
        $("#appointment input#name").focus();
        $("#appointment input#name").addClass("highlight");
        return false;
      } else {
        $("#appointment input#name").removeClass("highlight");
      }
      // email field
      var email = $("#appointment input#email").val();
      var filter =
        /^[a-zA-Z0-9]+[a-zA-Z0-9_.-]+[a-zA-Z0-9_-]+@[a-zA-Z0-9]+[a-zA-Z0-9.-]+[a-zA-Z0-9]+.[a-z]{2,4}$/;
      //console.log(filter.test(email));
      if (!filter.test(email)) {
        $("#appointment input#email")
          .tooltip({ placement: "bottom", trigger: "manual" })
          .tooltip("show");
        $("#appointment input#email").focus();
        $("#appointment input#email").addClass("highlight");
        return false;
      } else {
        $("#appointment input#email").removeClass("highlight");
      }
      // phone
      var phone = $("#appointment input#phone").val();
      if (phone == "" || phone == "123") {
        $("#appointment input#phone")
          .tooltip({ placement: "bottom", trigger: "manual" })
          .tooltip("show");
        $("#appointment input#phone").focus();
        $("#appointment input#phone").addClass("highlight");
        return false;
      } else {
        $("#appointment input#phone").removeClass("highlight");
      }
      // select1
      var select1 = $("#appointment select#select1").val();
      if (select1 == "" || select1 == "Department Type") {
        $("#appointment select#select1")
          .tooltip({ placement: "bottom", trigger: "manual" })
          .tooltip("show");
        $("#appointment select#select1").focus();
        $("#appointment select#select1").addClass("highlight");
        return false;
      } else {
        $("#appointment input#select1").removeClass("highlight");
      }
      // date
      var date = $("#appointment input#datepicker").val();
      if (date == "" || date == "") {
        $("#appointment input#datepicker")
          .tooltip({ placement: "bottom", trigger: "manual" })
          .tooltip("show");
        $("#appointment input#datepicker").focus();
        $("#appointment input#datepicker").addClass("highlight");
        return false;
      } else {
        $("#appointment input#datepicker").removeClass("highlight");
      }
      // message textarea
      var message = $("#appointment textarea#message").val();
      if (message == "" || message == "Message") {
        $("#appointment textarea#message")
          .tooltip({ placement: "bottom", trigger: "manual" })
          .tooltip("show");
        $("#appointment textarea#message").focus();
        $("#appointment textarea#message").addClass("highlight");
        return false;
      } else {
        $("#appointment textarea#message").removeClass("highlight");
      }
      var dataString =
        "name=" +
        name +
        "&email=" +
        email +
        "&phone=" +
        phone +
        "&select1=" +
        select1 +
        "&date=" +
        date +
        "&message=" +
        message;
      //alert (dataString);return false;

      $.ajax({
        type: "POST",
        url: "php/appointment.php",
        data: dataString,
        success: function () {
          $("#appointment").prepend(
            '<div class="alert alert-success fade in"><button class="close" data-dismiss="alert" type="button">&times;</button><strong>Form Submitted!</strong> We will be in touch soon.</div>'
          );
          $("#appointment")[0].reset();
          window.location.href = "index.html";
        },
      });
      return false;
    });
  }
});
