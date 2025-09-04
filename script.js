document.addEventListener("DOMContentLoaded", () => {
  const searchForm = document.getElementById("searchForm");
  const companyInput = document.getElementById("companyInput");
  const locationInput = document.getElementById("locationInput");
  const jobResults = document.getElementById("jobResults");

  // Sample job database
  const jobs = [
    { title: "Software Engineer", company: "TCS", location: "Mumbai" },
    { title: "Data Analyst", company: "TCS", location: "Pune" },
    { title: "Web Developer", company: "Infosys", location: "Bangalore" },
    { title: "System Engineer", company: "Wipro", location: "Hyderabad" },
    { title: "Finance Executive", company: "TCS", location: "Delhi" },
    { title: "Marketing Manager", company: "Reliance", location: "Mumbai" }
  ];

  // Handle search
  searchForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const companyQuery = companyInput.value.trim().toLowerCase();
    const locationQuery = locationInput.value.trim().toLowerCase();

    // Filter jobs based on company and location
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

    // Display results
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

