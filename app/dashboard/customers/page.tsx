import { Metadata } from 'next';
import { Suspense } from 'react';

import CustomersTable from '@/app/ui/customers/table';
import { CustomersTableSkeleton } from '@/app/ui/skeletons';

export const metadata: Metadata = {
  title: {
    template: '%s | Acme Dashboard',
    default: 'Customers',
  },
};

export default async function Page(props: {
  searchParams?: Promise<{
    query?: string;
    page?: string;
  }>;
}) {
  const searchParams = await props.searchParams;
  const query = searchParams?.query || '';

  return (
    <div className="w-full">
      <Suspense fallback={<CustomersTableSkeleton />}>
        <CustomersTable query={query} />
      </Suspense>
    </div>
  )
};