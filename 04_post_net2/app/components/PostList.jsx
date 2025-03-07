import { Paper, Typography, } from '@mui/material';
import PostCard from './PostCard';

const PostList = ({ posts }) => {
  return (
    <Paper sx={ { flexGrow: 1, overflow: "auto", p: 1 } }>
      { posts.length === 0 && <Typography variant="h6">No Post</Typography> }
      { posts.map((post) => (
        <PostCard key={ post._id } post={ post } />
      )) }
    </Paper>
  );
};

export default PostList;