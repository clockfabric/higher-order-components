import React from "react";
import withData from "../../with-data";

const UserProfile = ({ data, name, email }) => {
	return (
		<div className='container'>
			<h1>{name}</h1>
			<h1>{email}</h1>
			Posts:
			{data.map(post => (
				<div key={post.id} className='post'>
					<h3>{post.title}</h3>
					<p>{post.body}</p>
				</div>
			))}
		</div>
	);
};

export default withData(UserProfile);
