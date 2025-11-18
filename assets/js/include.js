// Simple include loader: replace any element with data-include="path" by fetching that path.
(function () {
  async function includeAll() {
    const els = document.querySelectorAll("[data-include]");
    for (const el of els) {
      const path = el.getAttribute("data-include");
      try {
        const res = await fetch(path);
        if (!res.ok) throw new Error("Not found: " + path);
        const html = await res.text();
        el.innerHTML = html;
      } catch (e) {
        console.warn("Include failed", path, e);
      }
    }
    // after includes, set active nav link & cart count if present
    setActiveNav();
    updateCartCount();
  }

  function setActiveNav() {
    const path = location.pathname.split("/").pop() || "index.html";
    document.querySelectorAll("nav a.nav-link").forEach((a) => {
      const href = a.getAttribute("href");
      if (!href) return;
      if (href === path || (href.endsWith(path) && path !== ""))
        a.classList.add("active");
      else a.classList.remove("active");
    });
  }

  function updateCartCount() {
    try {
      const cart = JSON.parse(localStorage.getItem("aj_cart") || "[]");
      const count = cart.reduce((s, i) => s + (i.qty || 1), 0);
      const el = document.getElementById("cartCount");
      if (el) el.textContent = count;
      window.openCart = () => {
        alert("Cart items: " + count + " (Open order page to checkout)");
      };
    } catch (e) {
      /* ignore */
    }
  }

  if (document.readyState === "loading")
    document.addEventListener("DOMContentLoaded", includeAll);
  else includeAll();
})();
