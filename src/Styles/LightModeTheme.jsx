import { css, Global } from '@emotion/react'

const LightModeTheme = () => {
  return (
    <Global
      styles={css`
//COURSES SECTION
      .outer-event {
        background-color: white;
      }
      .event_name {
        color: #046635;
      }
      .event_description {
        color: black;
      }

//About us SECTION
      .aboutsection1 {
          background-color: white;
        }
      .aboutusheading {
        color: black;
      }
      .lineaboutus2 {
        background-color: black;
      }
      .lineaboutus1 {
        background-color: black;
      }
      .paragraph1 {
        color: black;
      }

//DECK SECTION     
      .core-heading {
        color: black;
      }
      .core-line1 {
        background-color : black;
      }
      .core-line2 {
        background-color : black;
      }
      .deckback {
          background-color: white;
          
        }
      .pos {
        color: black;
      }
      .namee {
        color: black;
      }

//SHAPEWAVE SECTION
      .custom-shape-divider-top-1693867662 svg {
        background-color : transparent;
      }
      .custom-shape-divider-top-1693867662 .shape-fill {
        fill: #000;
        z-index: -1;
        background-color: transparent;
    }
    * {
    transition: background-color 0.2s ease, color 0.2s ease,
    box-shadow 0.2s ease;
    }
//OFFER PAGE 
    .offer-page {
      background-color: white;
    }
    .offer-page-title {
      color: black;
    }
    .offer-line1 {
      background-color: black;
    }
    .offer-line2 {
      background-color: black;
    }
    .individual-offer-container {
      z-index: 111111;
    }
    .individual-offer-container {
      background-color: black;
    }
//NAVIGATION BAR
    ul li {
      background-color:black;
      color: white;
      border-bottom:1px #fff solid;
    }
    .tog{
      background: white;
    }
//ABOUT US PAGE
    .about-body {
      background-color: white;
    }
    .about-heading {
      color: black;
    }
    .about-title-line1 {
      background-color: black;
    }
    .about-title-line2 {
      background-color: black;
    }
    .about-info-card {
      background-color: black;
    }
    .neumeric-card-body {
      background-color: black;
    }

      `}
    />
  )
}

export default LightModeTheme
