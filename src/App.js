import { BrowserRouter, Route, Routes } from 'react-router-dom';

import AllMembers from './pages/AllMembers';
import NewMember from './pages/NewMember';
import Likes from './pages/Likes';
import Layout from './components/layout/Layout';

function App() {
  return <div>
        <BrowserRouter>
        <Layout>
        <Routes>
          <Route path="/" element={<AllMembers />} />
          <Route path="/new-member" element={<NewMember />} />
          <Route path="/likes" element={<Likes />} />\
        </Routes>
        </Layout>
        </BrowserRouter>
        </div>

}

export default App;
