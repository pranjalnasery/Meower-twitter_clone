//client side java scrit me document word use hoga
const form = document.querySelector("form");
const loadingelement = document.querySelector(".loading"); //agar class name dalna hai toh . use krna padega
loadingelement.style.display = "none"; //hiding the element
form.addEventListener("submit", (event) => {
  event.preventDefault(); //Stops the form from reloading the page (default behavior).
  const formData = new FormData(form);
  const name = formData.get("name");
  const content = formData.get("content");

  const mew = {
    //object create kiya hai
    name,
    content,
  };
  console.log(mew);
  //loadingelement.style.display = "";  //to show the hidden object
  form.style.display = "none";
});
