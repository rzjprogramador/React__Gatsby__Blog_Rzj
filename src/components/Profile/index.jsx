import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Logo from '../Logo'

const Profile = () => {
	const {
		site: { 
			siteMetadata:  { title, slogan, description }
		}
	} = useStaticQuery(graphql`
	query MySiteMetadata {
		site {
			siteMetadata {
				title
				slogan
				description
			}
		}
	}
`)

return (
	<div className="Profile-wrapper">
		<Logo />
		<h1>{title}</h1>
		<h2>{description}</h2>
		<p>{slogan}</p>
	</div>
)
}
 

export default Profile
