import { useState } from 'react';
import { careerFilter } from '@src/constant/career';
import Category from '../Skills/Category';
import CareerDetail from './CareerDetail';

export default function Career() {
  const [selectedOrder, setSelectedOrder] = useState<number>(0);

  return (
    <div className="w-full flex flex-col gap-3">
      <Category
        list={careerFilter}
        selectedIndex={selectedOrder}
        handleOnClick={setSelectedOrder}
      />
      <CareerDetail isOrderNew={!!(selectedOrder === 0)} />
    </div>
  );
}
