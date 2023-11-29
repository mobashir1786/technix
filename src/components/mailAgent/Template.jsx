import React from 'react';
import paper from '../../assets/paper.png'

const Template = () => {
    return (
        <div className='template'>
            <div className="Emptytemplate">
                <img src={paper} alt="paper" />
                <div className="message">No Template yet. Add new template to View them here</div>
                <button>Create Template</button>
            </div>
        </div>
    )
}

export default Template
