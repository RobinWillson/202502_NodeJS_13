import { Box, Button, Typography, colors } from '@mui/material';

const PostCard = ({ post }) => {
  return (
    <Box key={ post.id }
      sx={ {
        p: 2,
        mb: 1,
        borderBottom: `1px solid ${colors.grey[300]}`
      } }>
      <Typography variant="h6" gutterBottom>{
        post.title
      }</Typography>
      <Typography variant="body1" gutterBottom>{
        post.body
      }</Typography>
      <Typography variant="body2" gutterBottom>{
        post.createAt
      }</Typography>
      <Button variant="contained" color="primary" size="small" sx={ { mr: 2 } }>
        Edit
      </Button>
      <Button variant="contained" color="secondary" size="small">
        Delete
      </Button>

    </Box>
  );
};

export default PostCard;