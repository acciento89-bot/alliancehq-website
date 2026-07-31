(() => {
  const config = window.ALLIANCEHQ_CONFIG || {};
  const isSnowflake = (value) => /^\d{17,20}$/.test(String(value || ""));
  const isUrl = (value) => /^https:\/\//i.test(String(value || ""));

  const installUrl = isSnowflake(config.appId)
    ? `https://discord.com/oauth2/authorize?client_id=${encodeURIComponent(config.appId)}&permissions=268520448&integration_type=0&scope=bot%20applications.commands`
    : null;
  const storeUrl = isSnowflake(config.appId) && isSnowflake(config.proSkuId)
    ? `https://discord.com/application-directory/${config.appId}/store/${config.proSkuId}`
    : isSnowflake(config.appId)
      ? `https://discord.com/application-directory/${config.appId}/store`
      : null;

  const links = {
    install: installUrl,
    store: storeUrl,
    dashboard: isUrl(config.dashboardUrl) ? config.dashboardUrl : "https://dashboard.alliance-hq.com",
    support: isUrl(config.supportUrl) ? config.supportUrl : null,
  };

  document.querySelectorAll("[data-link]").forEach((element) => {
    const type = element.dataset.link;
    const href = links[type];
    if (href) {
      element.href = href;
    } else {
      element.href = "#";
      element.setAttribute("aria-disabled", "true");
      element.title = "Dieser Link wird vor dem Launch in site-config.js konfiguriert.";
      element.addEventListener("click", (event) => {
        event.preventDefault();
        window.alert("Dieser AllianceHQ-Link ist noch nicht konfiguriert.");
      });
    }
  });

  document.querySelectorAll("[data-price]").forEach((element) => {
    const amount = Number(config.priceUsd || "7.99");
    const locale = element.dataset.priceLocale === "de" ? "de-DE" : "en-US";
    element.textContent = new Intl.NumberFormat(locale, { style: "currency", currency: "USD" }).format(amount);
  });

  const navToggle = document.querySelector("[data-nav-toggle]");
  const nav = document.querySelector("[data-nav]");
  navToggle?.addEventListener("click", () => nav?.classList.toggle("open"));

  const languageButtons = document.querySelectorAll("[data-language]");
  const languageSections = document.querySelectorAll("[data-lang-section]");
  const applyLanguage = (language) => {
    languageSections.forEach((section) => {
      section.hidden = section.dataset.langSection !== language;
    });
    languageButtons.forEach((button) => {
      button.classList.toggle("active", button.dataset.language === language);
    });
    document.documentElement.lang = language;
    localStorage.setItem("alliancehq-language", language);
  };
  if (languageSections.length) {
    const saved = localStorage.getItem("alliancehq-language");
    applyLanguage(saved === "en" ? "en" : "de");
    languageButtons.forEach((button) => button.addEventListener("click", () => applyLanguage(button.dataset.language)));
  }
})();
