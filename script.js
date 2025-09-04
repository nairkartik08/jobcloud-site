document.addEventListener("DOMContentLoaded", () => {
  console.log("✅ Script loaded");

  const jobSearchForm = document.getElementById("jobSearchForm");
  const companyInput = document.getElementById("companySearch");
  const locationInput = document.getElementById("locationSearch");
  const jobResults = document.getElementById("jobResults");

  // Sample job data
  const jobs = [
    { title: "Software Engineer", company: "Google", location: "Bengaluru", page: "google.html" },
    { title: "UI/UX Designer", company: "Adobe", location: "Remote", page: "adobe.html" },
    { title: "Data Analyst", company: "Amazon", location: "Hyderabad", page: "amazon.html" },
    { title: "Marketing Intern", company: "Flipkart", location: "Mumbai", page: "flipkart.html" },
    { title: "Technical Writer", company: "Zoho", location: "Chennai", page: "zoho.html" },
    { title: "Cloud Engineer", company: "Microsoft", location: "Pune", page: "microsoft.html" },
    { title: "Web Developer", company: "TCS", location: "Mumbai", page: "tcs.html" }
  ];

  // Handle search
  jobSearchForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const companySearch = companyInput.value.toLowerCase();
    const locationSearch = locationInput.value.toLowerCase();

    // Find a match
    const match = jobs.find(job =>
      job.company.toLowerCase().includes(companySearch) &&
      job.location.toLowerCase().includes(locationSearch)
    );

    if (match) {
      // ✅ Redirect to the job/company page
      window.location.href = match.page;
    } else {
      jobResults.innerHTML = `<p style="color:red;">No jobs found</p>`;
    }
  });
});
