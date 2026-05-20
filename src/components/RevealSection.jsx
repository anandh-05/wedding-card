import useReveal from '../hooks/useReveal'

export default function RevealSection({
  as: Tag = 'section',
  children,
  className = '',
  id,
  delay = 0,
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
      {children}
    </Tag>
  )
}
