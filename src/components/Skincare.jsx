import React from "react";
import { serumLists, skincareLists } from "../../constants";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Skincare = () => {
  useGSAP(() => {
    const parallaxTl = gsap.timeline({
      scrollTrigger: {
        trigger: "#skincare",
        start: "top 30%",
        end: "bottom 80%",
        scrub: true,
      },
    });

    parallaxTl
      .from("#s-left-leaf", {
        x: -100,
        y: 100,
      })
      .from("#s-right-leaf", {
        x: 100,
        y: 100,
      });
  });

  return (
    <section id="skincare" className="noisy">
      <img src="/images/skincare-left-leaf.png" alt="l-leaf" id="s-left-leaf" />
      <img
        src="/images/skincare-right-leaf.png"
        alt="r-leaf"
        id="s-right-leaf"
      />

      <div className="list">
        <div className="popular">
          <h2>🌿 Velvety Bestsellers:</h2>

          <ul>
            {skincareLists.map(({ name, country, detail, price }) => (
              <li key={name}>
                <div className="md:me-28">
                  <h3>{name}</h3>
                  <p>
                    {country} | {detail}
                  </p>
                </div>
                <span>- {price}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="loved">
          <h2>🫶🏻 Most Loved Rituals:</h2>

          <ul>
            {serumLists.map(({ name, country, detail, price }) => (
              <li key={name}>
                <div className="md:me-28">
                  <h3>{name}</h3>
                  <p>
                    {country} | {detail}
                  </p>
                </div>
                <span>- {price}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Skincare;
