/* project-viewer.js - Interactive Project Showcase Modal with all pages and headings */

function openProjectViewer(projectId, targetPageIdx = 0) {
  const data = window.PROJECTS_DATA || (typeof PROJECTS_DATA !== "undefined" ? PROJECTS_DATA : []);
  if (!data || !data.length) return;
  const project = data.find(p => p.id === projectId);
  if (!project) return;

  const modal = document.getElementById("projectViewerModal");
  if (!modal) return;

  const titleEl = document.getElementById("modalProjectTitle");
  const subtitleEl = document.getElementById("modalProjectSubtitle");
  const pdfBtn = document.getElementById("modalPdfBtn");
  const pillsNav = document.getElementById("modalNavPills");
  const pagesContainer = document.getElementById("modalPagesScroll");

  if (titleEl) titleEl.textContent = project.title;
  if (subtitleEl) subtitleEl.textContent = project.subtitle || project.description;
  if (pdfBtn) {
    pdfBtn.href = project.pdfLink;
    pdfBtn.setAttribute("aria-label", `Open full PDF report for ${project.title}`);
  }

  // Build quick jump pills
  if (pillsNav) {
    pillsNav.innerHTML = project.screenshots.map((s, idx) => `
      <button type="button" class="modal-nav-pill ${idx === targetPageIdx ? 'active' : ''}" data-target-idx="${idx}">
        ${s.heading || s.title}
      </button>
    `).join("");

    const pills = pillsNav.querySelectorAll(".modal-nav-pill");
    pills.forEach((pill) => {
      pill.addEventListener("click", () => {
        pills.forEach(p => p.classList.remove("active"));
        pill.classList.add("active");
        const targetIdx = pill.dataset.targetIdx;
        const targetPage = document.getElementById(`modal-page-${targetIdx}`);
        if (targetPage) {
          targetPage.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      });
    });
  }

  // Build full pages list with headings and photos
  if (pagesContainer) {
    pagesContainer.innerHTML = project.screenshots.map((s, idx) => {
      const primarySrc = s.src;
      const fallbackSrc = s.fallbackSrc || s.src;
      const heading = s.heading || s.title;
      return `
        <section class="modal-page-block" id="modal-page-${idx}">
          <div class="modal-page-header">
            <h3 class="modal-page-heading">
              <span class="modal-page-badge">Page ${idx + 1} of ${project.screenshots.length}</span>
              <span>${heading}</span>
            </h3>
            <a href="${project.pdfLink}" target="_blank" rel="noopener noreferrer" class="preview-pdf-link-btn" title="Open this report in Google Drive PDF">
              Open PDF Report ↗
            </a>
          </div>
          <div class="modal-page-img-wrap">
            <img src="${primarySrc}"
                 onerror="this.onerror=null; this.src='${fallbackSrc}';"
                 alt="${project.title} - ${heading}"
                 class="modal-page-img"
                 loading="lazy">
          </div>
          <div class="modal-page-caption">
            <span>${s.caption || ""}</span>
            <span style="font-size: 11px; color: var(--accent-cyan); font-weight: 600;">Power BI Dashboard</span>
          </div>
        </section>
      `;
    }).join("");
  }

  modal.showModal();

  if (targetPageIdx > 0) {
    setTimeout(() => {
      const targetPage = document.getElementById(`modal-page-${targetPageIdx}`);
      if (targetPage) {
        targetPage.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 150);
  }
}

window.openProjectViewer = openProjectViewer;

// Bind modal events
document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("projectViewerModal");
  const closeBtn = document.getElementById("modalCloseBtn");
  if (closeBtn && modal) {
    closeBtn.addEventListener("click", () => modal.close());
    modal.addEventListener("click", (e) => {
      if (e.target === modal) modal.close();
    });
  }
});
