function sendMail(formNumber) {
  var params = {
    name: document.getElementById("name" + formNumber).value,
    phone: document.getElementById("phone" + formNumber).value,
    email: document.getElementById("email" + formNumber).value,
    message: document.getElementById("message" + formNumber).value,
  };

  const serviceID = "service_mgydpll"; 
  const templateID = "template_s5t51vp"; // Update with your template ID
  emailjs.send(serviceID, templateID, params)
    .then((res) => {
      // Clear the form fields after successful submission
      document.getElementById("name" + formNumber).value = "";
      document.getElementById("phone" + formNumber).value = "";
      document.getElementById("email" + formNumber).value = "";
      document.getElementById("message" + formNumber).value = "";
      console.log(res);
      alert("Your message was sent successfully!");
    })
    .catch((err) => console.error("Error:", err));
}