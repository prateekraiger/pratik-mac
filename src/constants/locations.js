export const ABOUT_LOCATION = {
  id: 2,
  type: "about",
  name: "About me",
  icon: "/icons/info.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "me.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-10 left-5",
      imageUrl: "https://ik.imagekit.io/mtk2a0sx6/One%20piece.jpg?updatedAt=1751217552536",
    },
    {
      id: 4,
      name: "about-me.txt",
      icon: "/images/txt.png",
      kind: "file",
      fileType: "txt",
      position: "top-60 left-5",
      subtitle: "Meet the Developer Behind the Screen",
      image: "https://ik.imagekit.io/mtk2a0sx6/One%20piece.jpg?updatedAt=1751217552536",
      description: [
        "Hey! I’m Prateek 👋, a web developer who loves turning ideas into clean, fast, and interactive experiences on the web.",
        "I work mostly with JavaScript, TypeScript, React, and Next.js—crafting interfaces that feel smooth, intuitive, and fun to actually use.",
        "I care a lot about sleek UI, thoughtful UX, and writing code that future-me doesn’t hate reading at 3AM.",
        "When I’m not shipping features, I’m usually tweaking my setup, exploring new tools, or going down some deep tech rabbit hole on the internet.",
      ],
    },
  ],
};

export const RESUME_LOCATION = {
  id: 3,
  type: "resume",
  name: "Resume",
  icon: "/icons/file.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "Resume.pdf",
      icon: "/images/pdf.png",
      kind: "file",
      fileType: "pdf",
      // you can add `href` if you want to open a hosted resume
      // href: "/your/resume/path.pdf",
    },
  ],
};

export const TRASH_LOCATION = {
  id: 4,
  type: "trash",
  name: "Trash",
  icon: "/icons/trash.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "trash1.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-10 left-10",
      imageUrl: "/images/trash-1.png",
    },
    {
      id: 2,
      name: "trash2.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-40 left-80",
      imageUrl: "/images/trash-2.png",
    },
  ],
};
