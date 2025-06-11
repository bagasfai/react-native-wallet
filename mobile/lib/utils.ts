export function formatDate(date: string | Date) {
  // format date nicely
  // example: from this 👉 2025-05-20 to this 👉 May 20, 2025
  const d = typeof date === "string" ? new Date(date) : date;
  return d.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}