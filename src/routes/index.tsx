import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';

export default component$(() => {
  return (
    <>
      <h1 class="text-3xl font-bold underline">Qwik - Home page</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi et odio eos quia? Ullam doloremque,
        ut voluptate repudiandae magni facilis esse ducimus provident voluptatibus nam, sapiente hic vero, ad autem!
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate repellat tempora at.
        Unde iure quisquam possimus repudiandae deleniti error nobis, repellat pariatur nesciunt aut porro ipsam
        nostrum similique animi consequuntur!
      </p>
    </>
  );
});

export const head: DocumentHead = {
  title: 'Qwik - Home page',
};
