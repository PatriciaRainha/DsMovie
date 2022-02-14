import { ReactComponent as GithubIcon } from "assets/images/githubicon.svg";
import { Link } from "react-router-dom";
import "./style.css";

const Navbar = () => {
	return (
		<header>
			<nav className="container">
				<div className="dsmovie-nav-content">
					<Link to="/">
						<h1>DSMovies</h1>
					</Link>
					<a
						href="https://github.com/PatriciaRainha"
						target="_blank"
						rel="noreferrer"
					>
						<div className="dsmovie-contact-container">
							<GithubIcon />
							<p className="dsmovie-contact-link">/PatriciaRainha</p>
						</div>
					</a>
				</div>
			</nav>
		</header>
	);
};

export default Navbar;