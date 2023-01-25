import { component$, Slot } from '@builder.io/qwik';
import { CustomHeader, CustomFooter } from '../integrations/react/mui';

export default component$(() => {
  return (
    <>
      <main>
        <CustomHeader />
        <section>
          <Slot />
        </section>
        <CustomFooter />
      </main>
    </>
  );
});
