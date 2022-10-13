import React from "react";
import Icon from "../Icon";
import { useFormInput } from '../HOOKS/useFormField'

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

export const SearchForm = ({children}) => {
    const [searchText, handleSearchChange] = useFormInput({
        search: ''
    })
    const handleSubmit = (event) => {
        event.preventDefault();
    };

    return(
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
    )
}


