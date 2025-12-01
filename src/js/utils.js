export function generateUUID(title = "") {
  const timePart = Date.now().toString(16);
  const randomPart = Math.floor(Math.random() * 1e8).toString(16);
  const titlePart = title
    ? title.toLowerCase().replace(/\s+/g, "-").slice(0, 6)
    : "exp";

  return `${titlePart}-${timePart}-${randomPart}`;
}
export function formatCurrency(amount) {
  const num = Number(amount) || 0;
  return `${num.toFixed(2)}`;
}