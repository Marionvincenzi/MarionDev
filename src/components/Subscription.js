import React from 'react';
import Header from "../assets/header.jpg"

const SubscribeSection = () => {
  return (
    <div
  className="relative bg-cover bg-center h-[400px] flex items-center justify-center"
  style={{ backgroundImage: `url(${Header})` }}
>
  {/* Overlay transparent */}
  <div className="absolute inset-0 bg-light-brown/70"></div>
  {/* Contenu centré */}
  <div className="relative bg-light-brown p-8 rounded-md shadow-md text-center max-w-md">
    <h2 className="text-2xl font-bold text-dark-brown mb-4">S'abonner</h2>
    <p className="text-dark-brown mb-6">
      Indiquez clairement ce que les utilisateurs recevront en partageant leur adresse e-mail : 
      une newsletter, des réductions ou des actualités.
    </p>
    <form>
      <input
        type="email"
        placeholder="Adresse e-mail"
        className="w-full mb-4 px-4 py-2 border border-dark-brown rounded"
      />
      <button
        type="submit"
        className="w-full bg-brown-small text-white px-6 py-2 rounded-lg hover:bg-dark-brown transition"
      >
        S'inscrire
      </button>
    </form>
  </div>
</div>

  );
};

export default SubscribeSection;
