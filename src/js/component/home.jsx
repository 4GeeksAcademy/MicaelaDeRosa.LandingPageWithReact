import React from "react";
import NavBar from "./navbar";
import Jumbotron from "./jumbotron";
import Cards from "./card"
import Footer from "./footer";

const Home = () => {
	return (
		<>
			<div> 
				<NavBar />
			</div>

			<main className="container">
				<Jumbotron />
				<div className="row"> 
					<div className="col-sm-1 col-md-3">
						<Cards img={"https://bitrise-steplib-collection.s3.amazonaws.com/steps/github-status/assets/icon.svg"} titulo={"GitHub"} text={"We can define Web Development as the process of creating a website, an application or software."} enlace={"https://github.com/"} />
					</div>
					<div className="col-sm-1 col-md-3">
						<Cards img={"https://upload.wikimedia.org/wikipedia/commons/b/b2/Bootstrap_logo.svg"} titulo={"Bootstrap"} text={"Powerful, extensible, and feature-packed frontend toolkit. Build and customize with Sass, utilize prebuilt grid system and components, and bring projects to life with powerful JavaScript plugins."} enlace={"https://getbootstrap.com/"} />
					</div>
					<div className="col-sm-1 col-md-3">
						<Cards img={"https://www.patterns.dev/img/reactjs/react-logo@3x.svg"} titulo={"React"} text={"React is the library for web and native user interfaces. Build user interfaces out of individual pieces called components written in JavaScript."} enlace={"https://es.react.dev/"} />
					</div>
					<div className="col-sm-1 col-md-3">
						<Cards img={"https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg"} titulo={"JavaScript"} text={"JavaScript (JS) is a lightweight interpreted (or just-in-time compiled) programming language with first-class functions."} enlace={"https://developer.mozilla.org/es/docs/Web/JavaScript"} />
					</div>
				</div>
			</main>
			<footer>
				<Footer />
			</footer>

		</>

	);
};
export default Home;