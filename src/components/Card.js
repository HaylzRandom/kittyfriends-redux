import React from 'react';

const Card = ({ name, email, id }) => {
	return (
		<div
			className='tc grow bg-transparent br3 pa4 ma3 dib bw2 shadow-5'
			style={{
				border: '2px solid black',
			}}>
			<img
				alt='cat'
				src={`https://robohash.org/${id}?set=set4`}
			/>
			<div>
				<h2>{name}</h2>
				<p>{email}</p>
			</div>
		</div>
	);
};

export default Card;
