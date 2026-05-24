const puppeteer = require("puppeteer-core");
const fs = require("fs");
const path = require("path");

const chromePath = "C:/Program Files/Google/Chrome/Application/chrome.exe";

const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Dharan Kumar Bera - Resume</title>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body {
      font-family: 'Segoe UI', system-ui, -apple-system, sans-serif;
      color: #1e293b;
      background: #fff;
      line-height: 1.5;
      font-size: 10.5pt;
    }
    .page {
      width: 210mm;
      min-height: 297mm;
      padding: 18mm 20mm;
      margin: 0 auto;
    }
    header {
      border-bottom: 2px solid #2563eb;
      padding-bottom: 14px;
      margin-bottom: 16px;
    }
    .name {
      font-size: 26pt;
      font-weight: 800;
      color: #0f172a;
      letter-spacing: -0.5px;
    }
    .title {
      font-size: 12pt;
      color: #2563eb;
      font-weight: 600;
      margin-top: 4px;
    }
    .contact {
      display: flex;
      flex-wrap: wrap;
      gap: 12px;
      margin-top: 10px;
      font-size: 9.5pt;
      color: #475569;
    }
    .contact span { display: flex; align-items: center; gap: 4px; }
    .contact a { color: #2563eb; text-decoration: none; }
    h2 {
      font-size: 12pt;
      font-weight: 700;
      color: #0f172a;
      text-transform: uppercase;
      letter-spacing: 0.5px;
      border-bottom: 1px solid #e2e8f0;
      padding-bottom: 4px;
      margin: 16px 0 10px;
    }
    .summary {
      color: #334155;
      font-size: 10.5pt;
      text-align: justify;
    }
    .job { margin-bottom: 12px; }
    .job-header {
      display: flex;
      justify-content: space-between;
      align-items: baseline;
    }
    .job-title {
      font-weight: 700;
      color: #0f172a;
      font-size: 11pt;
    }
    .job-company {
      font-weight: 600;
      color: #2563eb;
      font-size: 10pt;
    }
    .job-date {
      font-size: 9.5pt;
      color: #64748b;
      font-weight: 500;
    }
    .job ul {
      margin: 6px 0 0 18px;
      color: #334155;
      font-size: 10pt;
    }
    .job li { margin-bottom: 3px; }
    .skills-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 8px 24px;
    }
    .skill-category {
      font-size: 10pt;
    }
    .skill-category strong {
      color: #0f172a;
      font-size: 10.5pt;
    }
    .projects-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 8px 16px;
    }
    .project {
      font-size: 10pt;
    }
    .project-name {
      font-weight: 700;
      color: #0f172a;
    }
    .project-desc {
      color: #475569;
      font-size: 9.5pt;
    }
    .project-tech {
      color: #2563eb;
      font-size: 9pt;
      font-weight: 500;
    }
    .two-col {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 20px;
    }
  </style>
</head>
<body>
  <div class="page">
    <header>
      <div class="name">Dharan Kumar Bera</div>
      <div class="title">Full Stack Developer & Identity Security Specialist</div>
      <div class="contact">
        <span>📧 <a href="mailto:bhargavdharan20@gmail.com">bhargavdharan20@gmail.com</a></span>
        <span>🌐 <a href="https://github.com/bhargavdharan">github.com/bhargavdharan</a></span>
        <span>💼 <a href="https://linkedin.com/in/dharankumarbera">linkedin.com/in/dharankumarbera</a></span>
        <span>📍 India (Remote Available)</span>
      </div>
    </header>

    <section>
      <h2>Professional Summary</h2>
      <p class="summary">
        Results-driven Full Stack Developer and Identity Security Specialist with 4+ years of experience building secure, scalable enterprise applications. Expert in Identity & Access Management (IAM) with hands-on experience in SailPoint IIQ and Saviynt. Proven track record delivering end-to-end solutions across React, Spring Boot, Node.js, Python, and Flutter. Seeking freelance and consulting opportunities to help organizations build secure, high-performance software.
      </p>
    </section>

    <section>
      <h2>Technical Skills</h2>
      <div class="skills-grid">
        <div class="skill-category">
          <strong>Frontend:</strong> React, Next.js, TypeScript, Tailwind CSS, Flutter, Dart
        </div>
        <div class="skill-category">
          <strong>Backend:</strong> Java, Spring Boot, Node.js, Express, Python, FastAPI
        </div>
        <div class="skill-category">
          <strong>Security:</strong> IAM, SailPoint IIQ, Saviynt, OAuth2/OIDC, MFA, RBAC/ABAC, Zero Trust
        </div>
        <div class="skill-category">
          <strong>Database & Cloud:</strong> PostgreSQL, MongoDB, Redis, Firebase, Firestore, Docker, AWS
        </div>
      </div>
    </section>

    <section>
      <h2>Professional Experience</h2>

      <div class="job">
        <div class="job-header">
          <div>
            <span class="job-title">Sr. Engineer - Implementation</span> — 
            <span class="job-company">Ilantus Services</span>
          </div>
          <span class="job-date">Apr 2024 – Present</span>
        </div>
        <ul>
          <li>Lead end-to-end SailPoint IIQ deployments, onboarding 20+ JDBC applications into identity governance</li>
          <li>Execute enhancement projects: advanced reporting, lifecycle automation, UAT-to-production transitions</li>
          <li>Develop custom ARS File Automation and Audit Automation modules reducing manual effort by 60%</li>
          <li>Support Saviynt platforms: access management workflows, compliance integrations, system tuning</li>
          <li>Drive security compliance initiatives including VAPT handling and audit readiness assessments</li>
        </ul>
      </div>

      <div class="job">
        <div class="job-header">
          <div>
            <span class="job-title">Software Support Engineer</span> — 
            <span class="job-company">Ilantus Services</span>
          </div>
          <span class="job-date">Apr 2022 – Mar 2024</span>
        </div>
        <ul>
          <li>Provided L2/L3 technical support for enterprise SailPoint IIQ and Saviynt IAM platforms</li>
          <li>Resolved complex identity and access issues with 95%+ SLA adherence</li>
          <li>Managed access governance, certification campaigns, and provisioning workflows</li>
          <li>Collaborated with implementation teams on platform enhancements and version upgrades</li>
        </ul>
      </div>

      <div class="job">
        <div class="job-header">
          <div>
            <span class="job-title">Full Stack Developer</span> — 
            <span class="job-company">Freelance & Personal Projects</span>
          </div>
          <span class="job-date">2022 – Present</span>
        </div>
        <ul>
          <li>Built full-stack web applications with React, Next.js, and Spring Boot for diverse clients</li>
          <li>Developed RESTful APIs with Swagger documentation, JWT auth, rate limiting, and WebSocket support</li>
          <li>Created cross-platform mobile apps using Flutter with Firebase backend integration</li>
          <li>Currently exploring Generative AI and Agentic AI for next-generation product features</li>
        </ul>
      </div>
    </section>

    <section>
      <h2>Featured Projects</h2>
      <div class="projects-grid">
        <div class="project">
          <div class="project-name">SecureAuth IAM</div>
          <div class="project-desc">Enterprise IAM with MFA, RBAC, OAuth2/OIDC</div>
          <div class="project-tech">React · Spring Boot · PostgreSQL · JWT</div>
        </div>
        <div class="project">
          <div class="project-name">ShopStack E-Commerce</div>
          <div class="project-desc">Full-featured platform with Stripe payments</div>
          <div class="project-tech">React · Spring Boot · PostgreSQL · Stripe</div>
        </div>
        <div class="project">
          <div class="project-name">ChatNexus</div>
          <div class="project-desc">Real-time E2E encrypted chat application</div>
          <div class="project-tech">React · Node.js · Socket.io · MongoDB</div>
        </div>
        <div class="project">
          <div class="project-name">TaskFlow API</div>
          <div class="project-desc">RESTful PM API with caching & real-time</div>
          <div class="project-tech">Spring Boot · PostgreSQL · Redis · WebSocket</div>
        </div>
      </div>
    </section>

    <section>
      <h2>Education & Certifications</h2>
      <div class="two-col">
        <div>
          <strong>Bachelor's Degree</strong> — Computer Science / Information Technology<br>
          <span style="color:#64748b;font-size:9.5pt;">Relevant coursework: Data Structures, Algorithms, Database Systems, Network Security</span>
        </div>
        <div>
          <strong>Certifications & Training:</strong>
          <ul style="margin-left:16px;color:#334155;font-size:10pt;">
            <li>SailPoint IIQ Implementation & Administration</li>
            <li>OAuth 2.0 & OpenID Connect (OIDC) Fundamentals</li>
            <li>AWS Cloud Practitioner (In Progress)</li>
          </ul>
        </div>
      </div>
    </section>
  </div>
</body>
</html>`;

(async () => {
  const browser = await puppeteer.launch({
    executablePath: chromePath,
    headless: "new",
  });
  const page = await browser.newPage();
  await page.setContent(html, { waitUntil: "networkidle0" });
  await page.pdf({
    path: path.join(__dirname, "../public/resume.pdf"),
    format: "A4",
    printBackground: true,
    margin: { top: 0, right: 0, bottom: 0, left: 0 },
  });
  await browser.close();
  console.log("✅ Resume PDF generated: public/resume.pdf");
})();
