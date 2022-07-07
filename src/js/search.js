export const toggleSearch = () => {
  const setActive = (e) => e.target.parentElement.classList.toggle("search-active");
  document.querySelector("[data-search-trigger]").addEventListener("click", setActive);
};
