function searchJob(event) {
  event.preventDefault(); 
  let companyInput = document.getElementById("companyInput").value.toLowerCase().trim();
  let locationInput = document.getElementById("locationInput").value.toLowerCase().trim();

  const companyLocations = {
    'tcs': ['bengaluru', 'hyderabad', 'mumbai', 'pune', 'chennai', 'noida'],
    'infosys': ['bengaluru', 'hyderabad', 'pune', 'chennai', 'mysuru', 'gurgaon'],
    'microsoft': ['hyderabad', 'bengaluru', 'mumbai', 'pune', 'noida', 'chennai'],
    'amazon': ['bengaluru', 'hyderabad', 'delhi', 'mumbai', 'pune', 'chennai'],
    'google': ['bengaluru', 'hyderabad', 'gurgaon', 'mumbai', 'chennai']
  };

  if (companyLocations[companyInput] && companyLocations[companyInput].includes(locationInput)) {
    // If a company and location match are found, redirect to the company page
    window.location.href = `${companyInput}-jobs.html`;
  } else if (companyLocations[companyInput]) {
    
    alert(`No job postings found for ${companyInput} in ${locationInput}! Please try another location.`);
  } else {
  
    alert("No job postings found for this company! Please try a different company name.");
  }
}
