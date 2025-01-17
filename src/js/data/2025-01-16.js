dataSetVersion = "2025-01-16"; // Change this when creating a new data set version. YYYY-MM-DD format.
dataSet[dataSetVersion] = {};

dataSet[dataSetVersion].options = [
  {
    name: "Filter by affiliations",
    key: "affiliations",
    tooltip: "Check this to restrict to certain affiliations.",
    checked: false,
    sub: [
      { name: "Omega Incorporation", tooltip: "Omega Inc.", key: "Omega" },
      { name: "Invincible", key: "Invin" },
      { name: "HDO", key: "HDO"},
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
    name: "Remove Humans",
    key: "human",
    tooltip: "Check this to remove all human characters.",
    checked: false
  }
];

dataSet[dataSetVersion].characterData = [
  {
    name: "Melody",
    img: "eumKJPj.png",
    opts: {
      affiliations: ["Omega", "Invin"],
      human: true
    }
  },
  {
    name: "Verletz",
    img: "WfkP0Sk.png",
    opts: {
      affiliations: ["Invin"],
      human: true
    },
  },
  {
    name: "Superior",
    img: "5FPrjWP.png",
    opts: {
      affiliations: ["Invin"],
      human: true
    }
  },
  {
    name: "Rosella Elda",
    img: "xMG7xx4.png",
    opts: {
      affiliations: ["Omega"],
      human: true
    }
  },
  {
    name: "Hangman",
    img: "5FPrjWP.png",
    opts: {
      affiliations: ["HDO"],
      notgirl: true,
      human: true
    }
  },
  {
    name: "Hoshi Hanako",
    img: "eJZrjVl.png",
    opts: {
      affiliations: ["Unaf"],
      human: true
    }
  },
  {
    name: "Fortune",
    img: "5FPrjWP.png",
    opts: {
      affiliations: ["Unaf"],
      notgirl: true,
      anomaly: true
    }
  },
  {
    name: "Misfortune",
    img: "5pPWsQc.png",
    opts: {
      affiliations: ["Unaf"],
      anomaly: true
    }
  },
  {
    name: "Lorax",
    img: "W0ibNI6.png",
    opts: {
      affiliations: ["Unaf"],
      notgirl: true,
      anomaly: true
    }
  },
  {
    name: "Masako",
    img: "3JLfw67.png",
    opts: {
      affiliations: ["Unaf"],
      notgirl: true,
      human: true
    }
  },
  {
    name: "Yusuni",
    img: "9mB0Ems.png",
    opts: {
      affiliations: ["Unaf"],
      notgirl: true,
      human: true
    }
  },
  {
    name: "Julie",
    img: "BM1PTdD.png",
    opts: {
      affiliations: ["Unaf"],
      human: true
    }
  },
  {
    name: "Cosmo",
    img: "WiwwRPS.png",
    opts: {
      affiliations: ["Unaf"],
      notgirl: true,
      anomaly: true
    }
  },
  {
    name: "Diziux",
    img: "5FPrjWP.png",
    opts: {
      affiliations: ["Unaf"],
      anomaly: true
    }
  },
  {
    name: "F4TH3R",
    img: "5FPrjWP.png",
    opts: {
      affiliations: ["Unaf"],
      notgirl: true,
      anomaly: true
    }
  },
  {
    name: "Yuki Onna",
    img: "5FPrjWP.png",
    opts: {
      affiliations: ["Unaf"],
      anomaly: true
    }
  },
  {
    name: "Raichi",
    img: "5FPrjWP.png",
    opts: {
      affiliations: ["Unaf"],
      notgirl: true,
      human: true
    }
  },
  {
    name: "Chado",
    img: "5FPrjWP.png",
    opts: {
      affiliations: ["Unaf"],
      notgirl: true,
      human: true
    }
  },
  {
    name: "Kami",
    img: "5FPrjWP.png",
    opts: {
      affiliations: ["Unaf"],
      notgirl: true,
      human: true
    }
  },
  {
    name: "Soyoko",
    img: "5FPrjWP.png",
    opts: {
      affiliations: ["Unaf"],
      notgirl: true,
      human: true
    }
  },
];
