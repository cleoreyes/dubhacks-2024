import React from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


export const SecurityQuestPage = () => {
  return (
    <div className="center">
        <h1 className="fw-bold">Security Question:</h1>
        <p>What is Kuromi's maiden mother's name?</p>

        <div>
            <textarea style={{ width: '300px', height: '100px' }}> </textarea>
        </div>

        <div>
            <button type="button" class="btn btn-outline-primary mt-2">Submit</button>
        </div>
    </div>
    
  );
};

export default SecurityQuestPage;
