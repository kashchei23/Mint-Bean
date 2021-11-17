import React from 'react';
import { Link } from 'react-router-dom';

import './Landing.scss';
// import '../styles/_settings.scss';

const Landing = () => (
	<>
		<div className='landing-hero'>
			<img
				src='https://res.cloudinary.com/obkidz/image/upload/v1630388849/Mint%20Match/hero2_b0bb29.png'
				alt='Mint Match Logo'
				className='landing-hero-img'
			/>
		</div>
		<div className='landing'>
			<main>
				<h1>How to Play</h1>
				<p>
					Mint Match is based on the classic card matching game known as
					Concentration, sometimes called Matching Pairs, Match Match, Match Up,
					and Memory.
				</p>
				<ul>
					<li>
						The single player game is played by laying matching pairs of cards
						face down on a surface.
					</li>
					<li>Two cards are flipped face up on each turn.</li>
					<li>
						Matching cards are removed from the board, while non-matching cards
						are flipped face down for the player to try again.
					</li>
					<li>
						The object of the game is to turn over pairs of matching cards until
						the board is clear!
					</li>
				</ul>
				<div className='gameplay-img-container'>
					<img
						src='https://res.cloudinary.com/obkidz/image/upload/v1630296509/Mint%20Match/mintcard-round_ghygpk.png'
						className='gameplay-img'
						alt='Gameplay gif'
					/>
					<img
						src='https://res.cloudinary.com/obkidz/image/upload/v1630295654/Mint%20Match/butterfly_rgsoua.png'
						className='gameplay-img'
						alt='Gameplay gif'
					/>
				</div>
				<Link className='styled-link' to='/mint-match-game' key='/mint-match'>
					Click to play!
				</Link>
			</main>
			<section className='landing-developer-section' id='developer'>
				<h1>Developer</h1>
				<div className='developer-img-container'>
					<img
						src='https://res.cloudinary.com/obkidz/image/upload/c_scale,w_600/v1610063693/Portfolio/images/main-image-flip_hq12t0.png'
						className='developer-img'
						alt='Fig of Daniel Brown - Front End Developer'
					/>
				</div>
				<h2>Daniel Brown </h2>
				<p>
					Daniel Brown A Front End UI/UX Developer with an eye for design. In
					addition to React, Javascript, and SCSS, I use tools such as Adobe
					Illustrator, XD, After Effects and others to add extra nuance to
					designs. Always curious, always learning, and always searching for
					ways to solve problems.
				</p>
				<a
					className='styled-link'
					href='mailto:kashchei23@gmail.com?subject=MINT MATCH'
				>
					Contact Me
				</a>
			</section>
		</div>
		<footer>
			<Link to='/'>
				<img
					src='https://res.cloudinary.com/obkidz/image/upload/v1630371486/Mint%20Match/mint_match_logo-white2-01_cvnsac.png'
					alt='Mint Match Logo'
					className='footer-logo'
				/>
			</Link>
			<p>Created using React, JS, SCSS, Adobe XD and Adobe Illustrator.</p>
			<div className='footer-social-links'>
				<a
					className='social-icons'
					target='_blank'
					rel='noreferrer'
					href='https://github.com/kashchei23/mint-match'
				>
					<i className='fab fa-github fa-3x' />
				</a>
				<a
					className='social-icons'
					target='_blank'
					rel='noreferrer'
					href='https://www.linkedin.com/in/danielrbrown/'
				>
					<i className='fab fa-linkedin fa-3x' />
				</a>
				<a
					className='social-icons'
					target='_blank'
					rel='noreferrer'
					href='https://daniel-brown-portfolio.web.app'
				>
					<i className='fas fa-briefcase fa-3x' />
				</a>
			</div>
			<p className='footnote'>&copy; Daniel Brown 2021</p>
		</footer>
	</>
);

export default Landing;
