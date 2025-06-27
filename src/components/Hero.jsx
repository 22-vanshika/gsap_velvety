import React, { useRef } from "react";
import { SplitText } from "gsap/all";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useMediaQuery } from "react-responsive";
const Hero = () => {
    const videoRef= useRef();
    const isMobile = useMediaQuery({maxWidth:767})

  useGSAP(() => {
    const heroSplit = new SplitText(".title", {
      type: "chars,words",
    });
    const paragraphSplit = new SplitText(".subtitle", { type: "lines" });
    heroSplit.chars.forEach((char) => char.classList.add("text-gradient"));

    gsap.from(heroSplit.chars, {
      yPercent: 100,
      duration: 1.8,
      ease: "expo.out",
      stagger: 0.03,
    });

    gsap.from(paragraphSplit.lines,{
        opacity:0,
        yPercent:100,
        duration:1.8,
        ease:'expo.out',
        stagger:0.07,
        delay:0.65,
    })

    gsap.timeline({
        scrollTrigger:{
            trigger:"#hero",
            start:'top top',
            end:'bottom top',
            scrub:true,
        }
    })
    .to('.right-leaf',{y:250},0)
    .to('.left-leaf',{y:-250},0)

	const startValue = isMobile ? "top 50%" : "center 60%";
	const endValue = isMobile ? "160% top" : "bottom top";
	
	let tl = gsap.timeline({
	 scrollTrigger: {
		trigger: "video",
		start: startValue,
		end: endValue,
		scrub: true,
		pin: true,
	 },
	});
	
	videoRef.current.onloadedmetadata = () => {
	 tl.to(videoRef.current, {
		currentTime: videoRef.current.duration -0.5,
	 });
	};

  }, []);


  return (
    <>
    <section id="hero" className="noisy">
      <h1 className="title">Let Nature Heal You</h1>

      <img
        src="/images/hero-left-leaf.png"
        alt="left-leaf"
        className="left-leaf"
      />
      <img
        src="/images/hero-right-leaf.png"
        alt="right-leaf"
        className="right-leaf"
      />

      <div className="body">
        <div className="content">
          <div className="space-y-5 hidden md:block">
            <p>Pure. Gentle. Radiant.</p>
            <p className="subtitle">Glow with Nature</p>
          </div>

          <div className="view-skincare">
            <p className="subtitle">
              Each Velvety product blends nature’s finest, gentle science, and
              timeless care — crafted to nourish your skin and soothe your
              senses.
            </p>
            <a href="#skincare">View Products {"<3"}</a>
          </div>

        </div>
      </div>
    </section>

    <div className="video absolute inset-0">
        <video src="/videos/output.mp4"
        ref={videoRef}
        muted
        playsInline
        preload="auto"

        ></video>
    </div>
    </>
  );
};

export default Hero;
