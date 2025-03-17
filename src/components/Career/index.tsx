import { useState } from 'react';
import Category from '../Skills/Category';
import CareerDetail from './CareerDetail';

export default function Career() {
  const [selectedOrder, setSelectedOrder] = useState<number>(0);

  return (
    <div className="w-full flex flex-col gap-3">
      <Category
        list={['최신순', '오래된 순']}
        selectedIndex={selectedOrder}
        handleOnClick={setSelectedOrder}
      />
      <CareerDetail isOrderNew={!!(selectedOrder === 0)} />
    </div>
  );
}
