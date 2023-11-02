import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const CookiePopupContainer = styled.footer`
background: var(--neutral-950, #081120);;
  text-align: center;
  padding: 16px;
`;

const CookieText = styled.p`
  color: var(--neutral-white, #FFF);

/* Body Text/Inter 16px/Regular */
font-family: Inter;
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: 150%; /* 24px */
  margin: 0;
`;

const AcceptButton = styled.button`
display: flex;
padding: var(--spacing-md, 8px) 20px;
flex-direction: column;
justify-content: center;
align-items: center;
border-radius: 8px;
background: var(--neutral-white, #FFF);
`;

const CookiePopup = () => {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const hasSeenPopup = localStorage.getItem('hasSeenCookiePopup');
    if (!hasSeenPopup) {
      setShowPopup(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('hasSeenCookiePopup', 'true');
    setShowPopup(false);
  };

  return showPopup ? (
    <CookiePopupContainer>
      <div className="flex items-center justify-around fixed bottom-0 left-0 w-full px-4 py-5 bg-[#081120] text-white text-center"
        style={{
          zIndex: 999, // You can adjust the z-index as needed
        }}>
        <CookieText className='text'>
          We use cookies to improve your experience on our site. If you continue to use this site, we will assume that you are happy with it.
        </CookieText>
        <AcceptButton className='md:ml-10 ml-4' onClick={acceptCookies}>
          <p className="btn-text">OK</p>
        </AcceptButton>
      </div>
    </CookiePopupContainer>
  ) : null;
};

export default CookiePopup;
