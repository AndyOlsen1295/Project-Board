import 'tailwindcss/tailwind.css';
import {useQuery} from '@apollo/client'
import ProjectForm from '../components/index'


import {QUERY_PROJECTS} from '../utils/queries'

//dont know what all of this was for but I just commented it out....for now.
// const boxes = [
//     { text: 'Box 1', bgColor: 'bg-gray-500' },
//     { text: 'Box 2', bgColor: 'bg-gray-500' },
//     { text: 'Box 3', bgColor: 'bg-gray-500' },
//     { text: 'Box 4', bgColor: 'bg-gray-500' },
//   ];

// const boxContainer = document.createElement('div');
// boxContainer.classList.add('grid', 'grid-cols-2', 'md:grid-cols-4', 'gap-4');

// boxes.forEach(box => {
//     const boxElement = document.createElement('div');
//     boxElement.classList.add('p-4', 'rounded-lg', 'text-white', box.bgColor);
//     boxElement.innerText = box.text;
//     boxContainer.appendChild(boxElement);
//   });

//   document.body.appendChild(boxContainer);

  const Home = () => {
    const { loading, data } = useQuery(QUERY_PROJECTS);
    const projects = data?.projects || [];
  
    return (
      <main>
        <div >
          <div
            >
            <ProjectForm />
          </div>
          <div>
            {loading ? (
              <div>Loading...</div>
            ) : null }

          </div>
        </div>
      </main>
    );
  };

  export default Home;