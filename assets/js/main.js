// Query Selectors
const doc = document;
const getId = "getElementById";
const blogUrl = doc[getId]("blogUrl");
const generatedSitemap = doc[getId]("generatedSitemap");
const generateBtn = doc[getId]("generateBtn");
const copyBtn = doc[getId]("copyBtn");
const clearBtn = doc[getId]("clearBtn");
const generatedSitemapHidden = doc[getId]("generatedSitemapHidden");

// Generate Button
generateBtn.addEventListener("click", function () {
   if (blogUrl.value === "") {
      window.alert("Oops, The blog url is empty.");
      return false;
   } else {
      generateBtn.innerHTML = "Generating...";
      generateBtn.disabled = true;
      setTimeout(() => {
         const cleanUrl = (url) => {
            let cleaned = url.split("?")[0].split("#")[0];
            return cleaned.endsWith("/") ? cleaned.slice(0, -1) : cleaned;
         };
         generatedSitemap.value = "# Blogger Sitemap created on " + new Date().toUTCString() + "\n# Sitemap built with " + doc.location.href + "\n\nUser-agent: *\nDisallow: /search\nAllow: /\n\nSitemap: " + cleanUrl(blogUrl.value) + "/atom.xml?redirect=false&start-index=1&max-results=500";
         generateBtn.innerHTML = "Generate";
         generateBtn.disabled = false;
         generatedSitemapHidden.classList.remove("hidden");
      }, 1000);
   }
});

// Copy Button
copyBtn.addEventListener("click", function () {
   if (blogUrl.value === "") {
      window.alert("Oops, The blog url is empty.");
      return false;
   } else {
      copyBtn.innerHTML = "Copying...";
      copyBtn.disabled = true;
      setTimeout(() => {
         copyBtn.innerHTML = "Copy";
         copyBtn.disabled = false;
      }, 1000);
      generatedSitemap.select();
      document.execCommand("copy");
   }
});

// Clear Button
clearBtn.addEventListener("click", function () {
   if (blogUrl.value === "") {
      window.alert("Oops, The blog url is empty.");
      return false;
   } else {
      clearBtn.innerHTML = "Clearing...";
      clearBtn.disabled = true;
      setTimeout(() => {
         blogUrl.value = "";
         generatedSitemap.value = "";
         clearBtn.innerHTML = "Clear";
         clearBtn.disabled = false;
         generatedSitemapHidden.classList.add("hidden");
      }, 1000);
   }
});