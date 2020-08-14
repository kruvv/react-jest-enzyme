import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const Input = ({handleChange, value, options}) => (
        <div className="selectWrapper">
            {options.length > 0  ? (
                <Fragment>
                    <select onChange={handleChange} defaultValue={value}>
                        {options.map(({value, label}) => (
                            <option value={value} key={value}>
                                {label}
                            </option>
                        ))}
                    </select>
                    <span className="selectText">per page</span>
                </Fragment>
            ) : (
                <div className="placeholder">No Items</div>
            )}
        </div>
    );

// Что-бы не тестировать принимаемую функцию в дочернем компоненте надо установть флаг isRequired
// либо написать тест см. Input.spec.js  defaultProps
Input.propTypes = {
    handleChange: PropTypes.func.isRequired,
    options: PropTypes.array,
    value: PropTypes.number,
};

Input.defaultProps = {
    handleChange: () => {},
    options: [],
    value: 0,
}

export default Input;
