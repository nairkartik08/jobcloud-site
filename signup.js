document.getElementById("signup-form").addEventListener("submit", async (e) => {
  e.preventDefault();

  const user = {
    fullName: document.getElementById("fullName").value,
    email: document.getElementById("email").value,
    password: document.getElementById("password").value
  };

  try {
    const res = await fetch("http://localhost:8080/api/users/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user)
    });

    if (res.ok) {
      const savedUser = await res.json();
      localStorage.setItem("loggedInUser", JSON.stringify(savedUser));
      alert("Signup successful!");
      window.location.href = "index.html";
    } else {
      alert("Signup failed.");
    }
  } catch (err) {
    console.error(err);
    alert("Error while signing up.");
  }
});
