import Sidebar from '../components/sidebar/sidebar'
import Layout from 'antd/es/layout/layout'
import { Content } from 'antd/es/layout/layout'

export default function RootLayout({ children }: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <head>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" />
      </head>
      <body style={{backgroundColor: '#dedede'}}>
      <Layout hasSider>
      <Sidebar />
        <Layout className="site-layout" style={{ marginLeft: 200 }}>
        <Content style={{ margin: '20px 20px 0px 20px', overflow: 'initial' }}>
        <div style={{background: '#dedede'}}>
        {children}
        </div>
        </Content>
        </Layout>
      </Layout>
      </body>

      <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js" async></script>
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.min.js" async></script>
    </html>
  )
}