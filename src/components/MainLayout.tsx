import React from 'react';
import { Layout } from 'antd';

const { Header, Content, Footer } = Layout;

function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Header style={{ background: '#fff', padding: 0 }}>
        <div style={{ textAlign: 'center', fontSize: '24px', fontWeight: 'bold' }}>
          My App
        </div>
      </Header>
      <Content style={{ margin: '16px' }}>
        {children}
      </Content>
      <Footer style={{ textAlign: 'center' }}>
        © 2025 My Company
      </Footer>
    </Layout>
  );
}

export default MainLayout;
