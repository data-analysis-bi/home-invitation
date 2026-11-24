export const INVITE = {
  kicker: "please join us for a",
  title: "Griha Pravesh",
  subtitle: "& House Blessing Ceremony",
  verse: "As we invite prosperity and divine blessing into our new home.",
  weekday: "Friday",
  month: "May",
  day: "25",
  year: "2026",
  muhurat: "10:45 AM",
  address1: "1234 Lotus Grove Lane",
  address2: "Frisco, TX 75035",
  family: "The Patel Family",
  mapsQuery: "1234 Lotus Grove Lane, Frisco, TX 75035",
} as const;

export const STORAGE_KEY = "griha-pravesh-patel-reply";

export type Coming = "yes" | "afar";

export type Reply = {
  name: string;
  guests: number;
  coming: Coming;
  note: string;
  at: string;
};

export function mapsUrl() {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(INVITE.mapsQuery)}`;
}

export function calendarUrl() {
  const text = encodeURIComponent("Griha Pravesh — The Patel Family");
  const details = encodeURIComponent(
    "House blessing ceremony. Muhurat 10:45 AM. As we invite prosperity and divine blessing into our new home.",
  );
  const location = encodeURIComponent(INVITE.mapsQuery);
  return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${text}&dates=20260525T154500Z/20260525T174500Z&details=${details}&location=${location}`;
}

export function downloadIcs() {
  const ics = [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//Patel Family//Griha Pravesh//EN",
    "CALSCALE:GREGORIAN",
    "METHOD:PUBLISH",
    "BEGIN:VEVENT",
    "UID:griha-pravesh-patel-20260525@invitation",
    "DTSTAMP:20260525T154500Z",
    "DTSTART:20260525T154500Z",
    "DTEND:20260525T174500Z",
    "SUMMARY:Griha Pravesh — The Patel Family",
    "DESCRIPTION:House blessing ceremony. Muhurat 10:45 AM.",
    "LOCATION:1234 Lotus Grove Lane\\, Frisco\\, TX 75035",
    "END:VEVENT",
    "END:VCALENDAR",
  ].join("\r\n");
  const blob = new Blob([ics], { type: "text/calendar;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "griha-pravesh-patel-family.ics";
  a.click();
  URL.revokeObjectURL(url);
}

export function loadReply(): Reply | null {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as Reply;
    if (!parsed || typeof parsed.name !== "string") return null;
    return parsed;
  } catch {
    return null;
  }
}

export function saveReply(reply: Reply) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(reply));
}
