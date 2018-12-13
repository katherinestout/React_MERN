import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

//Separate components for text field groups
//All the different properties, can pass them to other components
//pass in the properties


const TextAreaFieldGroup = ({
    name,
    placeholder,
    value,
    error,
    info,
    onChange
}) => {
    return(
 <div>
    <div className="form-group">
        <textarea
        className={classnames('form-control', {
                      'is-invalid': error
                    })}
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
      
                  />
        {info && <small className="form-text text-muted">{info}</small>}
        
        {error && (
        <div className="invalid-feedback">{error}</div>
        )}
        </div>

        </div>
    );
};
//Add all the textfieldgroup to proptypes

TextAreaFieldGroup.propTypes = {
    name: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    value: PropTypes.string.isRequired,
    
    info: PropTypes.string,
    error: PropTypes.string,

    onChange: PropTypes.func.isRequired

};


export default TextAreaFieldGroup;