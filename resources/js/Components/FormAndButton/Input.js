import React from "react";

export const TextInput = React.memo(({ label, name, className, errors = [], value, ...props }) => {
    return (
        <div className={className}>
            {label && (
                <label className="form-label" htmlFor={name}>
                    {label}:
                </label>
            )}
            <input
                id={name}
                name={name}
                value={value}
                {...props}
                className={`form-input ${errors.length ? "error" : ""}`}
            />
            {errors && <div className="form-error">{errors}</div>}
        </div>
    );
});


