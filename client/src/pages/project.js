// this page will show the project you have clicked on
import 'tailwindcss/tailwind.css';
import {useQuery} from '@apollo/client'
import ProjectForm from '../components/index'
import {useState} from 'react';
import { Link } from 'react-router-dom';
import React from 'react';



// function App() {
//   const [comments, setComments] = useState([]);
//   const [showCommentForm, setShowCommentForm] = useState(false);

//   const handleAddComment = comment => {
//     setComments([...comments, comment]);
//   };

//   return (
//     <div className="flex justify-center items-center h-screen">
//       <Box>
//         <h1 className="text-2xl font-bold">Hello, world!</h1>
//         <p className="text-gray-800 mt-2">This is the project box. </p>
//         <CommentButton onClick={() => setShowCommentForm(true)} />
//         {showCommentForm && (
//           <CommentForm onSubmit={handleAddComment} />
//         )}
//         {comments.map((comment, index) => (
//           <p className="text-gray-800 mt-2" key={index}>{comment}</p>
//         ))}
//       </Box>
//     </div>
//   );
// }
const ProjectList = ({ projects, title }) => {
  if (!projects.length) {
    return <h3>No projects yet...</h3>;
  }

  return (
    <div>
        <h3>{title}</h3>
        {projects &&
          projects.map((project) => (
            <div key={project._id} >
              <h4 >
                {project.projectName} <br />
                <span style={{ fontSize: '1rem' }}>
                  is the project name {project.createdAt}
                </span>
              </h4>
              <div className="card-body bg-light p-2">
                <p>{project.projectText}</p>
              </div>
              {/* Create a link to this thought's page to view its comments using `<Link>` component */}
              <Link
                className="btn btn-primary btn-block btn-squared"
                to={`/projects/${project._id}`}
              >
                Make sure to add something here!
              </Link>
            </div>
          ))}
      </div>

    )
  }

  export default ProjectList;