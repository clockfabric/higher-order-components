import React from "react";
import withData from "../../with-data";

const UserList = ({ data }) => {
	return (
		<div className='container user-list'>
			<h1>Users List</h1>
			{data.map(user => (
				<div key={user.id} className='post'>
					<h2>{user.name}</h2>
					<h3>{user.email}</h3>
				</div>
			))}
		</div>
	);
};

export default withData(UserList);
