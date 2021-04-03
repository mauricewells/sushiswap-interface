import React, { useContext } from 'react'

export default function Card({
  header = undefined,
  footer = undefined,
  backgroundImage = '',
  title = '',
  description = '',
  children,
  className,
  padding = undefined
}: any) {
  return (
    <div
      className={`relative ${className}`}
      style={{
        borderRadius: '10px',
        backgroundImage: `url(${backgroundImage})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'contain',
        backgroundPosition: 'center bottom'
      }}
    >
      <div>
        {header && <>{header}</>}

        <div className="p-8">
          {title && <div className="font-semibold text-2xl mb-4">{title}</div>}
          {description && <div className="font-base text-base text-gray-400">{description}</div>}
          {children}
        </div>

        {footer && <>{footer}</>}
      </div>
    </div>
  )
}
