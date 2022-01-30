import { useSelector } from 'react-redux';
import { ThreeDots } from 'react-loader-spinner';

import { themeSelectors } from 'redux/theme';
import * as S from './Loader.styled';

export default function Loader() {
  const themeColor = useSelector(themeSelectors.getMainColor);

  return (
    <S.LoaderWrapper>
      <S.LoaderContent>
        <ThreeDots color={themeColor} height={100} width={100} />
      </S.LoaderContent>
    </S.LoaderWrapper>
  );
}
