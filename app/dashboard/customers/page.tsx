import { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    template: '%s | Acme Dashboard',
    default: 'Customers',
  },
};

export default function Page() {
  return <p>Customers Page</p>;
};