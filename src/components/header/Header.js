import React from 'react';
import styled from 'styled-components';
import SearchInput from '../search/SearchInput';
import { EllipsisHorizontalIcon, GridIcon, ListIcon } from '../icons';
import MoreSide from '../widgets/MoreSide';
import { useDispatch, useSelector } from 'react-redux';
import { toggleMoreSide, toggleLayout } from '../../features/actionSlice';

const Header = () => {
  const dispatch = useDispatch();
  const { layout } = useSelector((state) => state.action);

  const handleShowMoreSide = () => {
    dispatch(toggleMoreSide(true));
  };

  const handleChangeLayout = () => {
    dispatch(toggleLayout());
  };

  return (
    <HeaderWrap>
      <HeaderLeft>
        <SearchInput />
      </HeaderLeft>
      <HeaderRight>
        <div className="layout-icon" onClick={handleChangeLayout}>
          {layout === 'grid' ? <ListIcon /> : <GridIcon />}
        </div>
        <MoreItem>
          <div className="ellipsis" onClick={handleShowMoreSide}>
            <EllipsisHorizontalIcon />
          </div>
          <MoreSide />
        </MoreItem>
      </HeaderRight>
    </HeaderWrap>
  );
};

const HeaderWrap = styled.div`
  display: flex;
  width: 100%;
  height: 60px;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;

  svg {
    width: 20px;
    fill: ${(props) => props.theme.colors.text_color2};
  }
`;

const HeaderLeft = styled.div`
  display: flex;
  align-items: center;
`;

const HeaderRight = styled.div`
  display: flex;
  align-items: center;

  .noti {
    margin-left: 20px;
    a {
      display: flex;
    }
  }

  .layout-icon {
    display: flex;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    :hover {
      background-color: ${(props) => props.theme.colors.hover_color1};
    }

    svg {
      width: 25px;
      fill: ${(props) => props.theme.colors.text_color2};
    }
  }
`;

const MoreItem = styled.div`
  position: relative;
  margin-left: 20px;

  .ellipsis {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    :hover {
      background-color: ${(props) => props.theme.colors.hover_color1};
    }
  }
`;

export default Header;
