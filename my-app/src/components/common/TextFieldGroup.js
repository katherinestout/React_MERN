import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

//Separate components for text field groups
//All the different properties, can pass them to other components
//pass in the properties


const TextFieldGroup = ({
    name,
    placeholder,
    value,
    label,
    error,
    info,
    type,
    onChange,
    disabled
}) => {
    return(
 <div>
    <div className="form-group">
        <input
        type={type}
        className={classnames('form-control', {
                      'is-invalid': error
                    })}
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
        disabled = {disabled}
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

TextFieldGroup.propTypes = {
    name: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    value: PropTypes.string.isRequired,
    
    info: PropTypes.string,
    error: PropTypes.string,
    type: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    disabled: PropTypes.string

};

//default props, (if we don't pass it in what will happen? anything else will be false/null
//if not passed in)

TextFieldGroup.defaultProps = {
    type: 'text'
};

export default TextFieldGroup;