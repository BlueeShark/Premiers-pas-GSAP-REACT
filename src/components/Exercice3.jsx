import "../styles/Exercice3.css";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

function Exercice3() {
	const cube = useRef();

	useGSAP(
		() => {
			const tl = gsap.timeline();

			tl.to(cube.current.children[0], { x: "20vw" })
				.to(cube.current.children[0], { y: "20vh" })
				.to(cube.current.children[0], { x: "70vw" });
		},
		[],
		{ scope: cube },
	);

	return (
		<div id="exercice3">
			<h2>Exercice 3</h2>
			<div id="stagerBox" ref={cube}>
				<div></div>
				<div>1</div>
				<div>2</div>
				<div>3</div>
			</div>
		</div>
	);
}

export default Exercice3;
