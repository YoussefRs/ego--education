import { css, Global } from '@emotion/react'

const LightModeTheme = () => {
  
  return (
    <Global
      styles={css`

      
//COURSES SECTION
      .outer-event {
        background-color:  #ECEFF1;
      }
      .event_name {
        color: #046635;
      }
      .event_description {
        color: black;
      }
      
      

//About us SECTION
      .aboutsection1 {
          background-color:  #ECEFF1;
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
      .divs1 {
        border-right: 2px solid #0F0F0F;
      }
      @media (max-width: 768px) {
        .divs1 {
          border-right: 2px solid #ECEFF1;
        }
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
          background-color:  #ECEFF1;
          
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
      background-color :  #ECEFF1;
    }
    .offer-page {
      background-color: #ECEFF1;
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
    .offer-detailsdescription {
      color: #0F0F0F;
    }
    .offer-details-description {
      color: #0F0F0F;
    }
    
    #offer-details-description-list {
      color: black;
    }
    
    .sub-title  {
      color: #046635;
    }

//NAVIGATION BAR
    #navBar li {
      background-color:#0F0F0F;
      color:  #ECEFF1;
      border-bottom:1px #fff solid;
    }
    
//ABOUT US PAGE
    .about-body {
      background-color:  #ECEFF1;
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
      background-color: #0F0F0F;
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
      background-color:  #ECEFF1;
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
