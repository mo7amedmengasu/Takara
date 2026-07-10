import { PageHero } from "../components/common/PageHero";
import { SectionHeader } from "../components/common/SectionHeader";
import { ScrollReveal } from "../components/motion/ScrollReveal";
import { chairmanMessage, leadershipIntro, leadershipProfiles } from "../data/content";
import { initialsFor } from "../utils/routes";

export function LeadershipPage() {
  return (
    <>
      <PageHero title="Leadership" subtitle={leadershipIntro} />
      <section className="section">
        <div className="container letter-layout">
          <aside className="letter-panel">
            <div className="profile-placeholder large" aria-label="Placeholder for H.E. Mohamed Ali Al Shamsi official portrait">
              {initialsFor("H.E. Mohamed Ali Al Shamsi")}
            </div>
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
                <div className="profile-placeholder" aria-label={`Placeholder for ${profile.name} official portrait`}>
                  {initialsFor(profile.name)}
                </div>
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
