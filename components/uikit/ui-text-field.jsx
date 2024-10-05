import clsx from "clsx";

/**
 * UiTextField
 *
 * A text field component with a label, optional required indicator, and optional helper text.
 *
 * @param {{
 * label?: string,
 * required?: boolean,
 * helperText?: string,
 * errorText?: string
 * ...inputProps: React.InputHTMLAttributes<HTMLInputElement> }} props
 * @returns {JSX.Element}
 */

export function UiTextField({
  label,
  required,
  helperText = "helper",
  errorText = "error",
  ...inputProps
}) {
  return (
    <>
      <div>
        {label && (
          <label
            for="example2"
            class={clsx(
              required && "after:text-orange-600 after:content-['*']",
              "mb-1 block text-sm font-medium text-slate-900 after:ml-0.5",
            )}
          >
            Email
          </label>
        )}
        <input
          type="email"
          id="example2"
          required={required}
          className={clsx(
            "p-2 text-sm leading-tight block w-full border rounded-md shadow-sm disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500",
            errorText
              ? "focus:border-orange-600 focus:ring focus:ring-orange-600/20 border-orange-600 "
              : "border-slate-200 focus:border-teal-600 focus:ring focus:ring-teal-600/20",
          )}
          {...inputProps}
        />
        {(helperText || errorText) && (
          <p
            className={clsx(
              "mt-1 text-sm",
              errorText ? "text-sm text-orange-600" : "text-slate-400",
            )}
          >
            {errorText ?? helperText}
          </p>
        )}
      </div>
    </>
  );
}
