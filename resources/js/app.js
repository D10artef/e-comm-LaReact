require('./bootstrap');

import React from 'react'
import { createRoot } from 'react-dom/client'
import { createInertiaApp } from '@inertiajs/inertia-react'
import { InertiaProgress } from '@inertiajs/progress'


InertiaProgress.init()

createInertiaApp({
  title: (title) => `${title} - E-commerce`,
  resolve: (name) => import(`./Pages/${name}`),
  setup({ App, props }) {
      const root = createRoot(document.getElementById("app"));
      root.render(<App {...props} />);
  },
});