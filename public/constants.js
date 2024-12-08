      const hero = {
        name: "Khaleeqa Aasiyah Garrett",
        title: "Young Tech Enthusiast |Computer Science Major |IM Minor",
      };

      const about = {
        title: "Hello welcome to my youtube channel!",
        description: `
   I am currently a student at NYU Abu Dhabi, pursuing a major in Computer Science with a minor in Interactive Media (IM). While my academic foundation is rooted in CS, my true passion lies in the creative possibilities that IM offers. I’m a coding enthusiast, constantly experimenting with new technologies and tools to bring ideas to life. I have experience with languages and frameworks such as C, C++, JavaScript, Python, HTML, CSS, p5.js, Swift, and R Studio.
   ---
   My journey into the tech world began in high school, where I once aspired to become a biomedical engineer. However, life had a different path in store for me. Over time, I found myself captivated by the intersection of technology, design, and creativity. I’ve worked on projects leveraging powerful libraries like TensorFlow, p5.js, ml5.js, and Three.js, exploring everything from machine learning to interactive web design.
   ---
   Currently, I am developing StorkCare+, a telehealth app designed for expectant mothers. This app helps them schedule appointments, track baby development, and set medication reminders—all from the comfort of their own homes. I’m excited about the impact it could have in making healthcare more accessible and supportive during pregnancy.`,
       image: "/social/khal.jpg"
  };

  const aboutSection = document.getElementById("about-me");

  // Insert the image and text dynamically
  aboutSection.innerHTML = `
      <div class="about-image-wrapper">
          <img src="${about.image}" alt="Your Name" class="about-image" />
      </div>
      <h3 class="section-heading">${about.title}</h3>
  `;

      const projects = [
        {
          name: "The Campus Tales 30MFF Website",
          description:
            "The Campus Tales 30MFF Website showcases the collaborative process and creative challenge behind producing a short film in under 30 minutes for my Fall 2024 Communications Lab class.",
          link: "https://khaleeks.github.io/30mFF/index.html",
        },
        {
          name: "Chatastrophe",
          description:
            "This interactive web comic tells the emotional journey of Chatney, NYU Abu Dhabi's first AI-student, exploring themes of kindness, exploitation, and human-computer relationships through immersive storytelling and dynamic engagement.",
          link: "https://khaleeks.github.io/comicAssign/index.html",
        },
        {
          name: "The Desperate Students of Saadiyat Island",
          description:
            "The Desperate Students of Saadiyat Island is a short interactive film that explores themes of hypocrisy and justice through a suspenseful narrative, blending multiple locations into a unified story to reveal a surprising twist.",
          link: "https://khaleeks.github.io/VidEOH/index.html",
        },
        {
          name: "A Call from the Future",
          description:
            "Conversations with Arix is a 2-3 minute audio journey that immerses listeners in a cross-temporal dialogue with an AI-human hybrid, blending futuristic soundscapes and thought-provoking conversation.",
          link: "https://aleks4ndrr.github.io/sound-project/index.html",
        },
        {
          name: "Digital Diary",
          description:
            "Collection of Digital Arts and Humanities projects, exploring topics from digital literacy to mapping Palestine and analyzing historical texts.",
          link: "https://khaleeksy.github.io",
        },
        {
          name: "Sankofa",
          description:
            "A web-based screen recorder that dThis project explores the Akan philosophy of Sankofa, using Adinkra symbols to blend traditional heritage with modern, interactive art, aiming to highlight the importance of history in shaping personal growth and cultural awareness.oesn't require installation of any software.",
          link: "https://editor.p5js.org/KhaleeqaAasiyah/sketches/wiV8mj3aM",
        },
      ];

      const contact = {
        name: "Contact Me",
        title: "Let's Talk",
        description: `
          I'm currently looking for new opportunities. My inbox is always open. Whether you have a question or just want to say hi, I'll try my best to get back to you!`,

        socials: [
          {
            name: "Mail",
            link: "mailto:kag9691@nyu.edu",
            description:
              "Reach out via email to collaborate or discuss exciting opportunities!",
          },
          {
            name: "Instagram",
            link: "https://www.instagram.com/khal.aasiyah/profilecard/?igsh=MXBubGkyd2FxY290cQ%3D%3D",
            description:
              "Follow me on Instagram for updates and musings about balancing my life as a college student.",
          },
          {
            name: "LinkedIn",
            link: "https://www.linkedin.com/in/khaleeqa-garrett-249086299/",
            description:
              "Connect with me on LinkedIn to stay updated on my professional journey and collaborations.",
          },
          {
            name: "GitHub",
            link: "https://github.com/Khaleeks",
            description:
              "Check out my GitHub profile for some of my coding projects and experiments.",
          },
        ],
      };
