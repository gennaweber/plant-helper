import Collection from '../components/Collection';
import Drawer from '../components/Drawer';
import TabsRouter from '../components/TabsRouter';

const CollectionView = () => {
  return (
    <div>
      <TabsRouter />
      <Collection />
      <Drawer />
    </div>
  );
};

export default CollectionView;
