import { TabWrap, Tab } from './styled';
import { useNavigate } from 'react-router-dom';

const Tabs = ({ tabs, activeTab, setActiveTab }) => {
  const navigate = useNavigate();
  return (
    <TabWrap>
      {tabs.map((tab) => {
        return (
          <Tab
            key={tab.alias}
            active={tab.alias === activeTab}
            onClick={() => {
              navigate(`/auth?tab=${tab.alias}`);
              setActiveTab(tab.alias);
            }}
          >
            {tab.name}
          </Tab>
        );
      })}
    </TabWrap>
  );
};

export default Tabs;
