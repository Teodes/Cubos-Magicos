function Loading() {
  //TODO: Hacer que el componente sea un wrapper para mayor facilidad de uso, añadirle estilos (que se superponga al contenido) y un posible setTimeout.
  return (
    <div className="App-header">
      <img
        src={"/images/logo/logo.png"}
        className="App-logo"
        style={{ height: "15rem" }}
        alt="logo"
      />
      <span>Cargando...</span>
    </div>
  );
}

export default Loading;
