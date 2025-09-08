async function loadJobs() {
  try {
    const res = await fetch("http://localhost:8080/api/jobs");
    if (!res.ok) throw new Error("Failed to fetch jobs");

    const jobs = await res.json();
    const container = document.getElementById("job-list");
    container.innerHTML = "";

    jobs.forEach(job => {
      container.innerHTML += `
        <div class="job-card">
          <h3>${job.title}</h3>
          <p><b>Company:</b> ${job.company}</p>
          <p><b>Location:</b> ${job.location}</p>
          <p><b>Category:</b> ${job.category}</p>
          <p>${job.description}</p>
          <button onclick="goToApply(${job.id})">Apply</button>
        </div>
      `;
    });
  } catch (err) {
    console.error("Error:", err);
  }
}

function goToApply(jobId) {
  localStorage.setItem("selectedJobId", jobId);
  window.location.href = "application.html";
}

// Auto-load jobs when page opens
loadJobs();
