import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import * as S from './styled'

const Logo = () => {
	const { logoImage } =	useStaticQuery(
		graphql`
			query {
				logoImage: file(relativePath: { eq: "logo.jpg" }) {
					childImageSharp {
						fixed(width: 60, height:60) {
							...GatsbyImageSharpFixed
						}
					}
				}
			}
		`
	)

	return <S.LogoWrapper 
		fixed={logoImage.childImageSharp.fixed} />
}

export default Logo