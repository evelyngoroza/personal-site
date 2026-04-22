/* ===========================================================================
   Portfolio interactions
   - Project modal open/close with data-driven content
   - Keyboard accessibility
   =========================================================================== */

// --------------------------- Project data -------------------------------------
const PROJECTS = {
  "thesis-proquest": {
    tag: "Master's Thesis · Tufts University · 2025",
    title: "Quantifying Calibration: Bridging Trust and Reliance in Automation",
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
    lede: "The visual companion to the oral defense of <em>Quantifying Calibration</em>. Walks through motivation, literature framing, study design, findings, and implications for collaborative automation.",
    meta: [
      { label: "Date", value: "August 2025" },
      { label: "Committee", value: "Miller (adv.), Hannon, Taylor" },
      { label: "Institution", value: "Tufts University" },
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
      { label: "Role", value: "Interface designer" },
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
      { label: "Basis", value: "Paper prototype from co-design workshop" },
      { label: "Role", value: "Interface designer" },
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
      { label: "Course", value: "Independent Study" },
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
      { label: "Method", value: "Critical incident technique" },
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
    tag: "Behavioral Statistics ENP-164 · 2024",
    title: "Sentinel: A Drowsy Driver Detection App",
    lede: "An interface concept for a drowsy driver detection app. I prototyped Sentinel in Figma and evaluated it through a small-n usability study with comparative analysis against an existing market app (Keep Alert).",
    meta: [
      { label: "Course", value: "ENP-164 Behavioral Statistics" },
      { label: "Tool", value: "Figma + R" },
      { label: "Users", value: "N = 3 (small-n analysis)" },
      { label: "Problem", value: "72k crashes / 44k injuries / 800 deaths annually from drowsy driving" }
    ],
    sections: [
      {
        h: "Design pillars",
        p: "Three design pillars anchored the work: <strong>safety</strong> (interface communicates trustworthiness and reliability through aesthetics and functionality), <strong>simplicity</strong> (a layout that is quick to navigate from a dashboard phone mount), and <strong>accessibility</strong> (features that make the app usable for users with sensory or perceptual differences)."
      },
      {
        h: "Evaluation",
        p: "Participants completed five tasks spanning face positioning, alarm settings, privacy, face recalibration, and accessibility. I collected task completion, time on task, error count, ease score, and satisfaction score, then compared Sentinel with Keep Alert on the same tasks."
      },
      {
        h: "Findings",
        p: "Sentinel demonstrated statistically significant advantages in interface competency and in likelihood to recommend (both p &lt; 0.05) versus Keep Alert. Ease of use was similar. Recalibration and accessibility flows were identified as the next iteration's focus."
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
    lede: "A reimagined interactive in-flight safety briefing for a fictional airline, Up &amp; Away. The design translates the standard pre-takeoff safety demonstration into a structured, tap-through experience an individual passenger can follow at their own pace.",
    meta: [
      { label: "Type", value: "Interactive prototype" },
      { label: "Flow", value: "Seatbelts · Oxygen · Life Vest · Brace · Exits" },
      { label: "Audience", value: "Single passenger, seatback screen" },
      { label: "Tool", value: "Figma" }
    ],
    sections: [
      {
        h: "Design intent",
        p: "Standard cabin safety briefings are passive and often tuned out. The Up &amp; Away prototype makes the briefing interactive: passengers tap through each segment (oxygen masks, flotation devices, brace positions, exits) with clear step-by-step illustrations and explicit confirmations, ending with a brief acknowledgement."
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
    tag: "Environmental Design",
    title: "SEC Atrium Redesign",
    lede: "A re-design of the atrium of Tufts' Science and Engineering Complex, grounded in structured stakeholder analysis and validated with a 1:30 laser-cut scale model exploring two alternative seating configurations.",
    meta: [
      { label: "Site", value: "Tufts SEC atrium" },
      { label: "Model", value: "1:30 laser-cut plywood" },
      { label: "Method", value: "SCAMPER + Pahl et al. iterative design" },
      { label: "Stakeholders", value: "Students, faculty, staff, event personnel, community" }
    ],
    sections: [
      {
        h: "Problem",
        p: "The SEC atrium, Tufts' main science and engineering entry, is heavily used for independent study yet also functions as a meeting place, casual eatery, and occasional event venue. The re-design optimizes for the primary use (study) without compromising the secondary uses."
      },
      {
        h: "Process",
        p: "Stakeholder identification mapped the range of users and their often conflicting priorities. I observed usage patterns over several weeks, interviewed a Milton High math department head then going through her own school's architectural re-design, and iterated through SCAMPER prompts to unblock creative fixation on an early monotile-based concept."
      },
      {
        h: "Two designs, modeled",
        p: "Design 1 features modular, swingable stair-seating tables that retract into the wall fixture for open-plan events; Design 2 uses continuous bench seating in a T-arrangement for semi-private work with the flexibility to host events. Both integrate additional power outlets, which my observation identified as the most pressing gap."
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
    tag: "Industrial Design ENP-165 · Final Project",
    title: "Eazy Daize",
    lede: "A full industrial design process, from user research and form exploration to physical prototype. The final project for Tufts' ENP-165 Industrial Design course.",
    meta: [
      { label: "Course", value: "ENP-165 Industrial Design" },
      { label: "Type", value: "Product redesign" },
      { label: "Research", value: "User interview, in-store observation" },
      { label: "Deliverables", value: "Research deck, concepts, prototype" }
    ],
    sections: [
      {
        h: "Research",
        p: "Primary research included a detailed user interview and an in-store observation visit to characterize the existing product category, user needs, and usage ritual. Three recurring themes emerged: process gratification, maintenance ease (cleaning), and temperature control (material choice, combustion)."
      },
      {
        h: "Process",
        p: "The project follows the full industrial design arc: problem framing, user research, competitive and contextual inquiry, ideation, prototyping, and reflection. The focus throughout is on the lived usage pattern of the product rather than its aesthetics alone."
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
  if (e.target.dataset && e.target.hasAttribute("data-close")) closeModal();
});

document.addEventListener("keydown", e => {
  if (e.key === "Escape" && modal.getAttribute("aria-hidden") === "false") closeModal();
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
