import { component$ } from '@builder.io/qwik';
import { ProductTile } from '../ProductTile/ProductTile';
import { data } from '../../data'

export default component$(() => {
  const { pageItems } = data
  return (
    <div style="display: flex; max-width: 100%; flex-wrap: wrap; align-content: space-between;">
      {pageItems.map((item: any, i: number) => {
        return <ProductTile key={i} item={item}/>
      })}
    </div>
  );
});
