import Header from './Header';
import Footer from './Footer';

function Layout({ children }) {
  return (
    <div className="app-container">
      <Header />
      <main className="main-content bg-[#0C6CB2]">
        {children}
      </main>
      <Footer />
    </div>
  );
}

export default Layout;