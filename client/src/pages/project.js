// this page will show the project you have clicked on
import { CommentForm } from 'react-router-dom';

// this page will show the project you have clicked on
import 'tailwindcss/tailwind.css';
import {useQuery} from '@apollo/client';
import ProjectForm from '../components/index';
import {useState} from 'react';
import { Link } from 'react-router-dom';
import React from 'react';

const Project = ({ project = [], title = 'Projects' }) => {
  if(!Array.isArray(project)) {
    return <h3>Invalid Project data....</h3>
  }
  if(!project.length) {
    return <h3>No Projects yet...</h3>
  }
  return(
    <div>
      <h3>{title}</h3>
      {project?.map(({ _id, projectName, createdAt, projectText}) => (
        <div key={_id}>
          <h4>
            {projectName} <br />
            <span style={{ fontSize: 'irem'}}>
            </span>
          </h4>
          <div className="card-body bg-light p-2">
            <p>{projectText}</p>
          </div>
          {/* Create a link to this thought's page to view its comments using `<Link>` component */}
          <Link
            className="btn btn-primary btn-block btn-squared"
            to={`/projects/${_id}`}
          >
            Make sure to add something here!
          </Link>
        </div>
      ))}
    </div>
  )
}
  export default Project;

// function App() {
//   const [comments, setComments] = useState([]);
//   const [showCommentForm, setShowCommentForm] = useState(false);

//   const handleAddComment = comment => {
//     setComments([...comments, comment]);
//   };

//   return (
//     <div className="flex justify-center items-center h-screen">
//       <div>
//         <h1 className="text-2xl font-bold">Hello, world!</h1>
//         <p className="text-gray-800 mt-2">This is the project box. </p>
//         <button onClick={() => setShowCommentForm(true)} />
//         {showCommentForm && (
//           <form onSubmit={handleAddComment} />
//         )}
//         {comments.map((comment, index) => (
//           <p className="text-gray-800 mt-2" key={index}>{comment}</p>
//         ))}
//       </div>
//     </div>
//   );
// }
