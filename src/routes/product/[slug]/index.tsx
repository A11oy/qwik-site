import { component$ } from '@builder.io/qwik';
import { useLocation } from '@builder.io/qwik-city';
import { Slider } from '../../../components/Slider/Slider'
import { data } from '../../../data'

export default component$(() => {
  const location = useLocation();
  const { pageItems } = data;

  if (!pageItems || !pageItems.length) {
    return null
  }
  const product = pageItems.find(item => {
    if (location.params.slug && location.params.slug.indexOf(item.code) > -1) {
      return true
    }
    return false
  })

  return (
    <div>
      <h1>SKU</h1>
      <p>Pathname: {location.pathname}</p>
      <p>Sku Id: {location.params.slug}</p>
      <Slider
        images={product?.imageURLs || []}
      />
    </div>
  );
});