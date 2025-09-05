const params = new URLSearchParams(window.location.search);
const job = params.get("job");
if (job) {
  document.getElementById("jobTitle").innerText = job;
}


document.getElementById("applicationForm").addEventListener("submit", function(event) {
  event.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;
  const coverLetter = document.getElementById("coverLetter").value;
  const resume = document.getElementById("resume").files[0];

  alert(`✅ Application Submitted!\n\nJob: ${job}\nName: ${name}\nEmail: ${email}\nPhone: ${phone}\nResume: ${resume ? resume.name : "Not uploaded"}\nCover Letter: ${coverLetter}`);

  document.getElementById("applicationForm").reset();
});
