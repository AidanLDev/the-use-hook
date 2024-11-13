'use client';

import React, { use } from 'react';

export default function PromiseExample({
  messagePromise,
}: {
  messagePromise: Promise<string>;
}) {
  const messageConent = use(messagePromise);
  return <p>Here's the message: {messageConent}</p>;
}
