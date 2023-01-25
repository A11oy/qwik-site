import { component$ } from '@builder.io/qwik';

interface ProductTileProps {
  item: any;
}

export const ProductTile = component$((props: ProductTileProps) => {
  const { item } = props;
  if (item) {
    return (
      <div style="width: 50%; text-align: center; min-height: 350px">
        <a href={item.pdpURL}>
          <img src={item.imageURLs[0]} />
          <h4>{item.productName}</h4>
          <p>{item.price}</p>
        </a>
      </div>
    );
  }
  return null;
});
