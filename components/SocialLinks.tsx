import { FaInstagram } from "./icons";
import { SOCIAL } from "@/lib/site";

// Threads has no icon in the bundled icon set, so it is shown as a labelled link.
export default function SocialLinks({ className = "" }: { className?: string }) {
  return (
    <ul className={`flex items-center gap-4 text-sm text-neutral-300 ${className}`}>
      <li>
        <a
          href={SOCIAL.instagram}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Influexe Media on Instagram"
          className="inline-flex items-center gap-2 transition-colors hover:text-white"
        >
          <FaInstagram className="size-5" />
          <span>Instagram</span>
        </a>
      </li>
      <li>
        <a
          href={SOCIAL.threads}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Influexe Media on Threads"
          className="inline-flex items-center gap-2 transition-colors hover:text-white"
        >
          <span className="font-semibold">@</span>
          <span>Threads</span>
        </a>
      </li>
    </ul>
  );
}
