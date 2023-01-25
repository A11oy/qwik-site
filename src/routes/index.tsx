import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import ProductGrid from '~/components/ProductGrid/ProductGrid';

export default component$(() => {
  return (
    <>
      <h1 class="text-3xl font-bold underline">Qwik React - Home page</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi et odio eos quia? Ullam doloremque,
        ut voluptate repudiandae magni facilis esse ducimus provident voluptatibus nam, sapiente hic vero, ad autem!
      </p>
      <ProductGrid />
    </>
  );
});

export const head: DocumentHead = {
  title: 'Qwik React - Home page',
};
