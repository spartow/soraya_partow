import Image from "next/image";

export function Avatar() {
  return (
    <Image
      src="/headshot.jpg"
      alt="Soraya Partow"
      width={128}
      height={128}
      className="h-32 w-32 rounded-full border border-ink-200 object-cover shadow-sm"
      priority
    />
  );
}
