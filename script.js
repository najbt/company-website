"use strict";

import { createClient } from "https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm";
// const supabaseUrl = "https://bhjsgqxriirwphjkqssp.supabase.co";

// const supabaseKey =
//   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJoanNncXhyaWlyd3Boamtxc3NwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDg4NTA4ODMsImV4cCI6MjA2NDQyNjg4M30.FsFVagdzaLnLBV3avfVStKU6TZiSVIFRkq-62TUMDuA";
// const supabase = createClient(supabaseUrl, supabaseKey);
import { SUPABASE_URL, SUPABASE_ANON_KEY } from "./supabaseConfig.js";

const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

document.addEventListener("DOMContentLoaded", () => {
  // 🖇️ Toggles menu on mobile
  function initMobileMenu() {
    const menuBtn = document.getElementById("mobile-menu-toggle");
    const navList = document.querySelector(".nav-list");

    function handleResize() {
      if (window.innerWidth > 900) {
        navList.classList.remove("open");
        navList.style.display = "flex";
        menuBtn.style.display = "none";
        menuBtn.setAttribute("aria-label", "Mobil menyunu aç");
      } else {
        navList.classList.remove("open");
        navList.style.display = "none";
        menuBtn.style.display = "inline-block";
        menuBtn.setAttribute("aria-label", "Mobil menyunu aç");
      }
    }

    // Ensure nav is hidden on load for mobile
    navList.classList.remove("open");
    navList.style.display = window.innerWidth > 900 ? "flex" : "none";

    menuBtn.addEventListener("click", function (e) {
      e.stopPropagation();
      navList.classList.toggle("open");
      navList.style.display = navList.classList.contains("open") ? "flex" : "none";
      menuBtn.setAttribute(
        "aria-label",
        navList.classList.contains("open") ? "Mobil menyunu bağla" : "Mobil menyunu aç"
      );
    });

    document.addEventListener("click", function (e) {
      if (navList.classList.contains("open") && !navList.contains(e.target) && !menuBtn.contains(e.target)) {
        navList.classList.remove("open");
        navList.style.display = "none";
        menuBtn.setAttribute("aria-label", "Mobil menyunu aç");
      }
    });

    window.addEventListener("resize", handleResize);
    handleResize();
  }

  // 🌙 DARK MODE TOGGLE
  function initThemeToggle(toggleId = "theme-toggle", iconId = "theme-icon") {
    const toggleBtn = document.getElementById(toggleId);
    const icon = document.getElementById(iconId);

    const savedTheme = localStorage.getItem("theme");
    const isDark = savedTheme === "dark";
    document.body.classList.toggle("dark-mode", isDark);

    if (toggleBtn && icon) {
      icon.setAttribute("name", isDark ? "sunny-outline" : "moon");

      toggleBtn.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");
        const nowDark = document.body.classList.contains("dark-mode");

        icon.setAttribute("name", nowDark ? "sunny-outline" : "moon");
        localStorage.setItem("theme", nowDark ? "dark" : "light");
      });
    }
  }

  // Active Nav Links in header
  function setActiveNavLink() {
    const links = document.querySelectorAll(".nav-list a");
    const currentPage = window.location.pathname.split("/").pop() || "index.html";

    links.forEach((link) => {
      const href = link.getAttribute("href");
      if (href && currentPage === href) {
        link.classList.add("active");

        // Optional: also highlight parent dropdown (if needed)
        const parentDropdown = link.closest(".dropdown");
        if (parentDropdown) {
          const parentLink = parentDropdown.querySelector("a");
          if (parentLink) parentLink.classList.add("active");
        }
      }
    });
  }

  // dropdown menu click
  document.querySelectorAll(".dropdown > a").forEach((toggle) => {
    toggle.addEventListener("click", function (e) {
      e.preventDefault(); // prevent default if href="#"
      const parent = this.parentElement;
      parent.classList.toggle("open");
    });
  });

  // Optional: close dropdown when clicking outside
  document.addEventListener("click", function (e) {
    document.querySelectorAll(".dropdown").forEach((dropdown) => {
      if (!dropdown.contains(e.target)) {
        dropdown.classList.remove("open");
      }
    });
  });

  // 🎥 HERO CAROUSEL LOGIC
  function initCarousel() {
    let currentSlide = 0;
    const slides = document.querySelectorAll(".carousel-slide");
    const indicators = document.querySelectorAll(".indicator");
    const nextBtn = document.querySelector(".btn-next");
    const prevBtn = document.querySelector(".btn-previous");
    let autoSlideInterval;

    function showSlide(index) {
      slides.forEach((slide, i) => {
        const video = slide.querySelector("video");
        const overlays = slide.querySelectorAll(".overlay");

        slide.classList.remove("active");
        indicators[i]?.classList.remove("active");

        if (video) {
          video.pause();
          video.currentTime = 0;
        }

        overlays.forEach((overlay) => {
          overlay.style.animation = "none";
          overlay.offsetHeight; // force reflow
          overlay.style.animation = "";
        });
      });

      slides[index].classList.add("active");
      indicators[index]?.classList.add("active");

      const activeVideo = slides[index].querySelector("video");
      if (activeVideo) activeVideo.play();

      currentSlide = index;
    }

    function nextSlide() {
      const nextIndex = (currentSlide + 1) % slides.length;
      showSlide(nextIndex);
    }

    function startAutoSlide() {
      autoSlideInterval = setInterval(() => {
        nextSlide();
      }, 5500);
    }

    function stopAutoSlide() {
      clearInterval(autoSlideInterval);
    }

    // Button events
    nextBtn?.addEventListener("click", () => {
      stopAutoSlide(); // stop timer
      currentSlide = (currentSlide + 1) % slides.length;
      showSlide(currentSlide);
      startAutoSlide(); // restart timer
    });

    prevBtn?.addEventListener("click", () => {
      stopAutoSlide();
      currentSlide = (currentSlide - 1 + slides.length) % slides.length;
      showSlide(currentSlide);
      startAutoSlide();
    });

    indicators.forEach((dot, index) => {
      dot.addEventListener("click", () => {
        stopAutoSlide();
        currentSlide = index;
        showSlide(index);
        startAutoSlide();
      });
    });

    // Initialize
    if (slides.length > 0) {
      showSlide(currentSlide);
      startAutoSlide();
    }
  }

  // 🧭 HEADER SCROLL TOGGLE
  function initHeaderScrollToggle(headerSelector = ".header", scrollThreshold = 100) {
    let lastScroll = 0;
    const header = document.querySelector(headerSelector);

    if (!header) return;

    window.addEventListener("scroll", () => {
      const currentScroll = window.pageYOffset;

      if (currentScroll > lastScroll && currentScroll > scrollThreshold) {
        // Scrolling down
        header.classList.add("hidden");
      } else {
        // Scrolling up
        header.classList.remove("hidden");
      }

      lastScroll = currentScroll;
    });
  }

  // 🔗 ACTIVE NAVIGATION HIGHLIGHT
  function setActiveNavLink() {
    const currentPath = window.location.pathname;

    document.querySelectorAll("nav a").forEach((link) => {
      const href = link.getAttribute("href");

      if (href === currentPath) {
        link.classList.add("active");

        const dropdown = link.closest(".dropdown");
        if (dropdown) {
          const parentLink = dropdown.querySelector("a:not(.dropdown-menu a)");
          if (parentLink) parentLink.classList.add("active");
        }
      }
    });
  }

  // 💊 MEDICINE LIST IN PRODUCT PAGE
  function normalizeAnchor(text) {
    return text
      .toLowerCase()
      .normalize("NFD") // Normalize unicode (remove accents)
      .replace(/[\u0300-\u036f]/g, "") // Remove accents
      .replace(/[^\w\- ]+/g, "") // Remove all non-word chars except dash and space
      .replace(/\s+/g, "-") // Replace spaces with dashes
      .replace(/\-\-+/g, "-") // Replace multiple dashes with one dash
      .replace(/^-+|-+$/g, ""); // Trim dashes from start and end
  }

  async function renderMedicineList() {
    const { data: medicines, error } = await supabase.from("medicines").select("*");

    if (error) {
      console.error("Error fetching medicines:", error);
      return;
    }

    const sorted = medicines
      .slice(0)
      .sort((a, b) => a.name.localeCompare(b.name, "az", { sensitivity: "base" }));

    const grid = document.createElement("div");
    grid.className = "medicine-grid container";

    sorted.forEach((med) => {
      const normalizedAnchor = normalizeAnchor(med.anchor);

      const a = document.createElement("a");
      a.href = `/blog.html#${normalizedAnchor}`;

      const div = document.createElement("div");
      div.className = "medicine-item";
      div.textContent = med.name;

      a.appendChild(div);
      grid.appendChild(a);
    });

    const medicineListElem = document.getElementById("medicine-list");
    if (medicineListElem) {
      medicineListElem.innerHTML = ""; // Clear existing content
      medicineListElem.appendChild(grid);
    }
  }

  initMobileMenu();
  setActiveNavLink();
  initThemeToggle();
  initCarousel();
  // client render
  initHeaderScrollToggle();
  // vacancy
  setActiveNavLink();
  renderMedicineList();

  // Fetch vacancy data from Supabase
  async function fetchVacancyData() {
    // Fetch all rows from 'vacancies' table
    const { data, error } = await supabase.from("vacancies").select("*");

    if (error) {
      console.error("Error fetching vacancies:", error.message);
      return [];
    }
    return data || [];
  }

  async function renderVacancyCards() {
    const vacancies = await fetchVacancyData();
    if (!vacancies.length) return;

    const container = document.getElementById("vacancy-list");
    if (!container) return;

    vacancies.forEach((vacancyData) => {
      const card = document.createElement("div");
      card.className = "vacancy-card";

      // Parse JSON fields if stored as JSON/text in DB
      const responsibilities = Array.isArray(vacancyData.responsibilities)
        ? vacancyData.responsibilities
        : JSON.parse(vacancyData.responsibilities || "[]");
      const offers = Array.isArray(vacancyData.offers)
        ? vacancyData.offers
        : JSON.parse(vacancyData.offers || "[]");
      const requirements = Array.isArray(vacancyData.requirements)
        ? vacancyData.requirements
        : JSON.parse(vacancyData.requirements || "[]");

      card.innerHTML = `
        <h3>${vacancyData.title}</h3>
        <h4 class="short">${vacancyData.shortDescription}</h4>
        <div class="more-content">
          <ul>
            ${responsibilities.map((item) => `<li>${item}</li>`).join("")}
            ${offers.map((item) => `<li>${item}</li>`).join("")}
          </ul>
          <h4>Tələblər:</h4>
          <ul>
            ${requirements.map((item) => `<li>${item}</li>`).join("")}
          </ul>
          <p><strong>İş bölgəsi:</strong> ${vacancyData.region}</p>
          <p><strong>CV göndərmək üçün e-poçt:</strong> 
            <a class="contact-link" href="mailto:${vacancyData.email}">${vacancyData.email}</a>
          </p>
        </div>
        <button class="btn btn-dark toggle-btn">Daha çox</button>
      `;
      container.appendChild(card);
    });
    // Call toggle after cards are in DOM
    initVacancyCardToggles();
  }

  // 📌 VACANCY TOGGLE
  function initVacancyCardToggles(buttonSelector = ".toggle-btn", cardSelector = ".vacancy-card") {
    document.querySelectorAll(buttonSelector).forEach((btn) => {
      btn.addEventListener("click", function () {
        const card = this.closest(cardSelector);
        if (!card) return;

        card.classList.toggle("expanded");
        this.textContent = card.classList.contains("expanded") ? "Daha az" : "Daha çox";
      });
    });
  }
  // Call renderVacancyCards so all vacancies are rendered and toggles work
  renderVacancyCards();

  // Contact-info:
  async function fetchContactInfo() {
    const { data, error } = await supabase
      .from('contact_info')
      .select('*')
      .single()

    if (error) {
      console.error('Error fetching contact info:', error)
      return
    }

    // Set WhatsApp phone number for all .phone-link elements
    document.querySelectorAll('.phone-link').forEach(el => {
      if (el.href.includes('https://wa.me/')) {
        el.href = `https://wa.me/${data.phone.replace(/\D/g, '')}`
      } else {
        el.href = data.phone
        el.textContent = data.phone
      }
    })

    // Set email for all .email-link elements
    document.querySelectorAll('.email-link').forEach(el => {
      el.textContent = data.email
      el.href = `mailto:${data.email}`
    })

    // Set location for all .location-text elements
    document.querySelectorAll('.location-text').forEach(el => {
      el.textContent = data.location
    })
  }

  fetchContactInfo()

});

// --------
// blog page Product data array

// map column keys to readable labels (DRY)
const fieldLabels = {
  composition: "TƏRKİBİ",
  description: "Təsviri",
  pharmaGroup: "FARMAKOLOJI QRUPU",
  pharmaFeatures: "FARMAKOLOJİ XÜSUSİYYƏTLƏRİ",
  indications: "İSTİFADƏ SAHƏSİ VƏ ƏSAS GÖSTƏRİŞLƏR",
  contraindications: "ƏKS GÖSTƏRİŞLƏRİ",
  treatment: "Müalicə",
  sideeffects: "ƏLAVƏ TƏSİRLƏRİ",
  dosage: "Qəbul qaydası və dozalanması",
  overdose: "Doza həddinin aşılması",
  interactions: "Digər dərman vasitələri ilə qarşılıqlı təsiri",
  special: "Xüsusi göstərişlər və ehtiyat tədbirləri",
  storage: "Saxlanma şəraiti",
  expiry: "Yararlılıq müddəti",
  form: "Buraxılış forması",
  pregnancy: "HAMİLƏLİK VƏ LAKTASİYA DÖVRÜNDƏ İSTİFADƏSİ",
  liverDisfunction: "Qaraciyər funksiyasının pozulması zamanı İSTİFADƏSİ",
  childeUse: "Uşaqlarda istifadəsi",
  prescription: "Aptekdən buraxılma şərti",
  manufacturer: "İstehsalçı"
};

async function fetchProductsFromSupabase() {
  const { data, error } = await supabase.from("medicines").select("*");
  if (error) {
    console.error("Supabase fetch error:", error);
    return [];
  }
  return data;
}

function renderProducts(products) {
  const container = document.getElementById("dynamic-products");
  if (!container) return;

  container.innerHTML = products.map((product) => {
    const contentHtml = Object.entries(fieldLabels)
      .map(([key, label]) => {
        if (!product[key]) return "";

        // If the key is 'composition' and is an array, render as list
        if (key === "composition" && Array.isArray(product[key])) {
          const listItems = product[key].map(item => `<ul>
            <li>${item}</li>
          </ul>`).join("");
          return `<h3>${label}</h3><ul>${listItems}</ul>`;
        }

        document.querySelectorAll("li").forEach(li => {
          if (li.textContent.includes(":")) {
            li.classList.add("has-colon");
          }
        });

        // Default rendering for other fields
        return `<h3>${label}</h3><p>${product[key]}</p>`;
      })
      .join("");


    const { data: imageData } = supabase.storage
      .from("product-images")
      .getPublicUrl(product.img || "");
    const imageUrl = imageData?.publicUrl ?? "";

    return `
      <div id="${product.anchor}">
        <h2>${product.name}</h2>
        <div class="blog-card">
          <div class="blog-img">
            <a href="#" class="blog-img-item">
              <figcaption>&nbsp;${product.stock ?? ""}</figcaption>
              <img src="${imageUrl}" alt="${product.alt}" loading="lazy" />
            </a>
          </div>
          <div class="blog-content">
            ${contentHtml}
          </div>
        </div>
        <div class="scroll-line"></div>
      </div>`;
  }).join("");
}

// ----------------------------
// BLOG SLIDER + SEARCH LOGIC
// ----------------------------
function initBlogSlider() {
  const blogContainers = Array.from(document.querySelectorAll("#dynamic-products > div"));
  const paginationList = document.getElementById("blog-pagination-list");
  const prevBtn = document.getElementById("blog-prev");
  const nextBtn = document.getElementById("blog-next");
  const searchInput = document.getElementById("blog-search");
  let currentIndex = 0;
  let filteredIndexes = blogContainers.map((_, i) => i);

  function buildPagination(filter = "") {
    paginationList.innerHTML = "";
    filteredIndexes = [];
    blogContainers.forEach((container, idx) => {
      const title = container.querySelector("h2")?.textContent || `#${idx + 1}`;
      if (title.toLowerCase().includes(filter.toLowerCase())) {
        const btn = document.createElement("button");
        btn.className = "blog-page-btn";
        btn.textContent = title;
        btn.setAttribute("data-idx", idx);
        btn.addEventListener("click", () => scrollToBlog(idx));
        paginationList.appendChild(btn);
        filteredIndexes.push(idx);
      }
    });
    if (filter && filteredIndexes.length && !filteredIndexes.includes(currentIndex)) {
      scrollToBlog(filteredIndexes[0]);
    }
    setActive(currentIndex);
  }

  function scrollToBlog(idx) {
    if (!blogContainers[idx]) return;
    blogContainers[idx].scrollIntoView({ behavior: "smooth", block: "start" });
    setActive(idx);
  }

  function setActive(idx) {
    currentIndex = idx;
    document.querySelectorAll(".blog-page-btn").forEach((b) => {
      const btnIdx = parseInt(b.getAttribute("data-idx"));
      b.classList.toggle("active", btnIdx === idx);
    });
  }

  prevBtn?.addEventListener("click", () => {
    const pos = filteredIndexes.indexOf(currentIndex);
    if (pos > 0) scrollToBlog(filteredIndexes[pos - 1]);
  });

  nextBtn?.addEventListener("click", () => {
    const pos = filteredIndexes.indexOf(currentIndex);
    if (pos < filteredIndexes.length - 1) scrollToBlog(filteredIndexes[pos + 1]);
  });

  window.addEventListener("scroll", () => {
    let found = false;
    blogContainers.forEach((container, idx) => {
      const rect = container.getBoundingClientRect();
      if (!found && rect.top < window.innerHeight / 2 && rect.bottom > 100) {
        setActive(idx);
        found = true;
      }
    });
  });

  searchInput?.addEventListener("input", function () {
    buildPagination(this.value);
  });

  buildPagination();
  setActive(0);
}

// LIGHTBOX SLIDER in about page
async function renderProductLightbox(productsStatic = []) {
  const bucketName = "product-images";
  const slider = document.querySelector(".lightbox-slider");
  const track = document.getElementById("lightbox-track");
  if (!slider || !track) return;

  track.innerHTML = ""; // Clear old images

  // Load static images first (local)
  productsStatic.forEach(({ img, alt }) => {
    if (!img) return;
    const div = document.createElement("div");
    div.className = "blog-img";

    const image = new Image();
    image.src = img;
    image.alt = alt || "";
    image.loading = "lazy";

    div.appendChild(image);
    track.appendChild(div);
  });

  // Load dynamic images from Supabase bucket
  try {
    const { data, error } = await supabase.storage.from(bucketName).list("", { limit: 100 });
    if (error) {
      console.error("Error loading product images from Supabase:", error.message);
      return;
    }

    // Sort files by name
    const sortedFiles = (data || [])
      .filter(f => f && f.name && f.name !== ".emptyFolderPlaceholder")
      .sort((a, b) => a.name.localeCompare(b.name));

    for (const file of sortedFiles) {
      const { data: publicUrlData, error: urlError } = supabase.storage.from(bucketName).getPublicUrl(file.name);
      if (urlError) {
        console.error("Error getting public URL for", file.name, urlError.message);
        continue;
      }
      const publicUrl = publicUrlData?.publicUrl;
      if (!publicUrl) continue;

      const div = document.createElement("div");
      div.className = "blog-img";

      const image = new Image();
      image.src = publicUrl;
      image.alt = file.name.split(".")[0].replace(/[-_]/g, " ");
      image.loading = "lazy";

      div.appendChild(image);
      track.appendChild(div);
    }
  } catch (err) {
    console.error("Unexpected error loading product images:", err);
  }

  // Duplicate all children for seamless scroll
  const clones = [...track.children].map((child) => child.cloneNode(true));
  clones.forEach(clone => track.appendChild(clone));

  // Animate slider
  let offset = 0;
  const speed = 1.5;
  const totalWidth = track.scrollWidth / 2;

  function highlightCenter() {
    const centerX = slider.getBoundingClientRect().left + slider.offsetWidth / 2;
    const images = track.querySelectorAll("img");
    let closest = [...images].reduce((a, b) =>
      Math.abs(a.getBoundingClientRect().left + a.width / 2 - centerX) <
        Math.abs(b.getBoundingClientRect().left + b.width / 2 - centerX)
        ? a
        : b
    );
    images.forEach(img => img.classList.remove("active"));
    if (closest) closest.classList.add("active");
  }

  function animate() {
    offset = (offset + speed) % totalWidth;
    track.style.transform = `translateX(-${offset}px)`;
    highlightCenter();
    requestAnimationFrame(animate);
  }

  requestAnimationFrame(animate);
}
const staticProducts = [
  { img: "assets/images/blog-img/oftoqrin-1.png", alt: "Oftoqrin" },
  { img: "assets/images/evirest.png", alt: "Evirest" },
  // add more local product images here
];

renderProductLightbox(staticProducts);

if (window.location.pathname.includes("blog.html")) {
  document.addEventListener("DOMContentLoaded", async () => {
    const products = await fetchProductsFromSupabase();
    renderProducts(products);
    initBlogSlider();             // search + pagination
  });
}