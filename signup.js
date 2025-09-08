document.getElementById("signup-form").addEventListener("submit", async (e) => {
  e.preventDefault();

  const user = {
    name: document.getElementById("name").value,  // match User.java
    email: document.getElementById("email").value,
    password: document.getElementById("password").value
  };

  try {
    const response = await fetch("http://localhost:8080/api/users/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user)
    });

    if (response.ok) {
      alert("Signup successful!");
      window.location.href = "login.html";
    } else {
      const err = await response.json();
      alert("Signup failed: " + (err.message || "Unknown error"));
    }
  } catch (error) {
    console.error("Error:", error);
    alert("Something went wrong!");
  }
});
