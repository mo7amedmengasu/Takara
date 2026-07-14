import { PageHero } from "../components/common/PageHero";
import { SectionHeader } from "../components/common/SectionHeader";
import { ScrollReveal } from "../components/motion/ScrollReveal";
import { chairmanMessage, leadershipIntro, leadershipProfiles } from "../data/content";

export function LeadershipPage() {
  return (
    <>
      <PageHero title="Leadership" subtitle={leadershipIntro} />
      <section className="section">
        <div className="container letter-layout">
          <aside className="letter-panel">
            <img
              className="chairman-words-image"
              src="/chairman_words.jpeg"
              alt="Chairman leadership artwork"
              width="1280"
              height="853"
            />
            <h2>Message from the Chairman</h2>
            <p>H.E. Mohamed Ali Al Shamsi</p>
            <p>Chairman, Takara Haya Medical L.L.C.</p>
          </aside>
          <ScrollReveal className="chairman-letter">
            {chairmanMessage.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            <footer>
              <strong>H.E. Mohamed Ali Al Shamsi</strong>
              <span>Chairman</span>
              <span>Takara Haya Medical L.L.C.</span>
            </footer>
          </ScrollReveal>
        </div>
      </section>
      <section className="section section-warm">
        <div className="container">
          <SectionHeader eyebrow="Leadership Profiles" title="The people behind Takara Haya Medical L.L.C." />
          <div className="profile-stack">
            {leadershipProfiles.map((profile) => (
              <article key={profile.name} className="profile-section">
                <img
                  className="profile-photo"
                  src={profile.image}
                  alt={`${profile.name}, ${profile.role}`}
                  width="280"
                  height="280"
                />
                <div>
                  <p className="eyebrow">{profile.role}</p>
                  <h3>{profile.name}</h3>
                  {profile.biography.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
