import Collection from '../components/Collection';
import Drawer from '../components/Drawer';
import TabsRouter from '../components/TabsRouter';

const CollectionView = ({ state, toggleDrawer }) => {
  return (
    <div>
      <Drawer state={state} toggleDrawer={toggleDrawer} />
      <TabsRouter />
      <Collection />
    </div>
  );
};

export default CollectionView;
