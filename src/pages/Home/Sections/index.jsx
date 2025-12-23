// HomeBody.jsx
import React from "react";
import "./styles.scss";

export default function Sections() {
    return (
        <div className="home-sections">
            {/* Coluna esquerda */}
            <div className="column left-column">
                <div className="content">Conteúdo da Coluna Esquerda</div>
            </div>

            {/* Coluna direita */}
            <div className="column right-column">
                <div className="top-right">Parte Superior da Coluna Direita</div>
                <div className="bottom-right">Parte Inferior da Coluna Direita</div>
            </div>
        </div>
    );
}
