import { FETCH_POSTS, NEW_POST } from './types';
import S3FileUpload from 'react-s3';

const config = {
  bucketName: 'snif-user-photos',
  region: 'us-east-1',
  accessKeyId: 'AKIAVRY3KQFJRKS5PQOL',
  secretAccessKey: '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',
}

export const fetchPosts = () => dispatch => {
  fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(posts =>
      dispatch({
        type: FETCH_POSTS,
        payload: posts
      })
    );
};

export const createPost = postData => dispatch => {
  //console.log(postData.file);
console.log('content-type', postData.file.type)
  S3FileUpload
    .uploadFile(postData.file, config)
    .then(data => console.log(postData))
    .catch(err => console.error(err));

};