import debugLog from "../_debugLog";
import { DateTime } from "luxon";

export default () => {
  return {
    searchEnginesList: {
      duckduckgo: "https://duckduckgo.com/",
      google: "https://www.google.com/search",
      bing: "https://www.bing.com/search",
      github: "https://github.com/search",
    },
    searchEngine: "duckduckgo",
    searchEngineIcon: "https://duckduckgo.com/favicon.ico",

    theme: {
      dark: true,
      name: "dark",
    },

    today: {
      fullDate: DateTime.local().toLocaleString(DateTime.DATE_FULL),
      day: DateTime.local().toLocaleString(DateTime.DATE_HUGE),
      time: DateTime.local().toLocaleString(DateTime.TIME_SIMPLE),
    },

    updateTime() {
      let that = this;
      setInterval(() => {
        let today = DateTime.local();
        that.today = {
          fullDate: today.toLocaleString(DateTime.DATE_FULL),
          day: today.toLocaleString(DateTime.DATE_HUGE),
          time: today.toLocaleString(DateTime.TIME_SIMPLE),
        };
      }, 1000);
    },

    getThemeName() {
      if (localStorage.getItem("theme")) {
        this.theme.name = localStorage.getItem("theme");
        this.theme.dark = this.theme.name === "dark";
      } else if (
        window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: dark)").matches
      ) {
        this.theme.name = "dark";
        this.theme.dark = true;
      }

      return this.theme.dark ? "dark" : "light";
    },

    toggleTheme() {
      this.theme.dark = !this.theme.dark;
      this.theme.name = this.theme.dark ? "dark" : "light";
      localStorage.setItem("theme", this.theme.name);
      document.documentElement.setAttribute(
        "data-theme",
        this.theme.name
      );
    },

    toggleSearchEngine() {
      switch (this.searchEngine) {
        case "duckduckgo":
          this.searchEngine = "google";
          break;
        case "google":
          this.searchEngine = "bing";
          break;
        case "bing":
          this.searchEngine = "github";
          break;
        case "github":
          this.searchEngine = "duckduckgo";
          break;
      }
      this.getFavicon(this.searchEnginesList[this.searchEngine]);
    },

    getFavicon(link) {
      const domainName = link.replace(/(^\w+:|^)\/\//, "").split("/")[0];
      this.searchEngineIcon = `https://icons.duckduckgo.com/ip3/${domainName}.ico`;
    },

    submitSearchEngine() {
      const searchEngine = this.searchEnginesList[this.searchEngine];
      const searchQuery = this.$refs.searchInput.value;

      if (searchQuery.startsWith("http")) {
        location.href = searchQuery;
        return;
      }

      location.href = `${searchEngine}?q=${searchQuery}`;
    },

    init() {
      debugLog("AlpineJS DOM init");
      this.updateTime();
      document.documentElement.classList.remove("dark");
      document.documentElement.setAttribute(
        "data-theme",
        this.getThemeName()
      );
    },
  };
};
