

function searchJob(event) {
  event.preventDefault(); 
  let input = document.getElementById("companyInput").value.toLowerCase().trim();

  
  if (input.includes("google")) {
    window.location.href = "google-jobs.html";
  } else if (input.includes("microsoft")) {
    window.location.href = "microsoft-jobs.html";
  } else if (input.includes("amazon")) {
    window.location.href = "amazon-jobs.html";
  } else if (input.includes("tcs")) {
    window.location.href = "tcs-jobs.html";
  } else if (input.includes("infosys")) {
    window.location.href = "infosys-jobs.html";
  } else {
    alert("No job postings found for this company!");
  }
}
