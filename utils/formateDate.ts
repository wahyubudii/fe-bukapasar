export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  const day = date.getDate().toString().padStart(2, "0");
  const month = date.toLocaleString("default", { month: "long" });
  const year = date.getFullYear().toString();

  return `${day} ${month} ${year}`;
}
