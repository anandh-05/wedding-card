import useReveal from '../hooks/useReveal'

export default function RevealSection({
  as: Tag = 'section',
  children,
  className = '',
  id,
  delay = 0,
  icon = false,
  ...props
}) {
  const { ref, visible } = useReveal()

  return (
    <Tag
      ref={ref}
      id={id}
      data-visible={visible}
      className={`section-reveal ${className}`.trim()}
      style={{ transitionDelay: `${delay}ms` }}
      {...props}
    >
      {icon ? (
        <div aria-hidden="true" className="reveal-ornament">
          <svg viewBox="0 0 64 64" role="img" className="h-8 w-8">
            <path
              d="M32 7c5.6 6.2 7.1 12.6 4.5 19.2-1.3 3.3-2.8 5.9-4.5 7.8-1.7-1.9-3.2-4.5-4.5-7.8C24.9 19.6 26.4 13.2 32 7Z"
              fill="currentColor"
              opacity="0.9"
            />
            <path
              d="M18 31c4.8 1.2 8.9 3.5 12.2 6.8C25 39.6 19.7 38.2 14.5 33.6c-1.1-1-0.1-3 1.4-2.9l2.1.3Zm28 0-2.1-.3c-1.5-.1-2.5 1.9-1.4 2.9 5.2 4.6 10.5 6 15.7 4.2C54.9 34.5 50.8 32.2 46 31Z"
              fill="currentColor"
              opacity="0.48"
            />
            <path
              d="M18 48h28M22 54h20M26 42h12l4 6H22l4-6Zm6-8v8"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="3"
            />
          </svg>
        </div>
      ) : null}
      {children}
    </Tag>
  )
}
