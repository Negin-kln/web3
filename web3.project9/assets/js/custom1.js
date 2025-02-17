const ctx = document.getElementById("barChart");
new Chart(ctx, {
  type: "bar",
  data: {
    labels: ["خراسان شمالی", "خراسان جنوبی", "البرز", "آذربایجان", "ایلام"],
    datasets: [
      {
        label: "نمودار افزایش جمعیت",
        data: [5951000, 8700000, 2300000, 3720000, 5100540],
        borderWidth: 2,
        borderColor: "#f0932b",
        backgroundColor: "#ffbe76",
        maxBarThickness: 20,
        minBarLength: 1,
      },
    ],
  },
  options: {
    layout: {
      padding: 10,
    },
    scales: {
      y: {
        type: "linear",
        min: 0,
        max: 10000000,
      },
    },
  },
});
const lineCtx = document.getElementById("lineChart").getContext("2d");
const lineChart = new Chart(lineCtx, {
  type: "line",
  data: {
    labels: [
      "فروردین",
      "اردیبهشت",
      "خرداد",
      "تیر",
      "مرداد",
      "شهریور",
      "مهر",
      "آبان",
      "آذر",
      "دی",
      "بهمن",
      "اسفند",
    ],
    datasets: [
      {
        label: "فروش",
        backgroundColor: "#eb4d4b",
        borderColor: "#130f40",
        data: [65, 59, 80, 81, 56, 55, 40, 100, 120, 63, 84, 83],
      },
    ],
  },
  options: {
    animations: {
      tension: {
        duration: 1000,
        easing: "linear",
        from: 0.5,
        to: 0,
        loop: true,
      },
    },
    layout: {
      padding: 10,
    },
    scales: {
      y: {
        beginAtZero: true,
        min: 20,
        max: 140,
      },
    },
  },
});
const pieCtx = document.getElementById("pieChart").getContext("2d");
const pieChart = new Chart(pieCtx, {
  type: "pie",
  data: {
    labels: ["خراسان شمالی", "خراسان جنوبی", "البرز", "آذربایجان", "ایلام"],
    datasets: [
      {
        label: "میزان فروش ماهیانه",
        data: [5951000, 8700000, 2300000, 3720000, 5100540],
        backgroundColor: [
          "#7d5fff",
          "#ff4d4d",
          "#ffaf40",
          "#ffcccc",
          "#cd84f1",
        ],
        hoverOffset: 4,
        borderWidth: 0,
      },
    ],
  },
  options: {
    layout: {
      padding: 10,
    },
  },
});
const radarCtx = document.getElementById("radarChart").getContext("2d");
const radarChart = new Chart(radarCtx, {
  type: "radar",
  data: {
    labels: ["خوردن", "بازی کردن", "خوابیدن", "کد زنی", "ورزش", "مطالعه کردن"],
    datasets: [
      {
        label: "روتین روزانه",
        data: [20, 40, 20, 38, 18, 22],
        fill: true,
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        borderColor: "rgba(255, 99, 132, 1)",
      },
    ],
  },
  options: {
    animations: {
      tension: {
        duration: 5000,
        easing: "linear",
        from: 1,
        to: 0,
        loop: true,
      },
    },
    layout: {
      padding: 10,
    },
  },
});
const scatterCtx = document.getElementById("scatterChart").getContext("2d");
const scatterChart = new Chart(scatterCtx, {
  type: "scatter",
  data: {
    datasets: [
      {
        label: "دما / فروش بستنی",
        data: [
          { x: 14.2, y: 215000 },
          { x: 16.4, y: 325000 },
          { x: 11.9, y: 185000 },
          { x: 15.2, y: 332000 },
          { x: 18.5, y: 406000 },
          { x: 22.1, y: 522000 },
          { x: 19.4, y: 412000 },
          { x: 25.1, y: 614000 },
          { x: 23.4, y: 544000 },
          { x: 18.1, y: 421000 },
          { x: 22.6, y: 445000 },
          { x: 17.2, y: 408000 },
        ],
        backgroundColor: "#009432",
      },
    ],
  },
  options: {
    scales: {
      x: {
        type: "linear",
        position: "bottom",
      },
    },
  },
});
