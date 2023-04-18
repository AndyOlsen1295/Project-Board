import React, { useState } from 'react';
import { useMutation } from '@apollo/client';

import { ADD_PROJECT } from '../utils/mutations';
import { QUERY_PROJECTS } from '../utils/queries';

const styles = {
  indexForm: {
    display: 'block',
    position: 'center',
    alignItems: 'center',
    margin: 'auto',
    width: '50%',
    padding: '10px 10px',
  },
  singleSection: {
    padding: '10px',
    fontSize: '30px',
  },
  singleSectionBox: {
    fontSize: '20px',
    width: '300px',
    height: '160px',
    margin: '10px',
  },
  singleSectionBox1: {
    fontSize: '20px',
    width: '200px',
    height: '80px',
    margin: '10px',
  }
}

const ProjectForm = () => {
  const [formState, setFormState] = useState({
    name: '',
    projectText: '',
  });
  const [characterCount, setCharacterCount] = useState(0);

  const [addProject, { error }] = useMutation(ADD_PROJECT, {
    update(cache, { data: { addProject } }) {
      try {
        const { projects } = cache.readQuery({ query: QUERY_PROJECTS });

        cache.writeQuery({
          query: QUERY_PROJECTS,
          data: { thoughts: [addProject, ...projects] },
        });
      } catch (e) {
        console.error(e);
      }
    },
  });

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await addProject({
        variables: { ...formState },
      });

      setFormState({
        name: '',
        projectTexxt: '',
      });
    } catch (err) {
      console.error(err);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    if (name === 'projectText' && value.length <= 280) {
      setFormState({ ...formState, [name]: value });
      setCharacterCount(value.length);
    } else if (name !== 'projectText') {
      setFormState({ ...formState, [name]: value });
    }
  };

  return (
    <div style={styles.indexForm}>
      <h2 style={styles.singleSection}>What project are we creating today??</h2>

      <p
        className={`m-0 ${
          characterCount === 280 || error ? 'text-danger' : ''
        }`}
      >
        <p style={styles.singleSection}>Character Count: {characterCount}/280</p>
        {error && <span className="ml-2">Something went wrong...</span>}
      </p>
      <form style={styles.singleSection}
        className="flex-row justify-center justify-space-between-md align-center"
        onSubmit={handleFormSubmit}
      >
        <div className="col-12">
          <textarea
            name="projectText"
            placeholder="Here's to a new project..."
            value={formState.thoughtText}
            className="form-input w-100"
            style={styles.singleSectionBox}
            onChange={handleChange}
          ></textarea>
        </div>
        <div className="col-12 col-lg-9">
          <input
            style={styles.singleSectionBox}
            name="Name"
            placeholder="What is the name of the project..."
            value={formState.thoughtAuthor}
            className="form-input w-100"
            onChange={handleChange}
          />
        </div>

        <div className="col-12 col-lg-3">
          <button style={styles.singleSectionBox1} className="btn btn-primary btn-block py-3" type="submit">
            Create Project!
          </button>
        </div>
        {error && (
          <div className="col-12 my-3 bg-danger text-white p-3">
            Something went wrong...
          </div>
        )}
      </form>
    </div>
  );
};

export default ProjectForm;