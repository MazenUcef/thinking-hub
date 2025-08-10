import LinkedIn from "../assets/icons/LinkedIn";
import Twitter from "../assets/icons/Twitter";

export type Profile = {
  name: string;
  role: string;
  description: string;
  image: string;
  socials?: { linkedin?: string; x?: string };
};

type Props = {
  profiles: Profile[];
  limit?: number; // optional - number of cards to show
  className?: string; // optional - extra classes for container
};

export default function ProfileCards({ profiles, limit, className }: Props) {
  const displayedProfiles = limit ? profiles.slice(0, limit) : profiles;

  return (
    <section className="bg-transparent">
      <div
        className={`max-w-7xl h-auto mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 bg-transparent ${
          className ?? ""
        }`}
      >
        {displayedProfiles.map((p, i) => (
          <article
            key={i}
            className="relative rounded-2xl overflow-hidden shadow-lg"
          >
            {/* Full image */}
            <img
              src={p.image}
              alt={p.name}
              className="h-96 w-full object-cover"
            />

            {/* Frosted bottom panel */}
            <div className="absolute bottom-0 left-0 right-0 p-4">
              <div className="backdrop-blur-sm bg-white/30 border border-white/30 rounded-xl p-4">
                <div className="flex justify-between items-start">
                  <div className="pr-2">
                    <h3 className="text-base font-bold text-[#181D27]">
                      {p.name}
                    </h3>
                    <p className="text-sm text-[#252B37]">{p.role}</p>
                  </div>
                  <div className="flex gap-2">
                    {p.socials?.linkedin && (
                      <a
                        href={p.socials.linkedin}
                        target="_blank"
                        rel="noreferrer"
                        className="rounded-full flex items-center justify-center"
                      >
                        <LinkedIn />
                      </a>
                    )}
                    {p.socials?.x && (
                      <a
                        href={p.socials.x}
                        target="_blank"
                        rel="noreferrer"
                        className="rounded-full flex items-center justify-center"
                      >
                        <Twitter />
                      </a>
                    )}
                  </div>
                </div>
                <p className="mt-2 text-sm text-slate-800 line-clamp-3">
                  {p.description}
                </p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
