import "../styles/Exercice2.css";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

function Exercice2() {
	const box = useRef();

	useGSAP(
		() => {
			gsap.to(box.current.children, {
				stagger: {
					each: 0.1,
					from: "center",
					repeat: -1,
					yoyo: true,
				},
				y: 100,
				rotation: 360,
				duration: 2,
				ease: "elastic",
			});
		},
		[],
		{ scope: box },
	);

	return (
		<div id="exercice2">
			<h2>Exercice 2</h2>
			<div id="stagerBox" ref={box}>
				<div>1</div>
				<div>2</div>
				<div>3</div>
				<div>4</div>
				<div>5</div>
			</div>
		</div>
	);
}

export default Exercice2;
