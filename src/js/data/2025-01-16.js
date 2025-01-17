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
    key: "girl",
    tooltip: "Disable this to remove all non-female characters.",
    checked: false
  },
  {
    name: "Remove Anomalies",
    key: "notanomaly",
    tooltip: "Disable this to remove all anomaly characters.",
    checked: false
  },
  {
    name: "Remove Humans",
    key: "nothuman",
    tooltip: "Disable this to remove all human characters.",
    checked: false
  }
];

dataSet[dataSetVersion].characterData = [
  {
    name: "Melody",
    img: "eumKJPj.png",
    opts: {
      affiliations: ["Omega", "Invin"],
      girl: true,
      notanomaly: true
    }
  },
  {
    name: "Verletz",
    img: "WfkP0Sk.png",
    opts: {
      affiliations: ["Invin"],
      girl: true,
      notanomaly: true
    },
  },
  {
    name: "Superior",
    img: "5FPrjWP.png",
    opts: {
      affiliations: ["Invin"],
      girl: true,
      notanomaly: true
    }
  },
  {
    name: "Rosella Elda",
    img: "xMG7xx4.png",
    opts: {
      affiliations: ["Omega"],
      girl: true,
      notanomaly: true
    }
  },
  {
    name: "Hangman",
    img: "5FPrjWP.png",
    opts: {
      affiliations: ["HDO"],
      notanomaly: true
    }
  },
  {
    name: "Hoshi Hanako",
    img: "eJZrjVl.png",
    opts: {
      affiliations: ["Unaf"],
      girl: true,
      notanomaly: true
    }
  },
  {
    name: "Fortune",
    img: "5FPrjWP.png",
    opts: {
      affiliations: ["Unaf"],
      nothuman: true
    }
  },
  {
    name: "Misfortune",
    img: "5pPWsQc.png",
    opts: {
      affiliations: ["Unaf"],
      girl: true,
      nothuman: true
    }
  },
  {
    name: "Lorax",
    img: "W0ibNI6.png",
    opts: {
      affiliations: ["Unaf"],
      nothuman: true
    }
  },
  {
    name: "Masako",
    img: "3JLfw67.png",
    opts: {
      affiliations: ["Unaf"],
      notanomaly: true
    }
  },
  {
    name: "Yusuni",
    img: "9mB0Ems.png",
    opts: {
      affiliations: ["Unaf"],
      notanomaly: true
    }
  },
  {
    name: "Julie",
    img: "BM1PTdD.png",
    opts: {
      affiliations: ["Unaf"],
      girl: true,
      notanomaly: true
    }
  },
  {
    name: "Cosmo",
    img: "WiwwRPS.png",
    opts: {
      affiliations: ["Unaf"],
      nothuman: true
    }
  },
  {
    name: "Diziux",
    img: "5FPrjWP.png",
    opts: {
      affiliations: ["Unaf"],
      girl: true,
      nothuman: true
    }
  },
  {
    name: "F4TH3R",
    img: "5FPrjWP.png",
    opts: {
      affiliations: ["Unaf"],
      nothuman: true
    }
  },
  {
    name: "Yuki Onna",
    img: "5FPrjWP.png",
    opts: {
      affiliations: ["Unaf"],
      girl: true,
      nothuman: true
    }
  },
  {
    name: "Raichi",
    img: "5FPrjWP.png",
    opts: {
      affiliations: ["Unaf"],
      notanomaly: true
    }
  },
  {
    name: "Chado",
    img: "5FPrjWP.png",
    opts: {
      affiliations: ["Unaf"],
      notanomaly: true
    }
  },
  {
    name: "Kami",
    img: "5FPrjWP.png",
    opts: {
      affiliations: ["Unaf"],
      notanomaly: true
    }
  },
  {
    name: "Soyoko",
    img: "5FPrjWP.png",
    opts: {
      affiliations: ["Unaf"],
      notanomaly: true
    }
  },
];
