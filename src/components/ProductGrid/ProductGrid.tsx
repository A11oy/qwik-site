import { component$, useTask$, useStyles$ } from '@builder.io/qwik';
import PaginationSection from '../PaginationSection/PaginationSection';
import { ProductTile } from '../ProductTile/ProductTile';
import styles from './productGrid.css?inline'

export default component$(({ itemsData, pagination }: any) => {
  useStyles$(styles)
  useTask$(() => console.log('runs in the browser'), {
    eagerness: 'visible', // 'load' | 'visible' | 'idle'
  });

  return (
    <div class="category-container">
      <div class="product-grid">
        {itemsData.map((item: any, i: number) => {
          return <ProductTile key={i} item={item} />
        })}
      </div>
      <PaginationSection
        pagination={pagination}
      />
    </div>
  );
});
