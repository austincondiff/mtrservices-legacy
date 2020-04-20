import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import styled from 'styled-components'

import Layout from '../components/Layout'
import Features from '../components/Features'
import BlogRoll from '../components/BlogRoll'

import facebook from '../img/social/facebook.svg'
import instagram from '../img/social/instagram.svg'
import twitter from '../img/social/twitter.svg'
import linkedin from '../img/social/linkedin.svg'

const Wrap = styled.div`
  background-color: #090D1C;
  background-image: url(${({imgUrl}) => imgUrl});
  background-position: top left;
  background-attachment: fixed;
  position: relative;
  height: 100vh;
  width: 100vw;
  background-size: cover;
  background-position: bottom;
  display: flex;
  justify-content: center;
  align-items: center;
`
const Cover = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: linear-gradient(90deg, rgba(9,13,28,1) 0%, rgba(9,13,28,0.5) 100%);
`;
const AngledAccent = styled.div`
  position: absolute;
  top: 0;
  right: -50%;
  bottom: 0;
  left: 75%;
  transform: skew(-15deg, 0deg);
  background: linear-gradient(0deg, #F25E1C 0%, #EDC621 100%);
`
const Content = styled.div`
  display: flex;
  height: 150px;
  lineHeight: 1;
  justify-content: space-around;
  align-items: left;
  flex-direction: column;
  position: relative;
`
const Title = styled.h1`
  color: white;
  font-family: museo-sans, sans-serif;
  font-weight: 700;
  font-size: 48px;
  letter-spacing: 0;
  line-height: 56px;
  width: 25%;
  margin-bottom: 32px;
`
const Subtitle = styled.h3`
  color: #F7B154;
  font-family: museo-sans, sans-serif;
  font-weight: 700;
  font-size: 24px;
  line-height: 32px;
  width: 50%;
  margin-bottom: 64px;
`
const ButtonWrap = styled.button`
  background: ${({primary}) => primary ? `linear-gradient(134deg, #F25E1C 0%, #EDC621 100%)` : `transparent`};
  border-radius: 4px;
  color: white;
  font-family: museo-sans, sans-serif;
  font-weight: 700;
  font-size: 16px;
  letter-spacing: 0.57px;
  text-align: center;
  width: 240px;
  line-height: 56px;
  border: 0;
  margin-right: 16px;
  position: relative;
  cursor: pointer;
  transition: 200ms;
  outline: none;
  transform: scale(1);
  box-shadow: 0 0 0 rgba(242,94,28,0);
  &:hover {
    transform: scale(1.05);
    box-shadow: 0 16px 48px rgba(242,94,28,0.25);
    ${({primary}) => primary ? `` : `background-color: rgba(242,94,28,0.1);`}
  }
`
const SocialWrap = styled.div`
  position: absolute;
  bottom: 32px;
  right: 32px;
  display: flex;
  flex-direction: column;
`

const SocialButton = styled.button`
  width: 48px;
  height: 48px;
  background-color: white;
  border-radius: 50%;
  box-shadow: 0 2px 4px 0 rgba(0,0,0,0.15), 0 4px 12px 0 rgba(0,0,0,0.15);
  border: 0;
  margin: 8px;
  outline: none;
  transition: 200ms;
  transform: scale(1);
  cursor: pointer;
  &:hover {
    transform: scale(1.15);
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.15), 0 8px 24px 0 rgba(0,0,0,0.15);
  }
`

const Button = ({ children, primary, ...props }) => (
  <ButtonWrap primary={primary} {...props}>
    {!primary && (
      <svg style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%'
        }} width="100%" height="100%">
        <defs>
          <linearGradient x1="0%" y1="0%" x2="100%" y2="100%" id="linearGradient">
            <stop stopColor="#F25E1C" offset="0%"></stop>
            <stop stopColor="#EDC621" offset="100%"></stop>
          </linearGradient>
        </defs>
        <rect id="Rectangle-Copy" fill="none" stroke="url(#linearGradient)" strokeWidth="3" x="1.5" y="1.5" width="calc(100% - 3px)" height="calc(100% - 3px)" rx="4"></rect>
      </svg>
    )}
    <span>{children}</span>
  </ButtonWrap>
)

export const IndexPageTemplate = ({ image }) => (
  <Wrap imgUrl={!!image.childImageSharp ? image.childImageSharp.fluid.src : image}>
    <Cover />
    <AngledAccent />
    <Content className="container">
      <Title>
        {/*title*/}
        Our new website is on it’s way.
      </Title>
      <Subtitle>
        {/*subheading*/}
        Need IT help? Get support now or sign up to be notified when we launch our new website.
      </Subtitle>
      <div>
        <Button primary onClick={() => window.open('http://support.mtrservices.com/download_client_connector?id=2&name=Mark+Condiff')}>Get support</Button>
        <Button onClick={() => window.open('http://eepurl.com/g0xVWH')}>
          Be notified
        </Button>
      </div>
    </Content>
    <SocialWrap>
      <SocialButton onClick={() => window.open('https://www.linkedin.com/company/mtrservices')}><img src={linkedin} /></SocialButton>
      <SocialButton onClick={() => window.open('https://twitter.com/mtrservices')}><img src={twitter} /></SocialButton>
      <SocialButton onClick={() => window.open('https://instagram.com/mtrservices')}><img src={instagram} /></SocialButton>
      <SocialButton onClick={() => window.open('https://facebook.com/mtrservices')}><img src={facebook} /></SocialButton>
    </SocialWrap>
  </Wrap>
)

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  mainpitch: PropTypes.object,
  description: PropTypes.string,
  intro: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
}

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <IndexPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        heading={frontmatter.heading}
        subheading={frontmatter.subheading}
        mainpitch={frontmatter.mainpitch}
        description={frontmatter.description}
        intro={frontmatter.intro}
      />
    </Layout>
  )
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default IndexPage

export const pageQuery = graphql`
  query ComingSoonPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "coming-soon-page" } }) {
      frontmatter {
        title
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        heading
        subheading
        mainpitch {
          title
          description
        }
        description
        intro {
          blurbs {
            image {
              childImageSharp {
                fluid(maxWidth: 240, quality: 64) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            text
          }
          heading
          description
        }
      }
    }
  }
`
