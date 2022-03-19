let topics = [
  { name: "Good Youth Jobs", value: 0.93 },
  { name: "Public Health", value: 0.93 },
  { name: "Income Generation", value: 0.9 },
  { name: "Cost of Living", value: 0.92 },
  { name: "Education + Training", value: 0.91 },
  { name: "Equity + Inclusion", value: 0.9 },
  { name: "Climate Change", value: 0.8 },
  { name: "Public Transportation", value: 0.85 },
  { name: "Digital Access", value: 0.8 },
  { name: "City Economy", value: 0.79 },
  { name: "Entrepreneurial Spirit", value: 0.73 },
];

let citiesWithScores = [
  {
    name: "Brampton",
    children: [
      {
        name: "Good Youth Jobs",
        value: 58.93,
      },
      {
        name: "Public Health",
        value: 66.55,
      },
      {
        name: "Income Generation",
        value: 44.94,
      },
      {
        name: "Cost of Living",
        value: 47.84,
      },
      {
        name: "Education + Training",
        value: 49.49,
      },
      {
        name: "Equity + Inclusion",
        value: 41.19,
      },
      {
        name: "Climate Change",
        value: 36.94,
      },
      {
        name: "Public Transportation",
        value: 50.37,
      },
      {
        name: "Digital Access",
        value: 36.64,
      },
      {
        name: "City Economy",
        value: 65.98,
      },
      {
        name: "Entrepreneurial Spirit",
        value: 40.84,
      },
    ],
  },
  {
    name: "Calgary",
    children: [
      {
        name: "Good Youth Jobs",
        value: 46.15,
      },
      {
        name: "Public Health",
        value: 48.59,
      },
      {
        name: "Income Generation",
        value: 61.72,
      },
      {
        name: "Cost of Living",
        value: 72.06,
      },
      {
        name: "Education + Training",
        value: 60.17,
      },
      {
        name: "Equity + Inclusion",
        value: 54.4,
      },
      {
        name: "Climate Change",
        value: 45.53,
      },
      {
        name: "Public Transportation",
        value: 52.17,
      },
      {
        name: "Digital Access",
        value: 63.66,
      },
      {
        name: "City Economy",
        value: 52.93,
      },
      {
        name: "Entrepreneurial Spirit",
        value: 56.74,
      },
    ],
  },
  {
    name: "Charlottetown",
    children: [
      {
        name: "Good Youth Jobs",
        value: 48.91,
      },
      {
        name: "Public Health",
        value: 39.81,
      },
      {
        name: "Income Generation",
        value: 52.45,
      },
      {
        name: "Cost of Living",
        value: 61.2,
      },
      {
        name: "Education + Training",
        value: 68.66,
      },
      {
        name: "Equity + Inclusion",
        value: 12.88,
      },
      {
        name: "Climate Change",
        value: 60.94,
      },
      {
        name: "Public Transportation",
        value: 34.99,
      },
      {
        name: "Digital Access",
        value: 44.27,
      },
      {
        name: "City Economy",
        value: 52.07,
      },
      {
        name: "Entrepreneurial Spirit",
        value: 37.12,
      },
    ],
  },
  {
    name: "Edmonton",
    children: [
      {
        name: "Good Youth Jobs",
        value: 43.58,
      },
      {
        name: "Public Health",
        value: 72.6,
      },
      {
        name: "Income Generation",
        value: 55.02,
      },
      {
        name: "Cost of Living",
        value: 77.67,
      },
      {
        name: "Education + Training",
        value: 55.87,
      },
      {
        name: "Equity + Inclusion",
        value: 63.3,
      },
      {
        name: "Climate Change",
        value: 49.86,
      },
      {
        name: "Public Transportation",
        value: 49.21,
      },
      {
        name: "Digital Access",
        value: 57.87,
      },
      {
        name: "City Economy",
        value: 40.91,
      },
      {
        name: "Entrepreneurial Spirit",
        value: 51.07,
      },
    ],
  },
  {
    name: "Fredericton",
    children: [
      {
        name: "Good Youth Jobs",
        value: 52.87,
      },
      {
        name: "Public Health",
        value: 49.4,
      },
      {
        name: "Income Generation",
        value: 40.85,
      },
      {
        name: "Cost of Living",
        value: 42.49,
      },
      {
        name: "Education + Training",
        value: 53.9,
      },
      {
        name: "Equity + Inclusion",
        value: 26.83,
      },
      {
        name: "Climate Change",
        value: 21.76,
      },
      {
        name: "Public Transportation",
        value: 30.64,
      },
      {
        name: "Digital Access",
        value: 47.95,
      },
      {
        name: "City Economy",
        value: 77.03,
      },
      {
        name: "Entrepreneurial Spirit",
        value: 10.41,
      },
    ],
  },
  {
    name: "Halifax",
    children: [
      {
        name: "Good Youth Jobs",
        value: 53.68,
      },
      {
        name: "Public Health",
        value: 59.01,
      },
      {
        name: "Income Generation",
        value: 36.31,
      },
      {
        name: "Cost of Living",
        value: 58.47,
      },
      {
        name: "Education + Training",
        value: 46.77,
      },
      {
        name: "Equity + Inclusion",
        value: 55.72,
      },
      {
        name: "Climate Change",
        value: 62.9,
      },
      {
        name: "Public Transportation",
        value: 60.4,
      },
      {
        name: "Digital Access",
        value: 50.87,
      },
      {
        name: "City Economy",
        value: 63.68,
      },
      {
        name: "Entrepreneurial Spirit",
        value: 22.09,
      },
    ],
  },
  {
    name: "Hamilton",
    children: [
      {
        name: "Good Youth Jobs",
        value: 60.61,
      },
      {
        name: "Public Health",
        value: 69.75,
      },
      {
        name: "Income Generation",
        value: 55.97,
      },
      {
        name: "Cost of Living",
        value: 71.4,
      },
      {
        name: "Education + Training",
        value: 58.14,
      },
      {
        name: "Equity + Inclusion",
        value: 60.13,
      },
      {
        name: "Climate Change",
        value: 56.77,
      },
      {
        name: "Public Transportation",
        value: 40.09,
      },
      {
        name: "Digital Access",
        value: 34.67,
      },
      {
        name: "City Economy",
        value: 62.96,
      },
      {
        name: "Entrepreneurial Spirit",
        value: 49.7,
      },
    ],
  },
  {
    name: "Kelowna",
    children: [
      {
        name: "Good Youth Jobs",
        value: 55.3,
      },
      {
        name: "Public Health",
        value: 60.81,
      },
      {
        name: "Income Generation",
        value: 66.4,
      },
      {
        name: "Cost of Living",
        value: 69.76,
      },
      {
        name: "Education + Training",
        value: 44.7,
      },
      {
        name: "Equity + Inclusion",
        value: 33.04,
      },
      {
        name: "Climate Change",
        value: 51.61,
      },
      {
        name: "Public Transportation",
        value: 45.9,
      },
      {
        name: "Digital Access",
        value: 50.51,
      },
      {
        name: "City Economy",
        value: 51.82,
      },
      {
        name: "Entrepreneurial Spirit",
        value: 35.53,
      },
    ],
  },
  {
    name: "Kitchener Waterloo",
    children: [
      {
        name: "Good Youth Jobs",
        value: 43.11,
      },
      {
        name: "Public Health",
        value: 54.06,
      },
      {
        name: "Income Generation",
        value: 56.25,
      },
      {
        name: "Cost of Living",
        value: 52.43,
      },
      {
        name: "Education + Training",
        value: 47.87,
      },
      {
        name: "Equity + Inclusion",
        value: 54.43,
      },
      {
        name: "Climate Change",
        value: 56.04,
      },
      {
        name: "Public Transportation",
        value: 44.62,
      },
      {
        name: "Digital Access",
        value: 42.33,
      },
      {
        name: "City Economy",
        value: 60.11,
      },
      {
        name: "Entrepreneurial Spirit",
        value: 48.51,
      },
    ],
  },
  {
    name: "Laval",
    children: [
      {
        name: "Good Youth Jobs",
        value: 46.91,
      },
      {
        name: "Public Health",
        value: 38.04,
      },
      {
        name: "Income Generation",
        value: 58.26,
      },
      {
        name: "Cost of Living",
        value: 61.53,
      },
      {
        name: "Education + Training",
        value: 48.62,
      },
      {
        name: "Equity + Inclusion",
        value: 38.57,
      },
      {
        name: "Climate Change",
        value: 55.29,
      },
      {
        name: "Public Transportation",
        value: 42.56,
      },
      {
        name: "Digital Access",
        value: 38.64,
      },
      {
        name: "City Economy",
        value: 58.13,
      },
      {
        name: "Entrepreneurial Spirit",
        value: 53.69,
      },
    ],
  },
  {
    name: "Lethbridge",
    children: [
      {
        name: "Good Youth Jobs",
        value: 47.26,
      },
      {
        name: "Public Health",
        value: 73.52,
      },
      {
        name: "Income Generation",
        value: 50.12,
      },
      {
        name: "Cost of Living",
        value: 63.09,
      },
      {
        name: "Education + Training",
        value: 52.08,
      },
      {
        name: "Equity + Inclusion",
        value: 38.88,
      },
      {
        name: "Climate Change",
        value: 30.34,
      },
      {
        name: "Public Transportation",
        value: 40.88,
      },
      {
        name: "Digital Access",
        value: 50.18,
      },
      {
        name: "City Economy",
        value: 48.21,
      },
      {
        name: "Entrepreneurial Spirit",
        value: 47.91,
      },
    ],
  },
  {
    name: "London",
    children: [
      {
        name: "Good Youth Jobs",
        value: 51.65,
      },
      {
        name: "Public Health",
        value: 50.02,
      },
      {
        name: "Income Generation",
        value: 56.68,
      },
      {
        name: "Cost of Living",
        value: 56.61,
      },
      {
        name: "Education + Training",
        value: 46.44,
      },
      {
        name: "Equity + Inclusion",
        value: 28.89,
      },
      {
        name: "Climate Change",
        value: 40.65,
      },
      {
        name: "Public Transportation",
        value: 40.12,
      },
      {
        name: "Digital Access",
        value: 24.48,
      },
      {
        name: "City Economy",
        value: 47.26,
      },
      {
        name: "Entrepreneurial Spirit",
        value: 57.7,
      },
    ],
  },
  {
    name: "Mississauga",
    children: [
      {
        name: "Good Youth Jobs",
        value: 51.64,
      },
      {
        name: "Public Health",
        value: 53.58,
      },
      {
        name: "Income Generation",
        value: 47.63,
      },
      {
        name: "Cost of Living",
        value: 56.6,
      },
      {
        name: "Education + Training",
        value: 39.59,
      },
      {
        name: "Equity + Inclusion",
        value: 44.17,
      },
      {
        name: "Climate Change",
        value: 77.93,
      },
      {
        name: "Public Transportation",
        value: 52.13,
      },
      {
        name: "Digital Access",
        value: 36.22,
      },
      {
        name: "City Economy",
        value: 57.81,
      },
      {
        name: "Entrepreneurial Spirit",
        value: 59.32,
      },
    ],
  },
  {
    name: "Moncton",
    children: [
      {
        name: "Good Youth Jobs",
        value: 58.16,
      },
      {
        name: "Public Health",
        value: 49.01,
      },
      {
        name: "Income Generation",
        value: 41.71,
      },
      {
        name: "Cost of Living",
        value: 58.53,
      },
      {
        name: "Education + Training",
        value: 52.7,
      },
      {
        name: "Equity + Inclusion",
        value: 27.66,
      },
      {
        name: "Climate Change",
        value: 28.62,
      },
      {
        name: "Public Transportation",
        value: 40.46,
      },
      {
        name: "Digital Access",
        value: 55.73,
      },
      {
        name: "City Economy",
        value: 39.49,
      },
      {
        name: "Entrepreneurial Spirit",
        value: 26.28,
      },
    ],
  },
  {
    name: "Montreal",
    children: [
      {
        name: "Good Youth Jobs",
        value: 48.84,
      },
      {
        name: "Public Health",
        value: 52.74,
      },
      {
        name: "Income Generation",
        value: 53.81,
      },
      {
        name: "Cost of Living",
        value: 68.25,
      },
      {
        name: "Education + Training",
        value: 57.37,
      },
      {
        name: "Equity + Inclusion",
        value: 52.72,
      },
      {
        name: "Climate Change",
        value: 77.53,
      },
      {
        name: "Public Transportation",
        value: 48.61,
      },
      {
        name: "Digital Access",
        value: 36.55,
      },
      {
        name: "City Economy",
        value: 60.44,
      },
      {
        name: "Entrepreneurial Spirit",
        value: 53.99,
      },
    ],
  },
  {
    name: "Oshawa",
    children: [
      {
        name: "Good Youth Jobs",
        value: 51.6,
      },
      {
        name: "Public Health",
        value: 57.03,
      },
      {
        name: "Income Generation",
        value: 54.39,
      },
      {
        name: "Cost of Living",
        value: 52.46,
      },
      {
        name: "Education + Training",
        value: 45.35,
      },
      {
        name: "Equity + Inclusion",
        value: 41.03,
      },
      {
        name: "Climate Change",
        value: 36.21,
      },
      {
        name: "Public Transportation",
        value: 36.45,
      },
      {
        name: "Digital Access",
        value: 55.74,
      },
      {
        name: "City Economy",
        value: 51.98,
      },
      {
        name: "Entrepreneurial Spirit",
        value: 46.95,
      },
    ],
  },
  {
    name: "Ottawa/Gatineau",
    children: [
      {
        name: "Good Youth Jobs",
        value: 63.08,
      },
      {
        name: "Public Health",
        value: 61.92,
      },
      {
        name: "Income Generation",
        value: 53.44,
      },
      {
        name: "Cost of Living",
        value: 69.08,
      },
      {
        name: "Education + Training",
        value: 58.93,
      },
      {
        name: "Equity + Inclusion",
        value: 54.23,
      },
      {
        name: "Climate Change",
        value: 46.79,
      },
      {
        name: "Public Transportation",
        value: 51.05,
      },
      {
        name: "Digital Access",
        value: 17.8,
      },
      {
        name: "City Economy",
        value: 70.75,
      },
      {
        name: "Entrepreneurial Spirit",
        value: 62.46,
      },
    ],
  },
  {
    name: "Quebec City",
    children: [
      {
        name: "Good Youth Jobs",
        value: 58.9,
      },
      {
        name: "Public Health",
        value: 47.88,
      },
      {
        name: "Income Generation",
        value: 55.76,
      },
      {
        name: "Cost of Living",
        value: 57.99,
      },
      {
        name: "Education + Training",
        value: 59.44,
      },
      {
        name: "Equity + Inclusion",
        value: 47.64,
      },
      {
        name: "Climate Change",
        value: 48.92,
      },
      {
        name: "Public Transportation",
        value: 54.45,
      },
      {
        name: "Digital Access",
        value: 37.32,
      },
      {
        name: "City Economy",
        value: 58.86,
      },
      {
        name: "Entrepreneurial Spirit",
        value: 54,
      },
    ],
  },
  {
    name: "Regina",
    children: [
      {
        name: "Good Youth Jobs",
        value: 64.79,
      },
      {
        name: "Public Health",
        value: 47.23,
      },
      {
        name: "Income Generation",
        value: 46.31,
      },
      {
        name: "Cost of Living",
        value: 50.68,
      },
      {
        name: "Education + Training",
        value: 61.81,
      },
      {
        name: "Equity + Inclusion",
        value: 42.61,
      },
      {
        name: "Climate Change",
        value: 46.47,
      },
      {
        name: "Public Transportation",
        value: 49.16,
      },
      {
        name: "Digital Access",
        value: 22.01,
      },
      {
        name: "City Economy",
        value: 64.5,
      },
      {
        name: "Entrepreneurial Spirit",
        value: 39.97,
      },
    ],
  },
  {
    name: "Saskatoon",
    children: [
      {
        name: "Good Youth Jobs",
        value: 69.46,
      },
      {
        name: "Public Health",
        value: 46.37,
      },
      {
        name: "Income Generation",
        value: 45.51,
      },
      {
        name: "Cost of Living",
        value: 51.08,
      },
      {
        name: "Education + Training",
        value: 51.65,
      },
      {
        name: "Equity + Inclusion",
        value: 44.79,
      },
      {
        name: "Climate Change",
        value: 54.22,
      },
      {
        name: "Public Transportation",
        value: 50.49,
      },
      {
        name: "Digital Access",
        value: 32.95,
      },
      {
        name: "City Economy",
        value: 62.33,
      },
      {
        name: "Entrepreneurial Spirit",
        value: 44.16,
      },
    ],
  },
  {
    name: "St. John’s",
    children: [
      {
        name: "Good Youth Jobs",
        value: 68.81,
      },
      {
        name: "Public Health",
        value: 52.01,
      },
      {
        name: "Income Generation",
        value: 37.41,
      },
      {
        name: "Cost of Living",
        value: 60.9,
      },
      {
        name: "Education + Training",
        value: 43.89,
      },
      {
        name: "Equity + Inclusion",
        value: 25.29,
      },
      {
        name: "Climate Change",
        value: 34.52,
      },
      {
        name: "Public Transportation",
        value: 31.23,
      },
      {
        name: "Digital Access",
        value: 52.81,
      },
      {
        name: "City Economy",
        value: 55.48,
      },
      {
        name: "Entrepreneurial Spirit",
        value: 37.75,
      },
    ],
  },
  {
    name: "Sudbury",
    children: [
      {
        name: "Good Youth Jobs",
        value: 37.21,
      },
      {
        name: "Public Health",
        value: 38.58,
      },
      {
        name: "Income Generation",
        value: 54.45,
      },
      {
        name: "Cost of Living",
        value: 68.42,
      },
      {
        name: "Education + Training",
        value: 59.66,
      },
      {
        name: "Equity + Inclusion",
        value: 33.41,
      },
      {
        name: "Climate Change",
        value: 48.48,
      },
      {
        name: "Public Transportation",
        value: 47.08,
      },
      {
        name: "Digital Access",
        value: 60.94,
      },
      {
        name: "City Economy",
        value: 54.08,
      },
      {
        name: "Entrepreneurial Spirit",
        value: 56.63,
      },
    ],
  },
  {
    name: "Toronto",
    children: [
      {
        name: "Good Youth Jobs",
        value: 54.68,
      },
      {
        name: "Public Health",
        value: 58.39,
      },
      {
        name: "Income Generation",
        value: 42,
      },
      {
        name: "Cost of Living",
        value: 42.58,
      },
      {
        name: "Education + Training",
        value: 47.88,
      },
      {
        name: "Equity + Inclusion",
        value: 65.5,
      },
      {
        name: "Climate Change",
        value: 68.97,
      },
      {
        name: "Public Transportation",
        value: 56.36,
      },
      {
        name: "Digital Access",
        value: 64.44,
      },
      {
        name: "City Economy",
        value: 50.93,
      },
      {
        name: "Entrepreneurial Spirit",
        value: 55.25,
      },
    ],
  },
  {
    name: "Vancouver",
    children: [
      {
        name: "Good Youth Jobs",
        value: 66.32,
      },
      {
        name: "Public Health",
        value: 77.96,
      },
      {
        name: "Income Generation",
        value: 54.89,
      },
      {
        name: "Cost of Living",
        value: 48.32,
      },
      {
        name: "Education + Training",
        value: 47.6,
      },
      {
        name: "Equity + Inclusion",
        value: 83.49,
      },
      {
        name: "Climate Change",
        value: 75.6,
      },
      {
        name: "Public Transportation",
        value: 86.93,
      },
      {
        name: "Digital Access",
        value: 61.6,
      },
      {
        name: "City Economy",
        value: 62.97,
      },
      {
        name: "Entrepreneurial Spirit",
        value: 51.01,
      },
    ],
  },
  {
    name: "Victoria",
    children: [
      {
        name: "Good Youth Jobs",
        value: 69.72,
      },
      {
        name: "Public Health",
        value: 68.64,
      },
      {
        name: "Income Generation",
        value: 54.85,
      },
      {
        name: "Cost of Living",
        value: 51.65,
      },
      {
        name: "Education + Training",
        value: 46.87,
      },
      {
        name: "Equity + Inclusion",
        value: 51.95,
      },
      {
        name: "Climate Change",
        value: 60.92,
      },
      {
        name: "Public Transportation",
        value: 53.36,
      },
      {
        name: "Digital Access",
        value: 50.3,
      },
      {
        name: "City Economy",
        value: 82.24,
      },
      {
        name: "Entrepreneurial Spirit",
        value: 27.1,
      },
    ],
  },
  {
    name: "Winnipeg",
    children: [
      {
        name: "Good Youth Jobs",
        value: 39.3,
      },
      {
        name: "Public Health",
        value: 38.27,
      },
      {
        name: "Income Generation",
        value: 57.2,
      },
      {
        name: "Cost of Living",
        value: 58.93,
      },
      {
        name: "Education + Training",
        value: 52.11,
      },
      {
        name: "Equity + Inclusion",
        value: 56.07,
      },
      {
        name: "Climate Change",
        value: 53.81,
      },
      {
        name: "Public Transportation",
        value: 64.55,
      },
      {
        name: "Digital Access",
        value: 34.73,
      },
      {
        name: "City Economy",
        value: 47.79,
      },
      {
        name: "Entrepreneurial Spirit",
        value: 57.09,
      },
    ],
  },
  {
    name: "Yellowknife",
    children: [
      {
        name: "Good Youth Jobs",
        value: 75.73,
      },
      {
        name: "Public Health",
        value: 51.21,
      },
      {
        name: "Income Generation",
        value: 52.7,
      },
      {
        name: "Cost of Living",
        value: 50.16,
      },
      {
        name: "Education + Training",
        value: 66.26,
      },
      {
        name: "Equity + Inclusion",
        value: 27.42,
      },
      {
        name: "Climate Change",
        value: 37.5,
      },
      {
        name: "Public Transportation",
        value: 42.39,
      },
      {
        name: "Digital Access",
        value: 22.62,
      },
      {
        name: "City Economy",
        value: 63.66,
      },
      {
        name: "Entrepreneurial Spirit",
        value: 40.18,
      },
    ],
  },
];

export { topics, citiesWithScores };
