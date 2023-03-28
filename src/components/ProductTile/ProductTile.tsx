import { component$, useVisibleTask$, useStore, useStyles$ } from '@builder.io/qwik';
import styles from './productTile.css?inline';

interface ProductTileProps {
  item: any;
}

export const ProductTile = component$((props: ProductTileProps) => {
  useStyles$(styles)

  const { item } = props;
  const showVisible = useStore({ flag: false })

  useVisibleTask$(({ track }) => {
    track(() => showVisible.flag)
    try {
      showVisible.flag = true
    } catch(e) {
      console.log(e)
    }
  });

  if (item) {
    return (
      <div class="product-tile">
        <a href={`/product/${item.code}`}>
          <img src={showVisible.flag && item.imageURLs[0]} />
          <h4>{item.productName}</h4>
          <p>{item.price}</p>
        </a>
      </div>
    );
  }
  return null;
});
