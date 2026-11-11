export const holdings = [
  { sector: "Banking", weight: 24 },
  { sector: "Software", weight: 20 },
  { sector: "Industrials", weight: 17 },
  { sector: "Healthcare", weight: 13 },
  { sector: "Energy", weight: 11 },
  { sector: "Telecom", weight: 9 },
  { sector: "Retail", weight: 6 },
];

const retailCompanies = ["Kestrel Retail", "Aster Retail", "Mica Retail"];
const formatDate = new Intl.DateTimeFormat("en-IN", {
  day: "numeric", month: "short", year: "numeric", timeZone: "UTC",
});

function reviewDate(cycle, day = 18) {
  const date = new Date(Date.UTC(2026, 8 + cycle * 6, day));
  return { text: formatDate.format(date), iso: date.toISOString().slice(0, 10) };
}

function retailCompany(cycle) {
  const count = retailCompanies.length;
  return retailCompanies[((cycle % count) + count) % count];
}

export function getReview(cycle) {
  return {
    outgoing: retailCompany(cycle),
    incoming: retailCompany(cycle + 1),
    beforeDate: reviewDate(cycle, 17),
    date: reviewDate(cycle),
  };
}
