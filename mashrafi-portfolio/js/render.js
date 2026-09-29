/* ==========================================================================
   PORTFOLIO RENDERING ENGINE
   Takes portfolioData from content.js and mounts it into the semantic DOM.
   ========================================================================== */

document.addEventListener("DOMContentLoaded", () => {
  if (typeof portfolioData === "undefined") {
    console.error("portfolioData is not loaded. Ensure content.js is imported prior to render.js.");
    return;
  }

  const { personal, about, researchInterests, projects, experience, education, coursework, skills, academicContent, social } = portfolioData;

  // 1. Render Personal / Hero Details
  const heroNameEl = document.getElementById("hero-name");
  const heroTitleEl = document.getElementById("hero-title");
  const heroBioEl = document.getElementById("hero-bio");
  const heroLocationEl = document.getElementById("hero-location");
  const profileImgEl = document.getElementById("profile-img");
  const resumeBtnEl = document.getElementById("resume-btn");
  const contactMailtoEl = document.getElementById("contact-mailto");

  if (heroNameEl) heroNameEl.textContent = personal.name;
  if (heroTitleEl) heroTitleEl.textContent = personal.title;
  if (heroBioEl) heroBioEl.textContent = personal.bioShort;
  if (heroLocationEl) heroLocationEl.textContent = `📍 ${personal.location}`;
  if (profileImgEl) {
    profileImgEl.src = personal.portraitUrl;
    profileImgEl.alt = personal.name;
    // Fallback if image not yet placed
    profileImgEl.onerror = () => {
      profileImgEl.src = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='280' height='340' viewBox='0 0 280 340'><rect width='100%' height='100%' fill='%23162032'/><text x='50%' y='50%' fill='%2394a3b8' font-family='sans-serif' font-size='14' text-anchor='middle'>Profile Photo Placeholder</text><text x='50%' y='58%' fill='%23f59e0b' font-family='monospace' font-size='11' text-anchor='middle'>assets/images/profile.jpg</text></svg>";
    };
  }
  if (resumeBtnEl) resumeBtnEl.href = personal.resumeUrl;
  if (contactMailtoEl) contactMailtoEl.href = `mailto:${personal.email}?subject=Inquiry%20from%20Portfolio`;

  // 2. Render About Section
  const aboutHeadingEl = document.getElementById("about-heading");
  const aboutBodyEl = document.getElementById("about-body");
  if (aboutHeadingEl) aboutHeadingEl.textContent = about.heading;
  if (aboutBodyEl) {
    aboutBodyEl.innerHTML = about.paragraphs.map(p => `<p style="margin-bottom: 1rem;">${p}</p>`).join("");
  }

  // 3. Render Research Interests
  const researchGrid = document.getElementById("research-grid");
  if (researchGrid && researchInterests) {
    researchGrid.innerHTML = researchInterests.map(item => `
      <div class="card">
        <div class="card-meta">${item.status}</div>
        <h3 class="card-title">${item.title}</h3>
        <p>${item.description}</p>
      </div>
    `).join("");
  }

  // 4. Render Projects
  const projectsGrid = document.getElementById("projects-grid");
  if (projectsGrid && projects) {
    projectsGrid.innerHTML = projects.map(proj => `
      <div class="card project-card">
        <div class="card-meta">${proj.context} • <span style="color: #10b981;">${proj.status}</span></div>
        <h3 class="card-title">${proj.title}</h3>
        <p style="margin-bottom: 0.75rem;"><strong>Problem:</strong> ${proj.problem}</p>
        <p style="margin-bottom: 0.75rem;"><strong>Methodology:</strong> ${proj.methodology}</p>
        <p><strong>Contribution:</strong> ${proj.contribution}</p>
        
        <div class="project-tags">
          ${proj.tools.map(tool => `<span class="project-tag">${tool}</span>`).join("")}
        </div>

        <div class="project-links">
          ${proj.reportUrl && proj.reportUrl !== "#" ? `<a href="${proj.reportUrl}" target="_blank" class="btn btn-secondary" style="padding: 0.4rem 0.8rem; font-size: 0.8rem;">View Report (PDF)</a>` : ""}
          ${proj.presentationUrl && proj.presentationUrl !== "#" ? `<a href="${proj.presentationUrl}" target="_blank" class="btn btn-secondary" style="padding: 0.4rem 0.8rem; font-size: 0.8rem;">Presentation</a>` : ""}
        </div>
      </div>
    `).join("");
  }

  // 5. Render Experience Timeline
  const experienceList = document.getElementById("experience-timeline");
  if (experienceList && experience) {
    experienceList.innerHTML = experience.map(exp => `
      <div class="timeline-item">
        <div class="timeline-period">${exp.period} | ${exp.location}</div>
        <h3 class="card-title">${exp.role}</h3>
        <h4 style="font-size: 1.05rem; color: var(--text-muted); margin-bottom: 0.5rem;">${exp.organization}</h4>
        <p>${exp.description}</p>
        <ul class="timeline-responsibilities">
          ${exp.responsibilities.map(resp => `<li>${resp}</li>`).join("")}
        </ul>
      </div>
    `).join("");
  }

  // 6. Render Education Timeline
  const educationList = document.getElementById("education-timeline");
  if (educationList && education) {
    educationList.innerHTML = education.map(edu => `
      <div class="timeline-item">
        <div class="timeline-period">${edu.period}</div>
        <h3 class="card-title">${edu.degree}</h3>
        <h4 style="font-size: 1.05rem; color: var(--text-muted); margin-bottom: 0.4rem;">${edu.institution}</h4>
        <p style="font-size: 0.85rem; font-family: var(--font-family-mono); color: var(--accent-primary); margin-bottom: 0.4rem;">CGPA: ${edu.cgpa}</p>
        <p>${edu.details}</p>
      </div>
    `).join("");
  }

  // 7. Render Coursework
  const courseworkGrid = document.getElementById("coursework-grid");
  if (courseworkGrid && coursework) {
    courseworkGrid.innerHTML = coursework.map(cat => `
      <div class="card">
        <h3 class="card-title" style="margin-bottom: 1.2rem; border-bottom: 1px solid var(--border-subtle); padding-bottom: 0.5rem;">${cat.category}</h3>
        <div style="display: flex; flex-direction: column; gap: 0.9rem;">
          ${cat.courses.map(course => `
            <div>
              <div style="font-weight: 600; color: var(--text-main); font-size: 0.92rem;">${course.name}</div>
              <div style="font-size: 0.82rem; color: var(--text-muted);">${course.note}</div>
            </div>
          `).join("")}
        </div>
      </div>
    `).join("");
  }

  // 8. Render Skills Matrix
  const skillsMatrix = document.getElementById("skills-matrix");
  if (skillsMatrix && skills) {
    skillsMatrix.innerHTML = `
      <div class="skill-category">
        <h3>Engineering & Operations</h3>
        <div class="skill-list">
          ${skills.engineering.map(s => `<span class="skill-badge">${s}</span>`).join("")}
        </div>
      </div>
      <div class="skill-category">
        <h3>Software & Technical Tools</h3>
        <div class="skill-list">
          ${skills.software.map(s => `<span class="skill-badge" style="border-color: rgba(245, 158, 11, 0.25);">${s}</span>`).join("")}
        </div>
      </div>
      <div class="skill-category">
        <h3>Academic & Communication</h3>
        <div class="skill-list">
          ${skills.professional.map(s => `<span class="skill-badge">${s}</span>`).join("")}
        </div>
      </div>
    `;
  }

  // 9. Render Academic Content
  const academicGrid = document.getElementById("academic-content-grid");
  if (academicGrid && academicContent) {
    academicGrid.innerHTML = academicContent.map(item => `
      <div class="card">
        <div class="card-meta">${item.platform} • ${item.type}</div>
        <h3 class="card-title">${item.title}</h3>
        <p style="margin-bottom: 1rem;">${item.description}</p>
        ${item.url && item.url !== "#" ? `<a href="${item.url}" target="_blank" style="font-size: 0.85rem; font-weight: 600;">${item.linkText} →</a>` : `<span style="font-size: 0.82rem; color: var(--text-dim); font-family: var(--font-family-mono);">Link available soon</span>`}
      </div>
    `).join("");
  }

  // 10. Render Social Channels & Footer
  const socialRow = document.getElementById("social-links-row");
  if (socialRow && social) {
    socialRow.innerHTML = Object.entries(social)
      .filter(([_, url]) => url && url.length > 0)
      .map(([platform, url]) => `
        <a href="${url}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary" style="padding: 0.5rem 1rem; text-transform: capitalize;">
          ${platform}
        </a>
      `).join("");
  }
});