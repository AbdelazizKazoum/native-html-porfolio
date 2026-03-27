const fs = require('fs');
let html = fs.readFileSync('src/index.html', 'utf8');

const oldHtml = `<h2 class="section-title load-hidden" style="text-align: left">
          <span
            style="
              color: #ff5722;
              font-size: 1.6rem;
              display: block;
              margin-bottom: 0.5rem;
              font-weight: normal;
            "
            >Skills</span
          >TECH STACK & SKILLS
        </h2>
        <p
          style="
            color: #94a3b8;
            max-width: 800px;
            margin-bottom: 4rem;
            font-size: 1.6rem;
            text-align: left;
          "
          class="load-hidden"
        >
          With over 4 years of experience in full-stack development, I've built
          and maintained robust web applications using modern technologies
          across the frontend and backend. I'm continuously learning and
          refining my skills to deliver high-quality, scalable solutions.
        </p>`;

const newHtml = `<h2 class="section-title load-hidden">Tech Stack & Skills</h2>
        <p class="expertise-description load-hidden">
          With over 4 years of experience in full-stack development, I've built
          and maintained robust web applications using modern technologies
          across the frontend and backend. I'm continuously learning and
          refining my skills to deliver high-quality, scalable solutions.
        </p>`;

// We will use replace with regex to avoid whitespace issues
const regexPattern = /<h2 class="section-title load-hidden" style="text-align: left">[\s\S]*?<\/p>/;
html = html.replace(regexPattern, newHtml);

fs.writeFileSync('src/index.html', html);
