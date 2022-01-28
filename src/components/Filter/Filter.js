import { useSelector, useDispatch } from 'react-redux';

import { BiSearch } from 'react-icons/bi';
import { contactsSelectors, contactsActions } from 'redux/contacts';
import { StyledFilter, Input } from './Filter.styled';

export default function Filter() {
  const dispatch = useDispatch();
  const filter = useSelector(contactsSelectors.getFilter);

  return (
    <StyledFilter>
      <label>
        <BiSearch />

        <Input
          type="text"
          name="filter"
          placeholder="Search"
          value={filter}
          onChange={e => dispatch(contactsActions.changeFilter(e.target.value))}
        />
      </label>
    </StyledFilter>
  );
}
