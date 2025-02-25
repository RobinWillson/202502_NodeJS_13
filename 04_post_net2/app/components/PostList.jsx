import React from 'react';
import { Box, Button, Paper, Typography, colors } from '@mui/material';
import PostCard from './PostCard';

const PostList = ({ posts }) => {
  return (
    <Paper sx={ { flexGrow: 1, overflow: "auto", p: 1 } }>
      { posts.length === 0 && <Typography variant="h6">No Post</Typography> }
      { posts.map((POST) => (
        <PostCard key={ POST.id } post={ POST } />
      )) }
    </Paper>
  );
};

export default PostList;