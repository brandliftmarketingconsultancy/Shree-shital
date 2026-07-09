export default function SectionHeading({ children, as: Tag = 'p', className = '' }) {
  return <Tag className={`eyebrow-rule ${className}`}>{children}</Tag>
}
