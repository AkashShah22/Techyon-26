import { ScheduleItem } from "@/data/schedule";

/**
 * Generates an .ics file string for calendar import (Google, Apple, Outlook)
 */
export function generateIcsForItems(items: ScheduleItem[], festName = "Tachyon 2026"): string {
  const formatDateToICS = (dateStr: string): string => {
    const d = new Date(dateStr);
    return d.toISOString().replace(/[-:]/g, "").replace(/\.\d{3}/, "");
  };

  const lines = [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//JUET Guna//Tachyon 2026 Techfest//EN",
    "CALSCALE:GREGORIAN",
    "METHOD:PUBLISH",
    `X-WR-CALNAME:${festName}`,
    "X-WR-TIMEZONE:Asia/Kolkata",
  ];

  for (const item of items) {
    const start = formatDateToICS(item.dateISO);
    // Default duration 1.5 hours if endTime not parsed
    const endDate = new Date(new Date(item.dateISO).getTime() + 90 * 60 * 1000);
    const end = formatDateToICS(endDate.toISOString());

    lines.push(
      "BEGIN:VEVENT",
      `UID:${item.id}-tachyon2026@juet.ac.in`,
      `DTSTAMP:${start}`,
      `DTSTART:${start}`,
      `DTEND:${end}`,
      `SUMMARY:${item.title} - Tachyon 2026`,
      `DESCRIPTION:${item.description.replace(/\n/g, " ")} | Category: ${item.badge}`,
      `LOCATION:${item.venue}, JUET Guna`,
      "STATUS:CONFIRMED",
      "END:VEVENT"
    );
  }

  lines.push("END:VCALENDAR");
  return lines.join("\r\n");
}

/**
 * Triggers a browser download of the .ics file
 */
export function downloadIcsFile(filename: string, icsContent: string) {
  if (typeof window === "undefined") return;
  const blob = new Blob([icsContent], { type: "text/calendar;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.setAttribute("download", filename);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}
