const accountMap = new Map();
const infomap = new Map();
infomap.set(1, ["About Us", "We are disabled because of Priansh and the fact that Vivaan likes men"]);
infomap.set(2, ["Our Goal", "We want Vivaan to stop liking men"]);

fetch("Accounts.txt")
  .then(r => r.text())
  .then(text => {
    const lines = text.split("\n");
    lines.forEach(line => {
      const [key, value] = line.split(",");
      if (key && value) accountMap.set(key.trim(), value.trim());
    });
  })
  .catch(err => console.error("Error loading Accounts.txt:", err));

document.addEventListener("DOMContentLoaded", () => {
  const loginButton = document.getElementById("Login");
  const correct = document.getElementById("correct");

  if (loginButton && correct) {
    loginButton.addEventListener("click", () => {
      const usernameEl = document.getElementById("username");
      const passwordEl = document.getElementById("password");
      if (!usernameEl || !passwordEl) return;
      const username = usernameEl.value;
      const password = passwordEl.value;

      if (accountMap.size === 0) {
        correct.textContent = "Accounts not loaded yet. Please wait.";
        return;
      }

      if (accountMap.has(username) && accountMap.get(username) === password) {
        window.location.href = "home.html";
      } else {
        correct.textContent = "Incorrect username or password. Try again";
      }
    });
  }

  const jobButton = document.getElementById("Jobbutton");
  const socialButton = document.getElementById("Socialbutton");
  const profileButton = document.getElementById("profilebutton");
  const logoutButton = document.getElementById("logoutbutton");

  if (profileButton) {
    profileButton.addEventListener('click', () => {
      window.location.href = "profile.html";
    });
  } 
  if (logoutButton) {
    logoutButton.addEventListener('click', () => {
      window.location.href = "login.html";
    });
  }
  if (jobButton) jobButton.addEventListener("click", () => {
    window.location.href = "JobSearch/Jobhome.html";
  });

  if (socialButton) socialButton.addEventListener("click", () => {
    window.location.href = "SocialMedia/Socialhome.html";
  }); 

  const infobuttons = document.getElementsByClassName("infobutton");
  if (infobuttons && infobuttons.length) {
    let i = 1;
    for (const btn of infobuttons) {
      const index = btn.dataset.index ? Number(btn.dataset.index) : i;
      btn.addEventListener("click", () => {
        const values = infomap.get(index);
        if (!values) return;
        document.getElementById("infoheading").textContent = values[0];
        document.getElementById("infop").textContent = values[1];
      });
      i++;
    }
  }
});
