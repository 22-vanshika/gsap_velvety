import React from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/all";

const About = () => {
	useGSAP(() => {
	//   const titleSplit = SplitText.create("#about h2", {
	// 	type: "words",
	//   });
	
	  const scrollTimeline = gsap.timeline({
		scrollTrigger: {
		  trigger: "#about",
		  start: "top center",
		},
	  });
	
	  scrollTimeline
		// .from(titleSplit.words, {
		//   opacity: 0,
		//   duration: 1,
		//   yPercent: 100,
		//   ease: "expo.out",
		//   stagger: 0.02,
		// })
		.from(
		  ".top-grid div, .bottom-grid div",
		  {
			opacity: 0,
			duration: 1.5,
			ease: "power1.inOut",
			stagger: 0.04,
		  },
		  "-=0.5"
		);
	});
  return (
    <div id="about">
      <div className="mb-16 md:px-0 px-5">
        <div className="content">
          <div className="md:col-span-8">
            <p className="badge">Nature's Finest Blends</p>
            <h2 className="text-gradient">
              Where every drop is crafted with care — from root to radiance
            </h2>
          </div>
          <div className="sub-content">
            <p>
              Every Velvety formula reflects our deep love for detail — from
              ethically sourced botanicals to skin-loving actives. This
              thoughtful process turns everyday skincare into a naturally
              luxurious ritual.
            </p>
            <div>
              <p className="md:text-3xl text-xl font-bold">
                <span>4.7</span>/5
              </p>
              <p className="text-sm text-yellow">
                Loved by over 12,000 glowing customers
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="top-grid">
        <div className="md:col-span-3">
          <div className="noisy" />
          <img src="/images/abt1.png" alt="grid-img-1" />
        </div>

        <div className="md:col-span-6">
          <div />
          <img src="/images/abt2.png" alt="grid-img-2" />
        </div>

        <div className="md:col-span-3">
          <div className="noisy" />
          <img src="/images/abt5.jpg" alt="grid-img-5" />
        </div>
      </div>

      <div className="bottom-grid">
        <div className="md:col-span-8">
          <div className="noisy" />
          <img src="/images/abt3.jpg" alt="grid-img-3" />
        </div>

        <div className="md:col-span-4">
          <div className="noisy" />
          <img src="/images/abt4.png" alt="grid-img-4" />
        </div>
      </div>
    </div>
  );
};

export default About;
