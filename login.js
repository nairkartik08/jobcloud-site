document.getElementById("login-form").addEventListener("submit", async (e) => {
  e.preventDefault();

  const user = {
    email: document.getElementById("email").value,
    password: document.getElementById("password").value
  };

  try {
    const res = await fetch("http://localhost:8080/api/users/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user)
    });

    if (res.ok) {
      const loggedUser = await res.json();
      localStorage.setItem("loggedInUser", JSON.stringify(loggedUser));
      alert("Login successful!");
      window.location.href = "index.html";
    } else {
      alert("Invalid credentials.");
    }
  } catch (err) {
    console.error(err);
    alert("Error while logging in.");
  }
});
