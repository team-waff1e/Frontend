import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Waffles from './pages/Waffles';
import Waffle from './pages/waffle';
import PostDetail from './components/postdetail';
import NotFound from './components/NotFound';
import CommentList from './components/commentlist';
import SingleComment from './components/singlecomment';
import Navbar from './components/navbar';


function App() {
  
  return (

    <div>
       
      <Navbar />
      <Routes>

        <Route exact path="/" element={<Waffles />} />
        <Route path="/waffles/:id" element={<Waffle />} />
        <Route path="/post/:postId" element={<PostDetail />} />
        <Route path="/post/:postId/comments" element={<CommentList />} />
        <Route path="post/:postId/comment/:commentId" element={<SingleComment />} />




        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </div>

  );
}

export default App;
