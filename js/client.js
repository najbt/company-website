"use strict";

import { createClient } from "https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm";
import { SUPABASE_URL, SUPABASE_ANON_KEY } from "../supabaseConfig.js";

const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

document.addEventListener("DOMContentLoaded", () => {
  // Shared client images (static)
  const clientImages = [
    "assets/images/clients/asparlogo_.png",
    "assets/images/clients/deltalabs.png",
    "assets/images/clients/pharmanor.png",
    "assets/images/clients/iso-14001-2-big.webp",
    "assets/images/clients/bereket.jpg",
  ];

  // 🤝 CLIENT LOGOS STATIC + SUPABASE
  function renderClientLogos() {
    const logoContainer = document.getElementById("clientLogos");
    if (!logoContainer) return;
    logoContainer.innerHTML = "";

    // Load static images
    clientImages.forEach((src) => {
      if (!src) return;
      const img = document.createElement("img");
      img.src = src;
      const fileName = src.split("/").pop().split(".")[0];
      const altText = fileName.replace(/[-_]/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
      img.alt = altText;
      img.loading = "lazy";
      const link = document.createElement("a");
      link.href = "index.html";
      link.appendChild(img);
      logoContainer.appendChild(link);
    });

    // Load dynamic images from Supabase
    const bucketName = "client";
    async function loadClientImages() {
      const { data, error } = await supabase.storage.from(bucketName).list("", { limit: 100 });
      if (error) {
        console.error("Error loading client images:", error.message);
        return;
      }
      const sortedData = (data || [])
        .filter((file) => file && file.name && file.name !== ".emptyFolderPlaceholder")
        .sort((a, b) => a.name.localeCompare(b.name));
      for (const file of sortedData) {
        const { data: publicUrlData } = supabase.storage.from(bucketName).getPublicUrl(file.name);
        const publicUrl = publicUrlData?.publicUrl;
        if (publicUrl) {
          const img = document.createElement("img");
          img.src = publicUrl;
          const altText = file.name
            .split(".")[0]
            .replace(/[-_]/g, " ")
            .replace(/\b\w/g, (c) => c.toUpperCase());
          img.alt = altText;
          img.loading = "lazy";
          const link = document.createElement("a");
          link.href = "index.html";
          link.appendChild(img);
          logoContainer.appendChild(link);
        }
      }
      if (window.AOS) AOS.refresh();
    }
    loadClientImages();
  }
  renderClientLogos();

  // 🤝 CLIENT PAGE LOGOS STATIC + SUPABASE
  function initClientSlider() {
    const slideTrack = document.querySelector(".slide-track");
    if (!slideTrack) return;
    slideTrack.innerHTML = "";

    function createImage(src, altText) {
      const div = document.createElement("div");
      const img = document.createElement("img");
      img.src = src;
      img.alt = altText;
      div.appendChild(img);
      return div;
    }

    // Add static images
    clientImages.forEach((url, index) => {
      const alt = `Client ${index + 1}`;
      slideTrack.appendChild(createImage(url, alt));
    });

    const bucketName = "client";
    async function loadClientSliderImages() {
      const { data, error } = await supabase.storage.from(bucketName).list("", { limit: 100 });
      if (error) {
        console.error("Error loading client images:", error.message);
        return;
      }

      const sortedData = (data || [])
        .filter((file) => file && file.name && file.name !== ".emptyFolderPlaceholder")
        .sort((a, b) => a.name.localeCompare(b.name));

      for (const file of sortedData) {
        const { data: publicUrlData } = supabase.storage.from(bucketName).getPublicUrl(file.name);
        const publicUrl = publicUrlData?.publicUrl;
        if (publicUrl) {
          const alt = file.name.replace(/[-_]/g, " ").split(".")[0];
          slideTrack.appendChild(createImage(publicUrl, alt));
        }
      }

      await new Promise((r) => setTimeout(r, 500)); // wait for layout

      // Clone all for seamless infinite loop
      const originalItems = Array.from(slideTrack.children);
      originalItems.forEach((el) => {
        slideTrack.appendChild(el.cloneNode(true));
      });

      startInfiniteScroll();
    }

    loadClientSliderImages();

    function startInfiniteScroll() {
      let offset = 0;
      const speed = window.innerWidth < 768 ? 1.5 : 2;
      const track = document.querySelector(".slide-track");
      const slider = document.querySelector(".lightbox-slider");

      function animate() {
        offset += speed;
        if (offset >= track.scrollWidth / 2) {
          offset = 0;
        }

        track.style.transform = `translateX(-${offset}px)`;
        highlightCenter();
        requestAnimationFrame(animate);
      }

      function highlightCenter() {
        if (!slider) return;
        const images = track.querySelectorAll("img");
        const sliderRect = slider.getBoundingClientRect();
        const centerX = sliderRect.left + sliderRect.width / 2;

        let closestImg = null;
        let minDistance = Infinity;

        images.forEach((img) => {
          const imgRect = img.getBoundingClientRect();
          const imgCenter = imgRect.left + imgRect.width / 2;
          const distance = Math.abs(centerX - imgCenter);
          if (distance < minDistance) {
            minDistance = distance;
            closestImg = img;
          }
        });

        images.forEach((img) => img.classList.remove("active"));
        if (closestImg) {
          closestImg.classList.add("active");
        }
      }

      requestAnimationFrame(animate);
    }
  }

  initClientSlider();
});
