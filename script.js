document.addEventListener("DOMContentLoaded", () => {
  const searchForm = document.getElementById("jobSearchForm");
  const companyInput = document.getElementById("companySearch");
  const locationInput = document.getElementById("locationSearch");
  const jobResults = document.getElementById("jobResults");

  const jobs = [
    { title: "Software Engineer", company: "TCS", location: "Mumbai" },
    { title: "Data Analyst", company: "TCS", location: "Pune" },
    { title: "Web Developer", company: "Infosys", location: "Bangalore" },
    { title: "System Engineer", company: "Wipro", location: "Hyderabad" },
    { title: "Finance Executive", company: "TCS", location: "Delhi" },
    { title: "Marketing Manager", company: "Reliance", location: "Mumbai" }
  ];

  searchForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const companyQuery = companyInput.value.trim().toLowerCase();
    const locationQuery = locationInput.value.trim().toLowerCase();

    const filteredJobs = jobs.filter((job) => {
      const matchesCompany =
        companyQuery === "" ||
        job.company.toLowerCase().includes(companyQuery) ||
        job.title.toLowerCase().includes(companyQuery);

      const matchesLocation =
        locationQuery === "" ||
        job.location.toLowerCase().includes(locationQuery);

      return matchesCompany && matchesLocation;
    });

    jobResults.innerHTML = "";
    if (filteredJobs.length > 0) {
      filteredJobs.forEach((job) => {
        const jobCard = document.createElement("div");
        jobCard.classList.add("job-card");
        jobCard.innerHTML = `
          <h3>${job.title}</h3>
          <p><strong>Company:</strong> ${job.company}</p>
          <p><strong>Location:</strong> ${job.location}</p>
        `;
        jobResults.appendChild(jobCard);
      });
    } else {
      jobResults.innerHTML = "<p>No jobs found for your search.</p>";
    }
  });
});


