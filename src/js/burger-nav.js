export const burgerNav = () => {
  const isBurger = window.matchMedia("(max-width: 1300px)");
  let isOpen = false;
  const burgerTrigger = document.querySelector("[data-burger-nav]");

  const toggleNavigation = () => {
    document.body.classList.toggle("nav-open", !isOpen);
    isOpen = !isOpen;
  };

  const handleOutside = (e) => {
    if (e.target.closest("[data-navigation]") || e.target === burgerTrigger) return;
    isOpen && document.body.classList.remove("nav-open");
    isOpen = false;
  };

  const handleEsc = (e) => {
    if (isOpen && e.key === "Escape") return toggleNavigation(false);
  };

  const handleDropdown = () => {
    document.querySelector("[data-nav-sub-list]").classList.toggle("nav-sub-list-open");
  };

  const applyListeners = () => {
    if (isBurger.matches) {
      burgerTrigger.addEventListener("click", toggleNavigation);
      document.addEventListener("keydown", handleEsc);
      document.addEventListener("click", handleOutside);
      document.querySelector("[data-dropdown-trigger]").addEventListener("click", handleDropdown);
    } else {
      burgerTrigger.removeEventListener("click", toggleNavigation);
      document.removeEventListener("keydown", handleEsc);
      document.removeEventListener("click", handleOutside);
      document.querySelector("[data-dropdown-trigger]").removeEventListener("click", handleDropdown);
      isOpen && toggleNavigation();
    }
  };

  applyListeners();

  isBurger.addEventListener("change", applyListeners);
};
