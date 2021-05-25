import React from 'react';

import EquipmentList from '../containers/equipment_list'
import Equipment from '../containers/equipment'


const App = (props) => {
  return (
    <div className="equipments">
      <EquipmentList />
      <Equipment />
    </div>
  );
};

export default App;
