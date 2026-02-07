'use client';

import { forwardRef, type InputHTMLAttributes } from 'react';
import { Check } from 'lucide-react';
import { cn } from '../utils/cn';

export interface CheckboxProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label?: string;
  description?: string;
}

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ className, label, description, id, checked, ...props }, ref) => {
    return (
      <label
        htmlFor={id}
        className={cn(
          'flex cursor-pointer items-start gap-3 rounded-lg p-3 transition-colors hover:bg-gray-50',
          checked && 'bg-blue-50 hover:bg-blue-50',
          className
        )}
      >
        <div className="relative flex items-center justify-center">
          <input
            type="checkbox"
            id={id}
            ref={ref}
            checked={checked}
            className="peer sr-only"
            {...props}
          />
          <div
            className={cn(
              'flex h-5 w-5 items-center justify-center rounded border-2 transition-colors',
              checked
                ? 'border-blue-600 bg-blue-600'
                : 'border-gray-300 bg-white'
            )}
          >
            {checked && <Check className="h-3.5 w-3.5 text-white" />}
          </div>
        </div>
        {(label || description) && (
          <div className="flex flex-col">
            {label && (
              <span
                className={cn(
                  'text-sm font-medium',
                  checked ? 'text-blue-900 line-through' : 'text-gray-900'
                )}
              >
                {label}
              </span>
            )}
            {description && (
              <span className="text-xs text-gray-500">{description}</span>
            )}
          </div>
        )}
      </label>
    );
  }
);

Checkbox.displayName = 'Checkbox';
