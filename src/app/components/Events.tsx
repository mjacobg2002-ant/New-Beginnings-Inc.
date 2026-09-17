import { Clock, MapPin, ArrowRight, Users } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const events = [
  {
    id: 1,
    title: "Life Skills Independence Workshop",
    description: "A hands-on workshop focused on building essential daily living skills including cooking, budgeting, and personal care routines.",
    month: "SEP",
    day: "27",
    time: "10:00 AM – 2:00 PM",
    location: "Community Center, Room 104",
    category: "Workshop",
    image: "https://images.unsplash.com/photo-1739303987902-eccc301b09fc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaXZlcnNlJTIwYmxhY2slMjB3b21lbiUyMGxlYXJuaW5nJTIwYnVkZ2V0aW5nJTIwc2tpbGxzJTIwdHJhaW5pbmd8ZW58MXx8fHwxNzcyODYwODc1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    spots: 30,
    spotsLeft: 12,
  },
  {
    id: 2,
    title: "Spring Community Fundraiser Gala",
    description: "Join us for an elegant evening celebrating our community's achievements with dinner, live entertainment, and a silent auction.",
    month: "OCT",
    day: "04",
    time: "6:00 PM – 10:00 PM",
    location: "Grand Ballroom, Marriott Downtown",
    category: "Fundraiser",
    image: "https://images.unsplash.com/photo-1660528682201-6bc3b7173654?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxibGFjayUyMHBlb3BsZSUyMGNoYXJpdHklMjBnYWxhJTIwZXZlbmluZyUyMGV2ZW50fGVufDF8fHx8MTc3Mjg2MDc0MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    spots: 150,
    spotsLeft: 43,
  },
  {
    id: 3,
    title: "Family & Caregiver Support Circle",
    description: "A safe, welcoming space for families and caregivers to share experiences, learn coping strategies, and build lasting connections.",
    month: "OCT",
    day: "11",
    time: "2:00 PM – 4:00 PM",
    location: "New Beginnings Office, Suite 200",
    category: "Support Group",
    image: "https://images.unsplash.com/photo-1768244016470-271b210a8407?crop=faces&cs=tinysrgb&fit=crop&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxibGFjayUyMGZhbWlseSUyMG1vZGVybiUyMHN1cHBvcnQlMjBncm91cCUyMGNvbW11bml0eSUyMGdhdGhlcmluZ3xlbnwxfHx8fDE3NzI4NjA5NDN8MA&ixlib=rb-4.1.0&q=80&w=1080&h=607&utm_source=figma&utm_medium=referral",
    imagePosition: "object-[center_30%]",
    spots: 20,
    spotsLeft: 8,
  },
  {
    id: 4,
    title: "Creative Arts & Expression Day",
    description: "An inclusive creative arts session featuring painting, music, and collaborative projects designed for all abilities and experience levels.",
    month: "OCT",
    day: "25",
    time: "11:00 AM – 3:00 PM",
    location: "Riverside Arts Studio",
    category: "Social",
    image: "https://images.unsplash.com/photo-1678559612446-2bb33661007c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxibGFjayUyMHBlb3BsZSUyMGFydCUyMGNsYXNzJTIwY3JlYXRpdmUlMjBwYWludGluZyUyMGRpdmVyc2V8ZW58MXx8fHwxNzcyODYwNzQxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    spots: 25,
    spotsLeft: 17,
  },
];

export function Events() {
  return (
    <section id="events" className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 lg:mb-14">
          <span
            className="text-[#6b8e5e]"
            style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600, fontSize: "0.8rem", letterSpacing: "0.15em", textTransform: "uppercase" }}
          >
            Upcoming Events
          </span>
          <h2
            className="text-[#2d2545] mt-2 mb-4"
            style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(1.5rem, 3.5vw, 2.25rem)", fontWeight: 700, lineHeight: 1.2 }}
          >
            Join Our Community
          </h2>
          <p
            className="text-[#5a5475]"
            style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.95rem", lineHeight: 1.8, fontWeight: 400 }}
          >
            From workshops and support groups to fundraisers and social
            gatherings, there's always something meaningful happening at New
            Beginnings.
          </p>
        </div>

        {/* Events grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {events.map((event) => {
            const filled = ((event.spots - event.spotsLeft) / event.spots) * 100;
            return (
              <article
                key={event.id}
                className="group bg-[#faf9f7] rounded-2xl overflow-hidden border border-[#eae7e2] hover:border-[#d5d0c8] hover:shadow-[0_12px_40px_rgba(0,0,0,0.07)] transition-all duration-500 flex flex-col"
              >
                {/* Image — always full-width on top */}
                <div className="relative aspect-[16/9] overflow-hidden flex-shrink-0">
                  <ImageWithFallback
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    style={event.imagePosition ? { objectPosition: "center 30%" } : undefined}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
                  {/* Date badge */}
                  <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-sm rounded-xl w-[52px] py-2 text-center shadow-sm">
                    <p
                      className="text-[#6b8e5e]"
                      style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.6rem", fontWeight: 700, letterSpacing: "0.1em", lineHeight: 1.2 }}
                    >
                      {event.month}
                    </p>
                    <p
                      className="text-[#2d2545]"
                      style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.35rem", fontWeight: 700, lineHeight: 1.1 }}
                    >
                      {event.day}
                    </p>
                  </div>
                  {/* Category tag */}
                  <div className="absolute top-3 right-3">
                    <span
                      className="bg-[#2d2545]/80 backdrop-blur-sm text-white px-3 py-1 rounded-full"
                      style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.65rem", fontWeight: 600, letterSpacing: "0.04em", textTransform: "uppercase" }}
                    >
                      {event.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 flex flex-col p-5 sm:p-6">
                  {/* Title */}
                  <h3
                    className="text-[#2d2545] mb-2 group-hover:text-[#6b8e5e] transition-colors duration-300"
                    style={{ fontFamily: "'Playfair Display', serif", fontWeight: 600, fontSize: "1.1rem", lineHeight: 1.35 }}
                  >
                    {event.title}
                  </h3>

                  {/* Description */}
                  <p
                    className="text-[#7a7494] mb-4"
                    style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.85rem", lineHeight: 1.65, fontWeight: 400 }}
                  >
                    {event.description}
                  </p>

                  {/* Time & location details */}
                  <div className="flex flex-col gap-1.5 mb-5">
                    <div className="flex items-center gap-2">
                      <Clock size={13} className="text-[#6b8e5e] flex-shrink-0" />
                      <span
                        className="text-[#5a5475]"
                        style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.8rem", fontWeight: 400 }}
                      >
                        {event.time}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin size={13} className="text-[#6b8e5e] flex-shrink-0" />
                      <span
                        className="text-[#5a5475]"
                        style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.8rem", fontWeight: 400 }}
                      >
                        {event.location}
                      </span>
                    </div>
                  </div>

                  {/* Footer — pinned to bottom via mt-auto */}
                  <div className="mt-auto pt-4 border-t border-[#eae7e2] flex items-center justify-between gap-4">
                    {/* Spots left indicator */}
                    <div className="flex items-center gap-2 min-w-0">
                      <Users size={13} className="text-[#7a7494] flex-shrink-0" />
                      <span
                        className="text-[#7a7494] whitespace-nowrap"
                        style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.75rem", fontWeight: 500 }}
                      >
                        {event.spotsLeft} spots left
                      </span>
                      <div className="w-12 h-1 bg-[#eae7e2] rounded-full overflow-hidden flex-shrink-0">
                        <div
                          className="h-full bg-[#6b8e5e] rounded-full"
                          style={{ width: `${filled}%` }}
                        />
                      </div>
                    </div>

                    {/* Register button */}
                    <a
                      href="#contact"
                      className="inline-flex items-center gap-1.5 flex-shrink-0 bg-[#6b8e5e] text-white px-4 py-1.5 rounded-full hover:bg-[#5a7d4e] transition-all duration-300 hover:shadow-md"
                      style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600, fontSize: "0.75rem", letterSpacing: "0.02em" }}
                    >
                      Register
                      <ArrowRight size={12} />
                    </a>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

      </div>
    </section>
  );
}