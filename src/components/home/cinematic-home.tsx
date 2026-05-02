"use client";

import Link from "next/link";
import { ArrowRight, Flame, Mail, Shield, Users } from "lucide-react";
import { motion, useMotionTemplate, useMotionValue, useReducedMotion, useSpring } from "framer-motion";
import { EmailCapture } from "@/components/marketing/email-capture";
import { products } from "@/data/products";

const identityPillars = [
  {
    title: "Hunger",
    copy: "For the person who feels behind but refuses to stay there.",
    stat: "01"
  },
  {
    title: "Discipline",
    copy: "Quiet repetition. Ugly reps. Proof built before anyone claps.",
    stat: "02"
  },
  {
    title: "Imperfection",
    copy: "Not polished. Not finished. Still moving with intent.",
    stat: "03"
  }
];

const storyFrames = [
  {
    kicker: "Before",
    title: "The room is empty. The mirror is honest.",
    copy: "No crowd, no campaign, no perfect angle. Just the first decision."
  },
  {
    kicker: "During",
    title: "Action turns self-doubt into evidence.",
    copy: "Every imperfect session becomes a receipt that you are not who you were."
  },
  {
    kicker: "After",
    title: "You leave with less noise and more gravity.",
    copy: "The clothes are the signal. The work is the identity."
  }
];

const communityPoints = [
  "For rookies who want standards, not intimidation.",
  "For quiet people building violent consistency.",
  "For anyone becoming harder to ignore through daily action."
];

export function CinematicHome() {
  const reduceMotion = useReducedMotion();
  const mouseX = useMotionValue(520);
  const mouseY = useMotionValue(260);
  const springX = useSpring(mouseX, { stiffness: 70, damping: 28 });
  const springY = useSpring(mouseY, { stiffness: 70, damping: 28 });
  const spotlight = useMotionTemplate`radial-gradient(620px circle at ${springX}px ${springY}px, rgba(167, 47, 34, 0.24), transparent 58%)`;

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
            Ugly Actions / Drop 001
          </motion.p>
          <motion.h1
            initial={reduceMotion ? false : { opacity: 0, y: 22 }}
            animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.08 }}
          >
            Become the person your old life could not hold.
          </motion.h1>
          <motion.p
            className="cinematic-hero__lede"
            initial={reduceMotion ? false : { opacity: 0, y: 18 }}
            animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.16 }}
          >
            Premium training wear for rookies, returners, and self-made athletes who are
            becoming someone through struggle, hunger, imperfection, and action.
          </motion.p>
          <motion.div
            className="cinematic-actions"
            initial={reduceMotion ? false : { opacity: 0, y: 14 }}
            animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.24 }}
          >
            <Link className="cinematic-button cinematic-button--primary" href="/products">
              Enter Drop 001 <ArrowRight aria-hidden size={18} />
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
            <span>Not perfect</span>
            <strong>Still moving</strong>
          </div>
        </motion.div>

        <div className="cinematic-hero__ribbon" aria-hidden>
          Hunger / Discipline / Imperfection / Action
        </div>
      </motion.section>

      <section id="manifesto" className="manifesto-section">
        <p className="cinematic-kicker">Manifesto</p>
        <h2>
          We are not selling the fantasy of being finished. We are building the uniform for
          people still becoming.
        </h2>
        <div className="manifesto-grid">
          <p>
            Ugly Actions is for the early version of you that still shows up. The one with
            bad form, nervous hunger, heavy thoughts, and enough pride to try again.
          </p>
          <p>
            The brand is not clean because the process is not clean. It is disciplined,
            masculine, emotional, and elevated because becoming someone requires all four.
          </p>
        </div>
      </section>

      <section className="identity-section">
        <div className="section-lockup">
          <p className="cinematic-kicker">Emotional identity</p>
          <h2>Made for the part of you that refuses to disappear.</h2>
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
          <h2>Three pieces. One first identity.</h2>
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
          <h2>The becoming has stages.</h2>
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
          <h2>You are not alone in the ugly part.</h2>
          <p>
            Ugly Actions should become more than clothing: a private signal between people
            who understand that ambition can be heavy, emotional, and still worth carrying.
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
          <p className="cinematic-kicker">The first circle</p>
          <h2>Get the drop before the brand gets loud.</h2>
          <p>
            Join for product previews, founder notes, and early access. No fake urgency.
            No noise. Just the first signal.
          </p>
        </div>
        <EmailCapture source="cinematic-home" />
      </section>

      <section className="luxury-footer">
        <div>
          <span>UGLY ACTIONS</span>
          <p>Rookie energy. Premium discipline. Built through action.</p>
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
