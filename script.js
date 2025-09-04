document.addEventListener("DOMContentLoaded", () => {
  console.log("✅ Script loaded");

  const jobSearchForm = document.getElementById("jobSearchForm");
  const companyInput = document.getElementById("companySearch");
  const locationInput = document.getElementById("locationSearch");
  const jobResults = document.getElementById("jobResults");

  // Sample job data
  const jobs = [
    { title: "Software Engineer", company: "Google", location: "Bengaluru" },
    { title: "UI/UX Designer", company: "Adobe", location: "Remote" },
    { title: "Data Analyst", company: "Amazon", location: "Hyderabad" },
    { title: "Marketing Intern", company: "Flipkart", location: "Mumbai" },
    { title: "Technical Writer", company: "Zoho", location: "Chennai" },
    { title: "Cloud Engineer", company: "Microsoft", location: "Pune" },
    { title: "Web Developer", company: "TCS", location: "Mumbai" }
  ];

  // Handle search
  jobSearchForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const companySearch = companyInput.value.toLowerCase();
    const locationSearch = locationInput.value.toLowerCase();

    jobResults.innerHTML = ""; // clear old results

    const filtered = jobs.filter(job =>
      job.company.toLowerCase().includes(companySearch) &&
      job.location.toLowerCase().includes(locationSearch)
    );

    if (filtered.length > 0) {
      filtered.forEach(job => {
        const div = document.createElement("div");
        div.classList.add("job-card");
        div.innerHTML = `
          <h3>${job.title}</h3>
          <p>${job.company} • ${job.location}</p>
          <button class="apply-btn">Apply Now</button>
        `;
        jobResults.appendChild(div);
      });
    } else {
      jobResults.innerHTML = `<p style="color:red;">No jobs found</p>`;
    }
  });
});
