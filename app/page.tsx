import { Suspense } from 'react';
import ViewSwitcher from './ViewSwitcher'; 

export default function Page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ViewSwitcher />
    </Suspense>
  );
}
