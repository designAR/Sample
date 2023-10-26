import tw from 'tailwind-styled-components';
import TabContainer from './TabContainer';
import Guide from './howOpenClass/Guide';
import { useState } from 'react';
import EnterClassInfomation from './classDetail/EnterClassInfomation';
import ClassDetail from './classDetail/ClassDetail';
import Confirmation from './classDetail/Confirmation';

const Container = tw.div`
// 임시
    max-w-4xl 
    
    justify-center
    m-auto
`;

const OpenClassPage = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [showGuide, setShowGuide] = useState(true);

  const handleOpenClick = () => {
    setActiveTab(0);
    setShowGuide(false);
  };

  const nextTab = () => {
    setActiveTab(activeTab + 1);
    console.log(activeTab);
  };

  const prevTab = () => {
    setActiveTab(activeTab - 1);
    console.log(activeTab);
  };

  return (
    <Container>
      <TabContainer activeTab={activeTab} setActiveTab={setActiveTab} />
      {showGuide ? (
        <Guide activeTab={activeTab} onOpenClick={handleOpenClick} />
      ) : activeTab === 0 ? (
        <EnterClassInfomation nextTab={nextTab} />
      ) : activeTab === 1 ? (
        <ClassDetail nextTab={nextTab} prevTab={prevTab} />
      ) : (
        <Confirmation prevTab={prevTab} />
      )}
    </Container>
  );
};

export default OpenClassPage;
