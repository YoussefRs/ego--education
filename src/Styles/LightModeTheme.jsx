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
          transition: opacity 3s ease;
        }
      #lineaboutus2{
        background-color: black;
      }
      #lineaboutus1 {
        background-color: black;
      }
      .paragraph1 {
        color: black;
      }
      #about {
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
      .namee {
        color: black;
      }

//SHAPEWAVE SECTION
      .custom-shape-divider-top-1693867662 svg {
        background-color : transparent;
      }
      .custom-shape-divider-top-1693867662 .shape-fill {
        fill: #0F0F0F;
        z-index: -1;
        background-color: transparent;
    }
    * {
    transition: background-color 0.2s ease, color 0.2s ease,
    box-shadow 0.2s ease;
    }
//OFFER PAGE 
    .offer-details-hero-container {
      background-color : white;
    }
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
    .offer-details-description {
      color: black;
    }
    
    #offer-details-description-list {
      color: black;
    }
    .table {
      color: black;
    }
    .table th {
      border: 1px solid black;
    }
    #td {
      border: 1px solid black;
    }
    .sub-title  {
      color: #046635;
    }

//NAVIGATION BAR
    #navBar li {
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
    @media (max-width: 768px) {
      .divs1 {
          border-bottom: 2px solid black;
      }
    }
    
//FAQ
    .aboutusheading {
      color: white
    }
    .lineaboutus1 {
      background-color: white;
    }
    .lineaboutus2 {
      background-color: white;
    }
//CONTACT PAGE 
    .contact_main_body {
      background-color: white;
      z-index: -1;
    }
    .contact_para {
      color: black;
    }
    .contactusheading {
      color: black;
    }
    .contact_info_subhead {
      color: black;
    }
    .contact_all_information {
      color: black;
    }
    .contactusline1 {
      background-color: black;
    }
    .contactusline2 {
      background-color: black;
    }
    .fillform2 {
      color: black;
    }
//DECK
      `}
    />
  )
}

export default LightModeTheme
