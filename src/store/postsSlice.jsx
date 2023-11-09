import { createSlice } from '@reduxjs/toolkit';

// 초기 상태를 정의
const initialState = {
    posts: [
        {
            id: 1,
            content: 'This is an example post 1',
        },
        {
            id: 2,
            content: 'This is an example post 2',
        },
        {
            id: 3,
            content: 'This is an example post 3',
        },
    ],
    selectedPost: null, // 선택된 게시물의 초기값은 null
    
};

// createSlice 함수를 사용하여 'posts' 슬라이스를 생성
const postsSlice = createSlice({
    name: 'posts', // 슬라이스의 이름을 정의
    initialState, // 초기 상태를 사용
    reducers: {
        
        // 선택된 게시물을 설정
        selectPost: (state, action) => {
            state.selectedPost = action.payload;
        },
        // 선택된 게시물을 지우고 null로 설정
        clearSelectedPost: (state) => {
            state.selectedPost = null;
        },
        // 새로운 게시물을 추가
        addPost: (state, action) => {
            state.posts.push(action.payload);
        },
        deletePost: (state, action) => {
            const postIndex = state.posts.findIndex((post) => post.id === action.payload.id);
            if (postIndex !== -1) {
                state.posts.splice(postIndex, 1);
            }
        },
        
        editPost: (state, action) => {
            const { id, content } = action.payload;
            const existingPost = state.posts.find((post) => post.id === id);
            if (existingPost) {
                existingPost.content = content;
            }
    //         const postIndex = state.posts.findIndex((post) => post.id === id);
    //      if (postIndex !== -1) {
    //     state.posts[postIndex].content = content;
    //      }
            state.selectedPost = null;
        },
    },
});

export const {  selectPost, clearSelectedPost, addPost, deletePost, editPost } = postsSlice.actions;

export default postsSlice.reducer;
