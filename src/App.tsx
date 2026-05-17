/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Page309 from './pages/Page309';
import Page316 from './pages/Page316';
import Page413 from './pages/Page413';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="3-9" element={<Page309 />} />
          <Route path="3-16" element={<Page316 />} />
          <Route path="4-13" element={<Page413 />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
