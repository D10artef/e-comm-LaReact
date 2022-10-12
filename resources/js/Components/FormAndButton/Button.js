import React from "react";
import classnames from "classnames";

export const LoadingButton = React.memo(({ loading, className, children, ...props }) => {
    const buttonClass = classnames(
        "flex items-center",
        "focus:outline-none",
        { "pointer-events-none bg-opacity-75 select-none": loading },
        className
    );
    return (
        <button disabled={loading} className={buttonClass} {...props}>
            {loading && <div className="mr-2 btn-spinner" />}
            {children}
        </button>
    );
})

