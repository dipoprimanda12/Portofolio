// === Filter Projects ===
document.querySelectorAll(".filter-btn").forEach((button) => {
  button.addEventListener("click", () => {
    const filter = button.getAttribute("data-filter");

    // Aktifkan tombol yang diklik
    document
      .querySelectorAll(".filter-btn")
      .forEach((btn) => btn.classList.remove("active"));
    button.classList.add("active");

    // Tampilkan atau sembunyikan project-card berdasarkan filter
    document.querySelectorAll(".project-card").forEach((card) => {
      const category = card.getAttribute("data-category");
      card.style.display =
        filter === "all" || filter === category ? "block" : "none";
    });
  });
});

// === Back to Top Button ===
const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
  const scrollY = window.scrollY || document.documentElement.scrollTop;
  backToTop.style.display = scrollY > 200 ? "block" : "none";
});

backToTop?.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
