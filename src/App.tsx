// Importamos los componentes visuales que se van a usar en la aplicación
import React, { useState } from 'react';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Profile from './components/Profile';
import StoryBar from './components/StoryBar';
import Feed from './components/Feed';
import './App.css';

function App() {
  // HOOK DE ESTADO: Controla qué pantalla se está viendo.
  // Puede ser únicamente 'home' o 'profile'. Por default arranca en 'home'.
  const [view, setView] = useState<'home' | 'profile'>('home');

  return (
    <div className="app-layout">
      {/* El Header es fijo y se muestra siempre, sin importar la vista en la que está */}
      <Header />
      <div className="main-content">
        {/* Sidebar: Se mantiene fija en toda la app */}
        <aside className="sidebar-left">
          {/* Al hacer click en este contenedor, cambiamos el estado 'view' a 'profile'*/}
          <div onClick={() => setView('profile')} style={{ cursor: 'pointer' }}>
            {/* Renderiza la miniatura del perfil del usuario en la sidebar */}
            <Profile />
          </div>
          <hr className="divider" />
          {/* Menú de navegación: Le pasamos la vista actual y la función para cambiarla como props */}
          <Navbar currentView={view} setView={setView} />
        </aside>
        
        <main className="content-area">
          {view === 'home' ? (
            <>
              <StoryBar />
              <Feed />
            </>
          ) : (
            <div className="profile-page-view">
              <div className="profile-header-expanded">
                <Profile /> {/* Reutilizamos el componente para la cabecera del perfil */}
              </div>
              
              <div className="profile-tabs">
                <span className="tab active">POSTS</span>
                <span className="tab">REELS</span>
                <span className="tab">TAGGED</span>
              </div>

            {/* Grilla de publicaciones del usuario */}
              <div className="profile-posts-grid">
                {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item) => (
                  <div key={item} className="profile-post-item">
                    <img src={`https://picsum.photos/500/500?random=${item}`} alt="User post" />
                  </div>
                ))}
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}

export default App;