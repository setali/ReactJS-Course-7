import { useMemo } from 'react'
import { Table as AntTable } from 'antd'

export default function Table ({ rowKey = 'id', data, columns, loading }) {
  const tableColumns = useMemo(() => {
    return columns.map(column => ({ ...column, dataIndex: column.key }))
  }, [columns])

  return (
    <div>
      <AntTable
        rowKey={rowKey}
        dataSource={data}
        columns={tableColumns}
        loading={loading}
      />
    </div>
  )
}
