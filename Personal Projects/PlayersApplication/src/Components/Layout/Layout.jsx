import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';

function Layout({ children }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Navbar />
      <main style={{ flex: '1' }}>
        {children} {/* This is where your page-specific components will be inserted */}
      </main>
      <Footer style={{ flexShrink: '0' }} />
    </div>
  );
}

export default Layout;
