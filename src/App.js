
import AddStudent from './components/AddStudent';
import SearchStudent from './components/SearchStudent';
import DeleteStudent from './components/DeleteStudent';
import ViewAll from './components/ViewAll';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NotFound from './components/NotFound';

function App() {
  return (
<BrowserRouter>

<Routes>
  <Route path='/' exact element={<AddStudent/>}/>
  <Route path='/search'  element={<SearchStudent/>}/>
  <Route path='/delete'  element={<DeleteStudent/>}/>
  <Route path='/viewAll'  element={<ViewAll/>}/>
  <Route path='*' element={<NotFound/>}/>

</Routes>
</BrowserRouter>
  );
}

export default App;
