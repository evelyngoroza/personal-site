/* ===========================================================================
   Portfolio interactions
   - Project modal open/close with data-driven content
   - Scroll-reveal animations
   - Smooth keyboard accessibility
   =========================================================================== */

// --------------------------- Project data -------------------------------------
const PROJECTS = {
  "thesis-proquest": {
    tag: "Master's Thesis · Tufts University · 2025",
    title: "Quantifying Calibration: Bridging Trust and Reliance in Automation Across Cultural Values and Dispositional Factors",
    lede: "An empirical investigation of how cultural values and dispositional traits (personality) shape trust, reliance, and calibrated use of collaborative automation systems, with an exploratory framework for quantifying calibration over time.",
    meta: [
      { label: "Degree", value: "M.S. Human Factors Engineering" },
      { label: "Advisor", value: "Dr. Dave B Miller" },
      { label: "Participants", value: "N = 189" },
      { label: "Analysis", value: "Robust SEM, in R" }
    ],
    sections: [
      {
        h: "Motivation",
        p: "Collaborative automation systems (e.g. partially automated driving, AI-driven clinical decision support) let operators control how much they rely on the system. Decades of research has focused on system and situational factors that shape trust, but the empirical landscape has under-investigated operator <em>dispositional</em> factors, and it has lacked rigorous measurement standards for calibrated use."
      },
      {
        h: "Study design",
        p: "I combined survey measures of cultural values (Hofstede-derived), propensity to trust, faith in general technology, and baseline trust with continuous behavioral reliance and repeated in-task trust and self-rated performance, collected inside Calibratio, a custom Unity-based simulation game modeling a shared-goal sorting task with an adaptable autonomous teammate called Otto."
      },
      {
        h: "Key findings",
        p: "Robust structural path modeling showed that baseline trust was shaped by Collectivism, Uncertainty Avoidance, and Faith in General Technology, while in-task trust was driven by automation capability and was inversely related to self-rated performance. Reliance was predicted by Power Distance, capability, and self-rated performance."
      },
      {
        h: "Contribution",
        p: "An exploratory temporal analysis demonstrates reliance patterns classified as calibrated use, misuse (overuse), and disuse (underuse). Together, these results provide a quantitative framework for measuring automation-use calibration and empirical evidence of how system interactions manifest across dispositional factors."
      }
    ],
    gallery: [
      "assets/images/gallery/thesis_pro_cover.jpg",
      "assets/images/gallery/thesis_pro_p25.jpg",
      "assets/images/gallery/thesis_pro_p80.jpg",
      "assets/images/gallery/thesis_pro_p100.jpg"
    ],
    actions: [
      { label: "Read thesis PDF", href: "assets/pdfs/ProQuest_Publication.pdf", primary: true },
      { label: "View defense slides", href: "assets/pdfs/Defense_Slide_Deck.pdf" },
      { label: "Read CHI workshop paper", href: "assets/pdfs/CHI_Workshop_Publication.pdf" }
    ]
  },

  "thesis-chi": {
    tag: "Workshop Publication · CEUR · 2025",
    title: "CHI Workshop Publication",
    lede: "A workshop paper framing the conceptual model, study design, and planned analyses for the Calibratio study, positioned within the landscape of trust and reliance research on human-automation interaction.",
    meta: [
      { label: "Venue", value: "Workshop paper · CEUR Proceedings" },
      { label: "Date", value: "Published Nov 2025" },
      { label: "Format", value: "Short paper" },
      { label: "Role", value: "First author" }
    ],
    sections: [
      {
        h: "Summary",
        p: "The paper introduces calibrated trust as the alignment between operator trust (an attitude) and operator reliance (a behavior) with actual system capability, and argues that both cultural and personality factors are important influences on this alignment. The paper then outlines the Calibratio study design for validating this conceptual model empirically."
      }
    ],
    gallery: [
      "assets/images/thesis_chi.jpg",
      "assets/images/gallery/thesis_chi_p2.jpg",
      "assets/images/gallery/thesis_chi_p5.jpg",
      "assets/images/gallery/thesis_chi_p8.jpg"
    ],
    actions: [
      { label: "Read workshop paper", href: "assets/pdfs/CHI_Workshop_Publication.pdf", primary: true }
    ]
  },

  "thesis-defense": {
    tag: "Thesis Defense · August 2025",
    title: "Thesis Defense Slide Deck",
    lede: "The visual companion to the oral defense of <em>Quantifying Calibration</em>, presented for the Master of Science in Human Factors Engineering in the Department of Mechanical Engineering at Tufts University. Walks through motivation, literature framing, study design, findings, and implications for collaborative automation.",
    meta: [
      { label: "Date", value: "August 2025" },
      { label: "Advisor", value: "Dr. Dave B. Miller" },
      { label: "Committee", value: "Dr. Daniel J. Hannon, Dr. Holly Taylor" },
      { label: "Funding", value: "Wittich Grant, Trefethen Fellowship" },
      { label: "Outcome", value: "Passed" }
    ],
    sections: [
      {
        h: "Structure",
        p: "The deck mirrors the thesis arc in condensed form: a brief history of automation and trust, current gaps in the literature, the proposed conceptual model, the Calibratio study design, findings from SEM, and implications for calibrated use in fielded adaptive systems."
      }
    ],
    gallery: [
      "assets/images/thesis_defense.jpg",
      "assets/images/gallery/thesis_defense_p2.jpg",
      "assets/images/gallery/thesis_defense_p36.jpg",
      "assets/images/gallery/thesis_defense_p70.jpg"
    ],
    actions: [
      { label: "View defense slides", href: "assets/pdfs/Defense_Slide_Deck.pdf", primary: true },
      { label: "Read thesis PDF", href: "assets/pdfs/ProQuest_Publication.pdf" }
    ]
  },

  "orbit-ieee": {
    tag: "IEEE FIE 2025 · Peer-Reviewed Publication",
    title: "The ORBIT App: Co-Designing Inclusive Educational Robotics",
    lede: "Peer-reviewed publication at IEEE Frontiers in Education 2025 overviewing the ORBIT App's design rationale, theoretical framing, and pilot findings from testing with special education teachers and autistic middle school students.",
    meta: [
      { label: "Venue", value: "IEEE Frontiers in Education 2025" },
      { label: "Funding", value: "NSF Grant No. DRL-2318191" },
      { label: "Collaborators", value: "Hayes, Milto, Cross, Zabner" },
      { label: "Methods", value: "Design-based research, pilot study" }
    ],
    sections: [
      {
        h: "The program",
        p: "ORBIT is an educational robotics program that integrates learning computational thinking (CT) practices with executive functioning (EF) skills. It was co-developed with special education teachers who are autism specialists, across three co-design workshops spanning eighteen months."
      },
      {
        h: "The App",
        p: "The App prototype is built in JavaScript on a React framework and communicates with LEGO Spike Prime Hubs over Bluetooth Low Energy. The interface has two primary modalities: a guided Mission mode with structured scenarios and sub-tasks, and an open Sandbox mode for exploration. Each mode is divided into three panels: Steps Menu, Coding Track, and Command Panel."
      },
      {
        h: "Design framework",
        p: "The App uses the PRADA framework for computational thinking (Pattern recognition, Abstraction, Decomposition, Algorithms), layered with design considerations for working memory, inhibitory control, and task switching. Features include collapsing option menus to reduce cognitive load, multimodal representations (icons, text, animation, text-to-speech), and an immersive game-like feedback loop."
      },
      {
        h: "Pilot findings",
        p: "Evidence from teacher workshops and classroom trials showed the App supporting students' individualized learning goals (especially EF), and opportunities for students to engage in PRADA-aligned computational thinking. The analysis identified a tension between scaffolding for accessibility and preserving a 'high ceiling' for advanced functionality, a balance the App must continue to navigate."
      }
    ],
    gallery: [
      "assets/images/gallery/orbit_ieee_p2.jpg",
      "assets/images/gallery/orbit_ieee_p3.jpg",
      "assets/images/gallery/orbit_ieee_p4.jpg"
    ],
    actions: [
      { label: "Read IEEE publication", href: "assets/pdfs/IEEE_Publication.pdf", primary: true },
      { label: "Try the app (open source)", href: "https://orbit-code.web.app/" }
    ]
  },

  "orbit-v3": {
    tag: "Figma Prototype · V3",
    title: "ORBIT App V3 Prototype",
    lede: "The third-iteration Figma prototype of the ORBIT App interface, refining Mission and Sandbox modes based on teacher feedback and student pilot observations from the previous version.",
    meta: [
      { label: "Tool", value: "Figma" },
      { label: "Role", value: "UX Designer + Researcher" },
      { label: "Pages", value: "Mission + Sandbox modes" },
      { label: "Status", value: "Piloted in classrooms" }
    ],
    sections: [
      {
        h: "What changed",
        p: "V3 reduces visual clutter in the Steps Menu, refines Mission scaffolding to support the initial student experience, and sharpens the interaction patterns for adding, configuring, and running steps. Sensor and action options are collapsed by default and only surface when needed, supporting working memory."
      }
    ],
    gallery: [
      "assets/images/orbit_v3.jpg",
      "assets/images/gallery/orbit_v3_p2.jpg",
      "assets/images/gallery/orbit_v3_p20.jpg",
      "assets/images/gallery/orbit_v3_p38.jpg"
    ].filter(Boolean),
    actions: [
      { label: "View V3 prototype", href: "assets/pdfs/V3_prototype.pdf", primary: true },
      { label: "View V2 prototype", href: "assets/pdfs/V2_prototype.pdf" }
    ]
  },

  "orbit-v2": {
    tag: "Figma Prototype · V2",
    title: "ORBIT App V2 Prototype",
    lede: "The second-iteration prototype, following the original low-fidelity paper prototype. Establishes the three-panel structure (Steps Menu, Coding Track, Command Panel) that persists through later iterations.",
    meta: [
      { label: "Tool", value: "Figma" },
      { label: "Basis", value: "Co-design workshop prototype" },
      { label: "Role", value: "UX Designer + Researcher" },
      { label: "Outcome", value: "Fed into teacher testing workshop" }
    ],
    sections: [
      {
        h: "What this version established",
        p: "V2 translated ideas from the co-design paper prototype into a high-fidelity interactive Figma prototype for teachers to evaluate. Key architectural decisions set here include the left-to-right pedagogical flow across the three panels, the theming system (neon, high-contrast white, etc.), and the basic set of action and sense commands."
      }
    ],
    gallery: [
      "assets/images/orbit_v2.jpg",
      "assets/images/gallery/orbit_v2_p2.jpg",
      "assets/images/gallery/orbit_v2_p9.jpg",
      "assets/images/gallery/orbit_v2_p17.jpg"
    ],
    actions: [
      { label: "View V2 prototype", href: "assets/pdfs/V2_prototype.pdf", primary: true }
    ]
  },

  "orbit-obsposter": {
    tag: "Independent Study Poster",
    title: "Structured Observation Poster",
    lede: "Research poster presenting the methodology and theoretical grounding for a structured classroom observation instrument designed to evaluate the ORBIT App with autistic middle school students.",
    meta: [
      { label: "Advisor", value: "Dr. Trevion Henderson, with David Zabner (PhD candidate)" },
      { label: "Framework", value: "Social constructivism" },
      { label: "Method", value: "Critical incident technique" },
      { label: "Design", value: "Conjecture mapping (Sandoval 2014)" }
    ],
    sections: [
      {
        h: "The approach",
        p: "The poster synthesizes a theoretical grounding in social constructivism, identifying learning as a transformative, social process in which individuals actively construct meaning through collaboration. This framing informs an observation protocol centered on the critical incident technique, capturing the rich contextual fabric of classroom learning."
      }
    ],
    gallery: ["assets/images/orbit_obsposter.jpg"],
    actions: [
      { label: "View poster", href: "assets/pdfs/Structured_Observation_Poster.pdf", primary: true },
      { label: "View observation tool", href: "assets/pdfs/Structured_Observation_Tool.pdf" }
    ]
  },

  "orbit-obstool": {
    tag: "Research Instrument · 2024",
    title: "Structured Observation Tool V1.0",
    lede: "A research instrument for capturing rich field data during ORBIT classroom sessions and baseline robotics observations, grounded in the critical incident technique and designed to support thematic analysis.",
    meta: [
      { label: "Released", value: "December 2024" },
      { label: "Advisor", value: "Dr. Trevion Henderson, with David Zabner (PhD candidate)" },
      { label: "Setting", value: "Middle school classroom" },
      { label: "Population", value: "Autistic students (A.I.M.)" }
    ],
    sections: [
      {
        h: "Purpose",
        p: "This instrument supports collection of nuanced, context-rich data describing the culture, interactions, environment, and contextual conditions under which students encounter the ORBIT App for the first time, as well as a comparable baseline observation of similar robotics sessions."
      }
    ],
    gallery: ["assets/images/orbit_obstool.jpg"],
    actions: [
      { label: "View observation tool", href: "assets/pdfs/Structured_Observation_Tool.pdf", primary: true }
    ]
  },

  "sentinel": {
    tag: "Interface Design · Usability Study · 2024",
    title: "Sentinel: A Drowsy Driver Detection App",
    lede: "72,000 crashes, 44,000 injuries, and 800 deaths every year from drowsy driving — yet the detection apps on the market are confusing and hard to trust. I designed Sentinel to fix that, then tested it head-to-head against a real competitor.",
    meta: [
      { label: "Problem", value: "Existing drowsy-driving apps lack trust and usability" },
      { label: "Methods", value: "Figma prototyping, comparative usability testing" },
      { label: "Participants", value: "N = 3 (small-n evaluation)" },
      { label: "Tools", value: "Figma, R" }
    ],
    sections: [
      {
        h: "The problem",
        p: "Drowsy driving kills 800 people a year in the U.S. Apps like Keep Alert exist, but their interfaces don't communicate trustworthiness, they're hard to use from a dashboard mount, and they neglect accessibility. I set out to design something better."
      },
      {
        h: "Design approach",
        p: "Three pillars guided every decision: <strong>safety</strong> — the interface had to look and feel reliable at a glance; <strong>simplicity</strong> — quick to navigate from a phone mount while driving; and <strong>accessibility</strong> — usable for people with sensory or perceptual differences. These weren't aspirational values — each one directly shaped layout, color, typography, and interaction patterns."
      },
      {
        h: "How I tested it",
        p: "I ran the same five tasks (face positioning, alarm settings, privacy controls, face recalibration, accessibility) on both Sentinel and Keep Alert, measuring task completion, time, errors, ease, and satisfaction."
      },
      {
        h: "What I found",
        p: "Sentinel scored significantly higher on perceived interface competency and likelihood to recommend (both p &lt; 0.05). Ease of use was comparable. The study also surfaced two specific areas — recalibration and accessibility flows — that I'd prioritize in a next iteration."
      }
    ],
    gallery: [
      "assets/images/design_sentinel.jpg",
      "assets/images/gallery/design_sentinel_p2.jpg",
      "assets/images/gallery/design_sentinel_p12.jpg",
      "assets/images/gallery/design_sentinel_p23.jpg"
    ],
    actions: [
      { label: "View full report", href: "assets/pdfs/Sentinel.pdf", primary: true }
    ]
  },

  "upaway": {
    tag: "Interactive Design",
    title: "Up & Away Airlines: Interactive Safety Briefing",
    lede: "Most passengers tune out the safety briefing — it's passive, generic, and easy to ignore. I redesigned it as a self-paced, interactive seatback experience that passengers actually engage with.",
    meta: [
      { label: "Challenge", value: "Passengers ignore passive safety demos" },
      { label: "Solution", value: "Interactive, tap-through seatback experience" },
      { label: "Flow", value: "Seatbelts → Oxygen → Life Vest → Brace → Exits" },
      { label: "Tool", value: "Figma" }
    ],
    sections: [
      {
        h: "The insight",
        p: "Standard cabin safety briefings fail because they're one-size-fits-all and require no engagement. Research shows passengers retain almost nothing. The design challenge: how do you make safety information something people <em>choose</em> to pay attention to?"
      },
      {
        h: "The design",
        p: "Up &amp; Away breaks the briefing into five interactive segments — seatbelts, oxygen masks, life vests, brace positions, and exits. Each segment uses clear step-by-step illustrations with explicit confirmations before progressing. Passengers control the pace, which shifts the experience from passive watching to active learning."
      }
    ],
    gallery: [
      "assets/images/design_upaway.jpg",
      "assets/images/gallery/design_upaway_p2.jpg",
      "assets/images/gallery/design_upaway_p13.jpg",
      "assets/images/gallery/design_upaway_p24.jpg"
    ],
    actions: [
      { label: "View prototype screens", href: "assets/pdfs/Up_and_Away.pdf", primary: true }
    ]
  },

  "sec": {
    tag: "Environmental Design · User Research",
    title: "SEC Atrium Redesign",
    lede: "A busy university atrium that tried to be everything — study hall, café, event space — and did none of them well. I spent weeks observing how people actually used the space, then designed two alternatives validated with a physical scale model.",
    meta: [
      { label: "Challenge", value: "Multi-use space failing its primary users" },
      { label: "Research", value: "Weeks of observation, stakeholder interviews" },
      { label: "Validation", value: "1:30 laser-cut plywood model" },
      { label: "Stakeholders", value: "Students, faculty, staff, event personnel" }
    ],
    sections: [
      {
        h: "What I observed",
        p: "The SEC atrium is Tufts' main science and engineering entry point. After weeks of observation, a clear pattern emerged: the space was overwhelmingly used for independent study, but it was also expected to function as a meeting place, casual eatery, and event venue. These competing demands left no use case well-served — and the single biggest pain point was a lack of power outlets."
      },
      {
        h: "Research process",
        p: "I mapped stakeholder groups and their conflicting priorities, conducted interviews (including with a school administrator navigating a parallel architectural redesign), and used SCAMPER prompts to push past an early concept I'd gotten fixated on."
      },
      {
        h: "Two solutions, one core insight",
        p: "Both designs prioritize the primary use (study) while preserving flexibility for events. Design 1: modular stair-seating tables that retract for open-plan events. Design 2: continuous T-shaped bench seating for semi-private work. Both integrate the power outlets that observation flagged as the most urgent gap. I built both at 1:30 scale in laser-cut plywood to evaluate spatial tradeoffs."
      }
    ],
    gallery: [
      "assets/images/design_sec.jpg",
      "assets/images/gallery/design_sec_p2.jpg",
      "assets/images/gallery/design_sec_p10.jpg",
      "assets/images/gallery/design_sec_p18.jpg"
    ],
    actions: [
      { label: "View full report", href: "assets/pdfs/SEC_Redesign.pdf", primary: true }
    ]
  },

  "eazydaize": {
    tag: "Industrial Design · Physical Prototyping",
    title: "Eazy Daize",
    lede: "An end-to-end industrial design project where I let user research — not aesthetics — drive every decision, from form exploration to physical prototype.",
    meta: [
      { label: "Scope", value: "Full design arc: research → prototype" },
      { label: "Research", value: "User interview, in-store observation" },
      { label: "Key themes", value: "Process gratification, maintenance, temperature" },
      { label: "Deliverables", value: "Research deck, concepts, physical prototype" }
    ],
    sections: [
      {
        h: "Starting with the user, not the form",
        p: "I conducted a detailed user interview and an in-store observation visit to understand the existing product category and the rituals around it. Three themes kept surfacing: process gratification (the experience of use matters as much as the result), maintenance ease, and temperature control. These became the design criteria — not a mood board."
      },
      {
        h: "From research to prototype",
        p: "The full arc — problem framing, competitive analysis, ideation, and prototyping — was anchored to those three research themes at every stage. When a concept looked good but didn't address a real user need, I cut it. The final prototype is a physical object shaped entirely by how people actually use products like this, not by how they look on a shelf."
      }
    ],
    gallery: [
      "assets/images/design_eazydaize.jpg",
      "assets/images/gallery/design_eazydaize_p2.jpg",
      "assets/images/gallery/design_eazydaize_p8.jpg",
      "assets/images/gallery/design_eazydaize_p15.jpg"
    ],
    actions: [
      { label: "View full deck", href: "assets/pdfs/Eazy_Daize.pdf", primary: true }
    ]
  },

  "consumer-psych": {
    tag: "Consumer Psychology",
    title: "Consumer Psychology of Lululemon",
    lede: "An analysis of Lululemon's brand strategy through the lens of consumer psychology, examining how retail design, brand identity, workforce culture, and community engagement shape consumer behavior and loyalty.",
    meta: [
      { label: "Topic", value: "Brand & consumer psychology" },
      { label: "Case Study", value: "Lululemon Athletica" },
      { label: "Lens", value: "Retail experience, identity, community" },
      { label: "Format", value: "Research paper" }
    ],
    sections: [
      {
        h: "Overview",
        p: "The paper examines Lululemon's consumer strategy through psychological frameworks, analyzing how the brand leverages experiential retail design, sensory environments, workforce-driven brand identity, and quality perception to cultivate deep consumer loyalty in the athletic apparel market."
      }
    ],
    gallery: ["assets/images/design_consumer_psych.jpg"],
    actions: [
      { label: "Read paper", href: "assets/pdfs/Consumer_Psych.pdf", primary: true }
    ]
  }
};

// --------------------------- Modal logic --------------------------------------
const modal = document.getElementById("projectModal");
const modalContent = document.getElementById("modalContent");

function openModal(projectId) {
  const p = PROJECTS[projectId];
  if (!p) return;

  const metaHtml = p.meta.map(m => `
    <div class="meta-item">
      <span class="meta-label">${m.label}</span>
      <span class="meta-value">${m.value}</span>
    </div>
  `).join("");

  const sectionsHtml = p.sections.map(s => `
    <h4>${s.h}</h4>
    <p>${s.p}</p>
  `).join("");

  const galleryHtml = p.gallery && p.gallery.length
    ? `<div class="modal-gallery">${p.gallery.map(src => `<img src="${src}" alt="" loading="lazy" />`).join("")}</div>`
    : "";

  const actionsHtml = p.actions.map(a => `
    <a href="${a.href}" class="btn${a.primary ? " primary" : ""}" target="_blank" rel="noopener">
      ${a.label}
      <svg width="12" height="12" viewBox="0 0 16 16" fill="none"><path d="M4 12L12 4M12 4H5.5M12 4V10.5" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></svg>
    </a>
  `).join("");

  modalContent.innerHTML = `
    <span class="modal-tag">${p.tag}</span>
    <h3 class="modal-title">${p.title}</h3>
    <p class="modal-lede">${p.lede}</p>
    <div class="modal-meta">${metaHtml}</div>
    <div class="modal-body">${sectionsHtml}</div>
    ${galleryHtml}
    <div class="modal-actions">${actionsHtml}</div>
  `;

  modal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
  modalContent.scrollTop = 0;
}

function closeModal() {
  modal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}

document.querySelectorAll(".project-card").forEach(card => {
  card.addEventListener("click", () => openModal(card.dataset.project));
  card.addEventListener("keydown", e => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      openModal(card.dataset.project);
    }
  });
  card.setAttribute("tabindex", "0");
  card.setAttribute("role", "button");
});

modal.addEventListener("click", e => {
  if (e.target.closest("[data-close]")) closeModal();
});

document.addEventListener("keydown", e => {
  if (e.key === "Escape" && modal.getAttribute("aria-hidden") === "false") closeModal();
});

// --------------------------- Image lightbox ----------------------------------
const lightbox = document.createElement("div");
lightbox.className = "lightbox";
lightbox.setAttribute("aria-hidden", "true");
lightbox.innerHTML = `
  <div class="lightbox-backdrop"></div>
  <img class="lightbox-img" src="" alt="" />
  <button class="lightbox-close" aria-label="Close">
    <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
      <path d="M5 5l10 10M15 5L5 15" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/>
    </svg>
  </button>
  <button class="lightbox-prev" aria-label="Previous image">
    <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
      <path d="M12 4L6 10L12 16" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  </button>
  <button class="lightbox-next" aria-label="Next image">
    <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
      <path d="M8 4L14 10L8 16" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  </button>
`;
document.body.appendChild(lightbox);

const lightboxImg = lightbox.querySelector(".lightbox-img");
let lightboxSrcs = [];
let lightboxIndex = 0;

function openLightbox(src, srcs) {
  lightboxSrcs = srcs || [src];
  lightboxIndex = lightboxSrcs.indexOf(src);
  if (lightboxIndex === -1) lightboxIndex = 0;
  lightboxImg.src = lightboxSrcs[lightboxIndex];
  lightbox.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
  updateLightboxNav();
}

function closeLightbox() {
  lightbox.setAttribute("aria-hidden", "true");
  lightboxImg.src = "";
  if (modal.getAttribute("aria-hidden") === "false") {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "";
  }
}

function updateLightboxNav() {
  lightbox.querySelector(".lightbox-prev").style.display = lightboxSrcs.length > 1 ? "" : "none";
  lightbox.querySelector(".lightbox-next").style.display = lightboxSrcs.length > 1 ? "" : "none";
}

function lightboxNav(dir) {
  lightboxIndex = (lightboxIndex + dir + lightboxSrcs.length) % lightboxSrcs.length;
  lightboxImg.src = lightboxSrcs[lightboxIndex];
}

lightbox.querySelector(".lightbox-backdrop").addEventListener("click", closeLightbox);
lightbox.querySelector(".lightbox-close").addEventListener("click", closeLightbox);
lightbox.querySelector(".lightbox-prev").addEventListener("click", () => lightboxNav(-1));
lightbox.querySelector(".lightbox-next").addEventListener("click", () => lightboxNav(1));

document.addEventListener("keydown", e => {
  if (lightbox.getAttribute("aria-hidden") === "false") {
    if (e.key === "Escape") closeLightbox();
    if (e.key === "ArrowLeft") lightboxNav(-1);
    if (e.key === "ArrowRight") lightboxNav(1);
  }
});

// Delegate click on gallery images inside the modal
modal.addEventListener("click", e => {
  const img = e.target.closest(".modal-gallery img");
  if (!img) return;
  const allImgs = Array.from(modal.querySelectorAll(".modal-gallery img")).map(i => i.src);
  openLightbox(img.src, allImgs);
});

// --------------------------- Scroll-reveal ------------------------------------
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("in");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.15, rootMargin: "0px 0px -50px 0px" });

document.querySelectorAll(".section-head, .about-grid, .project-card, .contact-inner").forEach(el => {
  el.classList.add("reveal");
  observer.observe(el);
});

// Stagger reveals of cards within each grid
document.querySelectorAll(".project-grid").forEach(grid => {
  grid.querySelectorAll(".project-card").forEach((card, i) => {
    card.style.transitionDelay = `${Math.min(i * 80, 400)}ms`;
  });
});

// --------------------------- Top nav scroll state -----------------------------
const topnav = document.getElementById("topnav");
if (topnav) {
  const onScroll = () => {
    if (window.scrollY > 20) topnav.classList.add("scrolled");
    else topnav.classList.remove("scrolled");
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
}
