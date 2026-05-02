"use client";

import Link from "next/link";
import { ArrowRight, Flame, Mail, Shield, Users } from "lucide-react";
import { motion, useMotionTemplate, useMotionValue, useReducedMotion, useSpring } from "framer-motion";
import { EmailCapture } from "@/components/marketing/email-capture";
import { products } from "@/data/products";

const identityPillars = [
  {
    title: "Decision",
    copy: "There may not be a perfect choice. There is only the choice you stand behind.",
    stat: "01"
  },
  {
    title: "Action",
    copy: "Movement turns doubt into information. The next step teaches what thinking cannot.",
    stat: "02"
  },
  {
    title: "Timing",
    copy: "Right time, wrong time, ugly time. The clock matters less than the action.",
    stat: "03"
  }
];

const storyFrames = [
  {
    kicker: "Before",
    title: "No perfect sign arrives.",
    copy: "The day may be clean or chaotic. Either way, the first decision belongs to you."
  },
  {
    kicker: "During",
    title: "Action makes the choice real.",
    copy: "A swing, a rep, a walk, a meeting, a reset. The body learns through motion."
  },
  {
    kicker: "After",
    title: "The result becomes less important than the standard.",
    copy: "You acted before the moment looked perfect. That is the identity."
  }
];

const communityPoints = [
  "For people who choose motion over waiting for permission.",
  "For active lives that move between training, golf, travel, and daily discipline.",
  "For anyone who believes imperfect action beats perfect hesitation."
];

export function CinematicHome() {
  const reduceMotion = useReducedMotion();
  const mouseX = useMotionValue(520);
  const mouseY = useMotionValue(260);
  const springX = useSpring(mouseX, { stiffness: 70, damping: 28 });
  const springY = useSpring(mouseY, { stiffness: 70, damping: 28 });
  const spotlight = useMotionTemplate`radial-gradient(620px circle at ${springX}px ${springY}px, rgba(199, 161, 106, 0.18), transparent 58%)`;

  function handlePointerMove(event: React.PointerEvent<HTMLElement>) {
    if (reduceMotion) {
      return;
    }

    const rect = event.currentTarget.getBoundingClientRect();
    mouseX.set(event.clientX - rect.left);
    mouseY.set(event.clientY - rect.top);
  }

  return (
    <div className="cinematic-home">
      <motion.section
        className="cinematic-hero"
        onPointerMove={handlePointerMove}
        style={{ background: reduceMotion ? undefined : spotlight }}
      >
        <div className="cinematic-hero__grain" aria-hidden />
        <div className="cinematic-hero__copy">
          <motion.p
            className="cinematic-kicker"
            initial={reduceMotion ? false : { opacity: 0, y: 12 }}
            animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
          >
            Ugly Actions / Activewear in motion
          </motion.p>
          <motion.h1
            initial={reduceMotion ? false : { opacity: 0, y: 22 }}
            animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.08 }}
          >
            Ugly Actions Beats Perfection.
          </motion.h1>
          <motion.p
            className="cinematic-hero__lede"
            initial={reduceMotion ? false : { opacity: 0, y: 18 }}
            animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.16 }}
          >
            Classy activewear for people who know there is no perfect moment, no flawless
            choice, and no clean path. Decide. Take action. Let the timing be right or ugly.
          </motion.p>
          <motion.div
            className="cinematic-actions"
            initial={reduceMotion ? false : { opacity: 0, y: 14 }}
            animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.24 }}
          >
            <Link className="cinematic-button cinematic-button--primary" href="/products">
              Explore the first garments <ArrowRight aria-hidden size={18} />
            </Link>
            <a className="cinematic-button cinematic-button--ghost" href="#manifesto">
              Read manifesto
            </a>
          </motion.div>
        </div>

        <motion.div
          className="cinematic-hero__poster"
          aria-label="Ugly Actions cinematic brand poster"
          role="img"
          initial={reduceMotion ? false : { opacity: 0, scale: 0.96 }}
          animate={reduceMotion ? undefined : { opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.18 }}
        >
          <img src="/images/brand/ua-struggle-mark.svg" alt="" aria-hidden />
          <div className="poster-copy">
            <span>Beats perfection</span>
            <strong>Action decides</strong>
          </div>
        </motion.div>

        <div className="cinematic-hero__ribbon" aria-hidden>
          Decision / Action / Timing / Imperfection
        </div>
      </motion.section>

      <section id="manifesto" className="manifesto-section">
        <p className="cinematic-kicker">Manifesto</p>
        <h2>
          No one is perfect. No choice is perfectly clean. The brand begins where waiting
          ends: decision, action, and the courage to move before the moment looks ready.
        </h2>
        <div className="manifesto-grid">
          <p>
            Ugly Actions is activewear for the life in motion: training, walking, traveling,
            golfing, recovering, and starting again before everything feels certain.
          </p>
          <p>
            The point is not to glorify mess. The point is to dress the person who acts
            anyway, with enough taste to look composed and enough edge to feel alive.
          </p>
        </div>
      </section>

      <section className="identity-section">
        <div className="section-lockup">
          <p className="cinematic-kicker">Brand philosophy</p>
          <h2>For the ones who stop waiting for the perfect version of themselves.</h2>
        </div>
        <div className="identity-grid">
          {identityPillars.map((pillar) => (
            <motion.article
              className="identity-panel"
              key={pillar.title}
              whileHover={reduceMotion ? undefined : { y: -6 }}
              transition={{ duration: 0.25 }}
            >
              <span>{pillar.stat}</span>
              <h3>{pillar.title}</h3>
              <p>{pillar.copy}</p>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="featured-drop">
        <div className="section-lockup">
          <p className="cinematic-kicker">Featured drop</p>
          <h2>First garments for active lives, not just gym floors.</h2>
        </div>
        <div className="drop-editorial-grid">
          {products.map((product, index) => (
            <motion.article
              className="drop-piece"
              key={product.slug}
              initial={reduceMotion ? false : { opacity: 0, y: 18 }}
              whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.55, delay: index * 0.08 }}
            >
              <div className={`drop-piece__visual drop-piece__visual--${product.slug}`}>
                <span>{product.code}</span>
              </div>
              <div className="drop-piece__body">
                <p>{product.category}</p>
                <h3>{product.name}</h3>
                <span>{product.price}</span>
                <Link href={`/products/${product.slug}`}>
                  View piece <ArrowRight aria-hidden size={16} />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="story-section">
        <div className="section-lockup">
          <p className="cinematic-kicker">Editorial visual story</p>
          <h2>The moment is rarely perfect. The action can still be yours.</h2>
        </div>
        <div className="story-track">
          {storyFrames.map((frame, index) => (
            <motion.article
              className="story-frame"
              key={frame.kicker}
              initial={reduceMotion ? false : { opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={reduceMotion ? undefined : { opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6 }}
            >
              <div className="story-frame__image" aria-hidden>
                <span>{String(index + 1).padStart(2, "0")}</span>
              </div>
              <div>
                <p>{frame.kicker}</p>
                <h3>{frame.title}</h3>
                <span>{frame.copy}</span>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="community-section">
        <div className="community-section__copy">
          <p className="cinematic-kicker">Community</p>
          <h2>A quiet signal for people who move before they feel ready.</h2>
          <p>
            Ugly Actions can grow from training wear into golf garments, accessories, and
            everyday active pieces without losing the idea: movement over perfection.
          </p>
        </div>
        <div className="community-list">
          {communityPoints.map((point) => (
            <div key={point}>
              <Shield aria-hidden size={18} />
              <span>{point}</span>
            </div>
          ))}
        </div>
      </section>

      <section id="drop-list" className="premium-capture">
        <div>
          <p className="cinematic-kicker">First access</p>
          <h2>Join before the first complete collection takes shape.</h2>
          <p>
            Product previews, garment direction, and notes as Ugly Actions expands from
            activewear essentials into a fuller uniform for motion.
          </p>
        </div>
        <EmailCapture source="cinematic-home" />
      </section>

      <section className="luxury-footer">
        <div>
          <span>UGLY ACTIONS</span>
          <p>Activewear for decision, action, and imperfect timing.</p>
        </div>
        <div className="luxury-footer__links">
          <a href="#manifesto">
            <Flame aria-hidden size={16} /> Manifesto
          </a>
          <Link href="/products">
            <Users aria-hidden size={16} /> Drop 001
          </Link>
          <a href="#drop-list">
            <Mail aria-hidden size={16} /> Early access
          </a>
        </div>
      </section>
    </div>
  );
}
