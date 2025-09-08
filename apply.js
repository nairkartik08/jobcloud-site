document.getElementById("apply-form").addEventListener("submit", async (e) => {
  e.preventDefault();

  const jobId = localStorage.getItem("selectedJobId");
  if (!jobId) {
    alert("No job selected!");
    return;
  }

  const application = {
    job: { id: Number(jobId) },
    applicantName: document.getElementById("applicantName").value,
    email: document.getElementById("email").value,
    resumeLink: document.getElementById("resumeLink").value
  };

  try {
    const res = await fetch("http://localhost:8080/api/applications", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(application)
    });

    if (res.ok) {
      alert("Application submitted successfully!");
      localStorage.removeItem("selectedJobId");
      window.location.href = "index.html";
    } else {
      alert("Application failed. Try again.");
    }
  } catch (err) {
    console.error("Error:", err);
    alert("Error submitting application.");
  }
});
