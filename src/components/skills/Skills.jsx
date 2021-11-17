import React from 'react';

import './Skills.scss';

const Skills = () => {
	const skills = [
		{
			src: 'https://res.cloudinary.com/obkidz/image/upload/v1627743857/icons/react_color_ptk6pn.png',
			alt: 'React logo',
			title: 'React JS',
		},
		{
			src: 'https://res.cloudinary.com/obkidz/image/upload/v1636488596/logos/logo_js_cegsgn.png',
			alt: 'React logo',
			title: 'Javascript',
		},
		{
			src: 'https://res.cloudinary.com/obkidz/image/upload/v1636487402/logos/logo_html_vkubkp.png',
			alt: 'React logo',
			title: 'HTML',
		},
		{
			src: 'https://res.cloudinary.com/obkidz/image/upload/v1636487401/logos/logo_css_lgz2de.png',
			alt: 'Sass logo',
			title: 'CSS',
		},
		{
			src: 'https://res.cloudinary.com/obkidz/image/upload/v1627743856/icons/xd-01_txogsa.svg',
			alt: 'Adobe XD logo',
			title: 'XD',
		},
		{
			src: 'https://res.cloudinary.com/obkidz/image/upload/v1627743856/icons/illustrator_jeuf7m.png',
			alt: 'Adobe Illustrator logo',
			title: 'Illustrator',
		},
	];
	return (
		<section className='skillset-container'>
			<h1>Development tools</h1>
			<ul className='skillset'>
				{skills.map((skill) => (
					<li className='skillset--card' key={skill.alt}>
						<img src={skill.src} alt={skill.alt} className='skillset--icon' />
						<span className='orange-font'>{skill.title}</span>
					</li>
				))}
			</ul>
		</section>
	);
};

export default Skills;
