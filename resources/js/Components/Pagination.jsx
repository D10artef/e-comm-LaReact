import React from 'react';
import { Link } from '@inertiajs/inertia-react';
import classNames from 'classnames';

const PageLink = ({ active, label, url, arrayOnly }) => {
  const className = classNames(
    [
      'px-2 py-1',
      // 'border border-solid border-neutral-500 rounded',
      'rounded-full',
      'text-xs',
      'hover:bg-accent hover:text-white duration-300',
      'focus:outline-none',
      'pagination-item',
    ],
    {
      'bg-accent text-light active': active
    },
    {
      'text-my-neutral': !active
    }
  );
  return (
    <Link className={className} href={url} only={arrayOnly} preserveState>
      <span dangerouslySetInnerHTML={{ __html: label }}></span>
    </Link>
  );
};


const PageInactive = ({ label }) => {
  const className = classNames([
    'px-2 py-1 text-xs',
    // 'border rounded border-solid border-gray-400', 
    'opacity-60 text-gray-400 pagination-item disabled'
  ]);
  return (
    <div className={className} dangerouslySetInnerHTML={{ __html: label }} />
  );
};

export default ({ links = [] , arrayOnly = [] }) => {
  if (links.length === 3) return null;
  return (
    <div className="flex flex-wrap justify-center gap-2 my-2 pagination">
      {links.length > 0 && links.map(({ active, label, url }, index) => {
        return url === null ? (
          <PageInactive key={`${label}-${index}`} label={label} />
        ) : (
          <PageLink key={`${label}-${index}`}label={label} active={active} url={url} arrayOnly={arrayOnly}/>
        );
      })}
    </div>
  );
};
