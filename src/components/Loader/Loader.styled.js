import styled from 'styled-components';
import fone768 from 'images/fone-768.jpg';
import fone1200 from 'images/fone-1200.jpg';

export const LoaderWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100%;
  background-image: linear-gradient(
      to right,
      rgba(47, 48, 58, 0.4),
      rgba(47, 48, 58, 0.4)
    ),
    url(${fone768});
  background-size: cover;

  @media screen and (min-width: 768px) {
    background-image: linear-gradient(
        to right,
        rgba(47, 48, 58, 0.5),
        rgba(47, 48, 58, 0.5)
      ),
      url(${fone1200});
  }
`;

export const LoaderContent = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
