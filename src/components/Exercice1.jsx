import "../styles/Exercice1.css";
import Roger from "../assets/chickenBox.png";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef, useState } from "react";

function Exercice1() {
	const [count, setCount] = useState(0);

	const poulet1 = useRef();
	const poulet2 = useRef();

	const { contextSafe } = useGSAP();

	const handleClick = contextSafe(() => {
		gsap.to(poulet2.current, { rotation: "+=360" });
	});

	useGSAP(() => {
		gsap.to(poulet1.current, { rotation: "+=180" });
	}, [count]);

	return (
		<div id="exercice1">
			<h2>Exercice 1</h2>
			<div id="rogersBox">
				<figure>
					<img
						src={Roger}
						className="roger"
						alt="chicken in a box"
						ref={poulet1}
					/>
					<figcaption>Roger avec useState </figcaption>
					<button type="button" onClick={() => setCount(count + 1)}>
						{count}
					</button>
				</figure>
				<figure>
					<img
						src={Roger}
						ref={poulet2}
						className="roger"
						alt="chicken in a box"
					/>
					<figcaption>Roger avec handler</figcaption>
					<button type="button" onClick={handleClick}>
						Click
					</button>
				</figure>
			</div>
		</div>
	);
}

export default Exercice1;
