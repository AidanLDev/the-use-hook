import React, { Suspense } from 'react';
import PromiseExample from './PromiseExample';

export default function MessageContainer({
  messagePromise,
}: {
  messagePromise: Promise<string>;
}) {
  return (
    <Suspense fallback={<p>Waiting for the message...</p>}>
      <PromiseExample messagePromise={messagePromise} />
    </Suspense>
  );
}
