import { useSelector, useDispatch } from 'react-redux';
import { BiSearch } from 'react-icons/bi';

import { contactsSelectors, contactsActions } from 'redux/contacts';
import * as S from './Filter.styled';

export default function Filter({ children }) {
  const dispatch = useDispatch();
  const filter = useSelector(contactsSelectors.getFilter);

  return (
    <S.StyledFilter>
      <label>
        <BiSearch />

        <S.Input
          type="text"
          name="filter"
          placeholder="Search"
          value={filter}
          onChange={e => dispatch(contactsActions.changeFilter(e.target.value))}
        />
      </label>
      {children}
    </S.StyledFilter>
  );
}
