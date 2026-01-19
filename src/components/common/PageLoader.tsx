import { memo } from "react";

const PageLoader = () => {
  return (
    <div className="page-loader">
      <div className="loader-content">
        <div className="loader-spinner"></div>
        <p className="loader-text">Cargando...</p>
      </div>
    </div>
  );
};

export default memo(PageLoader);
