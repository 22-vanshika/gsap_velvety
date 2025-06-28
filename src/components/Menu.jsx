import { allSkincare } from '../../constants/index.js'
import { useRef, useState } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap';

const Menu = () => {
 const contentRef = useRef();
 const [currentIndex, setCurrentIndex] = useState(0);
 
 useGSAP(() => {
	gsap.fromTo('#title', { opacity: 0 }, { opacity: 1, duration: 1 });
	gsap.fromTo('.skincare img', { opacity: 0, xPercent: -100 }, {
	 xPercent: 0, opacity: 1, duration: 1, ease: 'power1.inOut'
	})
	gsap.fromTo('.details h2', { yPercent: 100, opacity: 0 }, {
	 yPercent: 0, opacity: 100, ease: 'power1.inOut'
	})
	gsap.fromTo('.details p', { yPercent: 100, opacity: 0 }, {
	 yPercent: 0, opacity: 100, ease: 'power1.inOut'
	})
 }, [currentIndex]);
 
 const totalSkincare = allSkincare.length;
 
 const goToSlide = (index) => {
	const newIndex = (index + totalSkincare) % totalSkincare;
	
	setCurrentIndex(newIndex);
 }
 
 const getSkincareAt = (indexOffset) => {
	return allSkincare[(currentIndex + indexOffset + totalSkincare) % totalSkincare]
 }
 
 const currentSkincare = getSkincareAt(0);
 const prevSkincare = getSkincareAt(-1);
 const nextSkincare = getSkincareAt(1);
 
 return (
	<section id="menu" aria-labelledby="menu-heading">
	 <img src="/images/slider-left-leaf.png" alt="left-leaf" id="m-left-leaf" />
	 <img src="/images/slider-right-leaf.png" alt="right-leaf" id="m-right-leaf" />
	 
	 <h2 id="menu-heading" className="sr-only">
		Products
	 </h2>
	 
	 <nav className="skincare-tabs" aria-label="Skincare Navigation">
		{allSkincare.map((skincare, index) => {
		 const isActive = index === currentIndex;
		 
		 return (
			<button key={skincare.id} className={`
				${isActive
				 ? 'text-white border-white'
				 : 'text-white/50 border-white/50'}
			 `}	onClick={() => goToSlide(index)}
			>
			 {skincare.name}
			</button>
		 )
		})}
	 </nav>
	 
	 <div className="content">
		<div className="arrows">
		 <button className="text-left" onClick={() => goToSlide(currentIndex - 1)}>
			<span>{prevSkincare.name}</span>
			<img src="/images/right-arrow.png" alt="right-arrow" aria-hidden="true" />
		 </button>
		 
		 <button className="text-left" onClick={() => goToSlide(currentIndex + 1)}>
			<span>{nextSkincare.name}</span>
			<img src="/images/left-arrow.png" alt="left-arrow" aria-hidden="true" />
		 </button>
		</div>
		
		<div className="skincare">
		 <img src={currentSkincare.image} className="object-contain"/>
		</div>
		
		<div className="recipe">
		 <div ref={contentRef} className="info">
			<p>Product Name:</p>
			<p id="title">{currentSkincare.name}</p>
		 </div>
		 
		 <div className="details">
			<h2>{currentSkincare.title}</h2>
			<p>{currentSkincare.description}</p>
		 </div>
		</div>
	 </div>
	</section>
 )
}
export default Menu