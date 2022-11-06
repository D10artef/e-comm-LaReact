import React, { useRef, useState } from "react";
import Icon from "../Icon";
import { useFormInput } from '../HOOKS/useFormField'
import classNames from "classnames";

export const TextInput = React.memo(
    ({ label, name, className, errors = [], showError = true, value, ...props }) => {
        const inputClass = classNames(
            'form-input',
            {'error': errors.length > 0 && showError}
        )
        return (
            <div className={className}>
                {label && (
                    <label className="form-label" htmlFor={name}>
                        {label} :
                    </label>
                )}
                <input
                    id={name}
                    name={name}
                    value={value}
                    {...props}
                    className={inputClass}
                    // className={`form-input ${errors.length ? "error" : ""}`}
                />
                {showError && errors && (
                    <div className="form-error">{errors}</div>
                )}
            </div>
        );
    }
);


export const TextAreaInput = ({
    label,
    name,
    className,
    errors = [],
    value,
    ...props
}) => {
    return (
        <div className={className}>
            {label && (
                <label className="form-label" htmlFor={name}>
                    {label} :
                </label>
            )}
            <textarea
                id={name}
                name={name}
                value={value}
                rows={4}
                {...props}
                className={`form-textarea ${
                    errors.length ? "error" : ""
                } resize-none`}
            ></textarea>
            {errors && (
                <div className="form-error">
                    <span>{errors}</span>
                </div>
            )}
        </div>
    );
};



export const SearchForm = ({ children, onSearch }) => {
    const [searchText, handleSearchChange] = useFormInput({
        search: "",
    });
    const handleSubmit = (event) => {
        event.preventDefault();
        onSearch(searchText.search);
    };

    return (
        <form className="w-full" onSubmit={handleSubmit}>
            <div className="flex bg-gray-100 p-2 rounded-sm items-center overflow-hidden">
                <label htmlFor="search" className="text-secondary">
                    <Icon name="search" className="w-5 h-5 fill-current"></Icon>
                </label>
                <input
                    type="search"
                    id="search"
                    name="search"
                    value={searchText.search}
                    onChange={handleSearchChange}
                    className="text-neutral-700 placeholder:font-light focus:outline-none ml-2 text-sm bg-gray-100 w-full"
                    placeholder={children}
                />
            </div>
        </form>
    );
};


export const FileInput = ({className, text, name, file, handleChange, clearFile, errors}) => {
    return (
        <div className="my-6">
            <div className={`flex items-center text-sm ${className}`}>
                <label className="flex flex-none justify-center items-center px-3 py-2 gap-x-2 hover:bg-primary hover:text-gray-100 bg-secondary duration-300 text-white rounded-sm cursor-pointer">
                    <span className="text-sm">{text}</span>
                    <input
                        className="hidden"
                        type="file"
                        name={name}
                        onChange={handleChange}
                        accept="image/*"
                    />
                </label>
                <div className="flex w-full justify-between items-center gap-x-2 px-3 py-2 border text-gray-600 truncate">
                    {file ? (
                        <>
                            <span className="truncate">{file.name}</span>
                            <Icon
                                name="x-close"
                                className="w-4 h-4"
                                onClick={clearFile}
                            />
                        </>
                    ) : (
                        <span className="overflow-hidden whitespace-nowrap">
                            No file selected
                        </span>
                    )}
                </div>
            </div>
            {errors && (
                <div className="form-error">
                    <span>{errors}</span>
                </div>
            )}
        </div>
    );
}


