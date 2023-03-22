import { component$, Slot } from '@builder.io/qwik';
import { CustomFooter } from '../integrations/react/mui';
import Header from '~/components/Header/Header';

export default component$(() => {
  return (
    <>
      <main>
        <Header />
        <section>
          <Slot />
        </section>
        <CustomFooter />
      </main>
    </>
  );
});