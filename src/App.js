import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from "./components/dashboard/Dashboard";
import Domain from './components/domain/Domain';
import Subscription from './components/subscription/Subscription';
import Report from './components/report/Report';
import Suspance from './components/suspance/Suspance';
import Settings from './components/setting/Settings';
import MailAgent from './components/mailAgent/MailAgent';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Dashboard />} />
          <Route path='/mail_agent' element={<MailAgent />} />
          <Route path='/domain' element={<Domain />} />
          <Route path='/report' element={<Report />} />
          <Route path='/subscription' element={<Subscription />} />
          <Route path='/suspension_list' element={<Suspance />} />
          <Route path='/settings' element={<Settings />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
