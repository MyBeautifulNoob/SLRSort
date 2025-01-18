dataSetVersion = "2025-01-19"; // Change this when creating a new data set version. YYYY-MM-DD format.
dataSet[dataSetVersion] = {};

dataSet[dataSetVersion].options = [
  {
    name: "Filter by races",
    key: "races",
    tooltip: "Check this to restrict to certain affiliations.",
    checked: false,
    sub: [
      { name: "Human", key: "Human" },
      { name: "Machine", tooltop: "Artificial Intelligence, Robotic", key: "Mach" },
      { name: "Devil", tooltop: "Devil", key: "Devil" }, // A contract with a demon is pointless, one with a devil will be held to.
      { name: "Demon", tooltop: "Youkai", key: "Demon" },
      { name: "Unknown", tooltip: "Characters whose races are not known.", key: "Unk" }
    ]
  },
  {
    name: "Filter by affiliations",
    key: "affiliations",
    tooltip: "Check this to restrict to certain affiliations.",
    checked: false,
    sub: [
      { name: "Omega Incorporation", tooltip: "Omega Inc.", key: "Omega" },
      { name: "Invincible", key: "Invin" },
      { name: "MED", tooltip: "Mankind Evolution Development", key: "MED"},
      { name: "Unaffiliated", tooltip: "Characters that are not a part of any groups or organizations.", key: "Unaf" }
    ]
  },
  {
    name: "Remove Non-Girls",
    key: "notgirl",
    tooltip: "Check this to remove all non-female characters.",
    checked: false
  },
  {
    name: "Remove Anomalies",
    key: "anomaly",
    tooltip: "Check this to remove all anomaly characters.",
    checked: false
  },
  {
    name: "Remove Side Characters",
    key: "side",
    tooltip: "Check this to remove side characters.",
    checked: false
  }
];

dataSet[dataSetVersion].characterData = [
  {
    name: "Melody",
    img: "eumKJPj.png",
    opts: {
      affiliations: ["Omega", "Invin"],
      races: ["Human"]
    }
  },
  {
    name: "Verletz",
    img: "WfkP0Sk.png",
    opts: {
      affiliations: ["Invin"],
      races: ["Human"]
    },
  },
  {
    name: "Superior",
    img: "5FPrjWP.png",
    opts: {
      affiliations: ["Invin"],
      races: ["Human"]
    }
  },
  {
    name: "Rosella Elda",
    img: "xMG7xx4.png",
    opts: {
      affiliations: ["Omega"],
      races: ["Human"]
    }
  },
  {
    name: "Hangman",
    img: "5FPrjWP.png",
    opts: {
      affiliations: ["Unaf"],
      races: ["Human"],
      notgirl: true
    }
  },
  {
    name: "Hoshi Hanako",
    img: "eJZrjVl.png",
    opts: {
      affiliations: ["Unaf"],
      races: ["Human"]
    }
  },
  {
    name: "Fortune",
    img: "5FPrjWP.png",
    opts: {
      affiliations: ["Unaf"],
      races: ["Devil"],
      notgirl: true,
      anomaly: true
    }
  },
  {
    name: "Misfortune",
    img: "5pPWsQc.png",
    opts: {
      affiliations: ["Unaf"],
      races: ["Demon"],
      anomaly: true
    }
  },
  {
    name: "Lorax",
    img: "W0ibNI6.png",
    opts: {
      affiliations: ["Unaf"],
      races: ["Unk"],
      notgirl: true,
      anomaly: true
    }
  },
  {
    name: "Julie",
    img: "BM1PTdD.png",
    opts: {
      affiliations: ["Unaf"],
      races: ["Human"]
    }
  },
  {
    name: "Donovan Colt",
    img: "5FPrjWP.png",
    opts: {
      affiliations: ["Unaf"],
      races: ["Human"],
      notgirl: true,
      side: true
    }
  },
  {
    name: "Cosmo (Devil Form)",
    img: "WiwwRPS.png",
    opts: {
      affiliations: ["Unaf"],
      races: ["Devil"],
      notgirl: true,
      anomaly: true,
      side: true
    }
  },
  {
    name: "Cosmo",
    img: "WiwwRPS.png",
    opts: {
      affiliations: ["Unaf"],
      races: ["Demon"],
      notgirl: true,
      anomaly: true
    }
  },
  {
    name: "Diziux",
    img: "5FPrjWP.png",
    opts: {
      affiliations: ["Unaf"],
      races: ["Unk"],
      anomaly: true
    }
  },
  {
    name: "F4TH3R",
    img: "5FPrjWP.png",
    opts: {
      affiliations: ["Unaf"],
      races: ["Mach"],
      notgirl: true,
      anomaly: true
    }
  },
  {
    name: "Yuki Onna",
    img: "5FPrjWP.png",
    opts: {
      affiliations: ["Unaf"],
      races: ["Demon"],
      anomaly: true,
      side: true
    }
  },
  {
    name: "Raichi",
    img: "5FPrjWP.png",
    opts: {
      affiliations: ["Unaf"],
      races: ["Human"],
      notgirl: true
    }
  },
  {
    name: "Chado",
    img: "5FPrjWP.png",
    opts: {
      affiliations: ["Unaf"],
      races: ["Human"],
      notgirl: true
    }
  },
  {
    name: "Kami",
    img: "5FPrjWP.png",
    opts: {
      affiliations: ["Unaf"],
      races: ["Human"],
      notgirl: true
    }
  },
  {
    name: "Soyoko",
    img: "5FPrjWP.png",
    opts: {
      affiliations: ["Unaf"],
      races: ["Human"],
      notgirl: true
    }
  },
  {
    name: "Masako",
    img: "3JLfw67.png",
    opts: {
      affiliations: ["Unaf"],
      races: ["Human"],
      notgirl: true
    }
  },
  {
    name: "Yusuni",
    img: "9mB0Ems.png",
    opts: {
      affiliations: ["Unaf"],
      races: ["Human"],
      notgirl: true
    }
  },
];
