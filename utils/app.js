import { addDocument } from "/utils/db.js";

const prevBtn = document.getElementById("prev");
const form_1 = document.getElementById("container1");
const form_2 = document.getElementById("farmerForm");

form_1.addEventListener("submit", (e) => {
  e.preventDefault();
  document.getElementById("container1").style.display = "none";
  document.getElementById("container2").style.display = "block";
});

form_2.addEventListener("submit", async (e) => {

  e.preventDefault();
  const data = loadForm();
  const res = await addDocument(data);
  if (res) {
    alert("successfully sent");
    window.location.href = '/index.html';
  } else {
    alert("something went wrong");
  }
});

prevBtn.addEventListener("click", () => {
  document.getElementById("container2").style.display = "none";
  document.getElementById("container1").style.display = "block";
});

const loadForm = () => {
  const firstName = document.getElementById("firstName").value;
  const phone = document.getElementById("phone").value;
  const aadhar = document.getElementById("aadhar").value;
  const email = document.getElementById("email").value;
  const dob = document.getElementById("dob").value;
  const surveyNum = document.getElementById("surveyNum").value;
  const image = document.getElementById("image").value;
  const fieldUnit = document.getElementById("fieldUnit").value;
  const soilType = document.getElementById("soilType").value;
  const fieldArea = document.getElementById("fieldArea").value;
  const ph = document.getElementById("ph").value;

  const formData = {
    firstName: firstName,
    phone: phone,
    aadhar: aadhar,
    email: email,
    dob: dob,
    surveyNum: surveyNum,
    image: image,
    fieldUnit: fieldUnit,
    soilType: soilType,
    fieldArea: fieldArea,
    phone: ph,
  };

  return formData;
};
