import styled from 'styled-components';
import { TopBanner } from '../../components/main/TopBanner';
import { MainSearch } from '../../components/main/MainSearch';
import { Category } from '../../components/main/Category';

const Main = styled.main`
  min-height: 800px;
`;

export const MainPage = () => {
  return (
    <Main>
      <TopBanner />
      <MainSearch />
      <Category />
    </Main>
  );
};
