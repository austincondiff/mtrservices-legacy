import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'

import Layout from '../components/Layout'
import Features from '../components/Features'
import BlogRoll from '../components/BlogRoll'

export const IndexPageTemplate = ({
  image,
  title,
  heading,
  subheading,
  mainpitch,
  description,
  intro,
}) => (
  <div>
    <div
      className="full-width-image margin-top-0"
      style={{
        backgroundColor: '#090D1C',
        backgroundImage: `url(${
          !!image.childImageSharp ? image.childImageSharp.fluid.src : image
        })`,
        backgroundPosition: `top left`,
        backgroundAttachment: `fixed`,
        position: 'relative',
        height: '100vh'
      }}
      >
      <div style={{
        position: 'absolute',
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        background: 'linear-gradient(90deg, rgba(9,13,28,1) 0%, rgba(9,13,28,0.5) 100%)'
      }}></div>
      <div style={{
        position: 'absolute',
        top: 0,
        right: '-50%',
        bottom: 0,
        left: '75%',
        transform: 'skew(-15deg, 0deg)',
        background: 'linear-gradient(0deg, #F25E1C 0%, #EDC621 100%)'
      }}></div>
      <div
        className="container"
        style={{
          display: 'flex',
          height: '150px',
          lineHeight: '1',
          justifyContent: 'space-around',
          alignItems: 'left',
          flexDirection: 'column',
          position: 'relative'
        }}
        >
        <h1
          className="has-text-weight-bold is-size-3-mobile is-size-2-tablet is-size-1-widescreen"
          style={{
            color: 'white',
            fontFamily: 'museo-sans, sans-serif',
            fontWeight: '700',
            fontSize: '56px',
            letterSpacing: 0,
            lineHeight: '64px',
            width: '25%',
            marginBottom: '32px'
          }}
          >
          {/*title*/}
          Our new website is on it’s way.
        </h1>
        <h3
          className="has-text-weight-bold is-size-5-mobile is-size-5-tablet is-size-4-widescreen"
          style={{
            fontFamily: 'museo-sans, sans-serif',
            fontWeight: '700',
            fontSize: '20px',
            color: '#F7B154',
            lineHeight: '32px',
            width: '50%',
            marginBottom: '64px'
          }}
          >
          {/*subheading*/}
          Need IT help? Get support now or sign up to be notified when we launch our new website.
        </h3>
        <div>
          <button onClick={() => window.open('http://support.mtrservices.com/download_client_connector?id=2&name=Mark+Condiff')} style={{
            backgroundImage: `linear-gradient(134deg, #F25E1C 0%, #EDC621 100%)`,
            borderRadius: 4,
            color: 'white',
            fontFamily: 'museo-sans, sans-serif',
            fontWeight: '700',
            fontSize: '16px',
            letterSpacing: '0.57px',
            textAlign: 'center',
            width: 240,
            lineHeight: '56px',
            border: 0,
            marginRight: 16
          }}>Get support</button>
          <button style={{
            background: 'transparent',
            // backgroundImage: `linear-gradient(134deg, #F25E1C 0%, #EDC621 100%)`,
            borderRadius: 4,
            color: 'white',
            fontFamily: 'museo-sans, sans-serif',
            fontWeight: '700',
            fontSize: '16px',
            letterSpacing: '0.57px',
            textAlign: 'center',
            width: 240,
            lineHeight: '56px',
            border: 0,
            position: 'relative'
          }}>
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
          <span>Be notified</span>
        </button>
        </div>
      </div>
    </div>
  </div>
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
