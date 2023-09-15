import { Fragment } from 'react'

interface ListProps<T> {
  items: T[]
  className?: string
  renderItem: (item: T) => React.ReactNode
  renderEmpty?: () => React.ReactNode
}

export default function List<T>({ items, className, renderItem, renderEmpty }: ListProps<T>) {
  if (items.length > 0) {
    return (
      <ul className={className}>
        {items.map((item, index) => (
          <Fragment key={index}>{renderItem(item)}</Fragment>
        ))}
      </ul>
    )
  }

  return renderEmpty?.()
}
