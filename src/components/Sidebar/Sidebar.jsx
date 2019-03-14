import './Sidebar.css';
import React from 'react'

export default function Sidebar({ width = 250, top=50, transitionDuration = 250, opened = true, content}) {
   // Hide sidenav by horizontaly transalte it to -width px
  const closedSidenavStyles = {
    width: width,
    top: top  + 'px',
    transform: 'translate(-' + width + 'px)',
    transitionDuration: transitionDuration + 'ms',
  }
  // Horizontaly transalte sidenav to 0px
  const openedSidenavStyle = {
    transform: 'translate(0px)', 
  };

  const closedContainerStyles = {
    width: '0px',
    minWidth: '0px',
  }
  const openedContainerStyle = {
    width: width,
    minWidth: width,
    transform: 'scaleX(1)',
    transitionDuration: transitionDuration + 'ms',
  }
  //-webkit-transition: width 2s; /* Safari */
  //transition: width 2s;

  let currentSidenavStyle = Object.assign({}, closedSidenavStyles);
  let currentContainerStyle = Object.assign({}, closedContainerStyles);
  if (opened) {
    currentSidenavStyle = Object.assign({}, currentSidenavStyle, openedSidenavStyle);
    currentContainerStyle = Object.assign({}, currentContainerStyle, openedContainerStyle);
  }
  
  return (
    <div className="sidebar-container d-none d-md-block d-xs-none position-relative" style={{...currentContainerStyle}}>
      <div  style={{...currentSidenavStyle}} className="sidebar bg-dark">
        {content}
      </div>
    </div>
  )
}
/**
 * 
 *       <div className="sidebar bg-dark">
 */