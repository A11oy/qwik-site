import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';

export default component$(() => {
  return (
    <>
      <h1 class="text-3xl font-bold underline">Qwik - About us page</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut sint cupiditate
        excepturi minima deleniti, deserunt a dolorem nisi temporibus incidunt provident in
        maxime sapiente molestias nesciunt nihil culpa, eveniet recusandae.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, perferendis vitae
        assumenda quia ipsum, dicta sint eos maxime voluptatibus corporis, atque consequuntur
        vero optio recusandae? Libero maiores expedita repellendus pariatur.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe aliquam quasi porro,
        veniam animi corporis consectetur quis, libero placeat, facere vitae. Non omnis labore
        dolorum eligendi, veniam beatae exercitationem est?
      </p>
    </>
  );
});

export const head: DocumentHead = {
  title: 'Qwik React - About us page',
};
